import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const GlucoseReport = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView className="flex-1 bg-white px-4">
      <View className="flex-row justify-between items-center mt-4 mb-2">
        <Text className="text-lg font-semibold">Report</Text>
        <Text className="text-lg font-semibold text-black">Glucose</Text>
      </View>

      <View className="mb-4 py-4 rounded-lg">
        <Text className="font-semibold text-lg mb-2 text-center">
          Weekly average, glucose level
        </Text>
        <LineChart
          data={{
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
              {
                data: [90, 120, 140, 200, 150, 160, 180],
              },
            ],
          }}
          width={screenWidth - 60} // from react-native
          height={200}
          chartConfig={{
            backgroundColor: "#16a34a",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(30,180,50, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "0",
              stroke: "#16a34a",
            },
          }}
        //   bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Weekly summary</Text>
        <View className="flex-row justify-between">
          <View className="bg-green-100 p-4 rounded-lg flex-1 mr-2">
            <Text className="font-bold text-lg text-red-600">
              Highest Glucose
            </Text>
            <Text className="font-semibold">216 mg/dl</Text>
          </View>
          <View className="bg-green-100 p-4 rounded-lg flex-1">
            <Text className="font-bold text-lg text-green-600">
              Avg Glucose
            </Text>
            <Text className="font-semibold">116 mg/dl</Text>
          </View>
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-semibold mb-2">Monthly summary</Text>
        <View className="flex-row justify-between">
          <View className="bg-green-100 p-4 rounded-lg flex-1 mr-2">
            <Text className="font-bold text-lg text-red-600">
              Highest Glucose
            </Text>
            <Text className="font-semibold">216 mg/dl</Text>
          </View>
          <View className="bg-green-100 p-4 rounded-lg flex-1">
            <Text className="font-bold text-lg text-green-600">
              Avg Glucose
            </Text>
            <Text className="font-semibold">144 mg/dl</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity className="bg-[#159339] p-3 rounded-full items-center mb-6 flex-row justify-center">
        <Text className="font-semibold text-lg text-white mr-2">
          Download report
        </Text>
        <FontAwesome5 name="download" size={16} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GlucoseReport;
