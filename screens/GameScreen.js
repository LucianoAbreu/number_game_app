import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.mainContainer}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + */}
        {/* - */}
      </View>
      <View>{/* LOG Rounds */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  },
});
