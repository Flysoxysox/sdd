import React from "react";
import { useState, useEffect } from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogBox } from "react-native";

function NotificationsScreen({ navigation }) {
  
  const [storedData, setStoredData] = useState(0); // Our number that we've saved to AsyncStorage!
  
  const GetData = () => {
    // Dispatching a promise to get the data with the key "stuff"
    AsyncStorage.getItem("stuff")
      .then((data) => {
        // Our data has arrived! We'll store it (and tell the runtime that it's a number) and then
        // set the loading status to 2, signalling that our data is here.
        setStoredData(JSON.parse(data));
       
      })
      .catch((err) => {
        // Uh-oh, there was an error. *insert Steven He faliure gif here* We'll just log it.
        console.error(err);
      });
  };

  const ReloadData = () => {
   
    GetData();
  };

  const SetTo1 = async () => {
    await AsyncStorage.setItem("stuff", JSON.stringify(1));
    ReloadData();
  };

  const Increment = async () => {
    await AsyncStorage.setItem("stuff", JSON.stringify(storedData + 1));
    ReloadData();
  };
 
  useEffect(() => {
    GetData();
  }, []);

  return (
    <View style={styles.maincontainer}>
      <Text>The stored is: {storedData}</Text>
      
      
      <Pressable style={[styles.button, styles.buttonClose]} onPress={Increment}>
        <Text>submit</Text>
      </Pressable>
      

    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    marginTop: 40,
    marginLeft: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    backgroundColor: "red",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    color: "#FFFF",
    fontWeight: "bold",
  },
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
export default NotificationsScreen;
