import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import React from 'react'
import friedChicken from '../assets/friedChicken.png'
import kitfo from '../assets/kitfo.jpg'
import shawarma from '../assets/shawarma.png'


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

export default function TopRatedFoodList() {
  return (
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
  )
}