import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackButton from '../components/custom/BackButton';
import {Constants} from '../Config';
import MainButton from '../components/custom/MainButton';

const Details = props => {
  return (
    <View style={styles.container}>
      <BackButton style={styles.backBtn} />
      <Image style={styles.image} source={props.image} />
      <View style={styles.details}>
        <Text>Test</Text>
        <MainButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    top: 0,
    padding: Constants.MainPadding,
  },
  image: {
    flex: 2,
    width: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  details: {
    flex: 1,
    padding: Constants.MainPadding,
    justifyContent: 'space-between'
  },
});

export default Details;
