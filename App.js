import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-[#302F2A] pt-20">
      <View className="flex justify-center items-center w-[100%]">
        <Text className="text-white text-2xl">
          <Text className="text-3xl">Chess</Text>.com
        </Text>
      </View>

      <View className="flex-1 justify-start items-center bg-[#272521] m-4 rounded-2xl h-[80%]">
        <View className="flex h-[40%] w-[80%] justify-center items-center border">
          <TextInput placeholder="Username or Email" placeholderTextColor="#6F6D6D" className="w-[100%] border border-white text-white p-2"></TextInput>
          <TextInput placeholder="Password" placeholderTextColor="#6F6D6D" className="w-[100%] border border-white text-white m-2 rounded-sm"></TextInput>

        </View>

      </View>

    </View>
  );
}

