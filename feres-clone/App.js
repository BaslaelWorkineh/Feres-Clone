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
import User from "./assets/user.jpg";
import ContactUs from "./screens/ContactUs";
import EmergencyContacts from "./screens/EmergencyContacts";
import FeresMiles from "./screens/FeresMiles";
import History from "./screens/History";
import Home from "./screens/Home";
import Notification from "./screens/Notification";
import PreOrders from "./screens/PreOrders";
import Referral from "./screens/Referral";
import Services from "./screens/Services";
import Profile from "./screens/Profile";
const Drawer = createDrawerNavigator();

export default function APP() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={
          (props) => {
            return (
              <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    backgroundColor: 'rgb(0, 166, 30)',
                    position: 'absolute'
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 65
                    }} />
                  <Text style={{ color: 'white', fontSize: 20, marginVertical: 6 }} >Baslael Workineh</Text>

                </View>
                <View style={{ paddingTop: 250 }}>
                  <DrawerItemList {...props} />
                </View>

              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          headerShown: false,
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
          name="PreOrders"
          options={{
            drawerLabel: "Pre-Orders",
            title: "PreOrders",
            drawerIcon: () => (
              <MaterialCommunityIcons name="newspaper" size={20} color="#808080" />
            ),
            drawerLabelStyle: {
              fontSize: 17,
              color: 'black'
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
              <MaterialCommunityIcons name="horse" size={20} color="#808080" />
            ),
            drawerLabelStyle: {
              fontSize: 17,
              color: 'black'
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
              <FontAwesome name="history" size={20} color="#808080" />
            ),
            drawerLabelStyle: {
              fontSize: 17,
              color: 'black'
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
              <MaterialCommunityIcons name="ticket" size={20} color="#808080" />
            ),
            drawerLabelStyle: {
              fontSize: 17,
              color: 'black'
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
            drawerLabelStyle: {
              fontSize: 17,
              color: 'black'
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
              <MaterialCommunityIcons name="contacts" size={20} color="#808080" />
            ),
            drawerLabelStyle: {
              fontSize: 17,
              color: 'black'
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
            drawerLabelStyle: {
              fontSize: 17,
              color: 'black'
            }
          }}
          component={ContactUs}
        />
        <Drawer.Screen
          name="Services"
          component={Services}
          options={{
            drawerItemStyle: { height: 0 }
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerItemStyle: { height: 0 }
          }}

        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerItemStyle: { height: 0 }
          }}

        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
