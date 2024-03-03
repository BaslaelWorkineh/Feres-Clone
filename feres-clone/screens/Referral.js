import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet,Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;
export default function Referral() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        {/* Back arrow */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.headerTitle}>Referral</Text>
      </SafeAreaView>

    <View style={{justifyContent:'space-between'}}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/referral.png')} style={styles.image} />
      </View>

      {/* Pending Referrals */}
      <View style={styles.referralContainer}>
        <View style={styles.referralTextContainer}>
          <Text style={styles.referralText}>Pending referrals</Text>
          <Text style={styles.referralCount}>0</Text>
        </View>
        <Text style={styles.shareCodeText}>Share your invite code</Text>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.phoneNumber}>985316396</Text>
          <MaterialIcons name="share" size={24} color="gray" style={{ marginLeft: 10 }} />
        </View>
      </View>

      {/* Invite Friends Button */}
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteButtonText}>Invite Friends</Text>
      </TouchableOpacity>
    </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
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
    marginRight: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: vh-vw-300,
  },
  image: {
    width: vw,
    height: vw,
    

  },
  referralContainer: {
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  referralTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    paddingBottom:20,
    paddingTop:10,
    borderBottomColor:'lightgray'
  },
  referralText: {
    fontSize: 18,
  },
  referralCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shareCodeText: {
    borderBottomWidth:1,
    paddingBottom:20,
    paddingTop:10,
    borderBottomColor:'lightgray',
    fontSize: 18,
    marginTop: 10,
  },
  phoneNumberContainer: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop: 10,
    
  },
  phoneNumber: {
    fontSize: 24,
    color:"rgb(124, 124, 124)"
  },
  inviteButton: {
    backgroundColor: 'rgb(0, 166, 30)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 50,
  },
  inviteButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
