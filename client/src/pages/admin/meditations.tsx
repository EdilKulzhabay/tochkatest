import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';

interface Meditation {
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

const AdminMeditations: React.FC = () => {
  const [meditations] = useState<Meditation[]>([
    {
      id: '1',
      title: 'Утренняя медитация',
      subtitle: 'Начни день с осознанности',
      description: 'Полное описание утренней медитации...',
      shortDescription: 'Краткое описание',
      imageUrl: '/images/meditation1.jpg',
      videoUrl: 'https://youtube.com/watch?v=123',
      accessType: 'free',
      duration: 15,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Медитация перед сном',
      subtitle: 'Расслабление и покой',
      description: 'Полное описание вечерней медитации...',
      shortDescription: 'Краткое описание',
      imageUrl: '/images/meditation2.jpg',
      videoUrl: 'https://youtube.com/watch?v=456',
      accessType: 'paid',
      duration: 20,
      createdAt: '2024-01-14'
    }
  ]);

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту медитацию?')) {
      // Логика удаления
      console.log('Удаляем медитацию:', id);
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
            <h1 className="text-2xl font-semibold text-gray-800">Медитации</h1>
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin/meditations/new"
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Добавить медитацию
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
                <h2 className="text-lg font-medium text-gray-900">Список медитаций</h2>
                <span className="text-sm text-gray-500">Всего: {meditations.length}</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Медитация
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
                  {meditations.map((meditation) => (
                    <tr key={meditation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            <img 
                              className="h-12 w-12 rounded-lg object-cover" 
                              src={meditation.imageUrl} 
                              alt={meditation.title}
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/48x48?text=🧘';
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {meditation.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {meditation.subtitle}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          meditation.accessType === 'free' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {meditation.accessType === 'free' ? 'Бесплатно' : 'Платно'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {meditation.duration} мин
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(meditation.createdAt).toLocaleDateString('ru-RU')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/admin/meditations/edit/${meditation.id}`}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                          >
                            Редактировать
                          </Link>
                          <button 
                            onClick={() => handleDelete(meditation.id)}
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

export default AdminMeditations; 