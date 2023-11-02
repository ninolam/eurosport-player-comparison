import playersReducer, { setPlayer } from '../../redux/reducers/players/reducer';


test('should return the initial state', () => {
  expect(playersReducer(undefined, { type: undefined })).toEqual([
    { list: [] }
  ])
})

test('should handle setting a player', () => {
  const initialState = { byId: {}, allIds: [] };
  const player = {
    id: 'rafa',
    firstname: 'Rafael',
    lastname: 'Nadal',
    sex: 'M',
    picture: {
      url: 'eolnd'
    },
    country: {
      code: 'ES',
      picture: {
        url: 'eolnd'
      }
    },
    shortname: 'R.F',
    stats: {
      rank: 1,
      points: 12323,
      weight: 85000,
      height: 183,
      age: 12
  }
  };
  const action = setPlayer(player);
  const newState = playersReducer(initialState, action);
  expect(newState.byId[player.id]).toEqual(player);
  expect(newState.allIds).toContain(player.id);
});