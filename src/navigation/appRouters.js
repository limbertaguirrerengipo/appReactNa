import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import login from '../screens/login/LoginScreen';
import home from '../screens/home/Home';
//import DeviceInfo from 'react-native-device-info';

const Stack = createStackNavigator();

const AppNavigation = ({MyTheme}) => {
  const dispatch = useDispatch();

    const {isLoading } = useSelector((stateSelector) => {
    return stateSelector.login;
  });
  useEffect(() => {
    console.log("Estado inicial : "+isLoading);
}, []);



  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {!isLoading?
          <>
            <Stack.Screen
              name="login"
              component={login}
              options={{
                title: 'Login',
                headerShown: false,
                animationTypeForReplace:'pop'// isSignout ? 'pop' : 'push',
              }}
            />
          </>
          :
          <>
            <Stack.Screen
              name="home"
              component={home}
              options={{
                title: 'Home',
                headerShown: false,
                animationTypeForReplace:'pop'// isSignout ? 'pop' : 'push',
              }}
            />
          </>
          }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
