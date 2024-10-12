import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="analyzed-food" options={{ headerShown: true, title: "Analyzed Food" }} />
      <Stack.Screen
        name="add-food"
        options={{ headerShown: true, title: "Add Food" }}
      />
      <Stack.Screen
        name="scanned-food"
        options={{ headerShown: true, title: "Scanned Food" }}
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
