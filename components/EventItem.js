import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventItem({ evento }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{evento.local}</Text>
      <Text>Tempo: {evento.tempo}</Text>
      <Text>Prejuízos: {evento.prejuizos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8
  },
  titulo: {
    fontWeight: 'bold'
  }
});
