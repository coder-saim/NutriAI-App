import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SingUp = () => {
  const [signIn, setActive] = useState();
  const isLoaded = false;
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {};

  const onPressVerify = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white pt-8">
        <View className="relative w-full h-[250px]">
          <Image source={images.signIn} className="z-0 w-full h-[250px]" />
          <Text className="text-3xl text-black font-JakartaSemiBold pt-8 text-center">
            Get Started Now!
          </Text>
          <Text className="text-md text-slate-500 font-JakartaSemiBold text-center">
            by creating a free account
          </Text>
        </View>
        <View className="px-5 py-20">
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
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
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-green-700">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingUp;
