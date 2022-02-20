import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CategoryItem = props => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    padding: 8,
    marginEnd: 12,
    borderRadius: 4,
    backgroundColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
});

export default CategoryItem;
