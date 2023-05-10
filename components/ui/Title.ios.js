import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 18,
    // borderWidth: Platform.OS ==='ios' ? 2:1,
    borderWidth: 6,
    borderColor: "white",
    maxWidth: "80%",
    minWidth: "20%",
    width: 300,
  },
});
