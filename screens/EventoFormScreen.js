import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { salvarEvento } from '../storage/eventStorage';

export default function EventoFormScreen() {
  const [localizacao, setLocalizacao] = useState('');
  const [tempo, setTempo] = useState('');
  const [prejuizos, setPrejuizos] = useState('');

  const handleSalvar = async () => {
    if (!localizacao || !tempo || !prejuizos) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    const novoEvento = {
      localizacao,
      tempo,
      prejuizos,
      data: new Date().toLocaleString()
    };

    await salvarEvento(novoEvento);
    setLocalizacao('');
    setTempo('');
    setPrejuizos('');
    Alert.alert('Sucesso', 'Evento registrado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Localização Atingida (bairro, cidade ou CEP)</Text>
      <TextInput
        style={styles.input}
        value={localizacao}
        onChangeText={setLocalizacao}
        placeholder="Digite a localização"
      />

      <Text style={styles.label}>Tempo de Interrupção</Text>
      <TextInput
        style={styles.input}
        value={tempo}
        onChangeText={setTempo}
        placeholder="Ex: 3 horas, 1 dia"
      />

      <Text style={styles.label}>Prejuízos Causados</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={prejuizos}
        onChangeText={setPrejuizos}
        placeholder="Descreva os prejuízos observados"
        multiline
      />

      <Button title="Registrar Evento" onPress={handleSalvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontWeight: 'bold', marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 8,
    borderRadius: 4,
    marginTop: 4
  }
});
