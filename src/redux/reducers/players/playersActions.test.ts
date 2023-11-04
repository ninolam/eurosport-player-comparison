import { allPlayersData } from '../../../mocks/AllPlayers';
import playersReducer, { setPlayer } from './reducer';


test('should return the initial state', () => {
  expect(playersReducer(undefined, { type: undefined })).toEqual({ byId: {}, allIds: [] })
})

test('should handle setting a player', () => {
  const initialState = { byId: {}, allIds: [] };
  const player = allPlayersData.players[0]
  const action = setPlayer(player);
  const newState = playersReducer(initialState, action);
  expect(newState.byId[player.id]).toEqual(player);
  expect(newState.allIds).toContain(player.id);
});