import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {useDispatch} from 'react-redux';
import {RunTimeActions} from '../../store/slices/runTimeSlice';
import {Constants} from '../../Config';

const ICON_MARGIN = 24;

const SearchBar = () => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const onSearchHandler = text => {
    dispatch(RunTimeActions.setSearchQuery(text));
  };
  const onClearSearchHandler = () => {
    inputEl.current.clear();
    dispatch(RunTimeActions.setSearchQuery(''));
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputEl}
        style={styles.textInput}
        onEndEditing={event => onSearchHandler(event.nativeEvent.text)}
        returnKeyType="search"
        multiline={false}
        placeholder="What are you looking for ?"
      />
      <Icon style={styles.icon} name="search" />
      <TouchableOpacity style={styles.clearBtn} onPress={onClearSearchHandler}>
        <Text style={styles.clearBtnText}>Clear</Text>
      </TouchableOpacity>
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
  clearBtn: {
    position: 'absolute',
    right: ICON_MARGIN,
  },
  clearBtnText: {
    fontSize: 16,
    color: Constants.ColorMain,
  },
});

export default SearchBar;
