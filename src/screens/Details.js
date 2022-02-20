import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackButton from '../components/custom/BackButton';
import {Constants} from '../Config';
import DownloadButton from '../components/custom/DownloadButton';
import {useDispatch, useSelector} from 'react-redux';
import {getGif} from '../store/slices/runTimeSlice';
import Title from '../components/custom/Title';
import saveToGallery from '../utils/saveToGallery';

const Details = props => {
  const dispatch = useDispatch();
  const detailedImage = useSelector(
    state => state.runTimeReducer.detailedImage,
  );
  const {id} = props;
  useEffect(() => {
    dispatch(getGif(id));
  }, [id, dispatch]);

  return (
    <View style={styles.container}>
      <BackButton style={styles.backBtn} />
      <Image style={styles.image} source={{uri: detailedImage.image}} />
      <View style={styles.details}>
        <View>
          <Title title={'Title'} />
          <Text>{detailedImage.title}</Text>
        </View>
        <DownloadButton onPress={() => saveToGallery(id, detailedImage.image)} />
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
    justifyContent: 'space-around',
  },
});

export default Details;
