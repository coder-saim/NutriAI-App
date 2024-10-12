import ProfileButton from "@/components/ProfileButton";
import { images } from "@/constants";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {

  const profileList = [ "Edit Profile", "Renew Plans", "Settings", "Dashboard", "Log Out" ];

  return (
    <SafeAreaView className="flex h-full items-center bg-white">
      <Image source={images.healthy} className="w-52 h-52 mt-8"/>
      <Text className="text-3xl font-semibold mt-8">John Doe</Text>
      <View className="items-start w-full px-6 mt-6">
        {profileList.map((item, index) => (
          <ProfileButton key={index} Name={item}/>  
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
