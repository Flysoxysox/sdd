import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function XLibrary({ navigation }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [modalVisible3, setModalVisible3] = React.useState(false);
  const [modalVisible4, setModalVisible4] = React.useState(false);
  const [modalVisible5, setModalVisible5] = React.useState(false);
  const [modalVisible6, setModalVisible6] = React.useState(false);
  const [Bench, setBench] = useState(0);
  const [Squat, setSquat] = useState(0);
  const [Deadlift, setDeadlift] = useState(0);
  const [Pullup, setPullup] = useState(0);
  const [OHP, setOHP] = useState(0);
  const [Deadhang, setDeadhang] = useState(0);
  const [Dip, setDip] = useState(0);

  const Save = async () => {
    await AsyncStorage.setItem("Bench", (Bench));
    await AsyncStorage.setItem("Squat", (Squat));
    await AsyncStorage.setItem("Deadlift", (Deadlift));
    await AsyncStorage.setItem("Pullup", (Pullup));
    await AsyncStorage.setItem("OHP", (OHP));
    await AsyncStorage.setItem("Deadhang", (Deadhang));
    await AsyncStorage.setItem("Dip", (Dip));
    setModalVisible(false);
    setModalVisible1(false);
    setModalVisible2(false);
    setModalVisible3(false);
    setModalVisible4(false);
    setModalVisible5(false);
    setModalVisible6(false);
  };

  const load = async () => {
    const Bench = await AsyncStorage.getItem("Bench");
    const Squat = await AsyncStorage.getItem("Squat");
    const Deadlift = await AsyncStorage.getItem("Deadlift");
    const Pullup = await AsyncStorage.getItem("Pullup");
    const OHP = await AsyncStorage.getItem("OHP");
    const Deadhang = await AsyncStorage.getItem("Deadhang");
    const Dip = await AsyncStorage.getItem("Dip");

    if (Bench) {
      setBench(Bench);
    }
    if (Squat) {
      setSquat(Squat);
    }
    if (Deadlift) {
      setDeadlift(Deadlift);
    }
    if (Pullup) {
      setPullup(Pullup);
    }
    if (OHP) {
      setOHP(OHP);
    }
    if (Deadhang) {
      setDeadhang(Deadhang);
    }
    if (Dip) {
      setDip(Dip);
    }
  };

  

  useEffect(() => {
    load();
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

<TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
          <View style={styles.rowcontainer}>
            <View style={styles.rowitem}>
              <Text style={[styles.excerciseName, { color: colors.text }]}>
                Bench Press
              </Text>
              <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
                Chest
              </Text>
            </View>
            <View style={styles.rowitem2}>
              <Text style={[styles.pr, { color: colors.text }]}>{Bench}KG</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Enter 1RM Weight"
              value={Bench}
              onChangeText={setBench}
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
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible1(true)}
        activeOpacity={0.7}
      >
        <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
          <View style={styles.rowcontainer}>
            <View style={styles.rowitem}>
              <Text style={[styles.excerciseName, { color: colors.text }]}>
                Back Squat
              </Text>
              <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
                Legs
              </Text>
            </View>
            <View style={styles.rowitem2}>
              <Text style={[styles.pr, { color: colors.text }]}>{Squat}KG</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Enter 1RM Weight"
              value={Squat}
              onChangeText={setSquat}
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
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible2(true)}
        activeOpacity={0.7}
      >
        <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
          <View style={styles.rowcontainer}>
            <View style={styles.rowitem}>
              <Text style={[styles.excerciseName, { color: colors.text }]}>
                Deadlift
              </Text>
              <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
                Full Body
              </Text>
            </View>
            <View style={styles.rowitem2}>
              <Text style={[styles.pr, { color: colors.text }]}>
                {Deadlift}KG
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
            <TextInput
              style={styles.input}
              placeholder="Enter 1RM Weight"
              value={Deadlift}
              onChangeText={setDeadlift}
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
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible3(true)}
        activeOpacity={0.7}
      >
        <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
          <View style={styles.rowcontainer}>
            <View style={styles.rowitem}>
              <Text style={[styles.excerciseName, { color: colors.text }]}>
                W Pullup
              </Text>
              <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
                Back
              </Text>
            </View>
            <View style={styles.rowitem2}>
              <Text style={[styles.pr, { color: colors.text }]}>{Pullup}KG</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Enter 1RM Weight"
              value={Pullup}
              onChangeText={setPullup}
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
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible4(true)}
        activeOpacity={0.7}
      >
        <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
          <View style={styles.rowcontainer}>
            <View style={styles.rowitem}>
              <Text style={[styles.excerciseName, { color: colors.text }]}>
                OHP
              </Text>
              <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
                Shoulders
              </Text>
            </View>
            <View style={styles.rowitem2}>
              <Text style={[styles.pr, { color: colors.text }]}>{OHP}KG</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Enter 1RM Weight"
              value={OHP}
              onChangeText={setOHP}
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
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible5(true)}
        activeOpacity={0.7}
      >
        <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
          <View style={styles.rowcontainer}>
            <View style={styles.rowitem}>
              <Text style={[styles.excerciseName, { color: colors.text }]}>
                Deadhang
              </Text>
              <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
                Chest
              </Text>
            </View>
            <View style={styles.rowitem2}>
              <Text style={[styles.pr, { color: colors.text }]}>{Deadhang}'S</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Enter Duration in seconds"
              value={Deadhang}
              onChangeText={setDeadhang}
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
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible6(true)}
        activeOpacity={0.7}
      >
        <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
          <View style={styles.rowcontainer}>
            <View style={styles.rowitem}>
              <Text style={[styles.excerciseName, { color: colors.text }]}>
                W Dip
              </Text>
              <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
                Chest
              </Text>
            </View>
            <View style={styles.rowitem2}>
              <Text style={[styles.pr, { color: colors.text }]}>{Dip}KG</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible6}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible6(!modalVisible6);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Enter 1RM Weight"
              value={Dip}
              onChangeText={setDip}
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
                onPress={() => setModalVisible6(!modalVisible6)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  excerciseItem: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  excerciseName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  Modalheader: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
  },
  excerciseMuscle: {
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
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
  modalTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    textAlign: "justify",
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
  input: {
    height: 40,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    borderColor: "rgb(130, 90, 229)",
    color: "white",
  },
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
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
  rowitem: {
    width: "40%",
  },
  rowitem2: {
    width: "60%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  rowcontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pr: {
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default XLibrary;
