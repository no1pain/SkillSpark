export interface CourseFormData {
  id?: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  type?: string;
  price: number;
  duration?: string;
  level?: string;
  isPublic?: boolean;
  bookContent?: File | null;
  coverImage?: File | null;
  author: string;
  imageUrl?: string;
  difficulty?: string;
}
