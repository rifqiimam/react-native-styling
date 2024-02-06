import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const UserDetail = ({user}) => {
    return(
        <View>
        <Text>{`${user.name.first} ${user.name.last}`}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Location: {`${user.location.city}, ${user.location.country}`}</Text>
      </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    thumbnail: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    userInfo: {
      alignItems: 'center',
    },
  });

  export default UserDetail;