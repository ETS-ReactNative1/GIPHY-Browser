import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppBar from '../components/app_bar/AppBar';
import Gallery from '../components/feed_screen/Gallery';
import Categories from '../components/feed_screen/Categories';

const Feed = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Categories />
      <Gallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default Feed;
