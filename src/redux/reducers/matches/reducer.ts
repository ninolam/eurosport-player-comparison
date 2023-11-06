import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Match } from './types'
import { getMatchesSortedByDescending } from '../../../utils/getMatchesSortedByDescending'

interface matchesState<T> {
    list: T
}

const initialState: matchesState<Match[]> = {
    list: []
}


export const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        setMatches: (state, action: PayloadAction<Match[]>) => {
            state.list = getMatchesSortedByDescending(action.payload)
        }
    }
})

export const { setMatches } = matchesSlice.actions

export default matchesSlice.reducer
