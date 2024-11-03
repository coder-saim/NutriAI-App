import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { images } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { data } from '../../../../constants/index';

const AnalyzedFoodScreen = () => {
  const { analysisData } = useLocalSearchParams<{ analysisData: string }>();
  const foodData = analysisData ? JSON.parse(analysisData) : null;

  const food = foodData?.data?.items?.[0]?.food?.[0]?.food_info

  console.log(food?.nutrition?.calories_100g);
      
  const nutritionInfo = {
    protein: food?.protein || 0,
    calories: food?.calories || 0,
    fat: food?.fat || 0,
    carbs: food?.carbs || 0,
  };

  const calorie = food?.nutrition?.calories_100g || 0;
  const protein = food?.nutrition?.proteins_100g || 0;
  const fat = food?.nutrition?.fat_100g || 0;
  const carbs = food?.nutrition?.carbs_100g || 0


  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="items-center">
        <Image source={images.burger} className="w-32 h-32" />
      </View>

      <View className="p-4 rounded-xl mb-2">
        <Text className="text-3xl font-bold text-center text-gray-800">
          {food?.display_name}
        </Text>
      </View>
      <View className="bg-green-100 p-4 rounded-xl mb-6">
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Calories</Text>
            <Text className="text-xl font-bold text-green-600">
              {calorie} kCal
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Protien</Text>
            <Text className="text-xl font-bold text-green-600">
              {protein}g
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Carbohydrates</Text>
            <Text className="text-xl font-bold text-green-600">
              {carbs}g
            </Text>
          </View>
          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">Fat</Text>
            <Text className="text-xl font-bold text-green-600">
              {fat}g
            </Text>
          </View>
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