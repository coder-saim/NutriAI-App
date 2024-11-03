import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { baseURL } from "@/constants/api";
import axios from "axios";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  const isLoaded = false;

  const [form, setForm] = useState({
    email: "",
  });

  const onPressVerify = async () => {
    await axios
      .post(`${baseURL}/users/email_verification`, { email: form.email })
      .then(async (response) => {
        console.log("OTP code sent successful:", response.status);
        if (response.status == 200) {
          ToastAndroid.show("OTP code sent to your email!", ToastAndroid.SHORT);
          router.push({
            pathname: "/(auth)/reset-password-verify",
            params: { email: form.email },
          });
        }
      })
      .catch((error) => {
        console.error("OTP code sent failed:", error);
      });
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white mt-8">
        <View className="">
          <Image source={images.resetPassword} className="w-72 h-72 ml-8" />
          <Text className="text-3xl text-black font-JakartaSemiBold text-center">
            Get Started Now!
          </Text>
          <Text className="text-md text-slate-500 font-JakartaSemiBold text-center">
            reset your password
          </Text>
        </View>
        <View className="px-5 py-4">
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
            className="mt-2"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
