/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { Player } from './types'

interface PlayersState {
    list: Player[]
}

// Define the initial state using that type
const initialState: PlayersState = {
    list: [],
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

export const players = (state: RootState) => state.players

export default playersSlice.reducer
