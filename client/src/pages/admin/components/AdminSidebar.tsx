import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/admin', icon: '📊', label: 'Дашборд' },
    { path: '/admin/meditations', icon: '🧘', label: 'Медитации' },
    { path: '/admin/practices', icon: '🏃', label: 'Практики' },
    { path: '/admin/video-lessons', icon: '📚', label: 'Видео-уроки' },
    { path: '/admin/horoscopes', icon: '⭐', label: 'Гороскопы' },
    { path: '/admin/transits', icon: '🌙', label: 'Транзиты' },
    { path: '/admin/schedule', icon: '🗓️', label: 'Расписание' },
    { path: '/admin/faq', icon: '❓', label: 'FAQ' },
    // { path: '/admin/users', icon: '👥', label: 'Пользователи' },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-5 border-b">
        <h2 className="text-xl font-bold text-gray-800">Админ-панель</h2>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 transition-colors ${
              isActive(item.path)
                ? 'text-gray-700 bg-blue-50 border-r-4 border-blue-500'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-700'
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar; 