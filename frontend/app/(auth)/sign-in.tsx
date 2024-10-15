import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { FontAwesome } from "@expo/vector-icons";

const SignIn = () => {
  const [signIn, setActive] = useState();
  const isLoaded = false;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    router.replace("/(root)/(tabs)/home");
  }, [isLoaded, form]);

  const handleGoogleSignIn = async () => {
    Alert.alert("Comming Soon!");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white pt-8">
        <View className="relative w-full h-[250px]">
          <Image source={images.signIn} className="z-0 w-full h-[250px]" />
          <Text className="text-3xl text-black font-JakartaSemiBold text-center pt-8">
            Welcome Back 👋
          </Text>
          <Text className="text-md text-slate-500 font-JakartaSemiBold text-center">
            sign in to access your account
          </Text>
        </View>

        <View className="mt-8 px-5 py-20">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <View className="flex flex-row justify-between mt-2 mx-2">
            <View className="flex-row items-center mb-2">
              <TouchableOpacity className="mr-2">
                <View className="h-4 w-4 border border-gray-400 rounded"></View>
              </TouchableOpacity>
              <Text className="text-gray-600">Remember me</Text>
            </View>

            <TouchableOpacity onPress={() => router.replace("/(auth)/reset-password")}>
              <Text className="text-right text-red-500 mb-4">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-between mx-2">
            <View className="w-32 border-b border-gray-300 my-4"></View>
            <Text className="text-black pt-2">Or</Text>
            <View className="w-32 border-b border-gray-300 my-4"></View>
          </View>
          <CustomButton
            title="Continue with Google"
            className="mt-5 w-full shadow-none"
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
            className="text-lg text-center text-general-200 mt-10"
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
