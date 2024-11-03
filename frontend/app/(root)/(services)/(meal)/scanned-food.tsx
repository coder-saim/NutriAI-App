import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import axios from 'axios';

const API_URL = "http://192.168.0.199:8000/analyze-image/";

const ImageScreen = () => {
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const analyzeFood = async () => {
    setIsLoading(true);
    try {

      const formData = new FormData();

      const filename = imageUri.split('/').pop() || 'image.jpg';

      formData.append('image', {
        uri: imageUri,
        name: filename,
        type: 'image/jpeg',
      } as any);

      try {
        const response = await axios.post(API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
          },
        });

        const analysisData = JSON.stringify(response.data);
        router.push({
          pathname: "/(meal)/analyzed-food",
          params: { analysisData },
        });

      } catch (error) {
        console.error(error);
        alert('Failed to upload image');
      }

    } catch (error) {
      console.error('Error analyzing food:', error);
      Alert.alert(
        "Error",
        "Failed to analyze the food image. Please try again.",
        [{ text: "OK" }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <Image source={{ uri: imageUri }} className="w-full h-80" />
      <TouchableOpacity
        onPress={analyzeFood}
        disabled={isLoading}
        className={`bg-[#159339] py-3 my-8 mx-4 rounded-full items-center ${isLoading ? 'opacity-50' : ''}`}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-lg font-bold">Analyze Food</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageScreen;