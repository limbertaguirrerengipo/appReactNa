import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {useDispatch, useSelector} from 'react-redux';
import login from '../screens/login/LoginScreen';
//import DeviceInfo from 'react-native-device-info';

const Stack = createStackNavigator();

const AppNavigation = ({MyTheme}) => {
  //const dispatch = useDispatch();

/*   const {userToken, isLoading, isSignout} = useSelector((stateSelector) => {
    return stateSelector.login;
  });

  if (isLoading) {
    return <SplashScreen />;
  } */

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
