export interface CourseFormData {
  title: string;
  description: string;
  category: string;
  subcategory: string;
  type: "book" | "course";
  price: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  isPublic: boolean;
  bookContent: File | null;
  coverImage: File | null;
  author: string;
  imageUrl: string | null;
}
