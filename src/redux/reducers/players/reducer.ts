/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Player } from './types'

interface PlayersState<T> {
    list: T
}

const initialState: PlayersState<Player[]> = {
    list: []
}


export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        setPlayers: (state, action: PayloadAction<Player[]>) => {
            state.list = action.payload
        }
    }
})

export const { setPlayers } = playersSlice.actions

export default playersSlice.reducer
