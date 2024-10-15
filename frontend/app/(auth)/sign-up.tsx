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
    phone: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    router.push("/(auth)/email-verify");
  };

  const onPressVerify = async () => {};

  return (
    <ScrollView className="flex bg-white">
      <View className="flex bg-white">
        <View>
          <Image source={images.signIn} className="w-72 h-72 ml-8" />
          <Text className="text-3xl text-black font-JakartaSemiBold text-center">
            Get Started Now!
          </Text>
          <Text className="text-md text-slate-500 font-JakartaSemiBold text-center">
            by creating a free account
          </Text>
        </View>

        <View className="px-5 py-4">
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Phone"
            placeholder="Enter phone number"
            icon={icons.phone}
            textContentType="telephoneNumber"
            value={form.phone}
            onChangeText={(value) => setForm({ ...form, phone: value })}
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
            className="mt-2"
          />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-2"
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
