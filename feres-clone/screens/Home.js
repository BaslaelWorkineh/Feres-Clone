import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SimpleLineIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import appServices from '../assets/apps.jpg';
import DrawerButton from '../components/DrawerButton';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;
    const locations = [
        { name: 'A2', children: ['Addis Ababa'] },
        { name: 'Bole International Airport', children: ['Addis Ababa'] },
        { name: 'Ring Road', children: ['Addis Ababa'] },
    ];

    const navigation = useNavigation();

    const appServicesClicked = () => {
        navigation.navigate('Services');
    }

    return (
        <View style={{ backgroundColor: 'rgb(153, 196, 234)' }} >
            <View style={{position:'absolute', zIndex:9999}}>
                <DrawerButton/>
            </View>
            
            <View style={{ height: vh + 50 }}>
                <MapView
                    style={tw`flex-1`}
                    mapType='mutedStandard'
                    initialRegion={{
                        latitude: 9.0227,
                        longitude: 38.7460,
                        latitudeDelta: 0.05, // Adjust the delta values as needed for the zoom level
                        longitudeDelta: 0.05,
                    }}

                />
            </View>
            <View style={[tw`h-1/5`, { position: 'absolute', height: 300, width: vw, bottom: 0, backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20 }]}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ paddingTop: 20, paddingLeft: 20, paddingBottom: 20 }}>
                        <View style={{
                            backgroundColor: 'rgb(255, 248, 248)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            width: vw - 110,
                            height: 60
                        }}>
                            <View style={{ flexDirection: 'row', marginRight: 50 }}>
                                <MaterialCommunityIcons name="car-estate" size={50} color="black" style={[tw`mr-5`]} />
                                <Text style={{ color: 'rgba(0, 185, 74, 0.97)', fontSize: 24, fontWeight: 500, marginTop: 10 }}>Where to?</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingTop: 15, paddingLeft: 10 }} onPress={appServicesClicked}>
                        <Image source={appServices} style={{ height: 70, width: 70, borderRadius: 10, }}  />
                    </TouchableOpacity>


                </View>
                {/* Default Location Texts */}
                <View style={tw` pl-5`}>

                    {locations.map((location, index) => (
                        <TouchableOpacity>
                            <View key={index} style={{}}>
                                <View style={tw`flex-row items-center`}>
                                    <SimpleLineIcons name="location-pin" size={10} color="red" style={tw`mr-2`} />
                                    <Text style={[tw`text-sm`, { fontSize: 16, fontWeight: 100, color: 'rgba(72, 72, 72, 0.97)' }]}>{location.name}</Text>
                                </View>
                                {location.children.map((child, idx) => (
                                    <View key={idx} style={[tw`flex-row items-center mb-2 ml-6 text-sm`, { borderBottomWidth: 1, borderBottomColor: 'rgba(135, 135, 135, 0.3)', paddingBottom: 4, width: 300 }]}>
                                        <Text style={[tw`text-sm`, { fontSize: 12, fontWeight: 100, color: 'gray', width: 300 }]}>
                                            {child}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </TouchableOpacity>

                    ))}
                </View>

            </View>
        </View>

    )
}

