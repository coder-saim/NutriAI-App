import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="more-info" options={{ headerShown: false }} />
      <Stack.Screen name="basicInfo1" options={{ headerShown: false }} />
      <Stack.Screen name="basicInfo2" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
