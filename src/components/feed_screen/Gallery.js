import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../Config';
import ImageThumb from './ImageThumb';

const dummy = [
  {
    id: 0,
    img: require('../../assets/images/1.gif'),
  },
  {
    id: 1,
    img: require('../../assets/images/2.gif'),
  },
  {
    id: 2,
    img: require('../../assets/images/3.gif'),
  },
  {
    id: 3,
    img: require('../../assets/images/4.gif'),
  },
];

const Gallery = () => {
  const renderImages = dummy.map((img, index) => {
    return <ImageThumb key={index} image={img.img} />;
  });
  return <View style={styles.container}>{renderImages}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: Constants.MainPadding,
  },
});

export default Gallery;
