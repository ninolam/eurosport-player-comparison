import { configureStore } from '@reduxjs/toolkit'
import playersReducer from './reducers/players/reducer'
import matchesReducer from './reducers/matches/reducer'

export const store = configureStore({
  reducer: {
    players: playersReducer,
    matches: matchesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


