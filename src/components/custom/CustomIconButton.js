import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Constants} from '../../Config';
import LinearGradient from 'react-native-linear-gradient';

const CustomIconButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        style={[styles.container, props.style]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={Constants.MainGradient}>
        <props.Icon style={styles.icon} name={props.iconName} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  icon: {
    fontSize: 18,
    fontFamily: 'Fabrica',
    color: '#fff',
  },
});

export default CustomIconButton;
