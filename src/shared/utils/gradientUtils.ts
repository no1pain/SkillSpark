import { COLORS } from "@/shared/constants/colors";

export const getGradientByCategory = (category: string): string => {
  switch (category.toLowerCase()) {
    case "technology":
      return COLORS.gradients.technology;
    case "creative arts":
      return COLORS.gradients.creativeArts;
    case "business":
      return COLORS.gradients.business;
    case "personal development":
      return COLORS.gradients.personalDev;
    case "finance":
      return COLORS.gradients.finance;
    default:
      return COLORS.gradients.default;
  }
};
