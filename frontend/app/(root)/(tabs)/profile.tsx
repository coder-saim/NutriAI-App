import { images } from "@/constants";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex h-full items-center bg-white">
      <Image source={images.healthy} className="w-52 h-52 mt-8"/>
      <Text className="text-3xl font-semibold mt-8">John Doe</Text>
    </SafeAreaView>
  );
};

export default Profile;
