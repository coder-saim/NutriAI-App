import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  const isLoaded = false;

  const [form, setForm] = useState({
    email: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onPressVerify = async () => {
    router.replace("/(auth)/reset-password-verify");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white pt-8">
        <View className="relative w-full h-[280px]">
          <Image
            source={images.resetPassword}
            className="z-0 w-full h-[280px]"
          />
          <Text className="text-3xl text-black font-JakartaSemiBold pt-8 text-center">
            Get Started Now!
          </Text>
          <Text className="text-md text-slate-500 font-JakartaSemiBold text-center">
            reset your password
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

          <CustomButton
            title="Reset Password"
            onPress={onPressVerify}
            className="mt-6"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
