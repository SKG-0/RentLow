import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from '../screens/AppScreens/Home';
import Chat from '../screens/AppScreens/Chat';
import Profile from '../screens/AppScreens/Profile';
import Sell from '../screens/AppScreens/Sell';
import Search from '../screens/AppScreens/Search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          height: '7%',
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                size={28}
                color={focused ? '#4d94ff' : '#d9d9d9'}
                style={{alignSelf: 'center'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon2
                name="search"
                size={24}
                color={focused ? '#4d94ff' : '#d9d9d9'}
                style={{alignSelf: 'center'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="plus-circle-outline"
                size={28}
                color={focused ? '#4d94ff' : '#d9d9d9'}
                style={{alignSelf: 'center'}}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="chat"
                size={26}
                color={focused ? '#4d94ff' : '#d9d9d9'}
                style={{alignSelf:'center'}}
              />
              
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="account"
                size={26}
                color={focused ? '#4d94ff' : '#d9d9d9'}
                style={{alignSelf: 'center'}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icontext: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
