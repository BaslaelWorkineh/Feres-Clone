import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import DrawerButton from '../components/DrawerButton';

import HomeBottomLocation from '../components/HomeBottomLocation';

export default function Home() {
    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;
    

    return (
        <View style={{ backgroundColor: 'rgb(153, 196, 234)' }} >
            <View style={{position:'absolute', zIndex:9999}}>
                <DrawerButton/>
            </View>
            
            <View style={{ height: vh + 50,zIndex:1 }}>
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
            <View style={[tw`h-1/5`, { position: 'absolute', height: 300, width: vw, bottom: 0, backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20,zIndex:2 }]}>
                <HomeBottomLocation/>
            </View>
        </View>

    )
}

