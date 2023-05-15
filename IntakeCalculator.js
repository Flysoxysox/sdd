import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function IntakeCalculator({ navigation }) {
    const { colors } = useTheme();
    const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedExcercise, setSelectedExcercise] = React.useState({});

  const openModal = (excercise) => {
    setSelectedExcercise(excercise);
    setModalVisible(true);
  };
  return (
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
    padding: 20,
  },
  excerciseName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Modalheader: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
  },
  excerciseMuscle: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    borderRadius: 30,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
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
});

export default IntakeCalculator;
