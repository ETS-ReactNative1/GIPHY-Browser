import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import AppBar from './src/components/app_bar/AppBar';
import Feed from "./src/screens/Feed";

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Feed />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
