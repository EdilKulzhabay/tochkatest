import { apiClient } from './index';
import type { ApiResponse } from './index';
import type { User, Admin, LoginData, CreateUserData } from '../types/api';

export interface AuthResponse {
  token: string;
  user?: User;
  admin?: Admin;
}

class AuthService {
  // Регистрация пользователя
  async register(userData: CreateUserData): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<AuthResponse>('/auth/register', userData);
  }

  // Вход пользователя
  async login(loginData: LoginData): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<AuthResponse>('/auth/login', loginData);
  }

  // Вход администратора
  async adminLogin(loginData: { userName: string; password: string }): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<AuthResponse>('/auth/admin/login', loginData);
  }

  // Получение профиля пользователя
  async getProfile(): Promise<ApiResponse<User>> {
    return apiClient.get<User>('/auth/profile');
  }

  // Обновление профиля пользователя
  async updateProfile(profileData: Partial<User>): Promise<ApiResponse<User>> {
    return apiClient.put<User>('/auth/profile', profileData);
  }

  // Смена пароля
  async changePassword(passwordData: { currentPassword: string; newPassword: string }): Promise<ApiResponse<{ message: string }>> {
    return apiClient.put<{ message: string }>('/auth/change-password', passwordData);
  }

  // Выход из системы (очистка токена)
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
  }

  // Сохранение токена и данных пользователя
  saveAuthData(authResponse: AuthResponse): void {
    localStorage.setItem('token', authResponse.token);
    if (authResponse.user) {
      localStorage.setItem('user', JSON.stringify(authResponse.user));
    }
    if (authResponse.admin) {
      localStorage.setItem('admin', JSON.stringify(authResponse.admin));
    }
  }

  // Получение сохраненного пользователя
  getCurrentUser(): User | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  // Получение сохраненного админа
  getCurrentAdmin(): Admin | null {
    const adminData = localStorage.getItem('admin');
    return adminData ? JSON.parse(adminData) : null;
  }

  // Проверка аутентификации
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Проверка админских прав
  isAdmin(): boolean {
    return !!localStorage.getItem('admin');
  }
}

export const authService = new AuthService(); 