import { RootState } from "../../store"

export const getAllMatchesIds = (state: RootState) => state.matches.allIds
export const getAllMatchesByID = (state: RootState) => state.matches.byId
