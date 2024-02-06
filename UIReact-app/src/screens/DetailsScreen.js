import React from 'react';
import { Text, View,Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    
    return(
        <View style= {{ flex:1, justifyContent: 'center', alignItems:'center'}}>
            
            <Text>Details Screen</Text>
            <Button
                title="API"
                onPress={() => navigation.navigate('ApiData')}
            />
        </View>
    );
};

export default DetailsScreen;