import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesScreen } from '@pages/Movies';
import { MoviesDetailsScreen } from '@pages/MoviesDetails';

const MainStack = createStackNavigator();

const Routes = (): JSX.Element => (
  <MainStack.Navigator headerMode="none" screenOptions={{ headerShown: true }}>
    <MainStack.Screen name="MoviesScreen" component={MoviesScreen} />
    <MainStack.Screen name="MoviesDetails" component={MoviesDetailsScreen} />
  </MainStack.Navigator>
);

export default Routes;
