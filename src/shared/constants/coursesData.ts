// Course interfaces
export interface Course {
  id: number;
  title: string;
  instructor: string;
  progress?: number;
  category: string;
  thumbnail: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  studentsEnrolled: number;
  tags: string[];
  isFeatured?: boolean;
}

export const myCoursesData: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    progress: 65,
    category: "Technology",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript to build interactive websites.",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.7,
    studentsEnrolled: 12453,
    tags: ["HTML", "CSS", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Michael Chen",
    progress: 30,
    category: "Creative Arts",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Master the principles of user interface and user experience design to create intuitive digital products.",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.8,
    studentsEnrolled: 8976,
    tags: ["UI", "UX", "Design Thinking", "Figma"]
  },
  {
    id: 3,
    title: "Digital Marketing Basics",
    instructor: "Elena Rodriguez",
    progress: 80,
    category: "Business",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Learn how to create effective digital marketing campaigns across various platforms to grow your business.",
    duration: "5 weeks",
    level: "Beginner",
    rating: 4.5,
    studentsEnrolled: 7654,
    tags: ["SEO", "Social Media", "Content Marketing"]
  },
  {
    id: 12,
    title: "Python for Data Science",
    instructor: "Alex Thompson",
    progress: 45,
    category: "Technology",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Use Python libraries like Pandas, NumPy, and Matplotlib to analyze and visualize data effectively.",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.9,
    studentsEnrolled: 15678,
    tags: ["Python", "Data Science", "Pandas", "NumPy"]
  }
];

// Recommended courses based on user interests and learning history
export const recommendedCoursesData: Course[] = [
  {
    id: 4,
    title: "JavaScript for Beginners",
    instructor: "David Smith",
    category: "Technology",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Start your JavaScript journey and learn to build interactive web applications with modern JavaScript.",
    duration: "7 weeks",
    level: "Beginner",
    rating: 4.6,
    studentsEnrolled: 9845,
    tags: ["JavaScript", "ES6", "Frontend", "Web Development"],
    isFeatured: true
  },
  {
    id: 5,
    title: "Photography Masterclass",
    instructor: "Jessica Williams",
    category: "Creative Arts",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Learn professional photography techniques from composition to post-processing for stunning images.",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.9,
    studentsEnrolled: 6734,
    tags: ["Photography", "Composition", "Lightroom", "Editing"]
  },
  {
    id: 6,
    title: "React Fundamentals",
    instructor: "Kevin Patel",
    category: "Technology",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Master React to build modern, responsive user interfaces with reusable components.",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.8,
    studentsEnrolled: 11234,
    tags: ["React", "JavaScript", "Frontend", "Web Development"]
  },
  {
    id: 7,
    title: "Content Creation for Social Media",
    instructor: "Olivia Martinez",
    category: "Business",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1652608_662b_8.jpg",
    description: "Learn to create engaging content for various social media platforms to grow your audience.",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.7,
    studentsEnrolled: 5632,
    tags: ["Content Creation", "Social Media", "Marketing", "Branding"]
  }
];

export const featuredCoursesData: Course[] = [
  {
    id: 8,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. James Wilson",
    category: "Technology",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/4201184_a2e0_4.jpg",
    description: "Understand the core concepts of machine learning and implement common algorithms from scratch.",
    duration: "12 weeks",
    level: "Advanced",
    rating: 4.9,
    studentsEnrolled: 18754,
    tags: ["Machine Learning", "AI", "Python", "Data Science"],
    isFeatured: true
  },
  {
    id: 9,
    title: "Personal Finance Mastery",
    instructor: "Robert Chang",
    category: "Finance",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/903744_8eb2_14.jpg",
    description: "Take control of your finances with proven strategies for budgeting, saving, and investing.",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.8,
    studentsEnrolled: 9876,
    tags: ["Finance", "Investing", "Budgeting", "Personal Development"],
    isFeatured: true
  },
  {
    id: 10,
    title: "3D Modeling and Animation",
    instructor: "Natalie Brown",
    category: "Creative Arts",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/3084052_5a6d_3.jpg",
    description: "Learn to create stunning 3D models and animations using Blender from the ground up.",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    studentsEnrolled: 7689,
    tags: ["3D", "Blender", "Animation", "Modeling"],
    isFeatured: true
  },
  {
    id: 11,
    title: "Public Speaking Masterclass",
    instructor: "Thomas Garcia",
    category: "Personal Development",
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1164264_073b_3.jpg",
    description: "Overcome fear of public speaking and deliver powerful presentations that captivate your audience.",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.6,
    studentsEnrolled: 8543,
    tags: ["Public Speaking", "Communication", "Confidence", "Presentation"],
    isFeatured: true
  }
];

// All categories available on the platform
export const courseCategories = [
  "Technology", 
  "Creative Arts", 
  "Business", 
  "Personal Development", 
  "Finance",
  "Health & Fitness", 
  "Marketing", 
  "Science", 
  "Languages", 
  "Hobbies"
];

// User learning statistics
export const learningStats = {
  hoursThisWeek: 8,
  coursesInProgress: 4,
  certificatesEarned: 2,
  weeklyGoal: 10, // hours
  streakDays: 5,
  totalHoursLearned: 124
}; 