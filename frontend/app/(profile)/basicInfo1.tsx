import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { ProgressBar, MD3Colors } from 'react-native-paper';
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function BasicInfo1() {

  const handleNext = async () => {
    router.replace("/basicInfo2");
  }

  return (
    <View className="flex-1 pt-6 bg-white px-6">
      <Text className="text-2xl text-left font-bold text-black mt-24 mb-10">
        Please mention your basic info
      </Text>
      <InputField
            label="Age"
            placeholder="Age"
            className="rounded-lg"
            keyboardType="numeric"
          />
      <InputField
            label="Height"
            placeholder="Gender"
            className="rounded-lg"
          />
      <InputField
            label="Weight"
            placeholder="Weight"
            className="rounded-lg"
            keyboardType="numeric"
          />

      <TouchableOpacity onPress={handleNext} className="rounded-xl border-original-100 mt-auto mb-10 border h-16 justify-end">
        <View className="flex-row justify-between mx-8 mb-4">
          <Text className="text-original-100 text-lg font-bold">Next</Text>
          <Text className="text-original-100 text-lg font-bold">1/4</Text>
        </View>
        <View className="absolute bottom-0 left-0 right-0">
          <ProgressBar 
            className="rounded-b-full mx-[3px] mb-[0.25px]" 
            progress={1/4} 
            color={MD3Colors.neutral70} 
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
