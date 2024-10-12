import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView className="">
      <TouchableOpacity
        onPress={() => router.push("/(meal)/scan-food")}
        className="pt-72 items-center"
      >
        <FontAwesome5 name="camera" size={32} color="green" />
        <Text className="mt-2 text-sm font-semibold text-black">
          Open up Camera
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Chat;
