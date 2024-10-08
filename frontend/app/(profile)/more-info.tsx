import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
} from "react-native";

export default function MoreInfo() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-6">
      <Text className="text-[32px] font-bold text-black mb-8">
        Let's get to know you
      </Text>
      <Image source={images.moreinfo} className="w-full h-64 mb-4" />
      <Text className="text-base font-medium text-center text-black mb-20">
        We’ll need a few details from you to create a personalized experience
      </Text>
      <CustomButton title="Let's go" className="rounded-2xl" />
    </View>
  );
}
