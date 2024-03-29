import React from 'react';
import {SafeAreaView, LogBox} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};
export default App;
