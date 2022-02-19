import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ICON_MARGIN = 24;

const SearchBar = () => {
  const onSearchHandler = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onSearchHandler}
        placeholder="What are you looking for ?"
      />
      <Icon style={styles.icon} name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    color: '#777',
    paddingStart: ICON_MARGIN * 2 + 4,
  },
  icon: {
    position: 'absolute',
    marginHorizontal: ICON_MARGIN,
  },
});

export default SearchBar;
