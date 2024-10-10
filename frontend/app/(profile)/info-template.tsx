import { ProgressBar } from 'react-native-paper';
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router";
import BasicInfo from "./basicInfo";
import QuestionPage from "@/components/QuestionPage";

export default function BasicInfo1() {

  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page === 6) {
      router.replace("/(root)/(tabs)/home");
    } else {
      setPage(page + 1);
    }
  };

  const [diabetesType, setDiabetesType] = useState("");
  const [diabetesDuration, setDiabetesDuration] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [complications, setComplications] = useState("");
  const [bloodSugar, setBloodSugar] = useState("");

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
          title='Since when do you have diabetes?'
          options={[
            { label: "Less than 1 year", value: "less_than_1" },
            { label: "1-5 years", value: "1_5" },
            { label: "5-10 years", value: "5_10" },
            { label: "More than 10 years", value: "more_than_10" }
          ]}
          selectedValue={diabetesDuration}
          onValueChange={setDiabetesDuration}
        />;
      case 4:
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
      case 5:
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
      case 6:
        return <QuestionPage
          title="How often do you measure blood sugar?"
          options={[
            { label: "Less than 1 time a week", value: "less_than_1" },
            { label: "1-3 times a week", value: "1_3" },
            { label: "3-5 times a week", value: "3_5" },
            { label: "More than 5 times a week", value: "more_than_5" }
          ]}
          selectedValue={bloodSugar}
          onValueChange={setBloodSugar}
        />  
      default:
        return <BasicInfo />;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}  // Adjust this value if necessary
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
        <View className="flex-1 pt-6 bg-white px-6">
          {renderComponent()}      
          <TouchableOpacity onPress={handleNext} className="rounded-xl border-original-100 border h-16 justify-end mt-auto mb-8">
            <View className="flex-row justify-between mx-8 mb-4">
              <Text className="text-original-100 text-lg font-bold">Next</Text>
              <Text className="text-original-100 text-lg font-bold">{page}/6</Text>
            </View>
            <ProgressBar 
              className="rounded-b-full mx-[3px] mb-[0.25px]" 
              progress={(page - 1) / 6}
              color="#159339"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
