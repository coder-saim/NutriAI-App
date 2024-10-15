import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { router } from "expo-router";
import { images } from "@/constants";

const CameraScreen = () => {
  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const asset = await MediaLibrary.createAssetAsync(result.assets[0].uri);
      router.push({
        pathname: "/(meal)/scanned-food",
        params: { imageUri: asset.uri },
      });
      // console.log(asset.uri);
    }
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    const mediaLibraryPerm = await MediaLibrary.requestPermissionsAsync();

    if (status === "granted" && mediaLibraryPerm.status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const asset = await MediaLibrary.createAssetAsync(result.assets[0].uri);
        router.push({
          pathname: "/(meal)/scanned-food",
          params: { imageUri: asset.uri },
        });
        // console.log(asset);
      }
    } else {
      Alert.alert(
        "Permission Denied",
        "You need to grant camera and gallery permissions."
      );
    }
  };

  const showPickerOptions = () => {
    Alert.alert(
      "Choose an option",
      "Choose from Gallery or Open Camera",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Open Camera", onPress: openCamera },
        { text: "Choose from Gallery", onPress: openImagePicker },
      ],
      { cancelable: true }
    );
  };

  return (
    <View className="flex-1 pb-48 bg-white justify-center items-center">
      <View className="items-center mt-12 mb-8">
        <Image source={images.scan} className="w-64 h-64" />
        <Text className="text-lg font-bold text-center">
          Capture an image of your food to analyze the nutritional contents.
        </Text>
      </View>
      {/* <Button title="Pick an image" onPress={showPickerOptions} /> */}
      {["Open Camera", "Choose image from Gallery"].map((buttonType, index) => (
        <TouchableOpacity
          key={index}
          className="bg-[#159339] w-80 py-3 my-2 rounded-full"
          onPress={() => {
            index == 0 ? openCamera() : openImagePicker();
          }}
        >
          <Text className="text-white text-center text-lg font-bold">
            {buttonType}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CameraScreen;
