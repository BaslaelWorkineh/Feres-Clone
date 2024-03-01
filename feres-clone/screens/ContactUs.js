import * as React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import ServicesBottomNavBar from '../components/ServicesBottomNavBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import User from "../assets/user.jpg";

const vh = Dimensions.get('screen').height;
const vw = Dimensions.get('screen').width;

const ContactUsHeader = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Services')}>
        <SimpleLineIcons name='arrow-left' size={15} style={{ marginTop: 20, marginRight: 30 }} />
      </TouchableOpacity>
      <Text style={styles.title}>Contact Us</Text>
    </SafeAreaView>
  );
};

const ContactUs = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedTitle, setSelectedTitle] = React.useState('Choose Title');

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ContactUsHeader />

      <View style={styles.profileContainer}>
       
        <Image  style={styles.profileImage} source={User}/>
        
        <Text style={styles.profileName}>Baslael</Text>
      </View>

      <TouchableOpacity style={styles.dropdownContainer} onPress={() => setModalVisible(true)}>
        <Text style={{ fontSize: 12 }}>title</Text>
        <Text style={{ width: vw - 50, borderBottomWidth: 1, paddingBottom: 20, fontSize: 20 }}>{selectedTitle}</Text>
      </TouchableOpacity>

      <View style={styles.feedbackContainer}>
        <Text>Feedback</Text>
        <TextInput
          style={styles.feedbackInput}
          multiline
          placeholder="Please write your feedback"
        />
        <TouchableOpacity style={styles.submitButton}><Text style={styles.submitButtonText}>Submit</Text></TouchableOpacity>
      </View>

      <View style={styles.getInTouchContainer}>
        <Text style={styles.getInTouchText}>Get in touch</Text>
        <View style={styles.iconContainer}>

          <FontAwesome name="phone" size={30} color="green" />
          <FontAwesome name="whatsapp" size={30} color="green" />
          <FontAwesome name="facebook" size={30} color="green" />
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: vw - 100, height: 50, backgroundColor: 'rgb(0, 166, 30)', borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
              <Text style={{ fontSize: 23, color: 'white' }}>Choose Title</Text>
            </View>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalItem} onPress={() => handleTitleSelect('Driver attitude')}><Text style={{ fontSize: 16, color: 'rgb(98, 98, 98)' }}>Driver attitude</Text></TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => handleTitleSelect('Lost item')}><Text style={{ fontSize: 16, color: 'rgb(98, 98, 98)' }}>Lost item</Text></TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => handleTitleSelect('About Feres')}><Text style={{ fontSize: 16, color: 'rgb(98, 98, 98)' }}>About Feres</Text></TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => handleTitleSelect('Feedback')}><Text style={{ fontSize: 16, color: 'rgb(98, 98, 98)' }}>Feedback</Text></TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => handleTitleSelect('Other')}><Text style={{ fontSize: 16, color: 'rgb(98, 98, 98)' }}>Other</Text></TouchableOpacity>
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
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    padding: 20,
    marginVertical: 20,
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: 'ligh',
  },
  feedbackContainer: {
    paddingHorizontal: 20,
  },
  feedbackInput: {
    height: 150,
    borderBottomWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingBottom: 100
  },
  submitButton: {
    backgroundColor: 'rgb(0, 166, 30)',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  getInTouchContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  getInTouchText: {
    fontSize: 18,
    fontWeight: 'light',
  },
  iconContainer: {
    width: vw - 100,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly'
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    width: vw - 100
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ContactUs;
