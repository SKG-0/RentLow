import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './Tabs'
import Sell1 from '../screens/AppScreens/Sell1'
import AdScreen from '../screens/AppScreens/AdScreen'
import Favourite from '../screens/AppScreens/Favourite'
import MyAds from '../screens/AppScreens/MyAds'
import Edit from '../screens/AppScreens/Edit'
const AppNavigator=createStackNavigator();
export default function AppStack() {
    return (
        <AppNavigator.Navigator headerMode="none" initialRouteName="Edit">
            <AppNavigator.Screen name="Tabs" component={Tabs}></AppNavigator.Screen>
            <AppNavigator.Screen name="Sell1" component={Sell1}></AppNavigator.Screen>
            <AppNavigator.Screen name="AdScreen" component={AdScreen}></AppNavigator.Screen>
            <AppNavigator.Screen name="Favourite" component={Favourite}></AppNavigator.Screen>
            <AppNavigator.Screen name="MyAds" component={MyAds}></AppNavigator.Screen>
            <AppNavigator.Screen name="Edit" component={Edit}></AppNavigator.Screen>
        </AppNavigator.Navigator>
    )
}