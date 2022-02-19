import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ImageThumb = props => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '44%',
    height: 120,
    padding: 24,
    marginBottom: '6%',
    borderRadius: 24,
    backgroundColor: '#999',
  },
});

export default ImageThumb;
