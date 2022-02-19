import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Actions as Router} from 'react-native-router-flux';

const ImageThumb = props => {
  const onImageClickHandler = () => {
    Router.Details({title: props.title});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onImageClickHandler}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
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
