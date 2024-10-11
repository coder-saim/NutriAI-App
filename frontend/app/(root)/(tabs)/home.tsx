import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-gray-100 px-4 py-6">
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl mt-4 font-semibold text-green-700">
          Hello John,
        </Text>
      </View>
      <Text className="text-sm text-black mb-6">
        Find, track and eat healthy food.
      </Text>

      <View className="bg-green-100 rounded-lg p-4 mb-6">
        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-green-700 font-semibold">
            Sugar Level
          </Text>
          <Text className="text-sm text-green-700">6.5 Normal</Text>
        </View>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-2xl font-bold text-black">6.5</Text>
          <Text className="text-sm text-red-600">1.2 Danger</Text>
        </View>
        <TouchableOpacity className="bg-[#159339] rounded-full py-4 px-4 mt-4">
          <Text className="text-center text-white font-semibold">
            Track Your Weekly Progress
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-lg font-semibold text-black mb-4">
        Our Services
      </Text>
      <View className="flex flex-row justify-around bg-green-100 rounded-lg ">
        <TouchableOpacity
          onPress={() => router.push("/(services)/(reminder)/reminder")}
          className="p-4 items-center"
        >
          <FontAwesome5 name="clock" size={26} color="green" />
          <Text className="mt-2 text-sm font-semibold text-black">
            Reminder
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(services)/tracking-activity")} className="p-4 items-center">
          <FontAwesome5 name="running" size={26} color="green" />
          <Text className="mt-2 text-sm font-semibold text-black">
            Tracking Activity
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-around bg-green-100 rounded-lg ">
        <TouchableOpacity onPress={() => router.push("/(meal)/scan-food")} className="p-4 items-center">
          <FontAwesome5 name="utensils" size={26} color="green" />
          <Text className="mt-2 text-sm font-semibold text-black">
            Meal Planner
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(services)/blood-suger")}
          className="p-4 items-center"
        >
          <FontAwesome5 name="heartbeat" size={26} color="green" />
          <Text className="mt-2 text-sm font-semibold text-black">
            Blood Sugar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
