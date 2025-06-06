import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function RecomendacoesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Recomendações</Text>
      <Text style={styles.texto}>• Tenha lanternas e pilhas sempre à mão.</Text>
      <Text style={styles.texto}>• Mantenha os alimentos refrigerados fechando o freezer.</Text>
      <Text style={styles.texto}>• Desligue equipamentos eletrônicos para evitar danos com o retorno da energia.</Text>
      <Text style={styles.texto}>• Em caso de deslizamentos, busque abrigo seguro.</Text>
      <Text style={styles.texto}>• Siga as instruções da defesa civil local.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  texto: { fontSize: 16, marginBottom: 8 }
});
