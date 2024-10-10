import { ProgressBar, MD3Colors } from 'react-native-paper';
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Radio from "@/components/Radio";

export default function BasicInfo2() {

  const [type, setType] = useState("type1");


  const handleTypeChange = (value: string) => {
    setType(value);
  };

  return (
    <View className="flex-1 pt-6 bg-white px-6">
      <Text className="text-2xl text-left font-bold text-black mt-24 mb-10">
        Type of Diabetes
      </Text>

      <Radio
        options={[
          { label: "Type 1", value: "type1" },
          { label: "Type 2", value: "type2" },
          { label: "Gestational", value: "gestational" },
        ]}
        checkedValue={type}
        onChange={handleTypeChange}
      />

      <TouchableOpacity className="rounded-xl border-original-100 mt-auto mb-10 border h-16 justify-end">
        <View className="flex-row justify-between mx-8 mb-4">
          <Text className="text-original-100 text-lg font-bold">Next</Text>
          <Text className="text-original-100 text-lg font-bold">2/4</Text>
        </View>
        <View className="absolute bottom-0 left-0 right-0">
          <ProgressBar 
            className="rounded-b-full mx-[3px] mb-[0.25px]" 
            progress={0.5} 
            color={MD3Colors.neutral70} 
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
