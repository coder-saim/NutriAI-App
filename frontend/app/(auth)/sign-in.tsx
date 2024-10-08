import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";

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

        <View className="px-5 py-20">
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
