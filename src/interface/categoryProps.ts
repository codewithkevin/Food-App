export default interface CategoriesProps {
  categories: {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }[];
  setCategories: (categories: any) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}
