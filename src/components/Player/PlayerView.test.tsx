import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import PlayerView from "./PlayerView";
import { allPlayersData } from "../../mocks/AllPlayers";
import WrapperWithContext from "../../helpers/renderWithContext";
import { useState } from "react";

afterEach(() => {
    cleanup()
})

describe("PlayerView component", () => {
    const currentPlayer = allPlayersData.players[0]
    render(
        <WrapperWithContext>
            <PlayerView player={currentPlayer} />
        </WrapperWithContext>
    )

    const link = screen.getAllByRole("link")[0]

    // TEST 1
    test("Link rendering", () => {
        expect(link).toBeInTheDocument()
        fireEvent.click(link)
        expect(link).toHaveAttribute('href', `/player/${currentPlayer.id}`);
    })

    test("Player name correct", () => {
        expect(link).toHaveTextContent(`${currentPlayer.firstname} ${currentPlayer.lastname}`)
    })
})