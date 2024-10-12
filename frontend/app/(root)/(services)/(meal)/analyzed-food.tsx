import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants";
import { router } from "expo-router";

const AnalyzedFoodScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="items-center mb-6">
        <Image source={images.burger} className="w-32 h-32" />
      </View>

      <View className="bg-green-100 p-4 rounded-xl mb-6">
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Protein</Text>
            <Text className="text-xl font-bold text-green-600">450g</Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Calories</Text>
            <Text className="text-xl font-bold text-green-600">220g</Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Fat</Text>
            <Text className="text-xl font-bold text-green-600">100g</Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Carbs</Text>
            <Text className="text-xl font-bold text-green-600">49g</Text>
          </View>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">Details</Text>
        <Text className="text-sm text-gray-600">
          A hamburger (also burger for short) is a sandwich consisting of one or
          more cooked patties of ground meat, usually beef, placed inside a
          sliced bread{" "}
          <Text className="text-green-600 font-bold">Read More...</Text>
        </Text>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">Ingredients</Text>
        <View className="flex-row justify-between">
          <Image
            source={{
              uri: "https://img.icons8.com/emoji/48/000000/onion-emoji.png",
            }}
            className="w-10 h-10"
          />
          <Image
            source={{
              uri: "https://img.icons8.com/emoji/48/000000/tomato-emoji.png",
            }}
            className="w-10 h-10"
          />
          <Image
            source={{
              uri: "https://img.icons8.com/emoji/48/000000/lettuce-emoji.png",
            }}
            className="w-10 h-10"
          />
          <TouchableOpacity className="justify-center">
            <Text className="text-green-600 font-bold">View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/(meal)/add-food")}
        className="bg-[#159339] py-3 my-2 px-6 rounded-full items-center"
      >
        <Text className="text-white text-lg font-bold">Add to meal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/(meal)/suggested-meals")}
        className="bg-[#159339] py-3 px-6 mb-8 rounded-full items-center"
      >
        <Text className="text-white text-lg font-bold">Suggested meal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AnalyzedFoodScreen;
