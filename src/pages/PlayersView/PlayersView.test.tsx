import { cleanup, render, screen } from "@testing-library/react"
import PlayersView from "./PlayersView";
import WrapperWithContext from "../../helpers/renderWithContext";

afterEach(() => {
    cleanup();
})

describe("PlayersView component", () => {
    render(
        <WrapperWithContext>
            <PlayersView />
        </WrapperWithContext>
    )

    test('should render player correctly', async () => {
        expect(await screen.findByText("STATISTIQUES")).toBeInTheDocument();
        expect(await screen.findByText("Âge")).toBeInTheDocument();
    })
})