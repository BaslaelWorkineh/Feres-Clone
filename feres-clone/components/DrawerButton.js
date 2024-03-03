import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const DrawerButton = (onPress) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}
         style={{
            backgroundColor: 'white',
            width: 50, 
            height: 50, 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 50,
            marginTop: 25,
            marginLeft: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }}>
            <MaterialCommunityIcons name='menu' size={30} color="black"/>
        </TouchableOpacity>
    );
}

export default DrawerButton;
