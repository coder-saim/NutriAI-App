import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="more-info" options={{ headerShown: false }} />
      <Stack.Screen name="info-template" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
