import React from 'react';
import { Link } from 'react-router-dom';

interface AdminHeaderProps {
  title: string;
  backLink?: string;
  actionButton?: {
    label: string;
    link: string;
    color?: 'blue' | 'green' | 'indigo' | 'purple';
  };
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, backLink, actionButton }) => {
  const getButtonColor = (color: string = 'blue') => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <header className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {backLink && (
            <Link 
              to={backLink}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              ← Назад
            </Link>
          )}
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          {actionButton && (
            <Link 
              to={actionButton.link}
              className={`px-4 py-2 text-sm text-white rounded-lg transition-colors ${getButtonColor(actionButton.color)}`}
            >
              {actionButton.label}
            </Link>
          )}
          <span className="text-gray-600">Администратор</span>
          <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader; 