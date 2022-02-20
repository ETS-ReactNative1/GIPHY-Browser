import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryItem = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.categoryImg}
        source={{uri : props.image}}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}</Text>
        <Icon style={styles.titleIcon} name="cloud-search-outline" />
      </View>
    </View>
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
  },
  imageContainer: {
    width: '48%',
    height: 120,
    marginBottom: '4%',
    borderRadius: 12,
    overflow: 'hidden',
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
    // marginStart: 40,
  },
});

export default CategoryItem;
