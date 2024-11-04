import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { icons, images } from "@/constants"; // Assuming your constants for icons/images
import { FontAwesome5 } from "@expo/vector-icons";

export default function GlucoseMeterConnected() {
  const [manualValue, setManualValue] = useState("");
  const [displayValue, setDisplayValue] = useState("7.5 mmol/L");

  const handleManualSubmit = () => {
    if (manualValue) {
      setDisplayValue(`${manualValue} mmol/L`);
      setManualValue(""); // Clear the input field after submission
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-4">
      <Text className="text-2xl font-semibold text-center text-black">
        Glucose Meter Connected
      </Text>
      <View className="flex justify-center items-center my-8">
        <Image
          source={images.glucometer}
          className="w-44 h-44"
          resizeMode="contain"
        />
      </View>

      <View className="flex items-center">
        <Text className="text-lg text-black mt-4">
          Glucose Level: <Text className="font-bold">{displayValue}</Text>
        </Text>
        <Text className="text-lg text-black">
          Status: <Text className="text-green-600 font-semibold">Normal</Text>
        </Text>
      </View>

      <View className="mt-8">
        <TextInput
          placeholder="Enter glucose value manually"
          value={manualValue}
          onChangeText={setManualValue}
          keyboardType="numeric"
          className="border border-gray-300 rounded-md px-4 py-2 text-black"
        />
        <TouchableOpacity
          className="flex-row items-center justify-center bg-blue-600 rounded-full py-3 mt-4"
          onPress={handleManualSubmit}
        >
          <Text className="text-white font-semibold text-lg mr-2">
            Submit
          </Text>
          <FontAwesome5 name="check" size={16} color="white" />
        </TouchableOpacity>
      </View>

      {/* <View className="mt-auto mb-6">
        <TouchableOpacity
          className="flex-row items-center justify-center bg-[#159339] rounded-full py-3"
          onPress={() => console.log("Download report")}
        >
          <Text className="text-white font-semibold text-lg mr-2">
            Download report
          </Text>
          <FontAwesome5 name="download" size={16} color="white" />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
