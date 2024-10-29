import OtpVerification from "@/components/OtpVerification";
import { baseURL } from "@/constants/api";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { ToastAndroid } from "react-native";

export default function ResetPasswordVerification() {
  const { email } = useLocalSearchParams<{ email: string }>();

  const handleOtpVerify = async (otp: number) => {
    console.log("OTP Verified:", otp);
    await axios
      .post(`${baseURL}/users/otp_verification`, {
        email: email,
        input_otp: otp,
      })
      .then(async (response) => {
        console.log("OTP verification successfull: ", response.status);
        if (response.status == 200) {
          ToastAndroid.show(
            "OTP verification successfull!",
            ToastAndroid.SHORT
          );
          router.push({
            pathname: "/(auth)/reset-password-now",
            params: { email: email },
          });
        }
      })
      .catch((error) => {
        console.log("OTP verification failed:", error);
        ToastAndroid.show("Invalid OTP!", ToastAndroid.SHORT);
      });
  };

  return (
    <OtpVerification
      email={email}
      onVerify={handleOtpVerify}
      otpLength={6}
      timerDuration={30}
    />
  );
}
