import React from 'react';
import { View, Text, SafeAreaView, Dimensions, Image,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import profilePic from '../assets/apps.jpg';
import car from '../assets/car.png';
import delivery from '../assets/delivery.png'
import cart from '../assets/cart.png'
import food from '../assets/food.png'


import { ScrollView } from 'react-native-gesture-handler';
import ImageSlider from '../components/ImageSlider';
import StoreList from '../components/StoreList';
import TopRatedFoodList from '../components/TopRatedFoodList';
import ServicesBottomNavBar from '../components/ServicesBottomNavBar';
import { useNavigation } from '@react-navigation/native';



export default function Services() {
    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

    const data = [
        { id: 1, text: 'Car', image: car },
        { id: 2, text: 'Food', image: food },
        { id: 3, text: 'Mart', image: cart },
        { id: 4, text: 'Delivery', image: delivery },
    ];


    const navigation = useNavigation();
    const handleNavigateHome = () => {
        navigation.navigate('Home'); // Navigate to the 'Home' screen
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 40 }}>
            <TouchableOpacity onPress={handleNavigateHome}>
                <SimpleLineIcons name='arrow-left' size={15} style={{ marginTop: 20, marginRight: 30 }} />
            </TouchableOpacity>
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
                    <TopRatedFoodList />

                </View>
                <View>
                    <Text style={{ padding: 10 }}>Commercials</Text>
                    <View style={{ padding: 10 }}>
                        <View>

                            <ImageSlider />
                        </View>

                        <StoreList />
                    </View>
                </View>
            </ScrollView>
            <View style={{height:70,backgroundColor:'white'}}>
                 <ServicesBottomNavBar/>
            </View>

           


        </SafeAreaView>
    );
}
