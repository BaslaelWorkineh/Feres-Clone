import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SimpleLineIcons } from '@expo/vector-icons';



export default function Home() {

    const locations = [
        { name: 'Arat Kilo', children: ['Addis Ababa'] },
        { name: 'Bole International Airport', children: ['Addis Ababa'] },
        { name: 'Ring Road', children: ['Addis Ababa'] },
    ];

    return (
        <View style={{ backgroundColor: 'rgb(153, 196, 234)' }} >
            <View style={tw`h-3/5`}>
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
            <View style={[tw`h-2/5`, {backgroundColor:'white', borderTopRightRadius:40, borderTopLeftRadius:40}]}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        styles={{
                            container: {
                                flex: 0,
                                padding: 20,
                                width: 300
                            },
                            textInput: {
                                fontSize: 18,
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 5,
                                marginBottom: 8,
                                paddingHorizontal: 10,
                                height: 60,
                            },
                            listView: {
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 10,
                            },
                            poweredContainer: {
                                display: 'none', // To hide the 'powered by Google' attribution
                            },
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    />
                    <SimpleLineIcons name="location-pin" size={40} color="black" style={[tw`mr-2`, { paddingTop: 30 }]} />
                </View>
                {/* Default Location Texts */}
                <View style={tw` pl-5`}>
                    {locations.map((location, index) => (
                        <View key={index} style={{}}>
                            <View style={tw`flex-row items-center`}>
                                <SimpleLineIcons name="location-pin" size={16} color="red" style={tw`mr-2`} />
                                <Text style={[tw`text-sm`, { fontSize: 16, fontWeight: 'light' }]}>{location.name}</Text>
                            </View>
                            {location.children.map((child, idx) => (
                                <View key={idx} style={[tw`flex-row items-center mb-2 ml-6 text-sm`, { borderBottomWidth: 1, borderBottomColor: 'lightgreen', paddingBottom: 4, width:300 }]}>
                                    <Text style={[tw`text-sm`, { fontSize: 14, fontWeight: 'light', color: 'gray', width: 300 }]}>
                                        {child}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

            </View>
        </View>

    )
}

