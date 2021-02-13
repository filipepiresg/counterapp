import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { CountersPage, ConfigPage } from '~/pages';

import { Colors } from './styles';

const Tab = createBottomTabNavigator();

const pages = ['Counters', 'Config'];

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={pages[0]}
        backBehavior='none'
        tabBarOptions={{
          style: {
            borderTopColor: 'transparent',
            elevation: 0,
            backgroundColor: Colors.PRIMARY,
          },
          labelStyle: {
            fontSize: 14,
          },
          activeTintColor: Colors.ICON_ACTIVE,
          inactiveTintColor: Colors.ICON_INACTIVE,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === pages[0]) {
              iconName = 'albums-sharp';
            } else if (route.name === pages[1]) {
              iconName = 'cog';
            } else {
              return null;
            }

            return <Ionicons name={iconName} size={size * 1.2} color={color} />;
          },
          unmountOnBlur: true,
        })}
      >
        <Tab.Screen name={pages[0]} component={CountersPage} />
        <Tab.Screen name={pages[1]} component={ConfigPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
