import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Constants} from '../../Config';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = props => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={{flex: 1}} onPress={props.onPress}>
        <LinearGradient
          style={[styles.container, props.style]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={Constants.MainGradient}>
          <Text style={styles.text}>{props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
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

export default CustomButton;
