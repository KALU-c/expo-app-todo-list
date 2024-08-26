import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  Text,
} from "react-native";

function GoalInput({ addGoalHandler, visible, hideModal }) {
  const [goal, setGoal] = useState("");
  const [warning, setWarning] = useState(false);

  function textInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function handleAddGoal() {
    if (goal.length === 0) {
      return setWarning(true);
    } else {
      setWarning(false);
      addGoalHandler(goal);
      setGoal("");
      hideModal();
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals..."
          onChangeText={textInputHandler}
          value={goal}
        />
        {warning && (
          <Text style={styles.warningMessage}>Text input is empty.</Text>
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => {
                hideModal();
                setWarning(false);
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD GOALS" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    minHeight: 1,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    width: "70%",
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    marginTop: 20,
  },
  button: {
    width: 132,
    borderRadius: 5,
  },
  image: {
    height: 150,
    width: 150,
    margin: 20,
  },
  warningMessage: {
    color: "#ff5b5b",
    marginVertical: 2,
  },
});
