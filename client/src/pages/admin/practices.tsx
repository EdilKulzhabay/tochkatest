import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';

interface Practice {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
  createdAt: string;
}

const AdminPractices: React.FC = () => {
  const [practices] = useState<Practice[]>([
    {
      id: '1',
      title: 'Суставная гимнастика',
      subtitle: 'Омолаживающая суставная гимнастика по авторской методике',
      description: 'Полное описание суставной гимнастики...',
      shortDescription: 'Комплекс упражнений для восстановления подвижности суставов',
      imageUrl: '/images/practice1.jpg',
      videoUrl: 'https://youtube.com/watch?v=123',
      accessType: 'free',
      duration: 30,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Бесполезное упражнение',
      subtitle: 'Одна из самых действенных практик по выходу из социумной карусели',
      description: 'Полное описание практики...',
      shortDescription: 'Практика для освобождения от социальных стереотипов',
      imageUrl: '/images/practice2.jpg',
      videoUrl: 'https://youtube.com/watch?v=456',
      accessType: 'free',
      duration: 25,
      createdAt: '2024-01-14'
    }
  ]);

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту практику?')) {
      console.log('Удаляем практику:', id);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Практики</h1>
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin/practices/new"
                className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                Добавить практику
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
                <h2 className="text-lg font-medium text-gray-900">Список практик</h2>
                <span className="text-sm text-gray-500">Всего: {practices.length}</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Практика
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Тип доступа
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Длительность
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Дата создания
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {practices.map((practice) => (
                    <tr key={practice.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            <img 
                              className="h-12 w-12 rounded-lg object-cover" 
                              src={practice.imageUrl} 
                              alt={practice.title}
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/48x48?text=🏃';
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {practice.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {practice.subtitle}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          practice.accessType === 'free' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {practice.accessType === 'free' ? 'Бесплатно' : 'Платно'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {practice.duration} мин
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(practice.createdAt).toLocaleDateString('ru-RU')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/admin/practices/edit/${practice.id}`}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                          >
                            Редактировать
                          </Link>
                          <button 
                            onClick={() => handleDelete(practice.id)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                          >
                            Удалить
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPractices; 