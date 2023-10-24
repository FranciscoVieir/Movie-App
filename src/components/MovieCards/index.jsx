import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Details from '../ModalDetails';

export default function MovieCards({data}) {
  const [isVisibleModal, setIsvisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={styles.background} />

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsvisibleModal(true)}>
            <Text style={styles.buttonText}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent animationType="slide" visible={isVisibleModal}>
        <Details movie={data} backButton={() => setIsvisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  background: {
    height: 250,
    zIndex: 2,
  },
  title: {
    padding: 15,
    fontSize: 18,
  },
  buttonArea: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  button: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
