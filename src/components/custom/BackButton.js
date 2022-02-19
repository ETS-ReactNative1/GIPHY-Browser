import React from 'react';
import {Actions as Router} from 'react-native-router-flux';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const BackButton = props => {
  const onBackHandler = () => Router.pop();
  return (
    <TouchableOpacity onPress={onBackHandler}>
      <Icon style={[styles.icon, props.style]} name="chevron-thin-left" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    color: '#fff',
  },
});

export default BackButton;
