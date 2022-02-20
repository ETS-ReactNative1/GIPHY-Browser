import React, {useEffect} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import {Constants} from '../../Config';
import Title from '../custom/Title';
import CategoryItem from './CategoryItem';
import CategoriesData from '../../data/categories';
import {useDispatch} from 'react-redux';
import {getCategories} from '../../store/slices/runTimeSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const renderCategory = ({item}) => (
    <CategoryItem name={item.name} icon={item.icon} />
  );

  useEffect(() => {
    dispatch(getCategories());
    console.log('here');
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Title title={'Category'} />
      <ActivityIndicator color={"#fff"} />
      <FlatList
        horizontal={true}
        data={CategoriesData}
        renderItem={renderCategory}
        keyExtractor={item => item.key}
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
