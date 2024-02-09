import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/Categories";
import { useState } from "react";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("BreakFast");

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="space-y-6 pt-14 mx-4"
      >
        {/**avatar and notification icon */}
        <View className=" flex-row justify-between items-center mb-2">
          <Text>Avatar</Text>

          <BellIcon size={hp(3)} color="gray" />
        </View>

        {/**Greetings and punchline  */}
        <View className="space-y-3 mb-2">
          <Text
            style={{ fontSize: hp(1.7) }}
            className="text-neutral-600 font-medium"
          >
            Hello, Username
          </Text>

          <View>
            <Text
              style={{
                fontSize: hp(3.2),
              }}
              className="font-semibold text-neutral-600"
            >
              Make your own food,
            </Text>
          </View>
          <Text
            style={{
              fontSize: hp(3.2),
            }}
            className="font-semibold text-neutral-600"
          >
            stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>

        {/**Search Bar  */}

        <View className="flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 tracking-wider"
          />

          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

        {/**categories  */}

        <View>
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
