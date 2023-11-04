import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { PropsWithChildren } from "react";
import useAllPlayersAndMatches from "../api/hooks";
import { renderHook } from "@testing-library/react";
import { GET_PLAYERS_AND_MATCHES } from "../api/queries";
import { ApolloError } from "@apollo/client";
import { GraphQLError } from "graphql";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const allPlayersData = {
    players: [
        {
            id: "player-1",
            firstname: "Stan",
            lastname: "Wawrinka",
            shortname: "S.WAW",
            picture: {
                url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
            },
            sex: "MAN",
            country: {
                picture: {
                    url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
                },
                code: "SUI",
            },
            stats: {
                rank: 21,
                points: 1784,
                weight: 81000,
                height: 183,
                age: 33,
            },
        }
    ],
    matches: [
        {
            id: "match-1",
            winner: {
                id: "player-1",
            },
            startTime: "2022-01-31T07:12:00.000Z",
            endTime: "2022-01-31T16:33:00.000Z",
        },
    ]
}

export const successfulAllPlayersMock: MockedResponse[] = [
    {
        request: {
            query: GET_PLAYERS_AND_MATCHES
        },
        result: {
            data: allPlayersData
        }
    }
]

export const erroredAllPlayersMock: MockedResponse[] = [
    {
        request: {
            query: GET_PLAYERS_AND_MATCHES
        },
        error: new ApolloError({
            graphQLErrors: [
                new GraphQLError("Oops the fetch wad unsuccessful")
            ]
        })
    }
]


export function getAllPlayersWrapper(mockData: MockedResponse[] = []) {
    const wrapper = ({ children }: PropsWithChildren) => (
        <Provider store={store}>
            <MockedProvider mocks={mockData} addTypename={false}>
                {children}
            </MockedProvider>
        </Provider>
    )

    const { result } = renderHook(() => useAllPlayersAndMatches(), { wrapper })
    return {
        result
    }
}