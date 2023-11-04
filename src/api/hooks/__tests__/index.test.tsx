import { cleanup, waitFor } from "@testing-library/react"
import { allPlayersData, erroredAllPlayersMock, getAllPlayersWrapper, successfulAllPlayersMock } from "../../../mocks/AllPlayers"
import { ApolloError } from "@apollo/client"
import { GraphQLError } from "graphql"


describe("useAllPlayers Hook when successful", () => {
    afterEach(() => {
        cleanup()
    })
    const { result } = getAllPlayersWrapper(successfulAllPlayersMock)

    it("should be defined and then return correct data", async () => {
        expect(result).toBeDefined()
        await waitFor(() => {
            expect(result.current).toEqual({
                loading: false,
                error: undefined,
                data: allPlayersData
            })
        })
    })
})

describe("useAllPlayers Hook when it errors", () => {
    afterEach(() => {
        cleanup()
    })
    const { result } = getAllPlayersWrapper(erroredAllPlayersMock)

    it("should be defined and then return error", async () => {
        expect(result).toBeDefined()
        await waitFor(() => {
            expect(result.current).toEqual({
                loading: false,
                error: new ApolloError({
                    graphQLErrors: [
                        new GraphQLError("Oops the fetch wad unsuccessful")
                    ],
                }),
                data: undefined
            })
        })
    })

})