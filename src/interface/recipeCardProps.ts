export default interface RecipeCardProps {
  recipes: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }[];
  index: number;
}
