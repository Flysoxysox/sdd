import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Modal } from "react-native";

const ExcerciseItem = ({ name, Muscle, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.excerciseItem, { backgroundColor: colors.card }]}>
        <Text style={[styles.excerciseName, { color: colors.text }]}>
          {name}
        </Text>
        <Text style={[styles.excerciseMuscle, { color: colors.text }]}>
          {Muscle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function Test({ navigation }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedExcercise, setSelectedExcercise] = React.useState({});

  const excercises = [
    {
      name: 'Bench Press',
      Muscle: 'Chest Exercise',
      description: 'The bench press is a compound exercise that primarily targets the chest muscles, but also works the triceps and shoulders. To perform the bench press, you will need a barbell and a bench. You can use a flat bench, incline bench, or decline bench depending on the variation of the exercise you choose. To begin, lie down on the bench with your feet flat on the floor and your eyes directly under the bar. Place your hands on the bar slightly wider than shoulder-width apart with your palms facing away from your face. Lift the bar off the rack and lower it towards your chest while keeping your elbows tucked in close to your sides. Once the bar touches your chest, push it back up to the starting position, making sure to keep your core engaged and your back flat on the bench. It is important to maintain proper form when performing the bench press. Keep your wrists straight and your elbows tucked in to prevent injury. Also, make sure to breathe properly throughout the exercise by inhaling as you lower the bar and exhaling as you push it back up. There are several variations of the bench press that can target different areas of the chest muscles. The flat bench press primarily targets the middle and lower chest, while the incline bench press targets the upper chest. The decline bench press primarily targets the lower chest. In addition to the chest muscles, the bench press also engages the triceps and shoulders. The triceps are worked during the pushing phase of the movement, while the shoulders are worked during the stabilizing phase of the movement. Overall, the bench press is an effective exercise for building upper body strength and muscle mass. Its important to use proper form and gradually increase the weight as you progress in your training to prevent injury and see maximum results.'
    },
    {
      name: 'Squats',
      Muscle: 'Legs Exercise',
      description: 'The squat is a compound exercise that primarily targets the quadriceps, but also works the glutes, hamstrings, and calves. It involves lowering the body by bending the knees and hips, and then rising back up.'
    },
    {
      name: 'Deadlifts',
      Muscle: 'Full Body Exercise',
      description: 'The deadlift is a compound exercise that targets many muscles in the body, including the back, legs, and arms. It involves lifting a weighted barbell off the ground by extending the hips and knees.'
    },
    {
      name: 'Pull-ups',
      Muscle: 'Back Exercise',
      description: 'The pull-up is a bodyweight exercise that primarily targets the back, but also works the arms and shoulders. It involves hanging from a bar with an overhand grip and pulling the body up until the chin is above the bar.'
    },
    {
      name: 'Push-ups',
      Muscle: 'Upper Body Exercise',
      description: 'The push-up is a bodyweight exercise that primarily targets the chest, but also works the triceps and shoulders. It involves lowering the body by bending the arms and then pushing back up.'
    },
    {
      name: 'Curls',
      Muscle: 'Bicep Exercise',
      description: 'The curl is an isolation exercise that primarily targets the biceps, but also works the forearms. It involves holding a weighted dumbbell or barbell and curling it up towards the shoulders.'
    },
    {
      name: 'Lunges',
      Muscle: 'Legs Exercise',
      description: 'The lunge is a compound exercise that primarily targets the quadriceps, but also works the glutes, hamstrings, and calves. It involves taking a large step forward and bending both knees to lower the body, and then stepping back up.'
    },
    {
      name: 'Crunches',
      Muscle: 'Abdominals Exercise',
      description: 'The crunch is an isolation exercise that primarily targets the rectus abdominis, but also works the obliques. It involves lying on the back with the knees bent and raising the upper body towards the knees.'
    },
  ];

  const openModal = (excercise) => {
    setSelectedExcercise(excercise);
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView scrollIndicatorInsets={{ right: 1 }}>
        {excercises.map((excercise) => (
          <ExcerciseItem
            key={excercise.name}
            name={excercise.name}
            Muscle={excercise.Muscle}
            onPress={() => openModal(excercise)}
          />
        ))}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
      
        <View style={[styles.modalContainer]}>
       
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
          <ScrollView scrollIndicatorInsets={{ right: 1 }}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              {selectedExcercise.name}
            </Text>
            <Text style={[styles.Modalheader, { color: colors.text }]}>
              {selectedExcercise.Muscle}
            </Text>
            <Text style={[styles.modalText, { color: colors.text }]}>
              {selectedExcercise.description}
            </Text>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: colors.primary }]}
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

export default Test;
