import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const DrawerButton = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <View onPress={openDrawer} style={{
            backgroundColor: 'white', width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
            position: 'absolute',
            zIndex: 10,
            borderRadius: 50,
            marginTop: 25,
            marginLeft: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }}>
            <MaterialCommunityIcons name='menu' size={30} color="black" style={{}} />
        </View>
    )
}

export default DrawerButton