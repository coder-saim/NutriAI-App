import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { icons } from "@/constants";
import { router } from "expo-router";

export default function AddReminder() {
  
  const [reminderType, setReminderType] = useState("");
  const [reminderDate, setReminderDate] = useState(new Date());
  const [reminderTime, setReminderTime] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || reminderDate;
    setShowDatePicker(Platform.OS === "ios"); // On iOS, keep picker open
    setReminderDate(currentDate);
  };

  const onChangeTime = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || reminderTime;
    setShowTimePicker(Platform.OS === "ios"); // On iOS, keep picker open
    setReminderTime(currentTime);
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 py-4">
        <Text className="text-lg font-semibold mb-4">Add Reminder</Text>

        <View className="flex-row items-center bg-green-50 p-4 rounded-full mb-4">
          <TextInput
            placeholder="reminder type"
            value={reminderType}
            onChangeText={setReminderType}
            className="flex-1 text-black"
          />
          <Image source={icons.bell} className="w-6 h-6" />
        </View>

        <TouchableOpacity
          onPress={() => setShowTimePicker(true)}
          className="flex-row items-center bg-green-50 p-4 rounded-full mb-4"
        >
          <Text className="flex-1 text-black">{formatTime(reminderTime)}</Text>
          <Image source={icons.clock} className="w-6 h-6" />
        </TouchableOpacity>

        {showTimePicker && (
          <DateTimePicker
            value={reminderTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
          />
        )}

        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          className="flex-row items-center bg-green-50 p-4 rounded-full mb-4"
        >
          <Text className="flex-1 text-black">{formatDate(reminderDate)}</Text>
          <Image source={icons.calendar} className="w-6 h-6" />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={reminderDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <TouchableOpacity
          onPress={() => router.push("/(reminder)/show-reminder")}
          className="bg-[#159339] p-3 rounded-full mt-8 flex-row justify-center items-center"
        >
          <Text className="text-white text-lg font-semibold">Add Reminder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
