import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { baseURL } from "@/constants/api";
import axios from "axios";
import { Link, router, useLocalSearchParams } from "expo-router";
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

const ResetPasswordNow = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { email } = useLocalSearchParams<{ email: string }>();

  const [form, setForm] = useState({
    password: "",
    retype_password: "",
  });

  const onPressVerify = async () => {
    setIsLoading(true);
    if (form.password === form.retype_password) {
      await axios
        .put(`${baseURL}/users/reset_password`, {
          username: email,
          password: form.password,
        })
        .then(async (response) => {
          console.log("Reset password successfull: ", response.status);
          if (response.status == 200) {
            ToastAndroid.show(
              "Reset password successfull!",
              ToastAndroid.SHORT
            );
            router.replace("/(auth)/sign-in");
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.log("Reset password failed:", error);
          ToastAndroid.show("Reset password!", ToastAndroid.SHORT);
        });
    } else {
      setIsLoading(false);
      ToastAndroid.show("Password does not match!", ToastAndroid.SHORT);
    }
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
            value={form.retype_password}
            onChangeText={(value) =>
              setForm({ ...form, retype_password: value })
            }
          />

          <CustomButton
            title="Reset Password"
            onPress={onPressVerify}
            className="mt-2"
            loading={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPasswordNow;
