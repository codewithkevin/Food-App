import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { categoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import CategoriesProps from "../interface/categoryProps";

const Categories: React.FC<CategoriesProps> = ({
  categories,
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
        {categories.map((category, index) => {
          let isActive = category.strCategory === activeCategory;
          let activeButtonClass =
            category.strCategory === activeCategory
              ? "bg-amber-400"
              : "bg-white";
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(category.strCategory)}
              key={index}
              className="flex-1 space-y-2 items-center"
            >
              <View className={"rounded-full p-[6px] " + activeButtonClass}>
                <Image
                  source={{ uri: category.strCategoryThumb }}
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
                {category.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};
export default Categories;
