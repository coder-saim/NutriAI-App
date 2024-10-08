import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function OtpVerificationScreen() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
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

  const handleOtpChange = (value: any, index: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    Alert.alert("OTP Entered", otp.join("")); // Join the OTP array and display it
  };

  const handleResend = () => {
    setTimer(30); // Reset the timer
    setResendDisabled(true); // Disable the resend button again
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-6">
      <Image source={images.email_verify} className="w-full h-[250px]" />

      <Text className="text-3xl font-bold text-black mt-12 mb-2">
        Almost there
      </Text>

      <Text className="text-center text-black mb-6">
        Please enter the 6-digit code sent to your email{" "}
        <Text className="text-green-700 font-semibold">
          john@gmail.com
        </Text>{" "}
        for verification.
      </Text>

      
      <View className="flex-row justify-between mb-6">
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

      <CustomButton title="Verity" onPress={handleVerify} className="mb-4" />

      
      <View className="flex-row justify-center mb-2">
        <Text className="text-black">Didn't receive any code? </Text>
        <TouchableOpacity
          onPress={handleResend}
          disabled={resendDisabled}
          className={resendDisabled ? "text-gray-400" : "text-red-500"}
        >
          <Text className={resendDisabled ? "text-gray-400" : "text-red-500"}>
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
