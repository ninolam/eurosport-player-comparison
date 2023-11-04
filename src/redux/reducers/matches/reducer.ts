import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Match } from './types'

interface matchesState<T> {
    byId: { [id: string]: T };
    allIds: string[]
}

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

export default matchesSlice.reducer
