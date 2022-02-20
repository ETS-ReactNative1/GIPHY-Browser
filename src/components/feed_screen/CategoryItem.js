import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryItem = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.categoryImg} source={props.image} />
      <View style={styles.titleContainer}>
        <Text>{props.name}</Text>
        <Icon style={styles.titleIcon} name="cloud-search-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 12,
    marginEnd: 12,
    borderRadius: 8,
    backgroundColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  categoryImg: {},
  titleContainer: {
    width: 124,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  titleIcon: {
    // marginStart: 40,
  },
});

export default CategoryItem;
