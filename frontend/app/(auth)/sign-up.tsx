import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const SingUp = () => {
  const [strength, setStrength] = useState(0);
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

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePasswordStrength = (password: string) => {
    const minLength = /.{8,}/; // At least 8 characters
    const hasUpperCase = /[A-Z]/; // At least one uppercase letter
    const hasLowerCase = /[a-z]/; // At least one lowercase letter
    const hasNumber = /[0-9]/; // At least one digit
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    if (!minLength.test(password)) {
      ToastAndroid.show(
        "Password at least 8 characters long!",
        ToastAndroid.SHORT
      );
      return true;
    } else setStrength(strength + 1);
    if (!hasUpperCase.test(password)) {
      ToastAndroid.show(
        "Password at least one uppercase letter!",
        ToastAndroid.SHORT
      );
      return true;
    } else setStrength(strength + 1);
    if (!hasLowerCase.test(password)) {
      ToastAndroid.show(
        "Password at least one lowercase letter!",
        ToastAndroid.SHORT
      );
      return true;
    } else setStrength(strength + 1);
    if (!hasNumber.test(password)) {
      ToastAndroid.show("Password at least one digit!", ToastAndroid.SHORT);
      return true;
    } else setStrength(strength + 1);
    if (!hasSpecialChar.test(password)) {
      ToastAndroid.show(
        "Password at least one special character!",
        ToastAndroid.SHORT
      );
      return true;
    } else setStrength(strength + 1);
  };

  const onSignUpPress = async () => {

    router.replace("/(profile-building)/more-info");

    // if (!form.name || !form.email || !form.password) {
    //   ToastAndroid.show(
    //     "Name, Email or Password can not be empty!",
    //     ToastAndroid.SHORT
    //   );
    //   return;
    // }

    // if (!validateEmail(form.email)) {
    //   ToastAndroid.show("Email should be valid!", ToastAndroid.SHORT);
    //   return;
    // }

    // if (validatePasswordStrength(form.password)) {
    //   return;
    // }

    // await axios
    //   .post("http://192.168.1.7:8000/users/register", form)
    //   .then(async (response) => {
    //     console.log("Sign Up successful:", response.status);
    //     if (response.status == 201) {
    //       await AsyncStorage.setItem("authToken", JSON.stringify(true));
    //       router.push("/(auth)/email-verify");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Login failed:", error);
    //   });
  };

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
