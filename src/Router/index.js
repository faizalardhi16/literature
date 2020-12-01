import React, {useDebugValue, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Landing,
  Register,
  Login,
  Home,
  Show,
  Profile,
  AddBooks,
} from '../Pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Show" component={Show} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddBooks" component={AddBooks} />
    </Stack.Navigator>
  );
};

export default Router;
