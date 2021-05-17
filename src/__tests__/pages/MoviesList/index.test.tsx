import React from 'react';

import { AllTheProviders, render, RenderAPI } from '@utils/testUtils';
import MockedNavigator from '@utils/mockedNavigator';
import { MoviesList } from '@pages/Movies/components/MoviesList';
import { MovieDto } from '@store/modules/movie/types';

interface Props {
  movies: MovieDto[];
  refresh: () => void;
}

function RenderComponentWithProviders({ movies, refresh }: Props) {
  return (
    <AllTheProviders>
      <MockedNavigator
        component={() => <MoviesList movies={movies} refresh={refresh} />}
      />
    </AllTheProviders>
  );
}

describe('MoviesList Page', () => {
  let screen: RenderAPI;
  const mockRefresh = jest.fn();

  beforeEach(() => {
    screen = render(
      <RenderComponentWithProviders movies={[]} refresh={mockRefresh} />,
    );
  });

  it('should contains movies itens', () => {
    const mockMovies = [
      {
        Title: 'Fast & Furious 6',
        Year: '2013',
        imdbID: 'tt1905041',
        Type: 'movie',
        imdbRating: '7.5',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'Fast Five',
        Year: '2011',
        imdbID: 'tt1596343',
        imdbRating: '4.5',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg',
      },
    ];

    screen = render(
      <RenderComponentWithProviders
        movies={mockMovies}
        refresh={mockRefresh}
      />,
    );

    expect(screen.getByTestId('movie-list').children.length).toBe(
      mockMovies.length,
    );
  });

  test('should not contain movies itens', () => {
    screen = render(
      <RenderComponentWithProviders movies={[]} refresh={mockRefresh} />,
    );

    expect(screen.getByText('Nenhum filme encontrado')).toBeTruthy();
  });
});
