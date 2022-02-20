import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {Constants} from '../../Config';
import ImageThumb from './ImageThumb';
import Title from '../custom/Title';
import {useSelector} from 'react-redux';

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
  {
    id: 4,
    img: require('../../assets/images/1.gif'),
  },
  {
    id: 5,
    img: require('../../assets/images/2.gif'),
  },
  {
    id: 6,
    img: require('../../assets/images/3.gif'),
  },
  {
    id: 7,
    img: require('../../assets/images/4.gif'),
  },
];

const Gallery = () => {
  const gridColsCount = useSelector(
    state => state.runTimeReducer.gridColumnCount,
  );
  const renderImages = ({item}) => <ImageThumb image={item.img} />;

  return (
    <View style={styles.container}>
      <Title title={'Trending GIFs'} />
      <FlatList
        style={{flex: 1}}
        data={dummy}
        renderItem={renderImages}
        keyExtractor={item => item.id}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        key={gridColsCount}
        numColumns={gridColsCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Constants.MainPadding,
    paddingBottom: 0,
  },
});

export default Gallery;
