import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../Config';
import Title from '../custom/Title';
import CategoryItem from './CategoryItem';
import {getCategoriesWS} from '../../WebService';

const dummy = [
  {
    id: 0,
    name: 'cat',
  },
  {
    id: 1,
    name: 'cat',
  },
  {
    id: 2,
    name: 'cat',
  },
  {
    id: 3,
    name: 'cat',
  },
  {
    id: 4,
    name: 'cat',
  },
];

const Categories = () => {
  const renderCategory = ({item}) => <CategoryItem name={item.name} />;

  useEffect(() => {
    getCategoriesWS();
  }, []);

  return (
    <View style={styles.container}>
      <Title title={'Category'} />
      <FlatList
        horizontal={true}
        data={dummy}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
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
