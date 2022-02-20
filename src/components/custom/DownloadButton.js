import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {Constants} from '../../Config';
import LinearGradient from 'react-native-linear-gradient';

const DownloadButton = props => {
  console.log(props.onPress);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        style={styles.container}
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
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Fabrica',
    color: '#fff',
  },
});

export default DownloadButton;
