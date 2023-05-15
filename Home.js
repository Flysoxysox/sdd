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
  TouchableOpacity,
} from "react-native";
import { TextSize, VictoryPie, standalone, VictoryLabel } from "victory-native";
import Svg, { Path, Circle } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const store = 0;

const defaultGraphicData = [
  { x: " ", y: 0 },
  { x: " ", y: 0 },
  { x: " ", y: 100 },
];

function Home({ navigation }) {
  const { colors } = useTheme();
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
    <View style={[styles.main1]}>
      <View style={[styles.main]}>
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
            <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={Increment}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
            <View style={styles.fillbox}></View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            </View>
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
      <TouchableOpacity  activeOpacity={0.6}>
      <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
        <Text style={[styles.excerciseName, { color: colors.text }]}>
          pp
        </Text>
        <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
          balls
        </Text>
      </View>
    </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252426",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 18,
    height: "98%",
    width: "100%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  main1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(130, 90, 229)",
  },

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
    backgroundColor: "#303030",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  fillbox: {
    
   width: '5%',
   
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
   width: '47.5%',
   backgroundColor: "rgb(130, 90, 229)",
   
  },
  submitButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "rgb(130, 90, 229)",
  },
  buttonClose: {
    backgroundColor: "rgb(130, 90, 229)",
  },
  textStyle: {
    color: "#252426",
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
    color: "#F5F5F7",
  },
  Header2: {
    position: "absolute",
    fontSize: 20,
    top: 450,
    color: "#F5F5F7",
  },
  input: {
    height: 40,
    width: '100%',
   borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: "#252426",

  },
  excerciseItem: {
    borderRadius: 10,
    margin: 10,
    padding: 20,
    width: '80%',
  },
  excerciseName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  excerciseMuscle: {
    fontSize: 16,
  },
});

export default Home;
