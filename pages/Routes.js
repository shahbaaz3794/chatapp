import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import Login from './Login';
import SignUp from './SignUp';
import BottomNavigation from './BottomNavigation';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer independent={true} initialRouteName="Splash">
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={BottomNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
