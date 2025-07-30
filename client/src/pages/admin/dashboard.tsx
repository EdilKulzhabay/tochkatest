import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <AdminHeader title="Дашборд" />

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">🧘</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Медитации</h3>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">🏃</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Практики</h3>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">📚</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Видео-уроки</h3>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">⭐</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Гороскопы</h3>
                  <p className="text-2xl font-semibold text-gray-900">12</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">🌙</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Транзиты</h3>
                  <p className="text-2xl font-semibold text-gray-900">60</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">🗓️</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Расписание</h3>
                  <p className="text-2xl font-semibold text-gray-900">6</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">❓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">FAQ</h3>
                  <p className="text-2xl font-semibold text-gray-900">7</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-3xl">👥</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Пользователи</h3>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Медитации</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/meditations" 
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Управление медитациями
                </Link>
                <Link 
                  to="/admin/meditations/new" 
                  className="block text-green-600 hover:text-green-800 text-sm"
                >
                  Добавить медитацию
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Практики</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/practices" 
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Управление практиками
                </Link>
                <Link 
                  to="/admin/practices/new" 
                  className="block text-green-600 hover:text-green-800 text-sm"
                >
                  Добавить практику
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Видео-уроки</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/video-lessons" 
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Управление видео
                </Link>
                <Link 
                  to="/admin/video-lessons/new" 
                  className="block text-green-600 hover:text-green-800 text-sm"
                >
                  Добавить видео
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Гороскопы</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/horoscopes" 
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Управление гороскопами
                </Link>
                <Link 
                  to="/admin/horoscopes/new" 
                  className="block text-green-600 hover:text-green-800 text-sm"
                >
                  Добавить гороскоп
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Транзиты</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/transits" 
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Управление транзитами
                </Link>
                <Link 
                  to="/admin/transits/new" 
                  className="block text-green-600 hover:text-green-800 text-sm"
                >
                  Добавить транзит
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Расписание</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/schedule" 
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Управление расписанием
                </Link>
                <Link 
                  to="/admin/schedule/new" 
                  className="block text-green-600 hover:text-green-800 text-sm"
                >
                  Добавить событие
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/faq" 
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Управление FAQ
                </Link>
                <Link 
                  to="/admin/faq/new" 
                  className="block text-green-600 hover:text-green-800 text-sm"
                >
                  Добавить вопрос
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Последняя активность</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                      <span className="text-green-600 text-sm">+</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-900">Добавлена новая медитация "Утренняя практика"</p>
                    <p className="text-sm text-gray-500">2 часа назад</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                      <span className="text-blue-600 text-sm">✏️</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-900">Обновлен гороскоп для Льва</p>
                    <p className="text-sm text-gray-500">5 часов назад</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                      <span className="text-green-600 text-sm">+</span>
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-900">Добавлено новое событие в расписание</p>
                    <p className="text-sm text-gray-500">1 день назад</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 