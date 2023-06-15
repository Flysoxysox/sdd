import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Button, Modal, TextInput, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("window");
const qrSize = width * 0.7;

function BarcodeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [bdata, setData] = useState([]);
  console.log(bdata);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [save, setSave] = useState(0);
// This is where the user camera permissions are checked
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
// The api fetch
    fetch(
      `https://world.openfoodfacts.org/api/v2/product/${data}.json?fields=nutriments`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        showAlert(json.product.nutriments.energy);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const showAlert = (energy) => {
    setModalVisible(true)
  };

  const CloseModal = () => {
    setScanned(false);
    setModalVisible(false);
  };

  const saveModal = async () => {
    setScanned(false);
    setModalVisible(false);
  
    try {
      const weightString = await AsyncStorage.getItem('stuff');
      const weight = parseInt(weightString, 10); 
      const scannedval = Math.ceil(bdata.product.nutriments.energy / 4.184);
      AsyncStorage.setItem("stuff", JSON.stringify(weight + scannedval));
      console.log(scannedval + weight);
     
    } catch (error) {
      console.log(error);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.buttonhead1}>The scanned calories per 100g</Text>
            {bdata.product && (
              <Text style={styles.buttonhead3}>{Math.ceil(bdata.product.nutriments.energy / 4.184)} Kcal</Text>
            )}
            <Text style={styles.buttonhead2}>Would you like to add this to your daily total?</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={saveModal}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <View style={styles.fillbox}></View>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={CloseModal}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <Text style={styles.description}>Scan your Barcode</Text>
        <Image style={styles.qr} source={require("./assets/scanner.png")} />
        <Text onPress={() => navigation.navigate("Home")} style={styles.cancel}>
          Cancel
        </Text>
      </BarCodeScanner>

      <View style={styles.smallbox}>
        {scanned && (
          <View>
            <Button
              color={"rgb(130, 90, 229)"}
              title={"Loading..."}
              onPress={() => setScanned(false)}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    paddingBottom: "20%",
  },
  textStyle: {
    color: "#252426",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonhead1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#F5F5F7",
    marginBottom: "5%",
  },
  buttonhead2: {
    fontSize: 14,
    color: "#F5F5F7",
    marginTop: "5%",
  },
  buttonhead3: {
    fontSize: 22,
    color: "#F5F5F7",
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
  qr: {
    width: qrSize + 120,
    height: qrSize + 120,
  },
  description: {
    fontSize: width * 0.09,
    textAlign: "center",
    width: "80%",
    color: "white",
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: "center",
    paddingTop: 0,
    width: "70%",
    color: "white",
  },
  againbutton: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(130, 90, 229)",
  },
  smallbox: {
    width: "100%",
    height: "20%",
    opacity: 0.5,
    textAlign: "center",
    justifyContent: "center",
  },
  bigbox: {
    width: "100%",
    height: "80%",
  },
  modalView: {
    margin: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default BarcodeScreen;
