# SkillSpark 🚀

A modern e-learning platform built with React, TypeScript, and Material-UI that enables creators to share their knowledge and learners to discover new skills.

## 🌟 Live Demo

Check out the live demo: [SkillSpark Platform](https://skill-spark-p7n6n3ms3-oleksandrs-projects-81a72a05.vercel.app/overview)

## ✨ Features

- 📚 Course and Book Publishing
- 👥 User Authentication & Authorization
- 🎨 Modern, Responsive UI
- 🔍 Advanced Search & Filtering
- 📱 Mobile-Friendly Design
- 🌐 Real-time Updates
- 💳 Integrated Payment System (not ready yet)
- 📊 Creator Dashboard

## 🛠️ Tech Stack

- **Frontend:**

  - React 19
  - TypeScript
  - Material-UI v7
  - React Router v7
  - Emotion for styling

- **Backend & Services:**
  - Firebase Authentication
  - Firebase Firestore
  - Cloudinary for Image Storage

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/SkillSpark.git
cd SkillSpark
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory with your Firebase and Cloudinary credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

4. Start the development server:

```bash
pnpm dev
```

## 🏗️ Project Structure

```
src/
├── app/              # App-wide configurations and providers
├── components/       # Reusable UI components
├── shared/          # Shared utilities and types
├── firebase/        # Firebase configuration and services
├── pages/           # Page components
└── views/           # View components for pages
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Material-UI team for the amazing component library
- Firebase team for the robust backend services
- Cloudinary for image management solutions
