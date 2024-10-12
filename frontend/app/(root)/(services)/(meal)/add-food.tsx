import { router } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";

const AddMealPage = () => {
  const handleSelectMeal = (mealType: string) => {
    router.push({
      pathname: "/(meal)/my-meals",
      params: { mealType },
    });
  };

  return (
    <View className="flex-1 pb-96 pt-4 justify-center items-center bg-white">
      <Text className="text-2xl mb-4 font-bold text-center">Add Meal to</Text>
      {["Breakfast", "Lunch", "Dinner", "Snacks"].map((mealType,index) => (
        <TouchableOpacity
          key={index}
          className="bg-[#159339] w-80 py-3 my-2 rounded-full"
          onPress={() => handleSelectMeal(mealType)}
        >
          <Text className="text-white text-center text-lg font-bold">
            {mealType}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AddMealPage;
