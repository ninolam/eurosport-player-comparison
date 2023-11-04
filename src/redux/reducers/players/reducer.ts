/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Player, PlayerId } from './types'

interface PlayersState<T> {
    byId: { [id: PlayerId]: T }; 
    allIds: PlayerId[]
}

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

export default playersSlice.reducer
