import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarEvento = async (evento) => {
  try {
    const eventosSalvos = await AsyncStorage.getItem('eventos');
    const eventos = eventosSalvos ? JSON.parse(eventosSalvos) : [];
    eventos.push(evento);
    await AsyncStorage.setItem('eventos', JSON.stringify(eventos));
  } catch (error) {
    console.error('Erro ao salvar evento:', error);
  }
};

export const carregarEventos = async () => {
  try {
    const eventosSalvos = await AsyncStorage.getItem('eventos');
    return eventosSalvos ? JSON.parse(eventosSalvos) : [];
  } catch (error) {
    console.error('Erro ao carregar eventos:', error);
    return [];
  }
};
