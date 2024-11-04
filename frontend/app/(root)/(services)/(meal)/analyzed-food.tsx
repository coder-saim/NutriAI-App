import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const AnalyzedFoodScreen = () => {
  const { analysisData, imageUri } = useLocalSearchParams<{ analysisData: string; imageUri: string }>();
  const foodData = analysisData ? JSON.parse(analysisData) : null;

  const food = foodData?.data?.items?.[0]?.food?.[0]?.food_info;


  
  const formatNumber = (num: any) => {

    return num % 1 === 0 ? num.toString() : num.toFixed(2).replace(/\.?0+$/, '');
  };

  const calories = formatNumber(food?.nutrition?.calories_100g || 0);
  const protein = formatNumber(food?.nutrition?.proteins_100g || 0);
  const fat = formatNumber(food?.nutrition?.fat_100g || 0);
  const carbs = formatNumber(food?.nutrition?.carbs_100g || 0);

  const finalData = {
    name: food?.display_name,
    calories,
    protein,
    fat,
    carbs,
  };

  const mealData = JSON.stringify(finalData);
  
  const handleAddToMeal = () => {
    router.push({
      pathname: "/(meal)/add-food",
      params: { mealData, imageUri },
    });
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="items-center">
          <Image source={{ uri: imageUri }} className="w-full h-60" />
        </View>

        <View className="p-4 rounded-xl mb-2">
          <Text className="text-3xl font-bold text-center text-gray-800">
            {food?.display_name}
          </Text>
        </View>
        <View className="bg-green-100 p-4 mx-2 rounded-xl mb-6">
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-lg font-bold text-gray-800">Calories</Text>
              <Text className="text-xl font-semibold text-green-600">
                {calories} Cal
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold text-gray-800">Protein</Text>
              <Text className="text-xl font-semibold text-green-600">
                {protein} g
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold text-gray-800">Carbs</Text>
              <Text className="text-xl font-semibold text-green-600">
                {carbs} g
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-lg font-bold text-gray-800">Fat</Text>
              <Text className="text-xl font-semibold text-green-600">
                {fat} g
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="p-4">
        <TouchableOpacity
          onPress={handleAddToMeal}
          className="bg-[#159339] py-3 my-2 px-6 rounded-full items-center"
        >
          <Text className="text-white text-lg font-bold">Add to meal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleAddToMeal}
          className="bg-[#159339] py-3 px-6 mb-8 rounded-full items-center"
        >
          <Text className="text-white text-lg font-bold">Suggested meal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnalyzedFoodScreen;