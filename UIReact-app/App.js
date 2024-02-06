import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen.js';
import DetailsScreen from './src/screens/DetailsScreen.js';
import FlexboxExample from './src/components/FlexboxExample.js';
import ApiData from './src/screens/ApiData.js';
import DetailPage from './src/screens/DetailPage.js';
import { View } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="FlexboxExample" component={FlexboxExample}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="ApiData" component={ApiData}/>
        <Stack.Screen name="DetailPage" component={DetailPage}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
