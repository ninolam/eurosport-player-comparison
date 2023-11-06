import { cleanup, render, screen } from "@testing-library/react"
import MatchCard from "./MatchCard";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../api/config";
import { allPlayersData } from "../../mocks/AllPlayers";
import { MemoryRouter } from "react-router-dom";
import { shallow } from "enzyme";
import WrapperWithContext from "../../helpers/renderWithContext";
import type { Player } from "../../redux/reducers/players/types";

afterEach(() => {
    cleanup()
})

describe("PlayerView component", () => {

    const currentMatch = allPlayersData.matches[0]
    const { winner: { id }, startTime, endTime } = currentMatch

    const players = allPlayersData.players
    const winner = (players.find(player => player.id === id) as Player)
    const opponent = (players.find(player => player.id !== id) as Player)

    render(
        <WrapperWithContext>
            <MatchCard opponent={opponent} winner={winner} startTime={startTime} endTime={endTime} />
        </WrapperWithContext>
    )

    test("Imgs rendering", () => {
        expect(screen.getAllByRole("img").length).toBe(players.length)
    })

    test("span win rendering the winner", () => {
        // expect(screen.getByTestId(id)).toBeInTheDocument()
    })
})