import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { images } from "@/constants";
import { Meal } from "@/types/type";
import { router } from "expo-router";

const mealData: { [key: string]: Meal[] } = {
  Breakfast: [
    {
      name: "Oatmeal",
      protein: "15g",
      calories: "180g",
      fat: "8g",
      carbs: "30g",
    },
    {
      name: "Egg Toast",
      protein: "20g",
      calories: "250g",
      fat: "10g",
      carbs: "45g",
    },
  ],
  Lunch: [
    {
      name: "Rice & Chicken",
      protein: "35g",
      calories: "320g",
      fat: "12g",
      carbs: "60g",
    },
  ],
  Dinner: [
    {
      name: "Grilled Fish",
      protein: "40g",
      calories: "280g",
      fat: "15g",
      carbs: "20g",
    },
  ],
  Snacks: [
    {
      name: "Fruit Salad",
      protein: "5g",
      calories: "120g",
      fat: "2g",
      carbs: "35g",
    },
  ],
};

const MyMealsPage = () => {
  const [meal_type, setMeal_Type] = useState("Breakfast");
  const selectedMeals = mealData[meal_type] || [];

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="flex-row ml-1 mb-4">
        <TouchableOpacity
          onPress={() => router.push("/(meal)/my-meals")}
          className="bg-green-100 border border-green-300 px-14 py-3 rounded-l-lg"
        >
          <Text className="text-black text-center font-bold">My Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(meal)/suggested-meals")}
          className="bg-[#159339] px-7 py-3 rounded-r-lg"
        >
          <Text className="text-white text-center font-bold">
            Suggested Meals
          </Text>
        </TouchableOpacity>
      </View>

      

      <View className="flex-row justify-around mb-4">
        {["Breakfast", "Lunch", "Dinner", "Snacks"].map((meal, index) => (
          <TouchableOpacity onPress={() => setMeal_Type(meal)} key={index}>
            {meal_type === meal ? (
              <Text className="text-[#159339] border-b border-[#159339] font-bold">
                {meal}
              </Text>
            ) : (
              <Text className="text-black font-bold">{meal}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {selectedMeals.length > 0 ? (
        selectedMeals.map((meal: any, index: number) => (
          <View
            key={index}
            className="flex-row justify-between items-center bg-green-100 rounded-lg p-4 mb-4"
          >
            <Image source={images.meal} className="w-16 h-16 rounded-full" />

            <View className="flex-1 ml-4">
              <Text className="text-lg font-bold">{meal.name}</Text>
              <View className="flex-row justify-between mt-2">
                <View>
                  <Text className="text-gray-500">Protein: {meal.protein}</Text>
                  <Text className="text-gray-500">
                    Calories: {meal.calories}
                  </Text>
                </View>
                <View>
                  <Text className="text-gray-500">Fat: {meal.fat}</Text>
                  <Text className="text-gray-500">Carbs: {meal.carbs}</Text>
                </View>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text className="text-center text-gray-500">
          No meals available for {meal_type}.
        </Text>
      )}

      <TouchableOpacity
        onPress={() => router.push("/(tabs)/camera")}
        className="bg-[#159339] py-3 rounded-full mt-4"
      >
        <Text className="text-white text-center font-bold text-lg">
          Add more
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MyMealsPage;
