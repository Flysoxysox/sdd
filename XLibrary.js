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

function XLibrary({ navigation }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedExcercise, setSelectedExcercise] = React.useState({});

  const excercises = [
    {
      name: "Push-ups",
      Muscle: "Upper Body Exercise",
      description:
        "The push-up is a classic bodyweight exercise that primarily targets the chest, but also works the triceps and shoulders. It is a versatile exercise that can be done anywhere and without any equipment. To perform a push-up, start in a plank position with your hands shoulder-width apart, and lower your body by bending your elbows until your chest touches the ground. Push back up to the starting position and repeat for the desired number of reps. To increase the difficulty, you can do diamond push-ups, where your hands are close together, or decline push-ups, where your feet are elevated. If you are new to push-ups, you can start with modified push-ups on your knees. Make sure to maintain proper form throughout the exercise to avoid injury and maximize the benefits.",
    },
    {
      name: "Bench Press",
      Muscle: "Chest Exercise",
      description:
        "The bench press is a compound exercise that primarily targets the chest muscles, but also works the triceps and shoulders. To perform the bench press, you will need a barbell and a bench. You can use a flat bench, incline bench, or decline bench depending on the variation of the exercise you choose. To begin, lie down on the bench with your feet flat on the floor and your eyes directly under the bar. Place your hands on the bar slightly wider than shoulder-width apart with your palms facing away from your face. Lift the bar off the rack and lower it towards your chest while keeping your elbows tucked in close to your sides. Once the bar touches your chest, push it back up to the starting position, making sure to keep your core engaged and your back flat on the bench. It is important to maintain proper form when performing the bench press. Keep your wrists straight and your elbows tucked in to prevent injury. Also, make sure to breathe properly throughout the exercise by inhaling as you lower the bar and exhaling as you push it back up. There are several variations of the bench press that can target different areas of the chest muscles. The flat bench press primarily targets the middle and lower chest, while the incline bench press targets the upper chest. The decline bench press primarily targets the lower chest. In addition to the chest muscles, the bench press also engages the triceps and shoulders. The triceps are worked during the pushing phase of the movement, while the shoulders are worked during the stabilizing phase of the movement. Overall, the bench press is an effective exercise for building upper body strength and muscle mass. Its important to use proper form and gradually increase the weight as you progress in your training to prevent injury and see maximum results.",
    },
    {
      name: "Squats",
      Muscle: "Legs Exercise",
      description:
        "The squat is an essential exercise for building strength and muscle in the lower body. It is a compound exercise, meaning that it involves multiple muscle groups working together. The primary muscles targeted in the squat are the quadriceps, which are located on the front of the thigh. However, the exercise also works the glutes, hamstrings, and calves. Squats are considered a functional movement because they mimic everyday activities like sitting and standing. To perform a squat, start by standing with your feet shoulder-width apart and your toes pointing slightly outwards. Keep your chest up and your shoulders back, then begin to lower your body by bending your knees and pushing your hips back as if you are sitting on a chair. Keep your knees in line with your toes, and stop when your thighs are parallel to the ground. Push through your heels and rise back up to the starting position. Its important to maintain proper form throughout the exercise, keeping your core tight and your back straight. Equipment needed for squats can range from no equipment at all to a barbell or dumbbells, depending on the level of resistance desired. For those new to the exercise, its recommended to start with bodyweight squats or use a resistance band for added support. As you progress, you can add weight through the use of dumbbells, a barbell, or a squat rack. When using weights, its important to start with a light weight and gradually increase as your strength improves. Overall, the squat is an effective exercise for building lower body strength, increasing muscle mass, and improving functional movement. When performed correctly and with proper form, it can be a safe and beneficial addition to any fitness routine.",
    },
    {
      name: "Deadlifts",
      Muscle: "Full Body Exercise",
      description:
        "The deadlift is a compound exercise that targets several muscles in the body, making it a popular choice among weightlifters and athletes. The primary muscle group worked during the deadlift is the back, particularly the erector spinae muscles, which run the length of the spine and help maintain an upright posture. The glutes, hamstrings, and quadriceps are also heavily recruited during the lift, making it an excellent exercise for building overall lower body strength. In addition, the deadlift also engages the forearm muscles, including the brachioradialis and flexor carpi radialis, as well as the core muscles, which are necessary for maintaining stability and preventing injury. To perform the deadlift, begin by setting up with your feet hip-width apart and the barbell on the ground in front of you. Grip the bar with your hands shoulder-width apart and hinge at the hips, keeping your back flat and your chest up. Drive through your heels and lift the bar off the ground, extending your hips and knees until you are standing fully upright. Lower the bar back down to the ground in a controlled manner, keeping your back flat and your core engaged throughout the movement. It is important to maintain proper form during the deadlift to prevent injury, so start with light weights and gradually increase the weight as you become more comfortable with the exercise. As for equipment, the deadlift requires a barbell and weight plates, as well as a lifting belt and wrist straps for added support and grip. It is important to use proper equipment and to have a spotter or trainer present when attempting heavy lifts to ensure safety and prevent injury. Overall, the deadlift is a challenging but effective exercise for building strength and muscle in the back, lower body, and core.",
    },
    {
      name: "Pull-ups",
      Muscle: "Back Exercise",
      description:
        "Pull-ups are a popular bodyweight exercise that targets the back, biceps, and shoulders. They involve hanging from a bar with an overhand grip and pulling the body up until the chin is above the bar. Pull-ups are an effective way to increase upper body strength, improve grip strength, and develop a V-shaped back. To make pull-ups more challenging and add resistance, you can make them weighted. This involves attaching a weight to your body or using a weight belt. There are several ways to add weight to your pull-ups, including using a weight vest, holding a dumbbell between your feet, or using a weight belt with plates or kettlebells attached. When using a weight vest, start with a light weight and gradually increase the weight as you become stronger. For holding a dumbbell between your feet, choose a weight that allows you to complete the desired number of reps with proper form. A weight belt is a more versatile option as you can easily adjust the weight by adding or removing plates or kettlebells. To perform a weighted pull-up, start by securing the weight to your body or weight belt. Next, grip the bar with an overhand grip and hang with straight arms. Engage your back muscles and pull your body up until your chin is above the bar. Slowly lower your body back down to the starting position, keeping your core engaged and maintaining control throughout the movement. It is important to note that adding weight to pull-ups should only be done once you have mastered the proper form and are able to perform multiple reps with bodyweight alone. If you experience any pain or discomfort while performing weighted pull-ups, stop the exercise and consult a qualified fitness professional. In summary, pull-ups are an effective bodyweight exercise that targets the back, biceps, and shoulders. Adding weight to pull-ups can increase the intensity and provide an additional challenge. When adding weight to pull-ups, start with a light weight and gradually increase as you become stronger. Always prioritize proper form and technique, and consult a fitness professional if needed.",
    },

    {
      name: "Curls",
      Muscle: "Bicep Exercise",
      description:
        "The curl is an isolation exercise that primarily targets the biceps, but also works the forearms. It is a popular exercise to build arm strength and size. To perform a curl, hold a dumbbell or barbell with your palms facing up and your arms fully extended. Curl the weight up towards your shoulders, keeping your elbows close to your sides. Squeeze your biceps at the top of the movement, then lower the weight back down to the starting position. Repeat for the desired number of reps. To increase the difficulty, you can use a heavier weight or do concentration curls, where you curl one arm at a time. Make sure to maintain proper form throughout the exercise to avoid injury and maximize the benefits.",
    },
    {
      name: "Lunges",
      Muscle: "Legs Exercise",
      description:
        "The lunge is a compound exercise that primarily targets the quadriceps, but also works the glutes, hamstrings, and calves. It is a great exercise to build leg strength, increase mobility, and improve balance. To perform a lunge, start by standing with your feet shoulder-width apart. Take a large step forward with one foot, and bend both knees to lower your body until your back knee is almost touching the ground. Push back up to the starting position, and repeat with the other leg. Alternate legs for the desired number of reps. To increase the difficulty, you can hold weights in your hands or do walking lunges. If you are new to lunges, you can start with reverse lunges or stationary lunges. Make sure to maintain proper form throughout the exercise to avoid injury and maximize the benefits.",
    },
    {
      name: "Crunches",
      Muscle: "Abdominals Exercise",
      description:
        "Crunches are an isolation exercise that target the abdominal muscles, specifically the rectus abdominis, which is responsible for the six-pack look. Crunches are one of the most popular exercises for strengthening the core, which is important for maintaining proper posture, supporting the spine, and preventing lower back pain. To perform crunches, lie on your back with your knees bent and feet flat on the floor. Place your hands behind your head with your elbows pointing outward. Slowly lift your head, neck, and shoulders off the floor while contracting your abdominal muscles. Exhale as you come up and inhale as you lower your body back to the floor. Be sure to keep your chin up and your lower back flat against the floor throughout the movement. While crunches are a relatively simple exercise, there are some variations that can increase their difficulty and effectiveness. For example, you can do bicycle crunches, which involve bringing one knee up to meet the opposite elbow while extending the other leg straight out. You can also do reverse crunches, which involve lifting your legs and hips off the floor while keeping your upper body still. There is no equipment needed to perform crunches, making them a convenient exercise that can be done anywhere. However, using an exercise mat can provide extra cushioning and support for your back. To get the most out of your crunches, it is important to maintain proper form and avoid straining your neck or back. Gradually increase the number of repetitions and sets as you become stronger, and combine crunches with other core-strengthening exercises for a well-rounded workout.",
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

export default XLibrary;
