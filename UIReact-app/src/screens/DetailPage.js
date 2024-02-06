import React from 'react';
import { Text, View,Image,StyleSheet, TouchableOpacity } from 'react-native';
import UserDetail from '../components/UserDetail';
const DetailPage = ({route,navigation}) => {
    const { user } = route.params;
    // const navigasiHome =()=>{
    //   navigation.navigate('Home')
    // }
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={{ uri: user.picture.large }} style={styles.thumbnail} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <UserDetail user={user}/>
        </View>
      </View>
    );
  };
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

export default DetailPage;