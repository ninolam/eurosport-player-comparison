import React from 'react'
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import PlayerStats from '../../pages/PlayersView';
import { GET_STATS } from '../../api/getPlayers';

const mocks = [
  {
    request: {
      query: GET_STATS,
    },
    result: {
      data: {
        players: [
          { id: '', name: 'Rafa' },
          { id: 'fdfs', name: 'Stan' },
        ],
      },
    },
  },
];

// test('renders players list with mocked data', async () => {
//   render(
//     <MockedProvider mocks={mocks}>
//       <PlayerStats />
//     </MockedProvider>
//   );
//   await waitFor(() => {
//     expect(screen.getByText('Alice')).toBeInTheDocument();
//     expect(screen.getByText('Stan')).toBeInTheDocument();
//   });
// });