import { allPlayersData } from '../../../mocks/AllPlayers';
import matchesReducer, { setMatches } from '../matches/reducer';


test('should return the initial state', () => {
  expect(matchesReducer(undefined, { type: undefined })).toEqual({ list: [] })
})

test('should handle setting all matches', () => {
  const initialState = { list: [] };
  const matches = allPlayersData.matches
  const action = setMatches(matches);
  const newState = matchesReducer(initialState, action);
  expect(newState.list[0]).toEqual(matches[0]);
});