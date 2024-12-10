import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#000" : "#666"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name={focused ? "bookmark" : "bookmark-outline"}
                size={24}
                color={focused ? "#000" : "#666"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
