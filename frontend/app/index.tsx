import { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState<string | null>(null);


  useEffect(() => {
    const checkAuthToken = async () => {
      const token = await AsyncStorage.getItem("authToken");
      setAuthToken(token);
      setIsLoading(false);
    };
    checkAuthToken();
  }, []);

  if (isLoading) {
    return (
      <View className="mt-96">
        <ActivityIndicator size="large" color="#159339" />
      </View>
    );
  }

  
  return authToken ? (
    <Redirect href="/(root)/(tabs)/home" />
  ) : (
    <Redirect href="/(auth)/welcome" />
  );
};

export default Homepage;
