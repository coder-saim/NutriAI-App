import OtpVerification from "@/components/OtpVerification";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { baseURL } from "@/constants/api";
import { ToastAndroid } from "react-native";

export default function EmailVerification() {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const handleOtpVerify = async (otp: number) => {
    setIsLoading(true);
    // console.log("OTP Verified:", otp, email);
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
          setIsLoading(false);
          router.replace("/(profile-building)/more-info");
        }
      })
      .catch((error) => {
        setIsLoading(false);
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
      loading={isLoading}
    />
  );
}
