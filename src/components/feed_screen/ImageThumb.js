import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Actions as Router} from 'react-native-router-flux';
import {useSelector} from 'react-redux';

const ImageThumb = props => {
  const gridColsCount = useSelector(
    state => state.runTimeReducer.gridColumnCount,
  );
  let containerSizeIndex;
  switch (gridColsCount) {
    case 2:
      containerSizeIndex = 0;
      break;
    case 3:
      containerSizeIndex = 1;
      break;
    case 4:
      containerSizeIndex = 2;
      break;
    default:
      containerSizeIndex = 0;
      break;
  }
  const onImageClickHandler = () => {
    Router.Details({image: props.image});
  };

  return (
    <TouchableOpacity
      style={[styles.container, styles.containerSize[containerSizeIndex]]}
      onPress={onImageClickHandler}>
      <Image style={styles.image} source={{uri: props.image}} />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#999',
  },
  containerSize: [
    {
      width: '48%',
      height: 120,
      marginBottom: '4%',
    },
    {
      width: '32%',
      height: 100,
      marginBottom: '2%',
    },
    {
      width: '24%',
      height: 70,
      marginBottom: '1%',
    },
  ],
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageThumb;
