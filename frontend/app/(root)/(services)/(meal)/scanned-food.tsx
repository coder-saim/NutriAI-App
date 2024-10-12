import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ImageScreen = () => {
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();

  return (
    <View>
      <Image source={{ uri: imageUri }} className="w-full h-80" />
      <TouchableOpacity
        onPress={() => router.push("/(meal)/analyzed-food")}
        className="bg-[#159339] py-3 my-8 mx-4 rounded-full items-center"
      >
        <Text className="text-white text-lg font-bold">Analyze Food</Text>
      </TouchableOpacity>
    </View>
  );
}; 

export default ImageScreen;
