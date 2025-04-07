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
