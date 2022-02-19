import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Actions as Router} from 'react-native-router-flux';

const ImageThumb = props => {
  const onImageClickHandler = () => {
    Router.Details({image: props.image});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onImageClickHandler}>
      <Image
        style={styles.image}
        source={props.image}
      />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '46%',
    height: 120,
    marginBottom: '4%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#999',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageThumb;
