import { useState, useEffect, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { authService } from '../api/auth';
import type { User, Admin } from '../types/api';

interface AuthContextType {
  user: User | null;
  admin: Admin | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  adminLogin: (userName: string, password: string) => Promise<void>;
  logout: () => void;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Инициализация при загрузке приложения
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      setIsLoading(true);
      
      // Проверяем сохраненные данные
      const savedUser = authService.getCurrentUser();
      const savedAdmin = authService.getCurrentAdmin();
      
      if (savedUser) {
        setUser(savedUser);
      }
      
      if (savedAdmin) {
        setAdmin(savedAdmin);
      }

      // Если есть токен, пытаемся обновить профиль
      if (authService.isAuthenticated()) {
        try {
          await refreshProfile();
        } catch (error) {
          // Если токен недействителен, очищаем данные
          logout();
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      if (response.data) {
        authService.saveAuthData(response.data);
        if (response.data.user) {
          setUser(response.data.user);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const adminLogin = async (userName: string, password: string) => {
    try {
      const response = await authService.adminLogin({ userName, password });
      if (response.data) {
        authService.saveAuthData(response.data);
        if (response.data.admin) {
          setAdmin(response.data.admin);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setAdmin(null);
  };

  const refreshProfile = async () => {
    try {
      const response = await authService.getProfile();
      if (response.data) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    admin,
    isAuthenticated: authService.isAuthenticated(),
    isAdmin: authService.isAdmin(),
    isLoading,
    login,
    adminLogin,
    logout,
    refreshProfile
  };

  return AuthContext.Provider({ value, children });
}; 