import friedChicken from '../assets/friedChicken.png'
import kitfo from '../assets/kitfo.jpg'
import shawarma from '../assets/shawarma.png'
import { View, Image, Text, Dimensions} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const stores = [
    { id: 1, image: kitfo, title: 'KalCosmetics', travelTime: '33min', travelDistance: '4.38km', rating: 'Not yet rated', price: 'ETB 104', description: 'Skin Care, Fragrance,Make-Up' },
    { id: 2, image: shawarma, title: 'Tasty Bites', travelTime: '20min', travelDistance: '2.5km', rating: '4.5', price: 'ETB 80', description: 'Shawarma, Burgers, Wraps' },
    { id: 3, image: friedChicken, title: 'FingerLickin', travelTime: '25min', travelDistance: '3.2km', rating: '4.2', price: 'ETB 120', description: 'Fried Chicken, Sandwiches, Sides' },
    { id: 4, image: kitfo, title: 'KalCosmetics', travelTime: '33min', travelDistance: '4.38km', rating: 'Not yet rated', price: 'ETB 104', description: 'Skin Care, Fragrance,Make-Up' },
    { id: 5, image: shawarma, title: 'Tasty Bites', travelTime: '20min', travelDistance: '2.5km', rating: '4.5', price: 'ETB 80', description: 'Shawarma, Burgers, Wraps' },
    { id: 6, image: friedChicken, title: 'FingerLickin', travelTime: '25min', travelDistance: '3.2km', rating: '4.2', price: 'ETB 120', description: 'Fried Chicken, Sandwiches, Sides' },
    { id: 7, image: kitfo, title: 'KalCosmetics', travelTime: '33min', travelDistance: '4.38km', rating: 'Not yet rated', price: 'ETB 104', description: 'Skin Care, Fragrance,Make-Up' },
    { id: 8, image: shawarma, title: 'Tasty Bites', travelTime: '20min', travelDistance: '2.5km', rating: '4.5', price: 'ETB 80', description: 'Shawarma, Burgers, Wraps' },
    { id: 9, image: friedChicken, title: 'FingerLickin', travelTime: '25min', travelDistance: '3.2km', rating: '4.2', price: 'ETB 120', description: 'Fried Chicken, Sandwiches, Sides' },

]

const vw = Dimensions.get('window').width;

export default function StoreList() {
    return (
        <View>
            <Text style={{}}>More Stores</Text>
            {stores.map((storeList) => (
                <View key={storeList.id} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'gray', paddingBottom: 10, paddingTop: 5 }}>
                    <Image style={{ width: 100, marginRight: 10, height: 100, borderRadius: 10, }} source={storeList.image} />
                    <View style={{ justifyContent: 'space-evenly', }}>
                        <Text style={{ fontSize: 16 }}>{storeList.title}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: vw - 100, }}>
                            <Text style={{ color: 'rgb(101, 101, 101)', fontSize: 11, marginRight: 20 }}>{storeList.travelTime}</Text>
                            <Text style={{ color: 'rgb(101, 101, 101)', fontSize: 11, marginRight: 20 }}>{storeList.travelDistance}</Text>
                            <Text style={{ color: 'rgb(101, 101, 101)', fontSize: 11, marginRight: 20 }}>{storeList.rating}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-start', width: vw - 100 }}>
                            <MaterialCommunityIcons name='bike' size={20} style={{ marginRight: 20 }} />
                            <Text style={{ color: 'rgb(101, 101, 101)', fontSize: 10, marginRight: 20 }}>{storeList.price}</Text>
                            <Text style={{ color: 'rgb(101, 101, 101)', fontSize: 10, marginRight: 20 }}>{storeList.description}</Text>
                        </View>

                    </View>
                </View>
            ))}


        </View>
    )
}
