import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { TextSize, VictoryPie, standalone, VictoryLabel } from "victory-native";
import Svg, { Path, Circle } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const store = 0;

const defaultGraphicData = [
  { x: " ", y: 0 },
  { x: " ", y: 0 },
  { x: " ", y: 100 },
];

function HomeScreen({ navigation }) {
  var alertcol = "#4e1bb4";
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  var caltotal = 3000;
  var N1 = Number(text);
  var graphicColor = [alertcol, "#8250e5", "#8250e5"]; 
  const [storedData, setStoredData] = useState(0);

  const GetData = () => {
    AsyncStorage.getItem("stuff")
      .then((data) => {
        setStoredData(JSON.parse(data));
      })
      .catch((err) => {
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
    await AsyncStorage.setItem("stuff", JSON.stringify(storedData + N1));

    ReloadData();

    setGraphicData(wantedGraphicData);
    
   
     
    
  };
  const wantedGraphicData = [
    { x: " ", y: ((storedData + N1) / caltotal) * 100 },
    { x: " ", y: 100 - ((storedData + N1) / caltotal) * 100 },
  ];

  useEffect(() => {
    setGraphicData(wantedGraphicData);
    
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              onChangeText={(text) => setText(text)}
              value={text}
              keyboardType="numeric"
            />
            <Button title="submit" onPress={Increment} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.Header1}>
        {storedData}/{caltotal}
      </Text>
      <Text style={styles.Header2}>Press to add</Text>

      <Svg width={500} height={500}>
        <Circle
          cx={250}
          cy={250}
          r={150}
          onPress={() => setModalVisible(true)}
        />

        <VictoryPie
          standalone={false}
          width={500}
          height={500}
          innerRadius={140}
          colorScale={graphicColor}
          data={graphicData}
        />
      </Svg>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  Header1: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 45,
    marginBottom: 10,
    top: 390,
  },
  Header2: {
    position: "absolute",
    fontSize: 20,
    top: 450,
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
