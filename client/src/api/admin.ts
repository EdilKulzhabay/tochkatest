import { apiClient } from './index';
import type { ApiResponse } from './index';
import type { 
  Practice, 
  Meditation, 
  Video, 
  VideoLesson, 
  Horoscope, 
  Transit, 
  FAQ, 
  User,
  CreatePracticeData,
  CreateMeditationData,
  CreateVideoData,
  CreateVideoLessonData,
  CreateHoroscopeData,
  CreateTransitData,
  CreateFAQData
} from '../types/api';

class AdminService {
  // ========== ПРАКТИКИ ==========
  async getPractices(): Promise<ApiResponse<Practice[]>> {
    return apiClient.get<Practice[]>('/practices');
  }

  async getPractice(id: string): Promise<ApiResponse<Practice>> {
    return apiClient.get<Practice>(`/practices/${id}`);
  }

  async createPractice(data: CreatePracticeData): Promise<ApiResponse<Practice>> {
    return apiClient.post<Practice>('/practices', data);
  }

  async updatePractice(id: string, data: Partial<CreatePracticeData>): Promise<ApiResponse<Practice>> {
    return apiClient.put<Practice>(`/practices/${id}`, data);
  }

  async deletePractice(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/practices/${id}`);
  }

  // ========== МЕДИТАЦИИ ==========
  async getMeditations(): Promise<ApiResponse<Meditation[]>> {
    return apiClient.get<Meditation[]>('/meditations');
  }

  async getMeditation(id: string): Promise<ApiResponse<Meditation>> {
    return apiClient.get<Meditation>(`/meditations/${id}`);
  }

  async createMeditation(data: CreateMeditationData): Promise<ApiResponse<Meditation>> {
    return apiClient.post<Meditation>('/meditations', data);
  }

  async updateMeditation(id: string, data: Partial<CreateMeditationData>): Promise<ApiResponse<Meditation>> {
    return apiClient.put<Meditation>(`/meditations/${id}`, data);
  }

  async deleteMeditation(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/meditations/${id}`);
  }

  // ========== ВИДЕО ==========
  async getVideos(): Promise<ApiResponse<Video[]>> {
    return apiClient.get<Video[]>('/videos');
  }

  async getVideo(id: string): Promise<ApiResponse<Video>> {
    return apiClient.get<Video>(`/videos/${id}`);
  }

  async createVideo(data: CreateVideoData): Promise<ApiResponse<Video>> {
    return apiClient.post<Video>('/videos', data);
  }

  async updateVideo(id: string, data: Partial<CreateVideoData>): Promise<ApiResponse<Video>> {
    return apiClient.put<Video>(`/videos/${id}`, data);
  }

  async deleteVideo(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/videos/${id}`);
  }

  // ========== ВИДЕО-УРОКИ ==========
  async getVideoLessons(): Promise<ApiResponse<VideoLesson[]>> {
    return apiClient.get<VideoLesson[]>('/video-lessons');
  }

  async getVideoLesson(id: string): Promise<ApiResponse<VideoLesson>> {
    return apiClient.get<VideoLesson>(`/video-lessons/${id}`);
  }

  async createVideoLesson(data: CreateVideoLessonData): Promise<ApiResponse<VideoLesson>> {
    return apiClient.post<VideoLesson>('/video-lessons', data);
  }

  async updateVideoLesson(id: string, data: Partial<CreateVideoLessonData>): Promise<ApiResponse<VideoLesson>> {
    return apiClient.put<VideoLesson>(`/video-lessons/${id}`, data);
  }

  async deleteVideoLesson(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/video-lessons/${id}`);
  }

  // ========== ГОРОСКОПЫ ==========
  async getHoroscopes(): Promise<ApiResponse<Horoscope[]>> {
    return apiClient.get<Horoscope[]>('/horoscope');
  }

  async getHoroscope(id: string): Promise<ApiResponse<Horoscope>> {
    return apiClient.get<Horoscope>(`/horoscope/${id}`);
  }

  async createHoroscope(data: CreateHoroscopeData): Promise<ApiResponse<Horoscope>> {
    return apiClient.post<Horoscope>('/horoscope', data);
  }

  async updateHoroscope(id: string, data: Partial<CreateHoroscopeData>): Promise<ApiResponse<Horoscope>> {
    return apiClient.put<Horoscope>(`/horoscope/${id}`, data);
  }

  async deleteHoroscope(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/horoscope/${id}`);
  }

  // ========== ТРАНЗИТЫ ==========
  async getTransits(): Promise<ApiResponse<Transit[]>> {
    return apiClient.get<Transit[]>('/transits');
  }

  async getTransit(id: string): Promise<ApiResponse<Transit>> {
    return apiClient.get<Transit>(`/transits/${id}`);
  }

  async createTransit(data: CreateTransitData): Promise<ApiResponse<Transit>> {
    return apiClient.post<Transit>('/transits', data);
  }

  async updateTransit(id: string, data: Partial<CreateTransitData>): Promise<ApiResponse<Transit>> {
    return apiClient.put<Transit>(`/transits/${id}`, data);
  }

  async deleteTransit(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/transits/${id}`);
  }

  // ========== FAQ ==========
  async getFAQs(): Promise<ApiResponse<FAQ[]>> {
    return apiClient.get<FAQ[]>('/faq');
  }

  async getFAQ(id: string): Promise<ApiResponse<FAQ>> {
    return apiClient.get<FAQ>(`/faq/${id}`);
  }

  async createFAQ(data: CreateFAQData): Promise<ApiResponse<FAQ>> {
    return apiClient.post<FAQ>('/faq', data);
  }

  async updateFAQ(id: string, data: Partial<CreateFAQData>): Promise<ApiResponse<FAQ>> {
    return apiClient.put<FAQ>(`/faq/${id}`, data);
  }

  async deleteFAQ(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/faq/${id}`);
  }

  // ========== ПОЛЬЗОВАТЕЛИ ==========
  async getUsers(): Promise<ApiResponse<User[]>> {
    return apiClient.get<User[]>('/users');
  }

  async getUser(id: string): Promise<ApiResponse<User>> {
    return apiClient.get<User>(`/users/${id}`);
  }

  async updateUserSubscription(id: string, subscription: User['subscription']): Promise<ApiResponse<User>> {
    return apiClient.put<User>(`/users/${id}/subscription`, { subscription });
  }

  async updateUserClubMembership(id: string, clubMembership: User['clubMembership']): Promise<ApiResponse<User>> {
    return apiClient.put<User>(`/users/${id}/club-membership`, { clubMembership });
  }

  async deleteUser(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/users/${id}`);
  }

  // ========== СТАТИСТИКА ==========
  async getStats(): Promise<ApiResponse<{
    users: number;
    practices: number;
    meditations: number;
    videos: number;
    videoLessons: number;
    horoscopes: number;
    transits: number;
    faqs: number;
  }>> {
    return apiClient.get('/admin/stats');
  }
}

export const adminService = new AdminService(); 