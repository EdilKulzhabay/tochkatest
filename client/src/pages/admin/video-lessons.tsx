import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  accessType: 'free' | 'paid';
  views: number;
  createdAt: string;
}

const AdminVideoLessons: React.FC = () => {
  const [videoLessons] = useState<VideoLesson[]>([
    {
      id: '1',
      title: 'Основы медитации для начинающих',
      description: 'Подробный урок о том, как начать практиковать медитацию с нуля',
      thumbnailUrl: '/images/video1.jpg',
      videoUrl: 'https://youtube.com/watch?v=123',
      duration: 25,
      category: 'Медитация',
      difficulty: 'beginner',
      accessType: 'free',
      views: 1234,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Продвинутые техники дыхания',
      description: 'Изучаем сложные дыхательные техники для опытных практиков',
      thumbnailUrl: '/images/video2.jpg',
      videoUrl: 'https://youtube.com/watch?v=456',
      duration: 45,
      category: 'Дыхательные практики',
      difficulty: 'advanced',
      accessType: 'paid',
      views: 567,
      createdAt: '2024-01-14'
    },
    {
      id: '3',
      title: 'Йога для здоровья позвоночника',
      description: 'Комплекс упражнений для укрепления и восстановления позвоночника',
      thumbnailUrl: '/images/video3.jpg',
      videoUrl: 'https://youtube.com/watch?v=789',
      duration: 35,
      category: 'Йога',
      difficulty: 'intermediate',
      accessType: 'free',
      views: 890,
      createdAt: '2024-01-13'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedAccess, setSelectedAccess] = useState<string>('all');

  const categories = ['Медитация', 'Дыхательные практики', 'Йога', 'Философия', 'Здоровье'];
  
  const difficultyLabels = {
    beginner: 'Начальный',
    intermediate: 'Средний',
    advanced: 'Продвинутый'
  };

  const filteredVideos = videoLessons.filter(video => {
    const categoryMatch = selectedCategory === 'all' || video.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || video.difficulty === selectedDifficulty;
    const accessMatch = selectedAccess === 'all' || video.accessType === selectedAccess;
    return categoryMatch && difficultyMatch && accessMatch;
  });

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот видео-урок?')) {
      console.log('Удаляем видео-урок:', id);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <AdminHeader 
          title="Видео-уроки"
          actionButton={{
            label: "Добавить видео-урок",
            link: "/admin/video-lessons/new",
            color: "blue"
          }}
        />

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Список видео-уроков</h2>
                <span className="text-sm text-gray-500">Всего: {filteredVideos.length}</span>
              </div>
              
              {/* Фильтры */}
              <div className="flex flex-wrap gap-4">
                <div>
                  <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Категория
                  </label>
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="all">Все категории</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Уровень сложности
                  </label>
                  <select
                    id="difficulty-filter"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="all">Все уровни</option>
                    <option value="beginner">Начальный</option>
                    <option value="intermediate">Средний</option>
                    <option value="advanced">Продвинутый</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="access-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Доступ
                  </label>
                  <select
                    id="access-filter"
                    value={selectedAccess}
                    onChange={(e) => setSelectedAccess(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="all">Все типы</option>
                    <option value="free">Бесплатные</option>
                    <option value="paid">Платные</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Видео-урок
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Категория
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Уровень
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Доступ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Длительность
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Просмотры
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredVideos.map((video) => (
                    <tr key={video.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-28">
                            <img 
                              className="h-16 w-28 rounded-lg object-cover" 
                              src={video.thumbnailUrl} 
                              alt={video.title}
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/112x64?text=🎥';
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 max-w-xs">
                              {video.title}
                            </div>
                            <div className="text-sm text-gray-500 max-w-xs truncate">
                              {video.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                          {video.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          video.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                          video.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {difficultyLabels[video.difficulty]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          video.accessType === 'free' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {video.accessType === 'free' ? 'Бесплатно' : 'Платно'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {video.duration} мин
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {video.views.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/admin/video-lessons/edit/${video.id}`}
                            className="text-red-600 hover:text-red-900 transition-colors"
                          >
                            Редактировать
                          </Link>
                          <button 
                            onClick={() => handleDelete(video.id)}
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

export default AdminVideoLessons; 