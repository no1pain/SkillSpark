import { COLORS } from "@/shared/constants/colors";

export const getGradientByCategory = (category: string): string => {
  switch (category) {
    case "Technology":
      return COLORS.gradients.technology;
    case "Creative Arts":
      return COLORS.gradients.creativeArts;
    case "Business":
      return COLORS.gradients.business;
    case "Personal Development":
      return COLORS.gradients.personalDev;
    case "Finance":
      return COLORS.gradients.finance;
    default:
      return COLORS.gradients.default;
  }
};
