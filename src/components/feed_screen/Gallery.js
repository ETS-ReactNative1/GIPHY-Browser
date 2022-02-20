import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Constants} from '../../Config';
import ImageThumb from './ImageThumb';
import Title from '../custom/Title';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchGifs, getTrending} from '../../store/slices/runTimeSlice';

const Gallery = () => {
  const dispatch = useDispatch();
  const trendingGifs = useSelector(state => state.runTimeReducer.trendingGifs);
  const searchGifs = useSelector(state => state.runTimeReducer.searchGifs);
  const isLoadingGifs = useSelector(state => state.runTimeReducer.loadingGifs);
  const isSearching = useSelector(state => state.runTimeReducer.isSearching);
  const searchQuery = useSelector(state => state.runTimeReducer.searchQuery);
  const selectedCategory = useSelector(
    state => state.runTimeReducer.selectedCategory,
  );
  const gridColsCount = useSelector(
    state => state.runTimeReducer.gridColumnCount,
  );

  const renderImages = ({item}) => (
    <ImageThumb id={item.id} image={item.image} />
  );

  useEffect(() => {
    if (isSearching && (selectedCategory !== '' || searchQuery !== '')) {
      dispatch(getSearchGifs());
    } else if (trendingGifs.length === 0) {
      dispatch(getTrending());
    }
  }, [selectedCategory, searchQuery, isSearching, dispatch]);

  const loadMore = () => {
    if (isLoadingGifs) return;
    isSearching ? dispatch(getSearchGifs()) : dispatch(getTrending());
  };
  return (
    <View style={styles.container}>
      <Title
        title={
          isSearching
            ? `Results for:  ${
                selectedCategory !== ''
                  ? ' -' + selectedCategory + '- ' + searchQuery + ' '
                  : searchQuery
              }`
            : 'Trending'
        }
      />
      <FlatList
        style={{flex: 1}}
        data={isSearching ? searchGifs : trendingGifs}
        renderItem={renderImages}
        keyExtractor={item => item.id}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        key={gridColsCount}
        numColumns={gridColsCount}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
      {isLoadingGifs && <ActivityIndicator color={'#999'} />}
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
