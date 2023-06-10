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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Thursday({ navigation }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [modalVisible3, setModalVisible3] = React.useState(false);
  const [modalVisible4, setModalVisible4] = React.useState(false);
  const [modalVisible5, setModalVisible5] = React.useState(false);
 
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const [D, setD] = useState(0);
  const [E, setE] = useState(0);
  const [F, setF] = useState(0);
  

  const Save = async () => {
    await AsyncStorage.setItem("A3", A.toString());
    await AsyncStorage.setItem("B3", B.toString());
    await AsyncStorage.setItem("C3", C.toString());
    await AsyncStorage.setItem("D3", D.toString());
    await AsyncStorage.setItem("E3", E.toString());
    await AsyncStorage.setItem("F3", F.toString());
  
    setModalVisible(false);
    setModalVisible1(false);
    setModalVisible2(false);
    setModalVisible3(false);
    setModalVisible4(false);
    setModalVisible5(false);
  };
  
  const load = async () => {
    const A = await AsyncStorage.getItem("A3");
    const B = await AsyncStorage.getItem("B3");
    const C = await AsyncStorage.getItem("C3");
    const D = await AsyncStorage.getItem("D3");
    const E = await AsyncStorage.getItem("E3");
    const F = await AsyncStorage.getItem("F3");
  
    if (A) {
      setA(parseInt(A));
    }
    if (B) {
      setB(parseInt(B));
    }
    if (C) {
      setC(parseInt(C));
    }
    if (D) {
      setD(parseInt(D));
    }
    if (E) {
      setE(parseInt(E));
    }
    if (F) {
      setF(parseInt(F));
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={[styles.main1]}>
      <View style={[styles.main]}>
        <View style={[styles.Headerbox]}>
          <View style={[styles.arrowbox]}>
            <Ionicons
              name="chevron-back-outline"
              style={styles.arrowL}
              size={50}
              color="white"
              onPress={() => navigation.navigate("  Your Workouts  ")}
            />
          </View>
          <View style={[styles.textbox]}>
            <Text style={styles.dayheader}>Thursday</Text>
          </View>
          <View style={[styles.arrowbox]}>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.arrowR}
              size={50}
              color="white"
              onPress={() => navigation.navigate("    Your Workouts    ")}
            />
          </View>
        </View>

        <View style={[styles.bodybox]}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Barbell Row
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Lower Back
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
                <View style={styles.statbox}>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Sets: 4
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Reps: 12
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Previous Weight: {A}KG
                  </Text>
                </View>
                <Text style={[styles.inputhead, { color: colors.text }]}>
                  Enter this sessions weight:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Weight (KG)"
                  value={A}
                  onChangeText={setA}
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={Save}
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

          <TouchableOpacity
            onPress={() => setModalVisible1(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Deadlift
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Full Back / Hamstrings
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible1(!modalVisible1);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.statbox}>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Sets: 4
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Reps: 12
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Previous Weight: {B}KG
                  </Text>
                </View>
                <Text style={[styles.inputhead, { color: colors.text }]}>
                  Enter this sessions weight:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Weight (KG)"
                  value={B}
                  onChangeText={setB}
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={Save}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                  <View style={styles.fillbox}></View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible1(!modalVisible1)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => setModalVisible2(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Cable Rear Delt-Fly
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Rear Delt
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible2(!modalVisible2);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.statbox}>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Sets: 4
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Reps: 12
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Previous Weight: {C}KG
                  </Text>
                </View>
                <Text style={[styles.inputhead, { color: colors.text }]}>
                  Enter this sessions weight:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Weight (KG)"
                  value={C}
                  onChangeText={setC}
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={Save}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                  <View style={styles.fillbox}></View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible2(!modalVisible2)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => setModalVisible3(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Standing Cable Lat Pulldown
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Upper Back
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible3}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible3(!modalVisible3);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.statbox}>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Sets: 4
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Reps: 12
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Previous Weight: {D}KG
                  </Text>
                </View>
                <Text style={[styles.inputhead, { color: colors.text }]}>
                  Enter this sessions weight:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Weight (KG)"
                  value={D}
                  onChangeText={setD}
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={Save}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                  <View style={styles.fillbox}></View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible3(!modalVisible3)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => setModalVisible4(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Barbell Shrugs
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Traps
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible4}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible4(!modalVisible4);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.statbox}>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Sets: 4
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Reps: 12
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Previous Weight: {E}KG
                  </Text>
                </View>
                <Text style={[styles.inputhead, { color: colors.text }]}>
                  Enter this sessions weight:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Weight (KG)"
                  value={E}
                  onChangeText={setE}
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={Save}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                  <View style={styles.fillbox}></View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible4(!modalVisible4)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            onPress={() => setModalVisible5(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Pullups
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Upper Back
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible5}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible5(!modalVisible5);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.statbox}>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Sets: 4
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Reps: 12
                  </Text>
                  <Text style={[styles.prevstats, { color: colors.text }]}>
                    Previous Weight: {F}KG
                  </Text>
                </View>
                <Text style={[styles.inputhead, { color: colors.text }]}>
                  Enter this sessions weight:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Weight (KG)"
                  value={F}
                  onChangeText={setF}
                  keyboardType="numeric"
                />
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={Save}
                  >
                    <Text style={styles.textStyle}>Submit</Text>
                  </Pressable>
                  <View style={styles.fillbox}></View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible5(!modalVisible5)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  excerciseItem: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  statbox: {
    borderRadius: 10,
    width: "100%",
    marginBottom: "2.5%",
    padding: "5%",
    backgroundColor: "#404040",
  },
  prevstats: {
    fontSize: 13,
  },
  inputhead: {
    fontSize: 15,
    marginBottom: "2.5%",
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    width: "47.5%",
    backgroundColor: "rgb(130, 90, 229)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  fillbox: {
    width: "5%",
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
    padding: 25,
    backgroundColor: "#303030",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  excerciseName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  excerciseMuscle: {
    fontSize: 20,
  },
  rowcontainer: {
    flexDirection: "row",
  },
  rowitem: {
    width: "100%",
  },

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
  Headerbox: {
    height: "8%",
    width: "95%",

    flexDirection: "row",
    justifyContent: "center",
  },
  bodybox: {
    height: "90%",
    width: "95%",
  },
  arrowbox: {
    height: "100%",
    width: "10%",

    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    height: "100%",
    width: "80%",

    justifyContent: "center",
    alignItems: "center",
  },
  dayheader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  arrowL: {
    height: "100%",
    width: "100%",
    paddingTop: "12%",
    paddingRight: "125%",
  },
  arrowR: {
    height: "100%",
    width: "100%",
    paddingTop: "12%",
    paddingRight: "120%",
  },
});

export default Thursday;