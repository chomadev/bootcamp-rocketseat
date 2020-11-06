import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import { Container } from './styles';
interface DetailsProps {
  full_name: string;
  id: string;
}

const Details: React.FC<DetailsProps> = ({full_name, id}) => {
  return (
    <View>
      <Text style={styles.detailsText}>{id}</Text>
      <Text style={styles.detailsText}>{full_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsText: {
    backgroundColor: '#000',
  }
}

export default Details;
