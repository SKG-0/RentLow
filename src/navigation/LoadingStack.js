import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Loading from '../screens/Loading/Loading'
import AuthStack from '../navigation/AuthStack'
import AppStack from '../navigation/AppStack'
import auth from '@react-native-firebase/auth';
const Loadingnavigator=createStackNavigator();
const LoadingStack=()=>{
    const [route,setroute]=React.useState('Loading')
    React.useEffect(()=>{
        return auth().onAuthStateChanged((user)=>{
            if(user){
                setroute('AppStack')
            }
            else{
                setroute('AuthStack')
            }
        })
    },[])
    return(
        <Loadingnavigator.Navigator headerMode="none" initialRouteName="Loading">
            {
                route=='AuthStack'?<Loadingnavigator.Screen name="AuthStack" component={AuthStack} />:route=='AppStack'?<Loadingnavigator.Screen name="AppStack" component={AppStack} />:<Loadingnavigator.Screen name="Loading" component={Loading} />
            }
        </Loadingnavigator.Navigator>
    )
}
export default LoadingStack