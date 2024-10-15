import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 8,
          paddingTop: 8,
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={34} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="camera" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
