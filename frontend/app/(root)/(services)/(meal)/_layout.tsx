import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="scan-food" options={{ headerShown: false, title: "Scan Food" }} />
      <Stack.Screen
        name="add-food"
        options={{ headerShown: true, title: "Add Food" }}
      />
      <Stack.Screen
        name="verify-food"
        options={{ headerShown: true, title: "Verify Food" }}
      />
      <Stack.Screen
        name="my-meals"
        options={{ headerShown: true, title: "My Meals" }}
      />
      <Stack.Screen
        name="suggested-meals"
        options={{ headerShown: true, title: "Suggested Meals" }}
      />
    </Stack>
  );
};

export default Layout;
