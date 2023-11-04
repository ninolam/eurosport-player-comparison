import { cleanup, render, screen, waitFor } from "@testing-library/react"
import PlayersView from "./PlayersView";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../api/config";
import { MockedProvider } from "@apollo/client/testing";
import { allPlayersData, successfulAllPlayersMock } from "../../mocks/AllPlayers";

test("render players with mocked data", async () => {
 

     render(
        <ApolloProvider client={client}>
            <Provider store={store}>
                <MockedProvider mocks={successfulAllPlayersMock} addTypename={false}>
                    <PlayersView />
                </MockedProvider>
            </Provider>
        </ApolloProvider>

    )

    await waitFor(() => {
        // expect(screen.getByText('STAN')).toBeInTheDocument();
      });

})