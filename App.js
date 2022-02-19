import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import AppBar from './src/components/app_bar/AppBar';
import Feed from './src/screens/Feed';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Details from './src/screens/Details';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Router>
        <Scene key="root">
          <Scene key="Feed" component={Feed} hideNavBar initial={true} />
          <Scene key="Details" component={Details} />
        </Scene>
      </Router>
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
