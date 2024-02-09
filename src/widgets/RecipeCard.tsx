import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import RecipeCardProps from "../interface/recipeCardProps"; // Ensure this interface reflects the correct structure
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

// Adjust RecipeCardProps to expect a single recipe object, not an array
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Animated.View entering={FadeInDown.delay(100).springify().damping(20)}>
      <Pressable
        style={{
          width: "100%",
          marginBottom: hp(3),
          paddingHorizontal: hp(0.5),
        }}
        className="flex justify-center space-y-1"
      >
        <Image
          source={{ uri: recipe.strMealThumb }}
          style={{
            width: "100%",
            height: hp(25),
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
