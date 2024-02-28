import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, {Marker} from 'react-native-maps';

export default function Home() {
    return (
        <View>
            <View style={tw`h-3/5`}>
                <MapView
                style={tw`flex-1`}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
            <View style={tw`h-2/5`}></View>
        </View>

    )
}