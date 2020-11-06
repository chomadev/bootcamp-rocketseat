import 'react-native-gesture-handler';
import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

interface RepoItem {
  id: string;
  name: string;
}

declare const global: {HermesInternal: null | {}};

const App = () => {
  // const [data, setData] = useState<RepoItem[]>([]);
  // axios
  //   .get<RepoItem[]>('https://api.github.com/users/chomadev/repos')
  //   .then((response) => setData(response.data));
  // const handlePress = useCallback((item: RepoItem) => {
  //   // navigation.navigate('Details')
  // }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
        {/* <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {data.map((item) => (
              <View key={item.id}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView> */}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  item: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
});

export default App;
