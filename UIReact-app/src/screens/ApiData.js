import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

const ApiData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
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

  return (
    <View>
      <Text>User Data:</Text>
      {userData.map(user => (
        <View key={user.login.uuid}>
          <Image source={{ uri: user.picture.large }} style={{ width: 50, height: 50 }} />
          <Text>{`${user.name.first} ${user.name.last}`}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Location: {`${user.location.city}, ${user.location.country}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default ApiData;
