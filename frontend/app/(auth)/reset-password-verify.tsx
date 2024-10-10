import OtpVerification from "@/components/OtpVerification";
import { router } from "expo-router";
import React from "react";

export default function ResetPasswordVerification() {
  const handleOtpVerify = (otp: number) => {
    console.log("OTP Verified:", otp);
    router.replace("/(auth)/reset-password-now")
  };

  return (
    <OtpVerification
      email="john@gmail.com"
      onVerify={handleOtpVerify}
      otpLength={6}
      timerDuration={30}
    />
  );
}
