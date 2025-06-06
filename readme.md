# 📱 App de Registro de Quedas de Energia

Este é um aplicativo mobile desenvolvido em **React Native** que permite ao usuário **registrar e visualizar localmente** (com `AsyncStorage`) informações sobre **episódios de falta de energia causados por eventos naturais** como chuvas intensas, ventos ou deslizamentos.

---

## 🔧 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

---

## 📦 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
    ````

2. Acesse a pasta do projeto:

   ```bash
   cd nome-do-repo
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o projeto:

   ```bash
   npx expo start
   ```

> Certifique-se de ter o **Expo CLI** instalado globalmente (`npm install -g expo-cli`) e o aplicativo **Expo Go** no seu celular para testes.

---

## 📋 Funcionalidades

### ✅ Panorama Geral

* Tela inicial que mostra um resumo dos eventos registrados (local, tempo sem energia e prejuízos).

### ✅ Registro de Evento

* Tela para cadastro de um novo evento com:

  * **Localização Atingida**
  * **Tempo de Interrupção**
  * **Prejuízos Causados**

### ✅ Recomendações

* Tela com boas práticas e orientações preventivas para casos de desastres naturais com risco de queda de energia.

---

## 🗃️ Armazenamento Local

Todos os eventos são salvos no dispositivo utilizando o `AsyncStorage`. Os dados permanecem disponíveis mesmo após fechar o app.

---

## 🧭 Estrutura de Telas

```
/screens
  ├── PanoramaScreen.js
  ├── RegistroScreen.js
  └── RecomendacoesScreen.js
```

---

## 🧹 Boas Práticas

* Código modular e separado por responsabilidade.
* Navegação clara entre as telas.
* Uso adequado de hooks (`useFocusEffect`, `useState`, `useEffect`).
* Persistência com `AsyncStorage`.

---

## 📌 Requisitos Atendidos

| Requisito                                          | Status |
| -------------------------------------------------- | ------ |
| 5 telas funcionais com navegação                   | ✅      |
| Cadastro e visualização de eventos                 | ✅      |
| Armazenamento com AsyncStorage                     | ✅      |
| Organização e boas práticas                        | ✅      |
| Atualização da lista ao entrar na tela de panorama | ✅      |

---

## 🧑‍💻 Autores

Este projeto foi desenvolvido por:

- **Débora da Silva Amaral** – RM: 550412  
- **Eduardo Pielich Sanchez** – RM: 99767  
- **Lívia Namba Seraphim** – RM: 97819


---
