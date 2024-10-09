import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { ProgressBar, MD3Colors } from 'react-native-paper';
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function BasicInfo1() {
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
            label="Gender"
            placeholder="Gender"
            className="rounded-lg"
          />
      <InputField
            label="Weight"
            placeholder="Weight"
            className="rounded-lg"
            keyboardType="numeric"
          />
      <InputField
            label="Height"
            placeholder="Height"
            className="rounded-lg"
            keyboardType="numeric"
          />
      <TouchableOpacity className="rounded-xl border-original-100 border h-16 justify-end">
        <View className="flex-row justify-between mx-8 mb-4">
          <Text className="text-original-100 text-lg font-bold">Next</Text>
          <Text className="text-original-100 text-lg font-bold">2/4</Text>
        </View>
        <View className="absolute bottom-0 left-0 right-0">
          <ProgressBar 
            className="rounded-b-full -z-10 mx-[3px] mb-[0.25px]" 
            progress={0.5} 
            color={MD3Colors.neutral70} 
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
