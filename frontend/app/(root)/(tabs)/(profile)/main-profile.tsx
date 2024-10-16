import ProfileButton from "@/components/ProfileButton";
import { icons, images } from "@/constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const Layout = () => {
  const profileList = [
    {
      id: 1,
      Name: "Edit Profile",
      image: <FontAwesome size={26} name="user" color="green" />,
      page: "edit-profile",
    },
    {
      id: 2,
      Name: "Renew Plans",
      image: <FontAwesome size={26} name="star" color="green" />,
      page: "shareapp",
    },
    {
      id: 3,
      Name: "Settings",
      image: <FontAwesome size={26} name="gear" color="green" />,
      page: "settings",
    },
    {
      id: 4,
      Name: "Help Center",
      image: <FontAwesome size={26} name="info" color="green" />,
      page: "help-center",
    },
    {
      id: 5,
      Name: "FAQ",
      image: <FontAwesome size={26} name="comment" color="green" />,
      page: "faq",
    }
  ]; 

  const handleSignOut = () => {
    
  }

  return (
    <ScrollView className="flex bg-white">
      <View className="flex h-full items-center bg-white">
        <Image source={images.avatar} className="w-52 h-52 mt-4" />
        <Text className="text-3xl font-semibold">John Doe</Text>
        <View className="items-start w-full px-6 mt-2">
          {profileList.map((item) => (
            <ProfileButton
              key={item.id}
              Name={item.Name}
              icon={item.image}
              page={item.page}
            />
          ))}
          <TouchableOpacity
            onPress={handleSignOut}
            className="mt-6 flex-row items-center space-x-4"
          >
            <View className="w-12 h-12 bg-green-50 rounded-lg justify-center items-center">
              <Image source={icons.out} className="w-6 h-6 ml-1" />
            </View>
            <Text className="text-left text-lg font-medium flex-1">Sign Out</Text>
            <Image source={icons.arrowRight} className="w-6 h-6 ml-auto" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Layout;
