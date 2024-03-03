import React from 'react';
import { Dimensions, View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import feresairtime from '../assets/feresairtime.png'
import ferescashout from '../assets/ferescashout.png'
import feresdonate from '../assets/feresdonate.png'
import feresexchange from '../assets/feresexchange.png'
import feresmiles from '../assets/feresmiles.png'
import ferestime from '../assets/ferestime.png'
// Sample JSON data
const data = [
  { id: 1, icon: feresairtime, title: 'CONVERT TO', description: 'AIRTIME' },
  { id: 2, icon: ferestime, title: 'FERES MILES', description: 'HISTORY' },
  { id: 3, icon: ferescashout, title: 'CASH OUT', description: 'FERES MILES' },
  { id: 4, icon: feresexchange, title: 'TRANSFER', description: 'FERES MILES' },
  { id: 5, icon: feresdonate, title: 'DONATE', description: 'FERES MILES' },
  { id: 6, icon: feresmiles, title: 'EXCHANGE FOR', description: 'FREE TRIPS' },
];

const FeresMiles = () => {
  const navigation = useNavigation();
  const vw = Dimensions.get('window').width;
  const vh = Dimensions.get('window').height;
  // Render function for each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        {/* Back arrow */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <SimpleLineIcons name='arrow-left' size={15} style={{ marginTop: 20, marginLeft: 20 }} onPress={() => navigation.navigate('Home')} />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.headerTitle}>Feres Miles</Text>
      </SafeAreaView>

      <View style={{ padding: 10, marginTop: 20 }}>
        <View style={{ paddingTop: 20, height: 120, width: vw - 20, backgroundColor: 'white', flexDirection: 'row', borderRadius: 10, justifyContent: 'space-evenly', elevation: 3 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'rgb(51, 51, 51)', marginBottom: 10 }}>BALANCE</Text>
            <Text style={{ fontSize: 22, color: 'rgb(51, 51, 51)' }}>0</Text>
          </View>
          <View>

          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'rgb(51, 51, 51)', marginBottom: 10 }}>PENDING MILES</Text>
            <Text style={{ fontSize: 22, color: 'rgb(51, 51, 51)' }}>50</Text>
          </View>
        </View>
      </View>

      {/* FlatList for rendering dynamic grid */}
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: 'white',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexGrow: 1
  },
  card: {
    flexBasis: '48%', // Adjust width to fit 2 columns
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
    height: 150,
    marginRight: 10,
    elevation: 5

  },
  title: {
    fontSize: 16,
    fontWeight: 'light',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color: 'rgb(0, 166, 30)'
  },
  icon: {
    width: 100,
    height: 70
  }
});

export default FeresMiles;