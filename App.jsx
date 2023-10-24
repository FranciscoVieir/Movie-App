import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';

import api from './src/services/api';

import MovieCards from './src/components/MovieCards';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('r-api/?api=filmes');

      setMovies(response.data);
      setLoading(false);
    }
    loadMovies();
  }, []);

  if (loading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={movies}
          renderItem={({item}) => <MovieCards data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
