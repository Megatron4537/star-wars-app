import React, {useState, useMemo, useLayoutEffect} from 'react';
import {ScrollView} from 'react-native';
import {useQuery} from '@apollo/client';
import {NavigationProp} from '@react-navigation/native';

import {EpisodeListItem, HeaderButton, Loader} from '@components';
import {EPISODES_QUERY} from '@queries';

interface EpisodesScreenProps {
  navigation: NavigationProp<any>;
}

interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  episodeID: string;
  openingCrawl: string;
}

function EpisodesScreen({navigation}: EpisodesScreenProps) {
  const {data = {}, loading} = useQuery(EPISODES_QUERY);

  const [oldestOrder, setOldestOrder] = useState(true);

  const episodesList = useMemo(() => {
    const movies = data.allFilms ? data.allFilms.films : [];

    return movies.slice().sort((a: Movie, b: Movie) => {
      return oldestOrder
        ? new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        : new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
    });
  }, [data, oldestOrder]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => setOldestOrder(o => !o)}
          text={oldestOrder ? 'Sort by oldest' : 'Sort by newest'}
        />
      ),
    });
    return () => navigation.setOptions({headerRight: null});
  }, [navigation, oldestOrder]);

  return loading ? (
    <Loader />
  ) : (
    <ScrollView style={{flex: 1}} contentInsetAdjustmentBehavior="automatic">
      {episodesList.map((film: Movie) => {
        return <EpisodeListItem {...film} navigation={navigation} key={film.id} />;
      })}
    </ScrollView>
  );
}

export default EpisodesScreen;
