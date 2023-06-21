import React from 'react';
import {HomeScreen} from './app/screens';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
      <HomeScreen />
    </>
  );
}

export default App;
