import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api'

const App = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  const handleAddProject = async () => {
    const newProject = await api.post('repositories', {
      title: 'Novo projeto',
      url: 'http://choma.dev',
      techs: ['C#', 'Java', 'JavaScript']
    });
    setRepositories([...repositories, newProject.data]);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="translucent" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({ item }) => (
            <Text key={item.id} style={styles.item}>{item.title}</Text>
          )}
        />
        <TouchableOpacity activeOpacity={0.6}
          onPress={handleAddProject}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  },
  item: {
    color: '#f1f1f1',
    fontSize: 22,
  },
  button: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 4,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default App;