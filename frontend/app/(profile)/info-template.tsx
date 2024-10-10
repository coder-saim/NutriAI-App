import { ProgressBar, MD3Colors } from 'react-native-paper';
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import BasicInfo from "./basicInfo";
import QuestionPage from "@/components/QuestionPage";

export default function BasicInfo1() {

  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page === 4) {
      router.replace("/(root)/(tabs)/home");
    } else {
      setPage(page + 1);
    }
  };

  const [diabetesType, setDiabetesType] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [complications, setComplications] = useState("");

  const renderComponent = () => {
    switch (page) {
      case 1:
        return <BasicInfo />;
      case 2:
        return <QuestionPage
          title="Type of Diabetes"
          options={[
            { label: "Type 1", value: "type1" },
            { label: "Type 2", value: "type2" },
            { label: "Gestational", value: "gestational" }
          ]}
          selectedValue={diabetesType}
          onValueChange={setDiabetesType}
        />;
      case 3:
        return <QuestionPage
          title="Activity Level"
          options={[
            { label: "Sedentary", value: "sedentary" },
            { label: "Lightly Active", value: "lightly_active" },
            { label: "Moderately Active", value: "moderately_active" },
            { label: "Very Active", value: "very_active" }
          ]}
          selectedValue={activityLevel}
          onValueChange={setActivityLevel}
        />
      case 4:
        return <QuestionPage
          title="Do you have any complications?"
          options={[
            { label: "None", value: "none" },
            { label: "Kidney Issues", value: "kidney" },
            { label: "Eye Problems", value: "eye" }
          ]}
          selectedValue={complications}
          onValueChange={setComplications}
        />
      default:
        return <BasicInfo />;
    }
  };

  return (
    <View className="flex-1 pt-6 bg-white px-6">
      {renderComponent()}      
      <TouchableOpacity onPress={handleNext} className="rounded-xl border-original-100 mt-auto mb-10 border h-16 justify-end">
        <View className="flex-row justify-between mx-8 mb-4">
          <Text className="text-original-100 text-lg font-bold">Next</Text>
          <Text className="text-original-100 text-lg font-bold">{page}/4</Text>
        </View>
        <View className="absolute bottom-0 left-0 right-0">
          <ProgressBar 
            className="rounded-b-full mx-[3px] mb-[0.25px]" 
            progress={page / 4}
            color={MD3Colors.neutral70}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
