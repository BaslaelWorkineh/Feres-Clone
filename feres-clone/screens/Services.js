import React from 'react';
import { View, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import  profilePic from '../assets/apps.jpg'

export default function Services() {
    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 60 }}>
                <SimpleLineIcons name='arrow-left' size={15} style={{ marginTop: 20, marginRight: 30 }} />
                <View style={{ alignItems: 'center' }}>
                    <Text>Delivery to</Text>
                    <Text>XP9G+92M, Addis Ababa</Text>
                </View>

                <MaterialCommunityIcons name='purse' size={30} color='rgb(0, 166, 30)' style={{ marginTop: 10, marginLeft: 30 }} />
            </View>

            <View style={{ padding: 10 }}>
                <View style={{ width: vw - 20, height: 200, backgroundColor: 'rgb(0, 166, 30)', borderRadius: 10, padding: 20, justifyContent:'space-between' }}>
                    <Text style={{ fontSize: 26, fontWeight: 900, color: 'white',marginTop:20 }}>FERES</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', marginBottom:20 }}>
                            <Image source={profilePic}
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 50,
                                }} />
                            <View style={{marginLeft:20}}>
                                <Text style={{ color: 'white' }}>Miles balance</Text>
                                <Text style={{ color: 'white', fontSize: 20 }}>0</Text>
                            </View>

                        </View>
                        <SimpleLineIcons name='arrow-right' size={20} color='white' style={{ marginTop: 20, marginRight: 30, }} />

                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}
