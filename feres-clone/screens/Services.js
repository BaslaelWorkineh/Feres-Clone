import React from 'react';
import { View, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import profilePic from '../assets/apps.jpg';
import car from '../assets/car.png';
import delivery from '../assets/delivery.png'
import cart from '../assets/cart.png'
import food from '../assets/food.png'

import friedChicken from '../assets/friedChicken.png'
import kitfo from '../assets/kitfo.jpg'
import shawarma from '../assets/shawarma.png'
import { ScrollView } from 'react-native-gesture-handler';

export default function Services() {
    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const data = [
        { id: 1, text: 'Car', image: car },
        { id: 2, text: 'Food', image: food },
        { id: 3, text: 'Mart', image: cart },
        { id: 4, text: 'Delivery', image: delivery },
    ];

    const foodList = [
        { id: 1, image: kitfo, title: 'Aberus Kitfo', description: 'Lunch And Dinner, Bre', rating: 8.5, price: 'ETB 245', deliveryTime: '34min' },
        { id: 2, image: friedChicken, title: 'KKFC Atlas Branch', description: 'Fried Chicken, Chest', rating: 5.2, price: 'ETP 512', deliveryTime: '1:30hr' },
        { id: 3, image: shawarma, title: 'Sanaa', description: 'Mandi, Shawarma', rating: 4.8, price: 'ETP 300', deliveryTime: '51min' },
        { id: 4, image: kitfo, title: 'Aberus Kitfo', description: 'Lunch And Dinner, Bre', rating: 8.5, price: 'ETB 245', deliveryTime: '34min' },
        { id: 5, image: friedChicken, title: 'KKFC Atlas Branch', description: 'Fried Chicken, Chest', rating: 5.2, price: 'ETP 512', deliveryTime: '1:30hr' },
        { id: 6, image: shawarma, title: 'Sanaa', description: 'Mandi, Shawarma', rating: 4.8, price: 'ETP 300', deliveryTime: '51min' },
        { id: 7, image: kitfo, title: 'Aberus Kitfo', description: 'Lunch And Dinner, Bre', rating: 8.5, price: 'ETB 245', deliveryTime: '34min' },
        { id: 8, image: friedChicken, title: 'KKFC Atlas Branch', description: 'Fried Chicken, Chest', rating: 5.2, price: 'ETP 512', deliveryTime: '1:30hr' },
        { id: 9, image: shawarma, title: 'Sanaa', description: 'Mandi, Shawarma', rating: 4.8, price: 'ETP 300', deliveryTime: '51min' },
        // Add more objects as needed
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 40 }}>
                <SimpleLineIcons name='arrow-left' size={15} style={{ marginTop: 20, marginRight: 30 }} />
                <View style={{ alignItems: 'center' }}>
                    <Text>Delivery to</Text>
                    <Text>XP9G+92M, Addis Ababa</Text>
                </View>

                <MaterialCommunityIcons name='purse' size={30} color='rgb(0, 166, 30)' style={{ marginTop: 10, marginLeft: 30 }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 10 }}>
                    <View style={{ width: vw - 20, height: 160, backgroundColor: 'rgb(0, 166, 30)', borderRadius: 10, padding: 20, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color: 'white', marginTop: 10 }}>FERES</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                                <Image source={profilePic}
                                    style={{
                                        backgroundColor: 'rgb(201, 216, 255)',
                                        height: 50,
                                        width: 50,
                                        borderRadius: 50,
                                    }} />
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ color: 'white' }}>Miles balance</Text>
                                    <Text style={{ color: 'white', fontSize: 20 }}>0</Text>
                                </View>

                            </View>
                            <SimpleLineIcons name='arrow-right' size={20} color='white' style={{ marginTop: 20, marginRight: 30 }} />

                        </View>
                    </View>

                </View>
                <View>
                    <Text style={{ padding: 10 }}>Explore Feres</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        {data.map(item => (
                            <View key={item.id} style={{ padding: 10, alignItems: 'center' }}>
                                <Image source={item.image}
                                    style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 50,
                                    }} />
                                <Text>{item.text}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>Top rated</Text>
                        <View style={{ backgroundColor: 'rgb(225, 255, 234)', width: 40, height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ color: 'green' }}>All</Text>
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
                        {foodList.map(foodItem => (
                            <View key={foodItem.id} style={{ marginRight: 10, backgroundColor: '#fff', borderRadius: 10, padding: 10, margin: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 1, }}>
                                <Image source={foodItem.image} style={{ width: 250, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}></Image>
                                <View style={{ position: 'absolute', marginTop: 40, marginLeft: 50, backgroundColor: 'white', width: 100, justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                        <FontAwesome name='dollar' size={20} color='rgb(84, 84, 84)' />
                                        <Text style={{ marginLeft: 5, color: 'rgb(84, 84, 84)', fontWeight: 100 }}>{foodItem.price}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                        <MaterialCommunityIcons name='clock-outline' size={20} color='rgb(84, 84, 84)' />
                                        <Text style={{ marginLeft: 5, color: 'rgb(84, 84, 84)', fontWeight: 100 }}>{foodItem.deliveryTime}</Text>
                                    </View>
                                </View>

                                <View style={{ padding: 10, height: 60 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'light', color: 'rgb(84, 84, 84)' }}>{foodItem.title}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <MaterialCommunityIcons name='star' size={20} color='orange' />
                                            <Text style={{ marginLeft: 5, color: 'rgb(84, 84, 84)' }}>{foodItem.rating}</Text>
                                        </View>
                                    </View>
                                    <Text style={{ marginTop: 5, color: 'rgb(84, 84, 84)' }}>{foodItem.description}</Text>


                                </View>
                            </View>

                        ))}


                    </ScrollView>

                </View>
                
            </ScrollView>


        </SafeAreaView>
    );
}
