import { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalISVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(goal) {
    setGoalList([...goalList, goal]);
  }

  function clearGoalsHandler() {
    setGoalList([]);
  }
  function removeGoalItemHandler(item) {
    setGoalList((prevItems) =>
      prevItems.filter((goalItem) => goalItem !== item)
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addButton}>
          <Button
            title="ADD NEW GOAL"
            color="#4e4eff"
            onPress={() => setModalIsVisible(!modalISVisible)}
          />
        </View>
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalISVisible}
          hideModal={() => setModalIsVisible(!modalISVisible)}
        />
        {goalList.length !== 0 && (
          <Button
            title="CLEAR GOALS"
            onPress={clearGoalsHandler}
            color="#fb2323"
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                removeGoalItemHandler={removeGoalItemHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 10,
  },
  addButton: {
    marginBottom: 20,
  },
});
