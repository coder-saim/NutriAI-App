import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="add-reminder"
        options={{ headerShown: true, title: "Add Reminder" }}
      />
      <Stack.Screen
        name="reminder"
        options={{ headerShown: true, title: "Reminder" }}
      />
      <Stack.Screen
        name="show-reminder"
        options={{ headerShown: true, title: "My Reminder" }}
      />
    </Stack>
  );
};

export default Layout;
