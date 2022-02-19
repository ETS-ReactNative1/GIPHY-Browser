import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = props => {
  return <Text style={styles.container}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 14,
    marginBottom: 12,
  },
});

export default Title;
