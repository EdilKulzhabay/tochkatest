// Пользователь
export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  phone?: string;
  subscription: {
    status: 'active' | 'inactive' | 'expired';
    startDate?: string;
    endDate?: string;
    plan?: 'basic' | 'premium' | 'vip';
  };
  clubMembership: {
    status: 'active' | 'inactive';
    joinDate?: string;
    expireDate?: string;
  };
  bonus: number;
  createdAt: string;
  updatedAt: string;
}

// Админ
export interface Admin {
  _id: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
}

// Запись в дневнике
export interface DiaryEntry {
  _id: string;
  userId: string;
  date: string;
  openings: string;
  achievements: string;
  gratitude: string;
  createdAt: string;
  updatedAt: string;
}

// FAQ
export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

// Гороскоп
export interface Horoscope {
  _id: string;
  zodiacSign: string;
  title: string;
  content: string;
  date: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  createdAt: string;
  updatedAt: string;
}

// Транзит
export interface Transit {
  _id: string;
  title: string;
  description: string;
  planet: string;
  aspect: string;
  startDate: string;
  endDate: string;
  intensity: 'low' | 'medium' | 'high';
  category: 'love' | 'career' | 'health' | 'finance' | 'spiritual';
  affectedSigns: string[];
  createdAt: string;
  updatedAt: string;
}

// Практика
export interface Practice {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
  createdAt: string;
  updatedAt: string;
}

// Медитация
export interface Meditation {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
  createdAt: string;
  updatedAt: string;
}

// Видео
export interface Video {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
  createdAt: string;
  updatedAt: string;
}

// Видео-урок
export interface VideoLesson {
  _id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  accessType: 'free' | 'paid';
  views: number;
  createdAt: string;
  updatedAt: string;
}

// Формы для создания/обновления
export interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
  phone?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface CreateDiaryEntryData {
  date: string;
  openings: string;
  achievements: string;
  gratitude: string;
}

export interface CreateFAQData {
  question: string;
  answer: string;
}

export interface CreateHoroscopeData {
  zodiacSign: string;
  title: string;
  content: string;
  date: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export interface CreateTransitData {
  title: string;
  description: string;
  planet: string;
  aspect: string;
  startDate: string;
  endDate: string;
  intensity: 'low' | 'medium' | 'high';
  category: 'love' | 'career' | 'health' | 'finance' | 'spiritual';
  affectedSigns: string[];
}

export interface CreatePracticeData {
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
}

export interface CreateMeditationData {
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
}

export interface CreateVideoData {
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
}

export interface CreateVideoLessonData {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  accessType: 'free' | 'paid';
} 