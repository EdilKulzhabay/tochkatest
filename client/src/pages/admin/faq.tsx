import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
}

const AdminFAQ: React.FC = () => {
  const [faqs] = useState<FAQ[]>([
    {
      id: '1',
      question: 'Как начать заниматься медитацией?',
      answer: 'Начните с коротких сессий по 5-10 минут в день. Найдите тихое место, сядьте удобно и сосредоточьтесь на дыхании.',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      question: 'Что такое суставная гимнастика?',
      answer: 'Суставная гимнастика - это комплекс упражнений, направленных на улучшение подвижности суставов и общего состояния организма.',
      createdAt: '2024-01-14'
    }
  ]);

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот вопрос?')) {
      console.log('Удаляем FAQ:', id);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">FAQ</h1>
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin/faq/new"
                className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Добавить вопрос
              </Link>
              <span className="text-gray-600">Администратор</span>
              <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                Выйти
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Список вопросов</h2>
                <span className="text-sm text-gray-500">Всего: {faqs.length}</span>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 mb-3 line-clamp-3">
                        {faq.answer}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>Создано: {new Date(faq.createdAt).toLocaleDateString('ru-RU')}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="flex space-x-2">
                        <Link 
                          to={`/admin/faq/edit/${faq.id}`}
                          className="text-blue-600 hover:text-blue-900 transition-colors text-sm font-medium"
                        >
                          Редактировать
                        </Link>
                        <button 
                          onClick={() => handleDelete(faq.id)}
                          className="text-red-600 hover:text-red-900 transition-colors text-sm font-medium"
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminFAQ; 