/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import type { Player, PlayerId } from './types'

interface PlayersState<T> {
    byId: { [id: PlayerId]: T }; 
    allIds: PlayerId[]
}

// Define the initial state using that type
const initialState: PlayersState<Player> = {
    byId: {},
    allIds: [],
}


export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        setPlayer: (state, action: PayloadAction<Player>) => {
            state.byId[action.payload.id] = action.payload
            state.allIds = Array.from(new Set([...state.allIds, action.payload.id])) 
        }
    }
})

export const { setPlayer } = playersSlice.actions

export const getAllPlayers = (state: RootState) => state.players.allIds
export const getPlayersByID = (state: RootState) => state.players.byId

export default playersSlice.reducer
