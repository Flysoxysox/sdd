import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import BarcodeScreen from "./BarcodeScreen";
import XLibrary from "./XLibrary";
import RLibrary from "./RLibrary";
import Home from "./Home";
import Monday from "./Monday";
import PrMan from "./PrMan";
import CalcStats from "./CalcStats";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";


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

// Home function that contains all the pages

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
          component={Monday}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
            
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
          name="Exercise Library"
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
          name="PR Manager"
          component={PrMan}
          options={{
            headerTintColor: "rgb(130, 90, 229)",
            drawerActiveBackgroundColor: 'transparent',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 1,
              borderBottomWidth: 0,
              shadowColor: "#0E1013",
            },
            drawerLabel: () => null 
          }}
        />
         <Drawer.Screen
          name=" Your Workouts "
          component={Tuesday}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
            drawerActiveBackgroundColor: 'transparent',
            drawerLabel: () => null 
          }}
        />
         <Drawer.Screen
          name="  Your Workouts  "
          component={Wednesday}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
            drawerActiveBackgroundColor: 'transparent',
            drawerLabel: () => null 
          }}
        />
        <Drawer.Screen
          name="   Your Workouts   "
          component={Thursday}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
            drawerActiveBackgroundColor: 'transparent',
            drawerLabel: () => null 
          }}
        />
        <Drawer.Screen
          name="    Your Workouts    "
          component={Friday}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
            drawerActiveBackgroundColor: 'transparent',
            drawerLabel: () => null 
          }}
        />
        <Drawer.Screen
          name="     Your Workouts     "
          component={Saturday}
          options={{
            headerStyle: {
              backgroundColor: "rgb(130, 90, 229)",
            },
            headerTintColor: "#252426",
            drawerActiveBackgroundColor: 'transparent',
            drawerLabel: () => null 
          }}
        />

      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
