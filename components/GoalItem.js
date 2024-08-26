import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData: { item }, removeGoalItemHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "rgb(74, 54, 255)" }}
        onPress={removeGoalItemHandler.bind(this, item)}
      >
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderColor: "#253197",
    backgroundColor: "#7f8aeb",
    borderRadius: 5,
    // paddingHorizontal: 10,
    marginTop: 15,
  },
  goalText: {
    color: "white",
    padding: 5,
    fontSize: 18,
  },
});
