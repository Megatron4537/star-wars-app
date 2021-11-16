import {gql} from '@apollo/client';

export const EPISODES_QUERY = gql`
  query GetAllEpisodes {
    allFilms {
      films {
        episodeID
        releaseDate
        title
        id
        openingCrawl
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query GetCharacter($id: ID!) {
    person(id: $id) {
      name
      id
      birthYear
      height
      mass
      homeworld {
        name
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;

export const EPISODE_QUERY = gql`
  query GetEpisode($id: ID!) {
    film(id: $id) {
      title
      openingCrawl
      id
      releaseDate
      speciesConnection {
        totalCount
      }
      planetConnection {
        totalCount
      }
      vehicleConnection {
        totalCount
      }
      characterConnection {
        characters {
          name
          id
        }
      }
    }
  }
`;
