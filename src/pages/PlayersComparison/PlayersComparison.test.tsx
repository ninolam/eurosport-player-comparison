import { cleanup, render, screen } from "@testing-library/react"
import PlayersComparison from "./PlayersComparison";
import WrapperWithContext from "../../helpers/renderWithContext";

afterEach(() => {
    cleanup();
})

describe("PlayersComparison Page", () => {
    render(
        <WrapperWithContext>
            <PlayersComparison />
        </WrapperWithContext>
    )

    test('should render player correctly', async () => {
        expect(await screen.findByText("STATISTIQUES")).toBeInTheDocument();
        expect(await screen.findByText("Âge")).toBeInTheDocument();
    })
})