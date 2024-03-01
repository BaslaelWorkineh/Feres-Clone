import * as React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const vh = Dimensions.get('screen').height;

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SimpleLineIcons name='arrow-left' size={20} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>
    </SafeAreaView>
  );
};

const Profile = () => {
  const [name, setName] = React.useState('John Doe');
  const [email, setEmail] = React.useState('johndoe@example.com');
  const [phone, setPhone] = React.useState('+1234567890');
  const [language, setLanguage] = React.useState('English');

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader />

      {/* Profile Information */}
      <View style={styles.profileContainer}>
        {/* Profile Picture */}
        <View style={styles.profileImage} />
        {/* Editable Profile Details */}
        <View style={styles.profileDetails}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone:</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Language:</Text>
            <TextInput
              style={styles.input}
              value={language}
              onChangeText={setLanguage}
              placeholder="Enter your language"
            />
          </View>
        </View>
      </View>

      {/* Additional Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Privacy Policy</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Terms & Conditions</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Rate the App</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Delete My Account</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    marginBottom: 20,
  },
  profileDetails: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor:'rgb(162, 162, 162)'
  },
  label: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  optionsContainer: {
    marginTop: 150,
    paddingHorizontal: 20,
  },
  optionButton: {
    paddingVertical: 15,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default Profile;
