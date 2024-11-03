import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ToastAndroid,
  StatusBar,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseURL } from "@/constants/api";

const SignIn = () => {
  const showToast = () => {
    ToastAndroid.show("Comming Soon!", ToastAndroid.SHORT);
  };

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onSignInPress = async () => {
    if (!form.username || !form.password) {
      ToastAndroid.show("Invalid credentials!", ToastAndroid.SHORT);
      return;
    }
    await axios
      .post(`${baseURL}/users/login`, form)
      .then(async (response) => {
        console.log("Login successful:", response.status);
        if (response.status == 200) {
          await AsyncStorage.setItem(
            "authToken",
            JSON.stringify(form.username)
          );
          ToastAndroid.show("Sign In successful!", ToastAndroid.SHORT);
          router.replace("/(root)/(tabs)/home");
        }
      })
      .catch((error) => {
        console.log("Login failed:", error);
        ToastAndroid.show("Invalid credentials!", ToastAndroid.SHORT);
      });
  };

  const handleGoogleSignIn = async () => {
    showToast();
    // Alert.alert("Comming Soon!");
    const authToken = await AsyncStorage.getItem("authToken");
    console.log(authToken);
  };

  return (
    <ScrollView className="flex bg-white">
      <View className="flex bg-white">
        <View>
          <Image source={images.signIn} className="w-72 h-72 ml-8" />
          <Text className="text-3xl text-black font-JakartaSemiBold text-center">
            Welcome Back 👋
          </Text>
          <Text className="text-md text-slate-500 font-JakartaSemiBold text-center">
            sign in to access your account
          </Text>
        </View>

        <StatusBar
          backgroundColor="white" // Background color for Android
          barStyle="dark-content" // Light-content for iOS and Android
          hidden={false} // Show or hide the status bar
        />

        <View className="px-5 py-4">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.username}
            onChangeText={(value) => setForm({ ...form, username: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-2"
          />

          <View className=" mt-2 mx-2">
            {/* <View className="flex-row items-center mb-2">
              <TouchableOpacity className="mr-2">
                <View className="h-4 w-4 border border-gray-400 rounded"></View>
              </TouchableOpacity>
              <Text className="text-gray-600">Remember me</Text>
            </View> */}

            <TouchableOpacity
              onPress={() => router.push("/(auth)/reset-password")}
            >
              <Text className="text-right mr-2 text-red-500">Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-between mx-2">
            <View className="w-32 border-b border-gray-300 my-4"></View>
            <Text className="text-black pt-2">Or</Text>
            <View className="w-32 border-b border-gray-300 my-4"></View>
          </View>
          <CustomButton
            title="Continue with Google"
            className="w-full shadow-none"
            IconLeft={() => (
              <Image
                source={icons.google}
                resizeMode="contain"
                className="w-5 h-5 mx-2"
              />
            )}
            bgVariant="outline"
            textVariant="primary"
            onPress={handleGoogleSignIn}
          />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-2"
          >
            Don't have an account?{" "}
            <Text className="text-green-700">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
