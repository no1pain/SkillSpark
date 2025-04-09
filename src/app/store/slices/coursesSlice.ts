import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getAllBooks } from "@/shared/api/bookService";
import { CourseFormData } from "@/shared/types/course";

interface CoursesState {
  items: CourseFormData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CoursesState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await getAllBooks();
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<CourseFormData>) => {
      state.items.push(action.payload);
    },
    updateCourse: (
      state,
      action: PayloadAction<CourseFormData & { id: string }>
    ) => {
      const index = state.items.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (course) => course.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch courses";
      });
  },
});

export const { addCourse, updateCourse, removeCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
