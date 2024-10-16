import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { router } from "expo-router";

const editProfile = () => {
  return (
    <ScrollView className="flex bg-white">
      <View className="flex h-full items-center bg-white">
        <Image source={images.avatar} className="w-52 h-52 mt-2" />
        <Text className="text-3xl font-semibold">John Doe</Text>
        <View className="px-5 w-full">
          <InputField
            label="Name"
            placeholder="Enter your full name"
            icon={icons.person}
            labelOn={true}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            textContentType="emailAddress"
            labelOn={true}
          />
          <InputField
            label="Phone"
            placeholder="Enter your phone number"
            icon={icons.phone}
            textContentType="telephoneNumber"
            labelOn={true}
          />
          <TouchableOpacity
            className="bg-[#159339] w-80 py-3 mt-2 rounded-full mb-6"
            onPress={() => router.push("/main-profile")}
          >
            <Text className="text-white text-center text-lg font-bold">
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default editProfile;
