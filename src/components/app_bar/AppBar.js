import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../Config';
import Icon from 'react-native-vector-icons/Entypo';
import SearchBar from '../custom/SearchBar';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gallery</Text>
        <Icon style={styles.icon} name="dots-two-horizontal" />
      </View>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Constants.ColorMain,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    color: Constants.ColorMainText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    width: 24,
    height: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Constants.ColorMainText,
    fontSize: 18,
  },
});

export default AppBar;
