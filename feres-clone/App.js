import "react-native-gesture-handler"
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/icon.png";
import ContactUs from "./screens/ContactUs";
import EmergencyContacts from "./screens/EmergencyContacts";
import FeresMiles from "./screens/FeresMiles";
import History from "./screens/History";
import Home from "./screens/Home";
import Notification from "./screens/Notification";
import PreOrders from "./screens/PreOrders";
import Referral from "./screens/Referral";
import DrawerButton from "./components/DrawerButton";
const Drawer = createDrawerNavigator();

export default function APP() {

  return (
    <NavigationContainer>
      <DrawerButton/>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView  style={{ flex: 1, backgroundColor: 'white' }}>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    backgroundColor: 'white',
                  }}
                >
                  <Image
                  source={User}
                  style={{
                    height:100,
                    width:100,
                    borderRadius:65
                  }}/>
                  <Text style={{color:'black', fontSize:20, marginVertical:6}} >Baslael Workineh</Text>

                </View>
                <DrawerItemList {...props} />
                <DrawerButton {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          headerShown:false,
          drawerStyle: {
            backgroundColor: '#fff',
            width: 250,
          },
          headerStyle: {
            backgroundColor: 'lightgreen'
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            
            
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "#111",
          },
          
        }}
      >
        
        <Drawer.Screen
        
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={Home}
        />
        <Drawer.Screen
          name="PreOrders"
          options={{
            drawerLabel: "Pre-Orders",
            title: "PreOrders",
            drawerIcon: () => (
              <SimpleLineIcons name="user" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={PreOrders}
        />
        <Drawer.Screen
          name="FeresMiles"
          options={{
            drawerLabel: "Feres Miles",
            title: "FeresMiles",
            drawerIcon: () => (
              <SimpleLineIcons name="user" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={FeresMiles}
        />
        <Drawer.Screen
          name="History"
          options={{
            drawerLabel: "History",
            title: "History",
            drawerIcon: () => (
              <SimpleLineIcons name="user" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={History}
        />
        <Drawer.Screen
          name="Referral"
          options={{
            drawerLabel: "Referral",
            title: "Referral",
            drawerIcon: () => (
              <SimpleLineIcons name="user" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={Referral}
        />
        <Drawer.Screen
          name="Notification"
          options={{
            drawerLabel: "Notification",
            title: "Notification",
            drawerIcon: () => (
              <SimpleLineIcons name="bell" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={Notification}
        />
        <Drawer.Screen
          name="EmergencyContacts"
          options={{
            drawerLabel: ({ focused, color }) => (
              <Text style={{ fontSize: 17, color: 'black' }}>
                {focused ? "Emergency" : "Emergency"} {"\n"} {focused ? "Contacts" : "Contacts"}
              </Text>
            ),
            title: "EmergencyContacts",
            drawerIcon: () => (
              <SimpleLineIcons name="user" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={EmergencyContacts}
        />
        <Drawer.Screen
          name="ContactUs"
          options={{
            drawerLabel: "ContactUs",
            title: "ContactUs",
            drawerIcon: () => (
              <SimpleLineIcons name="user" size={20} color="#808080" />
            ),
            drawerLabelStyle:{
              fontSize:17,
              color:'black'
            }
          }}
          component={ContactUs}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
