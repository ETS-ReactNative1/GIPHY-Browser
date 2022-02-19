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
    height: 60,
    marginEnd: 12,
    borderRadius: 4,
    backgroundColor: '#ddd',
  },
});

export default CategoryItem;
