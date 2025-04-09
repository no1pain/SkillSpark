import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "error";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";

const getApiUrl = (endpoint: string) => {
  const baseUrl = API_URL.endsWith("/") ? API_URL.slice(0, -1) : API_URL;
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${baseUrl}${cleanEndpoint}`;
};

export interface BookData {
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  isPublic: boolean;
  contentType: "Book" | "Course";
  price: number;
  pages: number;
  author: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  fileUrl?: string;
  fileFormat?: "PDF" | "EPUB" | "MOBI";
  imageUrl?: string;
}

const createBookFormData = (
  bookData: BookData,
  bookFile: File | null,
  imageFile: File | null
): FormData => {
  const formData = new FormData();

  formData.append(
    "bookData",
    JSON.stringify({
      title: bookData.title,
      description: bookData.description,
      category: bookData.category,
      subcategory: bookData.subcategory,
      isPublic: bookData.isPublic,
      contentType: bookData.contentType,
      price: bookData.price,
      pages: bookData.pages,
      author: bookData.author,
      difficulty: bookData.difficulty,
      fileFormat: bookData.fileFormat,
      imageUrl: bookData.imageUrl || "",
    })
  );
  // Add the files
  if (bookFile) {
    formData.append("pdf", bookFile);
  }
  if (imageFile) {
    formData.append("image", imageFile);
  }

  return formData;
};

export const addBook = async (
  bookData: BookData,
  bookFile: File | null,
  imageFile: File | null
) => {
  try {
    const formData = createBookFormData(bookData, bookFile, imageFile);
    console.log("Form data entries:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    const response = await axios.post(getApiUrl("books"), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Server response error:", error.response.data);
    }
    console.error("Error adding book:", error);
    throw error;
  }
};

export const getAllBooks = async () => {
  try {
    const response = await axios.get(getApiUrl("books"));
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getBookById = async (id: string) => {
  try {
    const response = await axios.get(getApiUrl(`books/${id}`));
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    throw error;
  }
};

export const updateBook = async (
  id: string,
  bookData: Partial<BookData>,
  bookFile: File | null
) => {
  try {
    const formData = createBookFormData(bookData as BookData, bookFile, null);
    const response = await axios.put(getApiUrl(`books/${id}`), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error);
    throw error;
  }
};

export const deleteBook = async (id: string) => {
  try {
    const response = await axios.delete(getApiUrl(`books/${id}`));
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    throw error;
  }
};

export const getBooksByCategory = async (category: string) => {
  try {
    const response = await axios.get(getApiUrl(`books/category/${category}`));
    return response.data;
  } catch (error) {
    console.error(`Error fetching books in category ${category}:`, error);
    throw error;
  }
};

export const getPublicBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books/public`);
    return response.data;
  } catch (error) {
    console.error("Error fetching public books:", error);
    throw error;
  }
};
