import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Image,
  Text,
} from "react-native";

const onLetsGoPress = async () => {
  router.replace("/info-template");
};

export default function MoreInfo() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-[32px] font-bold text-black mb-8">
        Let's get to know you
      </Text>
      <Image source={images.moreinfo} className="w-full h-64 mb-4" />
      <Text className="text-base font-medium text-center text-black mb-20">
        We’ll need a few details from you to create a personalized experience
      </Text>
      <CustomButton title="Let's go" onPress={onLetsGoPress} className="" />
    </View>
  );
}
