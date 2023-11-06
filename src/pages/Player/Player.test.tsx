import { cleanup, render, screen } from "@testing-library/react"
import Player from "./Player";
import WrapperWithContext from "../../helpers/renderWithContext";

afterEach(() => {
    cleanup()
})

describe("Player page", () => {
    render(
        <WrapperWithContext>
            <Player />
        </WrapperWithContext>
    )

    test('test rendering of back link', async () => {
        const link = screen.findByRole("link")
        expect(await link).toBeInTheDocument()
        expect(await link).toHaveTextContent("Retour au comparatif")
    })
})