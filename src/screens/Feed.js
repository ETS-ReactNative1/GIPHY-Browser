import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppBar from '../components/app_bar/AppBar';
import Gallery from '../components/feed_screen/Gallery';

const Feed = () => {
  return (
    <View style={styles.container}>
      <AppBar />
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
