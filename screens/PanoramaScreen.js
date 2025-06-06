import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { carregarEventos } from '../storage/eventStorage';

export default function PanoramaScreen() {
  const [eventos, setEventos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchEventos = async () => {
        const dados = await carregarEventos();
        setEventos(dados.reverse());
      };

      fetchEventos();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos Registrados</Text>
      <FlatList
        data={eventos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.data}>{item.data}</Text>
            <Text><Text style={styles.bold}>Local:</Text> {item.localizacao}</Text>
            <Text><Text style={styles.bold}>Tempo:</Text> {item.tempo}</Text>
            <Text><Text style={styles.bold}>Prejuízos:</Text> {item.prejuizos}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9'
  },
  bold: { fontWeight: 'bold' },
  data: { fontSize: 12, color: '#777', marginBottom: 6 }
});
