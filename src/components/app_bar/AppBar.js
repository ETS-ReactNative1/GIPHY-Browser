import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {Constants} from '../../Config';
import Icon from 'react-native-vector-icons/Entypo';
import SearchBar from '../custom/SearchBar';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {RunTimeActions} from '../../store/slices/runTimeSlice';

const AppBar = () => {
  const dispatch = useDispatch();
  const gridColsCount = useSelector(
    state => state.runTimeReducer.gridColumnCount,
  );
  let gridIconName;
  switch (gridColsCount) {
    case 2:
      gridIconName = 'dots-two-horizontal';
      break;
    case 3:
      gridIconName = 'dots-three-horizontal';
      break;
    case 4:
      gridIconName = 'grid';
      break;
    default:
      gridIconName = 'dots-two-horizontal';
      break;
  }

  const onChangeGridLayout = () => dispatch(RunTimeActions.alterGridLayout());
  const onMenuHandler = () => {
    return Alert.alert('GHIPY Browser', 'Created by Muhammad Sharaf', [
      {text: 'OK'},
    ]);
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={Constants.MainGradient}
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onMenuHandler}>
          <Icon style={styles.icon} name="menu" />
        </TouchableOpacity>
        <Text style={styles.title}>GIPHY Browser</Text>
        <TouchableOpacity
          onPress={onChangeGridLayout}
          style={styles.iconContainer}>
          <Icon style={styles.icon} name={gridIconName} />
        </TouchableOpacity>
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
    fontFamily: 'Fabrica',
    marginHorizontal: 36,
  },
  iconContainer: {
    marginStart: 'auto',
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
