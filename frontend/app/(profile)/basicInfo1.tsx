import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import React from "react";
import {
  View,
  Image,
  Text,
} from "react-native";

export default function BasicInfo1() {
  return (
    <View className="flex-1 pt-6 bg-gray-100 px-6">
      <Text className="text-2xl text-left font-bold text-black mt-24 mb-10">
        Please mention your basic info
      </Text>
      <InputField
            label="Name"
            placeholder="Age"
            className="border rounded-lg"
          />
      <InputField
            label="Gender"
            placeholder="Gender"
            className="border rounded-lg"
          />
      <InputField
            label="Weight"
            placeholder="Weight"
            className="border rounded-lg"
          />
      <InputField
            label="Height"
            placeholder="Height"
            className="border rounded-lg"
          />    
    </View>
  );
}
