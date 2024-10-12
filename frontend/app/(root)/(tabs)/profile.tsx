import ProfileButton from "@/components/ProfileButton";
import { icons, images } from "@/constants";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {

  const profileList = [
    {
      id: 1,
      Name: "Edit Profile",
      image: icons.profileGreen
    },
    {
      id: 2,
      Name: "Renew Plans",
      image: icons.starGreen
    },
    {
      id: 3,
      Name: "Settings",
      image: icons.settings
    },
    {
      id: 4,
      Name: "Dashboard",
      image: icons.bookmark
    },
    {
      id: 5,
      Name: "Log Out",
      image: icons.logout
    }
  ]

  return (
    <SafeAreaView className="flex h-full items-center bg-white">
      <Image source={images.healthy} className="w-52 h-52 mt-8"/>
      <Text className="text-3xl font-semibold mt-6">John Doe</Text>
      <View className="items-start w-full px-6 mt-5">
        {profileList.map((item) => (
          <ProfileButton key={item.id} Name={item.Name} icon={item.image}/>  
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;