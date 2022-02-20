import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {Constants} from '../../Config';
import LinearGradient from 'react-native-linear-gradient';

const MainButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={Constants.MainGradient}>
        <Text style={styles.text}>Download</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#5E83E4',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Fabrica',
    color: '#fff',
  },
});

export default MainButton;
