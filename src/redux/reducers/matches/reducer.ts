/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { Match } from './types'

interface matchesState<T> {
    byId: { [id: string]: T };
    allIds: string[]
}

// Define the initial state using that type
const initialState: matchesState<Match> = {
    byId: {},
    allIds: [],
}


export const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        setMatch: (state, action: PayloadAction<Match>) => {
            state.byId[action.payload.id] = action.payload
            state.allIds = Array.from(new Set([...state.allIds, action.payload.id])) 
        }
    }
})

export const { setMatch } = matchesSlice.actions

export const getAllMatchesIds = (state: RootState) => state.matches.allIds
export const getAllMatchesByID = (state: RootState) => state.matches.byId

export default matchesSlice.reducer
