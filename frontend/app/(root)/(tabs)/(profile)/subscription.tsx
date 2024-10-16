import { View, Text, ScrollView, Image, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import { icons, images } from '@/constants';
import ProfileTabButton from '@/components/ProfileTabButtons';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Subscription = () => {
  const router = useRouter();

  // Override back button behavior
  useEffect(() => {
    const backAction = () => {
      router.replace('/shareapp');
      return true; // Prevent default back action
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Cleanup the listener
  }, []);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex h-full items-center bg-white mx-4">
        <Image source={images.avatar} className="w-52 h-52 mt-2" />
        <Text className="text-3xl font-semibold mt-2">John Doe</Text>
        <Text className="text-lg mt-1">You are currently not subscribed!</Text>
        <View className="bg-green-100 rounded-xl mt-4 py-3 w-full">
          <Text className="text-xl font-semibold text-center">
            Premium Features
          </Text>
          <View className="my-2">
            {[
              { id: 1, point: "Scan food in Realtime" },
              { id: 2, point: "Track nutrition intake" },
              { id: 3, point: "Get health reports" },
            ].map((item) => (
              <View key={item.id} className="flex-row items-center mt-1 ml-16">
                <Text>
                  <FontAwesome size={20} name="check" color="green" />
                </Text>
                <Text className="ml-3 text-lg tracking-wide">{item.point}</Text>
              </View>
            ))}
          </View>
        </View>
        <ProfileTabButton
          title="Buy Premium"
          className="mt-6 mx-4"
          onPress={() => router.push("/purchase")}
        />
        <Text className="font-bold mt-2 text-red-600">Restore Purchase</Text>
      </View>
    </ScrollView>
  );
};

export default Subscription;