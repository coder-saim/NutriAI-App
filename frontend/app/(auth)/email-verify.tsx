import OtpVerification from "@/components/OtpVerification";
import React from "react";
import { router } from "expo-router";



export default function EmailVerification() {

  const handleOtpVerify = (otp: number) => {
    console.log("OTP Verified:", otp); 
    router.replace("/(profile-building)/more-info");
    // Handle OTP verification logic here
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
