import { Text, StyleSheet } from "react-native";
import AppColors from "../util/AppColors";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: AppColors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: AppColors.accent500,
    padding: 12,
  },
});
