import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {RunTimeActions} from '../../store/slices/runTimeSlice';
import { Constants } from "../../Config";

const CategoryItem = props => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    state => state.runTimeReducer.selectedCategory,
  );
  const onSelectCategory = () => {
    dispatch(RunTimeActions.setSelectedCategory(props.name));
  };
  return (
    <TouchableOpacity
      onPress={onSelectCategory}
      style={[
        styles.container,
        selectedCategory === props.name ? styles.selected : {},
      ]}>
      <Image style={styles.categoryImg} source={{uri: props.image}} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
        <Icon style={styles.titleIcon} name="cloud-search-outline" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 80,
    marginEnd: 12,
    borderRadius: 8,
    backgroundColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    overflow: 'hidden',
  },
  selected: {
    borderWidth: 2,
    borderColor: Constants.ColorMain,
  },
  imageContainer: {
    width: '48%',
    height: 120,
    marginBottom: '4%',
    backgroundColor: '#999',
  },
  categoryImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    width: 124,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingHorizontal: 8,
    backgroundColor: '#222222aa',
  },
  title: {
    color: '#fff',
    fontFamily: 'Fabrica',
  },
  titleIcon: {
    color: '#fff',
  },
});

export default CategoryItem;
