import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Routes from '@routes/index';

import './config/ReactotronConfig';
import store from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
