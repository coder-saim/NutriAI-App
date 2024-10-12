import ProfileButton from "@/components/ProfileButton";
import { icons, images } from "@/constants";
import { View, Text, Image, ScrollView } from "react-native";

const Layout = () => {

  const profileList = [
    {
      id: 1,
      Name: "Edit Profile",
      image: icons.profileGreen,
      page: "edit-profile"
    },
    {
      id: 2,
      Name: "Renew Plans",
      image: icons.starGreen,
      page: "subscription"
    },
    {
      id: 3,
      Name: "Settings",
      image: icons.settings,
      page: "settings"
    },
    {
      id: 4,
      Name: "Help Center",
      image: icons.logout,
      page: "help-center"
    },
    {
      id: 5,
      Name: "FAQ",
      image: icons.bookmark,
      page: "faq"
    },
  ]

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white">
        <Image source={images.healthy} className="w-52 h-52 mt-8"/>
        <Text className="text-3xl font-semibold mt-6">John Doe</Text>
        <View className="items-start w-full px-6 mt-5">
          {profileList.map((item) => (
            <ProfileButton key={item.id} Name={item.Name} icon={item.image} page={item.page}/>  
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Layout;