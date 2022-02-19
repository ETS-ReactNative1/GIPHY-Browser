import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../Config';
import ImageThumb from './ImageThumb';

const dummy = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const Gallery = () => {
  const renderImages = dummy.map((img, index) => {
    return <ImageThumb key={index} title={index} />;
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
