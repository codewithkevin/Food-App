import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import RecipeCardProps from "../interface/recipeCardProps";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const RecipeCard = ({ recipes, index }) => {
  let isEven = index % 2 === 0;
  const recipe = recipes[index];

  if (!recipe) return null;

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 1000)
        .springify()
        .damping(20)}
    >
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-2"
      >
        <Image
          source={{ uri: recipe.strMealThumb }}
          style={{
            width: "100%",
            height: index % 3 === 0 ? hp(25) : hp(35),
            borderRadius: hp(3.2),
          }}
        />
        <Text
          style={{ fontSize: hp(1.5) }}
          className="text-neutral-800 font-semibold"
        >
          {recipe.strMeal.length > 20
            ? recipe.strMeal.slice(0, 20) + "..."
            : recipe.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default RecipeCard;
