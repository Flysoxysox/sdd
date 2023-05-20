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
import Ionicons from "@expo/vector-icons/Ionicons";

function Tuesday({ navigation }) {
  const { colors } = useTheme();

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
              onPress={() => navigation.navigate("Your Workouts")}
            />
          </View>
          <View style={[styles.textbox]}>
            <Text style={styles.dayheader}>Tuesday</Text>
          </View>
          <View style={[styles.arrowbox]}>
            <Ionicons
              name="chevron-forward-outline"
              style={styles.arrowR}
              size={50}
              color="white"
              onPress={() => navigation.navigate("Your Workouts")}
            />
          </View>
        </View>

        <View style={[styles.bodybox]}>
          <TouchableOpacity
            onPress={() => setModalVisible6(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Back Squat
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Legs
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible6(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                   Romanian Deadlift
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                   Hamstring / Glutes
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible6(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Sissy Hack Squats
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Quads
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible6(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Leg Extensions
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Quads
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible6(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Hamstring Curls
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Hamstring / Glute
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible6(true)}
            activeOpacity={0.7}
          >
            <View
              style={[styles.excerciseItem, { backgroundColor: colors.card }]}
            >
              <View style={styles.rowcontainer}>
                <View style={styles.rowitem}>
                  <Text style={[styles.excerciseName, { color: colors.text }]}>
                    Calve Raises 
                  </Text>
                  <Text
                    style={[styles.excerciseMuscle, { color: colors.text }]}
                  >
                    Calve
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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

export default Tuesday;