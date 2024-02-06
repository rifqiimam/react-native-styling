import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import UserDetail from '../components/UserDetail';
import axios from 'axios';

const ApiData = ({navigation}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=30')
      .then(response => {
        if (response.data && response.data.results) {
          setUserData(response.data.results);
        } else {
          console.log('No user data found in response');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const navigasi = (user) => {
    navigation.navigate('DetailPage', { user });
  }

  return (
    <ScrollView>
    <View>
      <Text>User Data:</Text>
      {userData.map(user => (
        <TouchableOpacity  key={user.login.uuid} onPress={() => navigasi(user)}>
          <Image source={{ uri: user.picture.large }} style={{ width: 50, height: 50 }} />
        <View >
        <UserDetail user={user}/>
        </View>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};

export default ApiData;
