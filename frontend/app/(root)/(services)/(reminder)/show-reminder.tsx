import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "@/constants";

export default function ReminderDetail() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex py-8 justify-center items-center px-4">
        <Image source={icons.clock} className="w-28 h-28 mb-4" />
        <View className="bg-green-50 w-full py-6 px-4 rounded-lg items-center">
          <Text className="text-4xl font-semibold text-black mb-2">
            08:30 am
          </Text>
          <Text className="text-lg text-gray-700 mb-4">
            Saturday, September 2024
          </Text>

          <View className="w-full">
            <Text className="text-base font-semibold text-gray-800 mb-2">
              Reminder Type: <Text className="font-normal">Meal Reminder</Text>
            </Text>
            <Text className="text-base font-semibold text-gray-800 mb-2">
              Time: <Text className="font-normal">08:30 am</Text>
            </Text>
            <Text className="text-base font-semibold text-gray-800 mb-2">
              Date: <Text className="font-normal">12/08/24</Text>
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-between px-6 pb-4">
        <TouchableOpacity className="flex-1 bg-gray-300 py-3 rounded-full mr-2 items-center">
          <Text className="text-lg text-black">Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-[#159339] py-3 rounded-full ml-2 items-center">
          <Text className="text-lg text-white">Take</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
