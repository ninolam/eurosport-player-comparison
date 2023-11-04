import { RootState } from "../../store"

export const getAllPlayers = (state: RootState) => state.players.allIds
export const getPlayersByID = (state: RootState) => state.players.byId
