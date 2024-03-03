import { View, Text,Dimensions,TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import vitz from '../assets/vitz.png'
import lada from '../assets/lada.png'
import economy from '../assets/economy.png'
import business from '../assets/business.png'
import van from '../assets/van.png'
import tw from 'tailwind-react-native-classnames'
import appServices from '../assets/apps.jpg';
import { SimpleLineIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Home } from '../screens/Home';
const HomeBottomLocation = ({handlePresentModal}) => {
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
    <View>
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
                                <Image source={vitz} size={50}  style={[tw`mr-5`,{width:100, height:100}]}/>
                                <Text style={{ color: 'rgba(0, 185, 74, 0.97)', fontSize: 24, fontWeight: 500, paddingTop: 30 }}>Where to?</Text>
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
                        <TouchableOpacity title="Present Modal" onPress={handlePresentModal}>
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
  )
}

export default HomeBottomLocation