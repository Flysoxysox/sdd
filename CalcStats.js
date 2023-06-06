import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  ScrollView,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

function CalcStats({ navigation }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("0");
  const [gender, setGender] = useState("male");
  const [storedWeight, setStoredWeight] = useState("0");
  const [age, setAge] = useState("");
  const [weight2, setWeight2] = useState("");
  const [height2, setHeight2] = useState("");
  const [activityLevel, setActivityLevel] = useState("3");
  const [weightGoal, setWeightGoal] = useState("maintain");
  const [caloricIntake, setCaloricIntake] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);

  const activityFactors = {
    0: 1,
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9,
  };

  const weightGoalFactors = {
    lose1000: 0.71,
    lose500: 0.86,
    lose250: 0.93,
    maintain: 1,
    gain250: 1.07,
    gain500: 1.14,
    gain1000: 1.29,
  };

  const calculateCaloricIntake = () => {
    const bmr = 10 * weight2 + 6.25 * height2 - 5 * age + 5;
    const adjustedBmr = bmr * weightGoalFactors[weightGoal];
    const caloricIntake = (
      adjustedBmr * activityFactors[activityLevel]
    ).toFixed(2);
    setCaloricIntake(caloricIntake);
    setActivityLevel(activityLevel);

    AsyncStorage.setItem("cal", caloricIntake);
    AsyncStorage.setItem("alvl", activityLevel);
  };
  const calculateWaterIntake = () => {
    if (gender && age && weight && height && activityLevel) {
      const parsedAge = parseInt(age);
      const parsedWeight = parseFloat(weight);
      const parsedHeight = parseFloat(height);

      let waterIntake = 0;

      if (gender === "male") {
        waterIntake =
          (66 + 6.23 * parsedWeight + 12.7 * parsedHeight - 6.8 * parsedAge) *
          activityFactors[activityLevel];
      } else if (gender === "female") {
        waterIntake =
          (655 + 4.35 * parsedWeight + 4.7 * parsedHeight - 4.7 * parsedAge) *
          activityFactors[activityLevel];
      }

      setWaterIntake(waterIntake.toFixed(2));
      AsyncStorage.setItem("water", waterIntake.toFixed(2));
    }
  };
  const calculateBMI = async () => {
    if (weight && height) {
      const weightKg = parseFloat(weight);
      const heightM = parseFloat(height) / 100;

      if (weightKg > 0 && heightM > 0) {
        const bmiValue = weightKg / (heightM * heightM);
        setBMI(bmiValue.toFixed(2));
        setStoredWeight(weightKg.toFixed(2));
        await AsyncStorage.setItem("bmi", bmiValue.toFixed(2));
        await AsyncStorage.setItem("weight", weightKg.toFixed(2));
      }
    }
  };

  const loadBMI = async () => {
    const storedBMI = await AsyncStorage.getItem("bmi");
    if (storedBMI) {
      setBMI(storedBMI);
    }
  };
  const loadWeight = async () => {
    const storedWeight = await AsyncStorage.getItem("weight");
    if (storedWeight) {
      setStoredWeight(storedWeight);
    }
  };
  const loadCal = async () => {
    const caloricIntake = await AsyncStorage.getItem("cal");
    if (caloricIntake) {
      setCaloricIntake(caloricIntake);
    }
  };
  const loadalvl = async () => {
    const activityLevel = await AsyncStorage.getItem("alvl");
    if (activityLevel) {
      setActivityLevel(activityLevel);
    }
  };
  const loadwater = async () => {
    const water = await AsyncStorage.getItem("water");
    if (water) {
      setWaterIntake(water);
    }
  };

  useEffect(() => {
    loadBMI();
    loadWeight();
    loadCal();
    loadalvl();
    loadwater();
  }, []);

  return (
    <View style={[styles.Container]}>
      {/* This is the BMI modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.modalContainer]}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <ScrollView scrollIndicatorInsets={{ right: 1 }}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Body Mass Index Calculator
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                Body Mass Index (BMI) is a measure of body fat based on weight
                and height. It helps assess weight status and potential health
                risks. Calculated by dividing weight in kilograms by height in
                meters squared, BMI provides an estimate of body fat levels. A
                higher BMI indicates a higher risk of health issues like heart
                disease, diabetes, and high blood pressure. It serves as an
                initial indicator to determine if further evaluation or
                lifestyle changes are necessary for better health.
              </Text>
              <Text style={[styles.modalText2, { color: colors.text }]}>
                Calculate Your BMI:
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Height (cm)"
                value={height}
                onChangeText={setHeight}
                keyboardType="numeric"
              />
              <Text style={[styles.modalText2, { color: colors.text }]}>
                BMI rating ranges:
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                UnderWeight: &lt; 18.5
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                Healthy Weight: 18.5-24.9
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                Over Weight: 25-29.9
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                Obese: 30-34.9
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                Severely Obese: 35-39.9
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                Morbidly Obese: &ge; 40
              </Text>
              <Text style={[styles.modalText2, { color: colors.text }]}>
                Your BMI result is {bmi}
              </Text>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={calculateBMI}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  Calculate
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  Close
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
      {/* This is the Calorie modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={[styles.modalContainer]}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <ScrollView scrollIndicatorInsets={{ right: 1 }}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Daily Caloric Intake Calculator
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                The Caloric Intake Calculator is a powerful tool designed to
                assist you in achieving your health and fitness goals. By
                inputting your age, weight, and height, along with your activity
                level, the calculator will provide you with a personalized
                estimate of your daily caloric intake. Whether you aim to
                maintain, lose, or gain weight, this calculator will empower you
                to make informed decisions about your nutrition, helping you
                embark on a journey towards a healthier lifestyle.
              </Text>
              <Text style={[styles.modalText2, { color: colors.text }]}>
                Calculate Your Intake:
              </Text>
              <Text style={[styles.modalText3, { color: colors.text }]}>
                Age:
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Age (Y)"
                value={age}
                onChangeText={(text) => setAge(text)}
              />
              <Text style={[styles.modalText3, { color: colors.text }]}>
                Weight (in kg):
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                keyboardType="numeric"
                value={weight2}
                onChangeText={(text) => setWeight2(text)}
              />
              <Text style={[styles.modalText3, { color: colors.text }]}>
                Height (in cm):
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Height (cm)"
                keyboardType="numeric"
                value={height2}
                onChangeText={(text) => setHeight2(text)}
              />
              <Text style={[styles.modalText3, { color: colors.text }]}>
                Excercise Amount:
              </Text>
              <Picker
                style={styles.picker}
                selectedValue={activityLevel}
                onValueChange={(value) => setActivityLevel(value)}
              >
                <Picker.Item color="white" label="BMR" value="0" />
                <Picker.Item
                  color="white"
                  label="Sedentary - No excercise"
                  value="1"
                />
                <Picker.Item
                  color="white"
                  label="Lightly active - 1-3 times a week"
                  value="2"
                />
                <Picker.Item
                  color="white"
                  label="Moderately active - 4-5 times a week"
                  value="3"
                />
                <Picker.Item
                  color="white"
                  label="Very active - Daily"
                  value="4"
                />
                <Picker.Item
                  color="white"
                  label="Extra active - Intense Daily"
                  value="5"
                />
              </Picker>
              <Text style={[styles.modalText3, { color: colors.text }]}>
                Weight Goal:
              </Text>
              <Picker
                selectedValue={weightGoal}
                onValueChange={(value) => setWeightGoal(value)}
              >
                <Picker.Item
                  color="white"
                  label="Lose 1KG a week"
                  value="lose1000"
                />
                <Picker.Item
                  color="white"
                  label="Lose 0.5KG a week"
                  value="lose500"
                />
                <Picker.Item
                  color="white"
                  label="Lose 0.25KG a week"
                  value="lose250"
                />
                <Picker.Item
                  color="white"
                  label="Maintain Weight"
                  value="maintain"
                />
                <Picker.Item
                  color="white"
                  label="Gain 0.25KG a week"
                  value="gain250"
                />
                <Picker.Item
                  color="white"
                  label="Gain 0.5KG a week"
                  value="gain500"
                />
                <Picker.Item
                  color="white"
                  label="Gain 1KG a week"
                  value="gain1000"
                />
              </Picker>

              <Text style={[styles.modalText3, { color: colors.text }]}>
                Caloric Intake: {caloricIntake} kcal
              </Text>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={calculateCaloricIntake}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  Calculate
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => setModalVisible2(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  Close
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
      {/* This is the Water modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible3(!modalVisible3);
        }}
      >
        <View style={[styles.modalContainer]}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <ScrollView scrollIndicatorInsets={{ right: 1 }}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
                Daily Water Expenditure
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
                The Caloric Intake Calculator is a powerful tool designed to
                assist you in achieving your health and fitness goals. By
                inputting your age, weight, and height, along with your activity
                level, the calculator will provide you with a personalized
                estimate of your daily caloric intake. Whether you aim to
                maintain, lose, or gain weight, this calculator will empower you
                to make informed decisions about your nutrition, helping you
                embark on a journey towards a healthier lifestyle.
              </Text>
              <Text style={[styles.modalText2, { color: colors.text }]}>
                Calculate Your Intake:
              </Text>
              
              <Text style={[styles.modalText3, { color: colors.text }]}>Gender:</Text>
              <Picker
                selectedValue={gender}
                style={styles.picker}
                onValueChange={setGender}
              >
                <Picker.Item color="white" label="Male" value="male" />
                <Picker.Item color="white" label="Female" value="female" />
              </Picker>

              <Text style={[styles.modalText3, { color: colors.text }]}>Age:</Text>
              <TextInput
                style={styles.input}
                placeholder="Age (Y)"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
              />

              <Text style={[styles.modalText3, { color: colors.text }]}>Weight (in kg):</Text>
              <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
              />

              <Text style={[styles.modalText3, { color: colors.text }]}>Height (in cm):</Text>
              <TextInput
                style={styles.input}
                placeholder="Height (cm)"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
              />

              <Text style={[styles.modalText3, { color: colors.text }]}>Activity Level:</Text>
              <Picker
                selectedValue={activityLevel}
                
                style={styles.picker}
                onValueChange={setActivityLevel}
              >
                <Picker.Item
                  color="white"
                  label="Sedentary - No excercise"
                  value="1"
                />
                <Picker.Item
                  color="white"
                  label="Lightly active - 1-3 times a week"
                  value="2"
                />
                <Picker.Item
                  color="white"
                  label="Moderately active - 4-5 times a week"
                  value="3"
                />
                <Picker.Item
                  color="white"
                  label="Very active - Daily"
                  value="4"
                />
                <Picker.Item
                  color="white"
                  label="Extra active - Intense Daily"
                  value="5"
                />
              </Picker>
              <Text style={[styles.modalText3, { color: colors.text }]}>
        Your daily water intake should be {(waterIntake/1000).toFixed(1)} Litres
      </Text>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={calculateWaterIntake}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  Calculate
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => setModalVisible3(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  Close
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View style={[styles.main]}>
        <View style={styles.minicontainer}>
          <View style={styles.Statrowcontainer}>
            <View style={styles.statcontainer}>
              <Text style={styles.statheader}>Caloric Intake Goal</Text>
              <Text style={styles.stattext}>{Math.ceil(caloricIntake)}</Text>
            </View>

            <View style={styles.statcontainersmall}>
              <Text style={styles.statheader}>Water</Text>
              <Text style={styles.stattext}>{(waterIntake/1000).toFixed(1)}L</Text>
            </View>
          </View>
          <View style={styles.Statrowcontainer}>
            <View style={styles.statcontainersmall}>
              <Text style={styles.statheader}>Weight</Text>
              <Text style={styles.stattext}>{Math.ceil(storedWeight)}KG</Text>
            </View>
            <View style={styles.statcontainersmall}>
              <Text style={styles.statheader}>A-Level</Text>
              <Text style={styles.stattext}>{activityLevel}</Text>
            </View>
            <View style={styles.statcontainersmall}>
              <Text style={styles.statheader}>BMI</Text>
              <Text style={styles.stattext}>{bmi}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonview}>
          <View style={styles.buttonblock}>
            <TouchableOpacity
              style={styles.dabutton}
              activeOpacity={0.7}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.buttonhead1}>BMI Calculator 🤾‍♀️</Text>
              <Text style={styles.buttonhead2}>
                Determine the state of your Body mass index
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonblock}>
            <TouchableOpacity
              style={styles.dabutton}
              activeOpacity={0.7}
              onPress={() => setModalVisible2(true)}
            >
              <Text style={styles.buttonhead1}>Caloric Intake 🍗</Text>
              <Text style={styles.buttonhead2}>
                Calculate your necessary daily intake
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonblock}>
            <TouchableOpacity
              style={styles.dabutton}
              activeOpacity={0.7}
              onPress={() => setModalVisible3(true)}
            >
              <Text style={styles.buttonhead1}>Water Intake 💦</Text>
              <Text style={styles.buttonhead2}>
                Calculate your water consumption
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonblock}>
            <TouchableOpacity
              style={styles.dabutton}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("PR Manager")}
            >
              <Text style={styles.buttonhead1}>PR Management 🌱</Text>
              <Text style={styles.buttonhead2}>
                Record your personal records
              </Text>
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
  Container: {
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
  minicontainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",

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
    height: "60%",
    width: "95%",
    paddingBottom: "5%",
  },
  buttonblock: {
    justifyContent: "center",
    alignItems: "center",
    height: "21%",
    width: "100%",
    marginBottom: 16,

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
    borderColor: "white",
    color: "white",
    marginBottom: "3%",
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
    paddingLeft: "6%",
    paddingTop: "5%",
  },
  statcontainersmall: {
    backgroundColor: "rgba(130, 90, 229, 0.4)",
    width: "32%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: "2%",
  },
  statcontainer: {
    backgroundColor: "rgba(130, 90, 229, 0.4)",
    width: "66%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: "2%",
  },
  buttonhead1: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#F5F5F7",
  },
  buttonhead2: {
    fontSize: 15,
    color: "#F5F5F7",
  },
  Statrowcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40%",
    width: "100%",

    marginBottom: "2%",
  },

  statheader: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#F5F5F7",
    marginBottom: 10,
  },
  stattext: {
    fontSize: 45,
    color: "#F5F5F7",
  },
  modalView: {
    margin: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    borderRadius: 30,
    padding: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "84.5%",
  },
  modalTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: "3%",
    textAlign: "justify",
  },
  modalText2: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: "3%",
    textAlign: "justify",
  },
  modalText3: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: "3%",
    textAlign: "justify",
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "4%",
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  picker: {
    fontSize: 16,
    color: "red",
  },
});

export default CalcStats;
