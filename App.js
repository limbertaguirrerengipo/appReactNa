import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './src/redux/store';

import {  DefaultTheme } from '@react-navigation/native';
import AppRouters from './src/navigation/appRouters'
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0C1C46',
    secondary:'#36A9E1',
    accent: '#EB5C72',
  },
};
const store = configureStore();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <StoreProvider store={store}>
       <AppRouters Mytheme={MyTheme} />
    </StoreProvider>
  );
};

export default App;
