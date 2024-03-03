import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons,SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PreOrders = ({ hasItems }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, backgroundColor: 'white', elevation: 2 }}>
        {/* Back arrow */}
        <TouchableOpacity onPress={() => { /* Handle back navigation */ }}>
          <SimpleLineIcons name='arrow-left' size={15} style={{ marginTop: 20, marginLeft: 20 }} onPress={() => navigation.navigate('Home')} />
        </TouchableOpacity>
        {/* Title */}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Pre-Orders</Text>
      </SafeAreaView>

      {/* Button with location icon */}
      <View style={{ alignItems: 'flex-start', margin: 10, }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(31, 141, 51)', padding: 10, width: 200, height: 50, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Upcoming Trips</Text>
        </TouchableOpacity>
      </View>

      {/* Message */}
      {!hasItems && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 26 }}>No item to be displayed</Text>
        </View>
      )}
    </View>
  );
};

export default PreOrders;
