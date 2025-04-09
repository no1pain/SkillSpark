export type CourseType = "book" | "course" | "video";
export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseFormData {
  id?: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  type: CourseType;
  price: string;
  duration: string;
  level: DifficultyLevel;
  isPublic: boolean;
  bookContent: File | null;
  coverImage: File | null;
  author: string;
  imageUrl?: string;
}
