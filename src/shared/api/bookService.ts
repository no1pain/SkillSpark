import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5174/api";

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
}

const createBookFormData = (bookData: BookData, bookFile: File | null) => {
  const formData = new FormData();

  Object.entries(bookData).forEach(([key, value]) => {
    if (value !== undefined) {
      formData.append(key, String(value));
    }
  });

  if (bookFile) {
    formData.append("bookContent", bookFile);
    formData.append(
      "fileFormat",
      bookFile.name.split(".").pop()?.toUpperCase() || "PDF"
    );
  }

  return formData;
};

export const addBook = async (bookData: BookData, bookFile: File | null) => {
  try {
    const formData = createBookFormData(bookData, bookFile);

    // Log the book data being sent
    console.log("=== Book Data Being Sent ===");
    console.log("Original bookData:", bookData);
    console.log("File being sent:", bookFile);

    // Log FormData contents (need special handling since FormData can't be directly logged)
    console.log("=== FormData Contents ===");
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    const response = await axios.post(`${API_URL}/books`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getBookById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
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
    const formData = createBookFormData(bookData as BookData, bookFile);

    const response = await axios.put(`${API_URL}/books/${id}`, formData, {
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
    const response = await axios.delete(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    throw error;
  }
};

export const getBooksByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${API_URL}/books/category/${category}`);
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
