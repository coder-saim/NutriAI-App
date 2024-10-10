import { images } from "@/constants";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const reminders = [
  {
    id: 1,
    title: "Meal Reminder",
    time: "08:30 am",
    date: "12/08/24",
    image: images.meal,
  },
  {
    id: 2,
    title: "Medicine Reminder",
    time: "08:30 am",
    date: "12/08/24",
    image: images.meal,
  },
  {
    id: 3,
    title: "Walking Reminder",
    time: "08:30 am",
    date: "12/08/24",
    image: images.meal,
  },
  {
    id: 4,
    title: "Meal Reminder",
    time: "08:30 am",
    date: "12/08/24",
    image: images.meal,
  },
  {
    id: 5,
    title: "Walking Reminder",
    time: "08:30 am",
    date: "12/08/24",
    image: images.meal,
  },
  {
    id: 6,
    title: "Meal Reminder",
    time: "08:30 am",
    date: "12/08/24",
    image: images.meal,
  },
];

export default function ReminderScreen() {
  const [enabled, setEnabled] = useState(reminders.map(() => true));
  const navigation = useNavigation();

  const toggleSwitch = (index: number) => {
    setEnabled((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="px-4 mt-4">
        <Text className="text-sm text-black mb-2">Recent Reminders</Text>
        {reminders.map((reminder, index) => (
          <View
            key={reminder.id}
            className="flex-row items-center justify-between bg-green-50 rounded-lg p-4 mb-4"
          >
            <View className="flex-row items-center">
              <Image
                source={reminder.image}
                className="w-12 h-12 rounded-full"
              />
              <View className="ml-4">
                <Text className="text-lg font-semibold">{reminder.title}</Text>
                <Text className="text-green-500">{reminder.time}</Text>
                <Text className="text-gray-600">{reminder.date}</Text>
              </View>
            </View>
            <Switch
              value={enabled[index]}
              onValueChange={() => toggleSwitch(index)}
              trackColor={{ false: "#767577", true: "#159339" }}
              thumbColor={enabled[index] ? "#c9fac5" : "#f4f3f4"}
            />
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        className="flex-row justify-center items-center bg-[#159339] p-3 rounded-full mx-4 my-6"
        onPress={() => router.push("/(services)/(reminder)/add-reminder")}
      >
        <Text className="text-white text-lg font-semibold">Add a reminder</Text>
      </TouchableOpacity>
    </View>
  );
}
