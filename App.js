import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Animated from "react-native-reanimated";

import BarcodeScreen from "./BarcodeScreen";
import XLibrary from "./XLibrary";
import RLibrary from "./RLibrary";
import IntakeCalculator from "./CalcStats";
import Home from "./Home";
import Workout from "./Workout";
import PrMan from "./PrMan";
import CalcStats from "./CalcStats";


const MyTheme = {
  dark: true,
  colors: {
    primary: "rgb(130, 90, 229)",
    background: "#252426",
    card: "#303030",
    text: "#F5F5F7",
    border: "rgb(130, 90, 229)",
    notification: "#F44336",
  },
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: "slide",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
          }}
        />
         <Drawer.Screen
          name="Calculators & Statistics"
          component={CalcStats}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
          }}
        />
        <Drawer.Screen
          name="Your Workouts"
          component={Workout}
          options={{
            headerTintColor: "rgb(130, 90, 229)",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 1,
              borderBottomWidth: 0,
              shadowColor: "#0E1013",
            },
            
          }}
        />
       
        <Drawer.Screen
          name="Barcode Scanner"
          component={BarcodeScreen}
          options={{
            headerTintColor: "rgb(130, 90, 229)",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 1,
              borderBottomWidth: 0,
              shadowColor: "#0E1013",
            },
          }}
        />
        <Drawer.Screen
          name="Excercise Library"
          component={XLibrary}
          options={{
            headerTintColor: "rgb(130, 90, 229)",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 1,
              borderBottomWidth: 0,
              shadowColor: "#0E1013",
            },
          }}
        />
        <Drawer.Screen
          name="Recipe Library"
          component={RLibrary}
          options={{
            headerTintColor: "rgb(130, 90, 229)",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 1,
              borderBottomWidth: 0,
              shadowColor: "#0E1013",
            },
          }}
        />
        <Drawer.Screen
          name="Pr Manager"
          component={PrMan}
          options={{
            headerTintColor: "rgb(130, 90, 229)",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 1,
              borderBottomWidth: 0,
              shadowColor: "#0E1013",
            },
            drawerLabel: () => null 
          }}
        />

      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
