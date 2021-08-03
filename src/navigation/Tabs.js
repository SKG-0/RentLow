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
          height: '8%',
          backgroundColor: 'white',
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
                size={30}
                color={focused ? '#4d94ff' : '#999999'}
              />
              <Text
                style={{
                  color: focused ? '#4d94ff' : '#999999',
                  fontWeight: 'bold',
                }}>
                Home
              </Text>
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
                size={26}
                color={focused ? '#4d94ff' : '#999999'}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: focused ? '#4d94ff' : '#999999',
                  fontWeight: 'bold',
                  marginBottom: -6,
                }}>
                Search
              </Text>
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
                size={30}
                color={focused ? '#4d94ff' : '#999999'}
              />
              <Text
                style={{
                  color: focused ? '#4d94ff' : '#999999',
                  fontWeight: 'bold',
                  marginLeft: '3%',
                }}>
                Sell
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="chat"
                size={30}
                color={focused ? '#4d94ff' : '#999999'}
              />
              <Text
                style={{
                  color: focused ? '#4d94ff' : '#999999',
                  fontWeight: 'bold',
                }}>
                Chats
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="account"
                size={30}
                color={focused ? '#4d94ff' : '#999999'}
              />
              <Text
                style={{
                  color: focused ? '#4d94ff' : '#999999',
                  fontWeight: 'bold',
                }}>
                Profile
              </Text>
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
