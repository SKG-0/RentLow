import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Onboarding/Login'
import Signup from '../screens/Onboarding/Signup'
const Authnavigator=createStackNavigator();
export default function AuthStack() {
    return (
        <Authnavigator.Navigator headerMode="none" initialRouteName="Signup">
            <Authnavigator.Screen name="Login" component={Login}></Authnavigator.Screen>
            <Authnavigator.Screen name="Signup" component={Signup}></Authnavigator.Screen>
        </Authnavigator.Navigator>
    )
}
