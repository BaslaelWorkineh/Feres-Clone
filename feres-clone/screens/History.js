import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import ServicesBottomNavBar from '../components/ServicesBottomNavBar';
const vh = Dimensions.get('screen').height;

export default function History() {
  return (
    <View >
      <View style={{ height: vh - 120 }}>
        <Text >History</Text>
      </View>

      <View style={{ height: 70, backgroundColor: 'white' }}>
        <ServicesBottomNavBar />
      </View>

    </View>
  )
}