import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {useDispatch} from 'react-redux';
import { RunTimeActions } from "../../store/slices/runTimeSlice";

const ICON_MARGIN = 24;

const SearchBar = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (text) => {
    dispatch(RunTimeActions.setSearchQuery(text));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onEndEditing={event => onSearchHandler(event.nativeEvent.text)}
        returnKeyType="search"
        multiline={false}
        placeholder="What are you looking for ?"
      />
      <Icon style={styles.icon} name="search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Fabrica',
    color: '#777',
    paddingStart: ICON_MARGIN * 2 + 4,
  },
  icon: {
    fontSize: 16,
    position: 'absolute',
    marginHorizontal: ICON_MARGIN,
  },
});

export default SearchBar;
