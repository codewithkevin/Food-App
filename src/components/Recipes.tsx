import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { categoryData } from "../constants";
import RecipeProps from "../interface/recipeProps";
import RecipeCard from "../widgets/RecipeCard";

const Recipes: React.FC<RecipeProps> = ({ categories, recipes }) => {
  return (
    <View className="space-y-3">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600"
      >
        Recipes
      </Text>

      <View>
        {categories.length > 0 && recipes.length > 0 && (
          <MasonryList
            data={recipes}
            keyExtractor={(item): string => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <RecipeCard recipes={item} index={0} />
            )}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({ first: ITEM_CNT })}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
          />
        )}
      </View>
    </View>
  );
};
export default Recipes;
