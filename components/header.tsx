import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface HeaderProps{
    name: string;
    subGreeting: string;
}
export default function HeaderGreet({name,subGreeting}:HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greeting}>Hello, {name}!</Text>
          <Text style={styles.subGreeting}>{subGreeting}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 12,
  },
  greeting: {
    fontSize: 23,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 18,
    color: "#666",
  },
});
