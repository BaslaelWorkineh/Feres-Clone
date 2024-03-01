import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ServicesBottomNavBar = () => {

    const [selectedTab, setSelectedTab] = useState('Home');
    const navigation = useNavigation();

    const handlePress = (tabName) => {
        setSelectedTab(tabName);
        navigation.navigate(tabName);
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10, marginLeft: -30, marginRight: -30 }}>
            <TouchableOpacity onPress={() => handlePress('Services')} style={{ alignItems: 'center' }}>
                <FontAwesome name='home' size={30} color='rgb(101, 101, 101)' />
                <Text style={{ color: 'rgb(101, 101, 101)' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('History')} style={{ alignItems: 'center' }}>
                <FontAwesome name='history' size={30} color='rgb(101, 101, 101)' />
                <Text style={{ color: 'rgb(101, 101, 101)' }}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('ContactUs')} style={{ alignItems: 'center' }}>
                <FontAwesome name='phone' size={30} color='rgb(101, 101, 101)' />
                <Text style={{ color: 'rgb(101, 101, 101)' }}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Profile')} style={{ alignItems: 'center' }}>
                <FontAwesome name='user' size={30} color='rgb(101, 101, 101)' />
                <Text style={{ color: 'rgb(101, 101, 101)' }}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ServicesBottomNavBar
