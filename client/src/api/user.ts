import { apiClient } from './index';
import type { ApiResponse } from './index';
import type { 
  Practice, 
  Meditation, 
  Video, 
  Horoscope, 
  Transit, 
  FAQ, 
  DiaryEntry,
  CreateDiaryEntryData
} from '../types/api';

class UserService {
  // ========== ПУБЛИЧНЫЕ ДАННЫЕ ==========
  
  // Практики
  async getPractices(): Promise<ApiResponse<Practice[]>> {
    return apiClient.get<Practice[]>('/practices');
  }

  async getPractice(id: string): Promise<ApiResponse<Practice>> {
    return apiClient.get<Practice>(`/practices/${id}`);
  }

  // Медитации
  async getMeditations(): Promise<ApiResponse<Meditation[]>> {
    return apiClient.get<Meditation[]>('/meditations');
  }

  async getMeditation(id: string): Promise<ApiResponse<Meditation>> {
    return apiClient.get<Meditation>(`/meditations/${id}`);
  }

  // Видео
  async getVideos(): Promise<ApiResponse<Video[]>> {
    return apiClient.get<Video[]>('/videos');
  }

  async getVideo(id: string): Promise<ApiResponse<Video>> {
    return apiClient.get<Video>(`/videos/${id}`);
  }

  // Гороскопы
  async getHoroscopes(): Promise<ApiResponse<Horoscope[]>> {
    return apiClient.get<Horoscope[]>('/horoscope');
  }

  async getHoroscope(id: string): Promise<ApiResponse<Horoscope>> {
    return apiClient.get<Horoscope>(`/horoscope/${id}`);
  }

  // Получение гороскопа по знаку зодиака и периоду
  async getHoroscopeBySign(zodiacSign: string, period: string): Promise<ApiResponse<Horoscope[]>> {
    return apiClient.get<Horoscope[]>(`/horoscope?zodiacSign=${zodiacSign}&period=${period}`);
  }

  // Транзиты
  async getTransits(): Promise<ApiResponse<Transit[]>> {
    return apiClient.get<Transit[]>('/transits');
  }

  async getTransit(id: string): Promise<ApiResponse<Transit>> {
    return apiClient.get<Transit>(`/transits/${id}`);
  }

  // Получение активных транзитов
  async getActiveTransits(): Promise<ApiResponse<Transit[]>> {
    return apiClient.get<Transit[]>('/transits?status=active');
  }

  // FAQ
  async getFAQs(): Promise<ApiResponse<FAQ[]>> {
    return apiClient.get<FAQ[]>('/faq');
  }

  async getFAQ(id: string): Promise<ApiResponse<FAQ>> {
    return apiClient.get<FAQ>(`/faq/${id}`);
  }

  // ========== ДНЕВНИК (требует авторизации) ==========
  
  async getDiaryEntries(): Promise<ApiResponse<DiaryEntry[]>> {
    return apiClient.get<DiaryEntry[]>('/diary');
  }

  async getDiaryEntry(id: string): Promise<ApiResponse<DiaryEntry>> {
    return apiClient.get<DiaryEntry>(`/diary/${id}`);
  }

  async createDiaryEntry(data: CreateDiaryEntryData): Promise<ApiResponse<DiaryEntry>> {
    return apiClient.post<DiaryEntry>('/diary', data);
  }

  async updateDiaryEntry(id: string, data: Partial<CreateDiaryEntryData>): Promise<ApiResponse<DiaryEntry>> {
    return apiClient.put<DiaryEntry>(`/diary/${id}`, data);
  }

  async deleteDiaryEntry(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<{ message: string }>(`/diary/${id}`);
  }

  // Получение записей за определенный период
  async getDiaryEntriesByDateRange(startDate: string, endDate: string): Promise<ApiResponse<DiaryEntry[]>> {
    return apiClient.get<DiaryEntry[]>(`/diary?startDate=${startDate}&endDate=${endDate}`);
  }

  // ========== ПОДПИСКА И ЧЛЕНСТВО ==========
  
  async updateSubscription(subscription: {
    status: 'active' | 'inactive' | 'expired';
    startDate?: string;
    endDate?: string;
    plan?: 'basic' | 'premium' | 'vip';
  }): Promise<ApiResponse<{ message: string }>> {
    return apiClient.put<{ message: string }>('/users/subscription', { subscription });
  }

  async updateClubMembership(clubMembership: {
    status: 'active' | 'inactive';
    joinDate?: string;
    expireDate?: string;
  }): Promise<ApiResponse<{ message: string }>> {
    return apiClient.put<{ message: string }>('/users/club-membership', { clubMembership });
  }

  // ========== ПОИСК И ФИЛЬТРАЦИЯ ==========
  
  // Поиск практик
  async searchPractices(query: string): Promise<ApiResponse<Practice[]>> {
    return apiClient.get<Practice[]>(`/practices?search=${encodeURIComponent(query)}`);
  }

  // Поиск медитаций
  async searchMeditations(query: string): Promise<ApiResponse<Meditation[]>> {
    return apiClient.get<Meditation[]>(`/meditations?search=${encodeURIComponent(query)}`);
  }

  // Фильтрация по типу доступа
  async getContentByAccessType(type: 'practices' | 'meditations' | 'videos', accessType: 'free' | 'paid'): Promise<ApiResponse<any[]>> {
    return apiClient.get<any[]>(`/${type}?accessType=${accessType}`);
  }

  // Получение рекомендованного контента
  async getRecommendedContent(): Promise<ApiResponse<{
    practices: Practice[];
    meditations: Meditation[];
    videos: Video[];
  }>> {
    return apiClient.get('/content/recommended');
  }
}

export const userService = new UserService(); 