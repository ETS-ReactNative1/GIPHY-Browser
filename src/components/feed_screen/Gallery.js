import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Constants} from '../../Config';
import ImageThumb from './ImageThumb';
import Title from '../custom/Title';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, getTrending} from '../../store/slices/runTimeSlice';

const Gallery = () => {
  const dispatch = useDispatch();
  const trending = useSelector(state => state.runTimeReducer.trendingGifs);
  const isLoadingGifs = useSelector(state => state.runTimeReducer.loadingGifs);
  const gridColsCount = useSelector(
    state => state.runTimeReducer.gridColumnCount,
  );
  const renderImages = ({item}) => (
    <ImageThumb id={item.id} image={item.image} />
  );
  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);
  const loadMore = () => {
    if (isLoadingGifs) return;
    dispatch(getTrending());
  };
  return (
    <View style={styles.container}>
      <Title title={'Trending'} />
      <FlatList
        style={{flex: 1}}
        data={trending}
        renderItem={renderImages}
        keyExtractor={item => item.id}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        key={gridColsCount}
        numColumns={gridColsCount}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
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
