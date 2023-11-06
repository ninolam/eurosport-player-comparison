import { allPlayersData } from '../../../mocks/AllPlayers';
import matchesReducer, { setMatches } from '../matches/reducer';
import playersReducer, { setPlayers } from './reducer';


test('should return the initial state', () => {
  expect(playersReducer(undefined, { type: undefined })).toEqual({ list: [] })
})

test('should handle setting all players', () => {
  const initialState = { list: [] };
  const players = allPlayersData.players
  const action = setPlayers(players);
  const newState = playersReducer(initialState, action);
  expect(newState.list[0]).toEqual(players[0]);
});