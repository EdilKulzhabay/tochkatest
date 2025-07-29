import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
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
                  <p className="text-2xl font-semibold text-gray-900">24</p>
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
                  <p className="text-2xl font-semibold text-gray-900">18</p>
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
                  <p className="text-2xl font-semibold text-gray-900">32</p>
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
                  <p className="text-2xl font-semibold text-gray-900">156</p>
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
                  <p className="text-2xl font-semibold text-gray-900">12</p>
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
                  <p className="text-2xl font-semibold text-gray-900">28</p>
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
                  <p className="text-2xl font-semibold text-gray-900">1,245</p>
                </div>
              </div>
            </div>
          </div>

          {/* Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Items */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-medium text-gray-900">Последние добавления</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Медитация
                      </span>
                      <span className="ml-3 text-sm text-gray-900">Утренняя практика</span>
                    </div>
                    <span className="text-sm text-gray-500">2 часа назад</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Практика
                      </span>
                      <span className="ml-3 text-sm text-gray-900">Дыхательные упражнения</span>
                    </div>
                    <span className="text-sm text-gray-500">5 часов назад</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Видео-урок
                      </span>
                      <span className="ml-3 text-sm text-gray-900">Основы медитации</span>
                    </div>
                    <span className="text-sm text-gray-500">8 часов назад</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Гороскоп
                      </span>
                      <span className="ml-3 text-sm text-gray-900">Овен на сегодня</span>
                    </div>
                    <span className="text-sm text-gray-500">1 день назад</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Транзит
                      </span>
                      <span className="ml-3 text-sm text-gray-900">Венера в Овне</span>
                    </div>
                    <span className="text-sm text-gray-500">2 дня назад</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-medium text-gray-900">Быстрые действия</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  <Link 
                    to="/admin/meditations/new" 
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Добавить медитацию
                  </Link>
                  <Link 
                    to="/admin/practices/new" 
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  >
                    Добавить практику
                  </Link>
                  <Link 
                    to="/admin/video-lessons/new" 
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    Добавить видео-урок
                  </Link>
                  <Link 
                    to="/admin/horoscopes/new" 
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  >
                    Добавить гороскоп
                  </Link>
                  <Link 
                    to="/admin/transits/new" 
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Добавить транзит
                  </Link>
                  <Link 
                    to="/admin/faq/new" 
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  >
                    Добавить FAQ
                  </Link>
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