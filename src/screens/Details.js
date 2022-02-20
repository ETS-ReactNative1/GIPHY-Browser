import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackButton from '../components/custom/BackButton';
import {Constants} from '../Config';
import MainButton from '../components/custom/MainButton';
import {useDispatch, useSelector} from 'react-redux';
import {getGif} from '../store/slices/runTimeSlice';

const Details = props => {
  const dispatch = useDispatch();
  const detailedImage = useSelector(
    state => state.runTimeReducer.detailedImage,
  );
  useEffect(() => {
    dispatch(getGif(props.id));
  }, [dispatch]);
  console.log(detailedImage.image);
  return (
    <View style={styles.container}>
      <BackButton style={styles.backBtn} onBack={() => dispatch(RunTimeActions.setDetailedImage({}))}/>
      <Image style={styles.image} source={{uri: detailedImage.image}} />
      <View style={styles.details}>
        <Text>{detailedImage.title}</Text>
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
    justifyContent: 'space-between',
  },
});

export default Details;
