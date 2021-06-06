import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Chats from './Chats';
import Groups from './Groups';
import Calls from './Calls';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Chats') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Groups') {
              iconName = focused ? 'ios-people' : 'ios-people-outline';
            } else if (route.name === 'Calls') {
              iconName = focused ? 'ios-call' : 'ios-call-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#05679E',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
