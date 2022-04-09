import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/AntDesign';
import BackButton from '../components/custom/BackButton';
import {Constants} from '../Config';
import CustomButton from '../components/custom/CustomButton';
import CustomIconButton from '../components/custom/CustomIconButton';
import {useDispatch, useSelector} from 'react-redux';
import {getGif} from '../store/slices/runTimeSlice';
import Title from '../components/custom/Title';
import saveToGallery from '../utils/saveToGallery';
import convertToBase64 from '../utils/convertToBase64';

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
      <ScrollView style={styles.details}>
        <View>
          <Title title={'Title'} />
          <Text>{detailedImage.title}</Text>
        </View>
        <View style={styles.actionsContainer}>
          <CustomButton
            title={'Share'}
            onPress={async () => {
              const base64 = await convertToBase64(detailedImage.image);
              await Share.open({
                url: `data:image/gif;base64,${base64}`,
              });
            }}
          />
          <CustomIconButton
            Icon={Icon}
            iconName={'download'}
            style={{width: 64, marginStart: 8}}
            onPress={() => saveToGallery(id, detailedImage.image)}
          />
        </View>
      </ScrollView>
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
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
  },
});

export default Details;
