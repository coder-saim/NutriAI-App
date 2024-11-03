import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { baseURL } from "@/constants/api";
import { OtpVerificationProps } from "@/types/type";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";

export default function OtpVerification({
  email,
  onVerify,
  otpLength = 6,
  timerDuration = 30,
}: OtpVerificationProps) {
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(""));
  const [timer, setTimer] = useState(timerDuration);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        setResendDisabled(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    if (otp.every((digit) => digit !== "")) {
      onVerify(parseInt(otp.join(""))); // Call the provided onVerify function
    } else {
      ToastAndroid.show("Please enter the complete OTP!", ToastAndroid.SHORT);
    }
  };

  const sendOtpCode = async () => {
    await axios
      .post(`${baseURL}/users/email_verification`, { email: email })
      .then(async (response) => {
        console.log("OTP code sent successful:", response.status);
        if (response.status == 200) {
          ToastAndroid.show("OTP code sent to your email!", ToastAndroid.SHORT);
        }
      })
      .catch((error) => {
        console.error("OTP code sent failed:", error);
      });
  };

  const handleResend = () => {
    setTimer(timerDuration);
    setResendDisabled(true);
    sendOtpCode();
  };

  return (
    <View className="flex justify-center items-center bg-gray-100 px-6">
      <Image source={images.email_verify} className="w-72 h-72 mt-8" />

      <Text className="text-3xl font-bold text-black mb-2">Almost there</Text>

      <Text className="text-center text-black mb-4">
        Please enter the {otpLength}-digit code sent to your email{" "}
        <Text className="text-green-700 font-semibold">{email}</Text> for
        verification.
      </Text>

      <View className="flex-row justify-between mb-4">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            maxLength={1}
            keyboardType="numeric"
            className="border border-black rounded-lg text-center text-lg font-semibold w-10 h-10 mx-1"
          />
        ))}
      </View>

      <CustomButton title="Verify" onPress={handleVerify} className="mb-4" />

      <View className="flex-row justify-center mb-2">
        <Text className="text-black">Didn't receive any code? </Text>
        <TouchableOpacity
          onPress={handleResend}
          disabled={resendDisabled}
          className={resendDisabled ? "text-gray-400" : "text-red-500"}
        >
          <Text className={resendDisabled ? "text-gray-400" : "text-green-600"}>
            Resend Again
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-black text-center">
        Request a new code in 00:{timer < 10 ? `0${timer}` : timer}s
      </Text>
    </View>
  );
}
