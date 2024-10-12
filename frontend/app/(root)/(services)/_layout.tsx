import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(reminder)" options={{ headerShown: false }} />
      <Stack.Screen name="(meal)" options={{ headerShown: false }} />
      <Stack.Screen
        name="blood-suger"
        options={{ headerShown: true, title: "Blood Sugar" }}
      />
      <Stack.Screen
        name="tracking-activity"
        options={{ headerShown: true, title: "Tracking Activity" }}
      />
    </Stack>
  );
};

export default Layout;
