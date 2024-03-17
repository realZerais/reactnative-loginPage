
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';






export default function App() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View className="flex-1 justify-start items-center bg-[#302F2A]">
      <View className="flex justify-center items-center w-[100%] h-[15%] mt-4">
        <Image className="h-[100%] w-[50%]" source={require('./assets/chesscom_logo_white.png')} resizeMode="contain">

        </Image>
      </View>

      <View className="flex-1 h-[75%] w-[90%] mb-4  justify-between items-center bg-[#272521] rounded-2xl ">

        <View className="flex w-[90%] justify-start items-center gap-4 mt-4">
          <TextInput placeholder="Username or Email" placeholderTextColor="#6F6D6D" className="w-[100%] border border-white text-white p-2 rounded-md"></TextInput>
          <TextInput placeholder="Password" placeholderTextColor="#6F6D6D" className="w-[100%] border border-white text-white p-2 rounded-md"></TextInput>
          <View className="flex flex-row justify-between w-[100%]">
            <View className="flex flex-row justify-start gap-2 ">
              <Checkbox
                className="border text-white"
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
              <Text className=" text-white">Remember me</Text>
            </View>

            <Text className=" text-blue-400">Forgot Password?</Text>

          </View>
        </View>

        <View className="w-[90%] h-[10%] flex justify-center items-center bg-green-400 rounded-lg mt-4 ">
          <Pressable >
            <Text className=" text-white text-2xl">Log in</Text>
          </Pressable>
        </View>



        <View className="w-[90%] h-[40%] flex justify-end items-center gap-y-4">
          <Pressable className="w-[100%] h-[20%] flex flex-row justify-evenly items-center bg-black rounded-lg">
            <Icon name="apple" size={30} color="white" className="w-[30%]"></Icon>
            <Text className=" text-white text-xl w-[65%]">Log in with Apple</Text>
          </Pressable>

          <Pressable className="w-[100%] h-[20%] flex flex-row justify-evenly items-center bg-white rounded-lg">
            <Icon name="google" size={30} color="black" className="w-[30%]"></Icon>
            <Text className=" text-black text-xl w-[65%]">Log in with Google</Text>
          </Pressable>

          <Pressable className="w-[100%] h-[20%] flex flex-row justify-evenly items-center  bg-blue-700 rounded-lg">
            <Icon name="facebook" size={30} color="white" className="w-[30%]"></Icon>
            <Text className=" text-white text-xl w-[65%]">Log in with Facebook</Text>
          </Pressable>
        </View>

        <View className="w-[100%] h-[10%]  bg-neutral-900 flex flex-row justify-center items-center rounded-b-2xl ">
          <Text className="text-white">
            New?
          </Text>
          <Text className="text-blue-600 ml-2"
            onPress={() => Linking.openURL('http://google.com')}>
            Sign up - and start playing chess!
          </Text>
        </View>

      </View>

    </View >
  );
}

