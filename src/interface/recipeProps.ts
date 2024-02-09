export default interface RecipeProps {
  categories: {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }[];
  recipes: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }[];
}
