import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Details({movie, backButton}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerModal}>
        <TouchableOpacity style={styles.backButton} onPress={backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.description}>{movie.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerModal: {
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  backButton: {
    backgroundColor: '#E52245',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  description: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
});
