import * as React from 'react';
import { Image, View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import User from "../assets/user.jpg";

const vh = Dimensions.get('screen').height;
const vw = Dimensions.get('screen').width;

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Services')}>
        <SimpleLineIcons name='arrow-left' size={15} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>
    </SafeAreaView>
  );
};

const Profile = () => {
  const [firstName, setFirstName] = React.useState('Baslael');
  const [lastName, setLastName] = React.useState('Workineh');
  const [email, setEmail] = React.useState('baslaworku@example.com');
  const [phone, setPhone] = React.useState('+251985316396');
  const [language, setLanguage] = React.useState('English');
  const [modalVisible, setModalVisible] = React.useState(false);
  const languages = ['Amharic', 'English'];

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectLanguage(item)}>
      <Text style={styles.languageItem}>{item}</Text>
    </TouchableOpacity>
  );

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader />

      {/* Profile Information */}
      <View style={styles.profileContainer}>
        {/* Profile Picture */}
        <Image  style={styles.profileImage} source={User}/>
        {/* Editable Profile Details */}
        <View style={styles.profileDetails}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First name"
            />
            <TouchableOpacity onPress={() => console.log('Edit first name')}>
              <SimpleLineIcons name="pencil" size={15} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last name"
            />
            <TouchableOpacity onPress={() => console.log('Edit last name')}>
              <SimpleLineIcons name="pencil" size={15} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
            />
            <TouchableOpacity onPress={() => console.log('Edit email')}>
              <SimpleLineIcons name="pencil" size={15} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
            />
            <TouchableOpacity onPress={() => console.log('Edit phone')}>
              <SimpleLineIcons name="pencil" size={15} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.language} onPress={() => setModalVisible(true)}>
            <Text style={{fontSize:18, color:'rgb(91, 91, 91)'}}>Language</Text>
            <Text style={{fontSize:16}}>{language}</Text>
           
          </TouchableOpacity>
        </View>
      </View>

      {/* Additional Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Privacy Policy</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Terms & Conditions</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Rate the App</Text></TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Delete My Account</Text></TouchableOpacity>
      </View>

      {/* Language Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'rgb(0, 166, 30)', width:vw-100, height:40, borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <Text style={{color:'white', fontSize:18}}>Language</Text>
            </View>
            <View style={styles.modalContent}>
              <FlatList
                data={languages}
                renderItem={renderLanguageItem}
                keyExtractor={(item) => item}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
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
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgb(162, 162, 162)',
    paddingVertical: 10,
    
  },
  language:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: 'transparent',
    padding: 0,
    color:'rgb(91, 91, 91)',
    fontSize:17
  },
  editIcon: {
    marginLeft: 10,
  },
  optionsContainer: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  optionButton: {
    paddingVertical: 15,
    borderBottomColor: '#ccc',
  },
  optionText: {
    color:'rgb(91, 91, 91)',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    width:vw-100,
    maxHeight: 200,
  },
  languageItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Profile;
