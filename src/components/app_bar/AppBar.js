import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Constants} from '../../Config';
import Icon from 'react-native-vector-icons/Entypo';
import SearchBar from '../custom/SearchBar';
import LinearGradient from 'react-native-linear-gradient';

const AppBar = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={Constants.MainGradient}
      style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.icon} name="menu" />
        <Text style={styles.title}>Gify Browser</Text>
        <Icon style={[styles.icon, {marginStart: 'auto'}]} name="dots-two-horizontal" />
      </View>

      <SearchBar />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Constants.MainPadding,
    backgroundColor: Constants.ColorMain,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: Constants.MainPadding,
  },
  title: {
    color: Constants.ColorMainText,
    fontSize: 18,
    marginHorizontal: 36,
  },
  icon: {
    width: 24,
    height: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Constants.ColorMainText,
    fontSize: 24,
  },
});

export default AppBar;
