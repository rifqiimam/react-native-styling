import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/stack';
import DetailScreen from './components/DetailScreen';

const DeatailSecreen = () => {
    return(
<View style= {{ flex:1, justifyContent: 'center', alignItems:'center'}}>
<Text>Details Screen</Text>
</View>
    );
};

export default DetailScreen;
