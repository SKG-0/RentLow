import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './Tabs'
import Sell1 from '../screens/AppScreens/Sell1'
const AppNavigator=createStackNavigator();
export default function AppStack() {
    return (
        <AppNavigator.Navigator headerMode="none" initialRouteName="Sell1">
            <AppNavigator.Screen name="Tabs" component={Tabs}></AppNavigator.Screen>
            <AppNavigator.Screen name="Sell1" component={Sell1}></AppNavigator.Screen>
        </AppNavigator.Navigator>
    )
}