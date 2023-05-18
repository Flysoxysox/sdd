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
import { useTheme, useFocusEffect } from "@react-navigation/native";

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
  const [caloricIntake, setCaloricIntake] = useState(1000);

  const GetData = () => {
    AsyncStorage.getItem("stuff")
      .then((data) => {
        setStoredData(JSON.parse(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const loadCal = async () => {
    const caloricIntake = await AsyncStorage.getItem("cal");
    if (caloricIntake) {
      setCaloricIntake(caloricIntake);
    }
  };
  const ReloadData = () => {
    GetData();
  };
  const backtozero = async () => {
    await AsyncStorage.setItem("stuff", JSON.stringify(storedData - storedData));
  };

  
  const Increment = async () => {
    await AsyncStorage.setItem("stuff", JSON.stringify(storedData + N1));
    ReloadData();
    setGraphicData(wantedGraphicData);
    setModalVisible(!modalVisible)
    console.log(storedData + N1)
  };
  const wantedGraphicData = [
    { x: " ", y: ((storedData + N1) / Math.ceil(caloricIntake)) * 100 },
    { x: " ", y: 100 - ((storedData + N1) / Math.ceil(caloricIntake)) * 100 },
  ];

  useEffect(() => {
    setGraphicData(wantedGraphicData);
    loadCal();
    backtozero();
  }, []);

  // Reload data on screen focus
  useFocusEffect(
    React.useCallback(() => {
      ReloadData();
    }, [])
  );
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
                placeholder="Enter Caloric Amount"
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
        <View style={styles.pieview}>
          <Text style={styles.Header1}>
            {storedData}/{Math.ceil(caloricIntake)}
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
        <View style={styles.buttonview}>
          <View style={styles.buttonblock}>
            <TouchableOpacity style={styles.dabutton} activeOpacity={0.7} onPress={() => navigation.navigate('Your Workouts')}>
              <Text style={styles.buttonhead1}>Workout 🏋️</Text>
              <Text style={styles.buttonhead2}>Access today's assigned workout plan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonblock}>
            <TouchableOpacity style={styles.dabutton} activeOpacity={0.7}  onPress={() => navigation.navigate('Barcode Scanner')}>
              <Text style={styles.buttonhead1}>Food 🍔</Text>
              <Text style={styles.buttonhead2}>Scan a new food item</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonblock}>
            <TouchableOpacity style={styles.dabutton} activeOpacity={0.7} onPress={() => navigation.navigate('Calculators & Statistics')}>
              <Text style={styles.buttonhead1}>Track 📈</Text>
              <Text style={styles.buttonhead2}>Record and calculate your growth</Text>
            </TouchableOpacity>
          </View>

        </View>
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
  pieview: {
    justifyContent: "center",
    alignItems: "center",
    height: "55%",

    width: "95%",
    position: "relative",
  },
  Header1: {
    position: "absolute",

    fontWeight: "bold",
    fontSize: 45,
    color: "#F5F5F7",
  },
  Header2: {
    position: "absolute",
    top: "57%",

    fontSize: 20,
    color: "#F5F5F7",
  },

  buttonview: {
    justifyContent: "center",
    alignItems: "center",
    height: "45%",
    width: "95%",
  },
  buttonblock: {
    justifyContent: "center",
    alignItems: "center",
    height: "26%",
    width: "95%",
    marginBottom: 30,
    
    borderRadius: 10,
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
    width: "5%",
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    width: "47.5%",
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

  input: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: "rgb(130, 90, 229)",
    color: "white",
  },
  excerciseItem: {
    borderRadius: 10,
    margin: 10,
    width: "99%",
  },
  excerciseName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  excerciseMuscle: {
    fontSize: 16,
  },
  dabutton: {
    backgroundColor: "#303030",
    width: "100%",
    height: "100%",
    borderRadius: 10, 
    paddingLeft: '6%',
    paddingTop: '5%',
  },
  buttonhead1:{
      fontWeight: "bold",
      fontSize: 30,
      color: "#F5F5F7",
  
  },
  buttonhead2:{
    
    fontSize: 15,
    color: "#F5F5F7",

},
});

export default Home;
