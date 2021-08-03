import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import LoadingStack from './LoadingStack'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
const MainNavigator=createStackNavigator();
const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <MainNavigator.Navigator headerMode="none" initialRouteName="LoadingStack">
                <MainNavigator.Screen name="Loading" component={LoadingStack}></MainNavigator.Screen>
                <MainNavigator.Screen name="AuthStack" component={AuthStack}></MainNavigator.Screen>
                <MainNavigator.Screen name="AppStack" component={AppStack}></MainNavigator.Screen>
            </MainNavigator.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator
