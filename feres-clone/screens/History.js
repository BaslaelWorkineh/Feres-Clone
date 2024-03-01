import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HistoryHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Services')}>
        <SimpleLineIcons name='arrow-left' size={15} style={{ marginTop: 20, marginRight: 30 }} />
      </TouchableOpacity>
      <Text style={styles.title}>History</Text>
    </View>
  );
};

const History = () => {
  const [selectedItem, setSelectedItem] = React.useState('No item to be displayed');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HistoryHeader />
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'rgb(0, 166, 30)', borderWidth: 0 }]} onPress={() => handleItemClick('Car')}>
              <Text style={styles.buttonText}>Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleItemClick('Food')}>
              <Text style={styles.buttonText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleItemClick('Mart')}>
              <Text style={styles.buttonText}>Mart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleItemClick('Delivery')}>
              <Text style={styles.buttonText}>Delivery</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.noItemContainer}>
        <Text style={styles.noItemText}>{selectedItem}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 0,
    height: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 10, // Adjusted paddingHorizontal
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 15, // Adjusted marginHorizontal
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 45,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  noItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemText: {
    fontSize: 24,
    color: 'rgb(101, 101, 101)',
  },
});

export default History;
