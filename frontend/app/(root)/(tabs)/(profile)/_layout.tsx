import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="main-profile" options={{ headerShown: false }} />
      <Stack.Screen 
        name="edit-profile" 
        options={{ headerShown: true, title: "Edit Profile" }}
      />
      <Stack.Screen 
        name="help-center" 
        options={{ headerShown: true, title: "Help Center" }}
      />
      <Stack.Screen 
        name="faq" 
        options={{ headerShown: true, title: "FAQ" }}
      />
      <Stack.Screen 
        name="settings" 
        options={{ headerShown: true, title: "Settings" }}
      />
      <Stack.Screen 
        name="shareapp"
        options={{ headerShown: true, title: "Subscription" }}
      />
      <Stack.Screen 
        name="subscription"
        options={{ headerShown: true, title: "Subscription" }}
      />
      <Stack.Screen 
        name="purchase"
        options={{ headerShown: true, title: "Subscription" }}
      />
    </Stack>
  );
};

export default Layout;
