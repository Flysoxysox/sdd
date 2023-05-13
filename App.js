import "react-native-gesture-handler";
import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Animated, { interpolate } from "react-native-reanimated";

import HomeScreen from "./HomePage";
import BarcodeScreen from "./BarcodeScreen";
import XLibrary from "./XLibrary";
import RLibrary from "./RLibrary";

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(130, 90, 229)",
    background: "#F5F5F7",
    card: "#FFFFFF",
    text: "#2C2C2E",
    border: "#BDBDC1",
    notification: "#F44336",
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: "slide",
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Barcode Scanner" component={BarcodeScreen} />
        <Drawer.Screen name="Excercise Library" component={XLibrary} />
        <Drawer.Screen name="Recipe Library" component={RLibrary} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
