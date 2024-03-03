import { View, Text, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import DrawerButton from '../components/DrawerButton';

import HomeBottomLocation from '../components/HomeBottomLocation';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useRef } from 'react';
import Economy from '../assets/car5.png'
import Classic from '../assets/car2.png'
import Minivan from '../assets/car3.png'
import Minibus from '../assets/car4.png'
import Lada from '../assets/car1.png'
import { SimpleLineIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;


    const BottomSheetModalRef = useRef(null);

    const snapPoints = ["42%", "80%"];
    const carselector = ["20"];

    function handlePresentModal() {
        BottomSheetModalRef.current?.present();
    }

    const cars = [
        { key: 1, image: Classic, title: 'Economy', time: '12.43 dropoff', price: 'ETB 299.0' },
        { key: 2, image: Minivan, title: 'Classic', time: '12.43', price: 'ETB 299.0' },
        { key: 3, image: Economy, title: 'Minivan', time: '12.43', price: 'ETB 299.0' },
        { key: 4, image: Minibus, title: 'Minibus', time: '12.43', price: 'ETB 299.0' },
        { key: 5, image: Lada, title: 'Lada', time: '12.43', price: 'ETB 299.0' },

    ]

    const [carTitle, setCarTitle] = useState('ECONOMY');

    function changeButton(title)
    {
        title = title.toUpperCase()
        setCarTitle(title)
    }


    return (
        <BottomSheetModalProvider>



            <View style={{ backgroundColor: 'rgb(153, 196, 234)' }} >
                <View style={{ position: 'absolute', zIndex: 9999 }}>
                    <DrawerButton />
                </View>

                <View style={{ height: vh + 50, zIndex: 1 }}>
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
                <View style={[tw`h-1/5`, { position: 'absolute', height: 300, width: vw, bottom: 0, backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20, zIndex: 2 }]}>
                    <HomeBottomLocation handlePresentModal={handlePresentModal} />
                </View>

                <BottomSheetModal index={0} ref={BottomSheetModalRef}
                    snapPoints={snapPoints}>

                    {cars.map((items) => (
                        <TouchableOpacity key={items.key} onPress={() => changeButton((items.title))} activeOpacity={0.4} style={{ flexDirection: 'row', marginTop: 10, paddingTop: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray', justifyContent: 'space-evenly' }}>
                            <Image source={items.image} style={{ width: 77, height: 35, marginRight: 10, marginTop: 0 }} />
                            <View style={{ width: 90 }}>
                                <Text style={{ fontSize: 20, fontWeight: 900, color: 'rgba(72, 72, 72, 0.97)' }}>{items.title}</Text>
                                <Text style={{ color: 'rgba(72, 72, 72, 0.97)' }}>{items.time}</Text>
                            </View>
                            <Text style={{ fontSize: 16, marginLeft: 90, color: 'rgba(72, 72, 72, 0.97)' }}>{items.price}</Text>
                        </TouchableOpacity>
                    ))}

                    <View style={{ backgroundColor: 'white', height: 200, padding: 20, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', }}>
                            <FontAwesome name='dollar' size={20} color='rgba(72, 72, 72, 0.97)' style={{ marginRight: 10 }} />
                            <Text style={{ color: 'rgba(72, 72, 72, 0.97)' }}>Cash</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
                            <TouchableOpacity activeOpacity={0.7} style={{ width: vw - 100, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(0, 166, 30)' }}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 900 }}>
                                    SELECT {carTitle}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={{marginLeft:10, backgroundColor:'white',height:60,width:60, justifyContent:'center', alignItems:'center', borderRadius:50, elevation:5}}>
                                <MaterialCommunityIcons name='calendar' color='rgb(0, 166, 30)' size={40} />
                            </TouchableOpacity>

                        </View>
                    </View>

                </BottomSheetModal>


            </View>
        </BottomSheetModalProvider>
    )
}
