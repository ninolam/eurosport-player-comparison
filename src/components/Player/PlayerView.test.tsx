import { cleanup, render, screen } from "@testing-library/react"
import PlayerView from "./PlayerView";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../api/config";

describe("PlayerView", async () => {
    afterEach(() => {
        cleanup();
    })

    render(
        <ApolloProvider client={client}>
            <Provider store={store}>
                <PlayerView id="player-1" />
            </Provider>
        </ApolloProvider>

    )

    it("should render the correct information in the component", async () => {
        expect(await screen.getByText("Loading....")).toBeInTheDocument()
    })

})