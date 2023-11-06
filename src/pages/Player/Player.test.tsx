import { cleanup, render, screen } from "@testing-library/react"
import Player from "./Player";
import WrapperWithContext from "../../helpers/renderWithContext";

afterEach(() => {
    cleanup()
})

describe("PlayerView component", () => {
    render(
        <WrapperWithContext>
            <Player />
        </WrapperWithContext>
    )

    test('get player id from param', async () => {
        expect(await screen.findByText("Loading...")).toBeInTheDocument()
    })
})