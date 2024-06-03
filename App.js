import React from 'react';
import { View, Text } from 'react-native';
import Navigation from './navigation';
import store from '../client/store'
import { Provider } from 'react-redux'



const App = ()=> {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
    )
  }



export default App;
