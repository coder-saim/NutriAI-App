import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPasswordNow = () => {
  const isLoaded = false;

  const [form, setForm] = useState({
    password: "",
    retype_password: ""
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onPressVerify = async () => {
    router.replace("/(auth)/sign-in");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white pt-8">
        <View className="relative w-full h-[280px]">
          <Image
            source={images.resetPasswordnow}
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
            label="Password"
            placeholder="Enter new password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <InputField
            label="Retype Password"
            placeholder="Retype password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Reset Password"
            onPress={onPressVerify}
            className="mt-2"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPasswordNow;
