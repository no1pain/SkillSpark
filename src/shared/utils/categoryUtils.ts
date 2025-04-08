import topCategories from "../constants/topCategories.json";
import subCategories from "../constants/subCategories.json";

export type TopCategory = {
  id: string;
  name: string;
  displayOrder: number;
};

export type SubCategory = {
  id: string;
  name: string;
  displayOrder: number;
};

export const getTopCategories = (): TopCategory[] => {
  return topCategories.sort(
    (a: TopCategory, b: TopCategory) => a.displayOrder - b.displayOrder
  );
};

export const getSubCategories = (topCategoryId: string): SubCategory[] => {
  // @ts-ignore
  const subs = subCategories[topCategoryId] || [];
  return subs.sort(
    (a: SubCategory, b: SubCategory) => a.displayOrder - b.displayOrder
  );
};

export const getTopCategoryById = (id: string): TopCategory | undefined => {
  return topCategories.find((category: TopCategory) => category.id === id);
};

export const getSubCategoryById = (
  topCategoryId: string,
  subCategoryId: string
): SubCategory | undefined => {
  // @ts-ignore
  const subs = subCategories[topCategoryId] || [];
  return subs.find(
    (subCategory: SubCategory) => subCategory.id === subCategoryId
  );
};

export const getGradientByCategory = (category: string): string => {
  switch (category.toLowerCase()) {
    case "technology":
      return "linear-gradient(135deg, #E23838 0%, #FF9933 100%)";
    case "creative arts":
      return "linear-gradient(135deg, #FF416C 0%, #FFA500 100%)";
    case "business":
      return "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)";
    case "personal development":
      return "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)";
    case "personal-development":
      return "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)";
    case "finance":
      return "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)";
    default:
      return "linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)";
  }
};

export const getLogoColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case "technology":
      return "#61DAFB";
    case "creative arts":
      return "#FF9A8B";
    case "business":
      return "#A78BFA";
    case "personal development":
    case "personal-development":
      return "#38B2AC";
    case "finance":
      return "#84CC16";
    default:
      return "#60A5FA";
  }
};
