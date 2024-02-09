import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { categoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CategoriesProps from "../interface/categoryProps";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((category, index) => {
          let isActive = category.name === activeCategory;
          let activeButtonClass =
            category.name === activeCategory ? "bg-amber-400" : "bg-white";
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(category.name)}
              key={index}
              className="flex-1 space-y-2 items-center"
            >
              <View className={"rounded-full p-[6px] " + activeButtonClass}>
                <Image
                  source={{ uri: category.image }}
                  className="rounded-full"
                  style={{
                    width: hp(6),
                    height: hp(6),
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: hp(1.5),
                }}
                className="text-neutral-600 font-semibold"
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};
export default Categories;
