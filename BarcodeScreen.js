import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import { Dimensions } from "react-native";


const { width } = Dimensions.get("window");
const qrSize = width * 0.7;

function BarcodeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bruh this barcode number is: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <Text style={styles.description}>Scan your Barcode</Text>
        <Image
          style={styles.qr}
          source={require('./assets/scanner.png')}
        />
        <Text
          onPress={() => alert("Navigate back from here")}
          style={styles.cancel}
        >
          Cancel
        </Text>
      </BarCodeScanner>
      {scanned && (
        <View style={styles.againbutton}>
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
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
    paddingTop: 40,
    width: "70%",
    color: "white",
  },
  againbutton: {

    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
 
  },
});
export default BarcodeScreen;
