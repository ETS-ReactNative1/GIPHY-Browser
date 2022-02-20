import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Constants} from '../../Config';
import Title from '../custom/Title';
import CategoryItem from './CategoryItem';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../store/slices/runTimeSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.runTimeReducer.categories);
  const isLoadingCategories = useSelector(
    state => state.runTimeReducer.loadingCategories,
  );
  const renderCategory = ({item}) => (
    <CategoryItem name={item.name} image={item.image} />
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Title title={'Category'} />
      {isLoadingCategories && <ActivityIndicator color={'#999'} />}
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Constants.MainPadding,
    paddingBottom: 0,
  },
});

export default Categories;
