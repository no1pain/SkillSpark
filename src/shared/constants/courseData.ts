export const CATEGORIES = ['Technology', 'Creative Arts', 'Business', 'Personal Development', 'Personal Development', 'Hobbies'];

export const COURSE_TABS = ['Data Science', 'Finamatocs', 'Python', 'Machine Learning', 'Deep Learning'];

export interface Course {
  title: string;
  learners: number;
}

export const COURSE_DATA: Course[] = [
  { title: 'ChatGPT', learners: 46000 },
  { title: 'Data Science', learners: 38000 },
  { title: 'Python', learners: 47000 },
  { title: 'Deep Learning', learners: 25000 },
  { title: 'Statistics', learners: 15000 },
  { title: 'Machine Learning', learners: 31000 },
  { title: 'AI Fundamentals', learners: 22000 },
  { title: 'Web Development', learners: 55000 }
]; 