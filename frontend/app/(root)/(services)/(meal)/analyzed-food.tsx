import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { images } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";

const AnalyzedFoodScreen = () => {
  const { analysisData } = useLocalSearchParams<{ analysisData: string }>();
  const foodData = analysisData ? JSON.parse(analysisData) : null;

  // Extract nutrition information from the API response
  const nutritionInfo = foodData?.data?.items?.[0]?.nutrition || {
    protein: "0",
    calories: "0",
    fat: "0",
    carbs: "0"
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="items-center mb-6">
        <Image source={images.burger} className="w-32 h-32" />
      </View>

      <View className="bg-green-100 p-4 rounded-xl mb-6">
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Protein</Text>
            <Text className="text-xl font-bold text-green-600">
              {nutritionInfo.protein}g
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Calories</Text>
            <Text className="text-xl font-bold text-green-600">
              {nutritionInfo.calories}
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Fat</Text>
            <Text className="text-xl font-bold text-green-600">
              {nutritionInfo.fat}g
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Carbs</Text>
            <Text className="text-xl font-bold text-green-600">
              {nutritionInfo.carbs}g
            </Text>
          </View>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-2">Details</Text>
        <Text className="text-sm text-gray-600">
          {foodData?.data?.items?.[0]?.name || "Food item"}{" "}
          <Text className="text-green-600 font-bold">Read More...</Text>
        </Text>
      </View>

      {/* Rest of your existing UI components */}
      
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