import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

interface Transit {
  id: string;
  title: string;
  description: string;
  planet: string;
  aspect: string;
  startDate: string;
  endDate: string;
  intensity: 'low' | 'medium' | 'high';
  category: 'love' | 'career' | 'health' | 'finance' | 'spiritual';
  affectedSigns: string[];
  createdAt: string;
}

const AdminTransits: React.FC = () => {
  const [transits] = useState<Transit[]>([
    {
      id: '1',
      title: 'Транзит Венеры через Овен',
      description: 'Период активизации в сфере любви и отношений. Время для новых романтических начинаний.',
      planet: 'Венера',
      aspect: 'Соединение',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      intensity: 'high',
      category: 'love',
      affectedSigns: ['Овен', 'Лев', 'Стрелец'],
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Ретроградный Меркурий в Козероге',
      description: 'Время пересмотра карьерных планов и бизнес-стратегий. Возможны задержки в важных проектах.',
      planet: 'Меркурий',
      aspect: 'Ретроград',
      startDate: '2024-01-20',
      endDate: '2024-02-10',
      intensity: 'medium',
      category: 'career',
      affectedSigns: ['Козерог', 'Телец', 'Дева'],
      createdAt: '2024-01-14'
    },
    {
      id: '3',
      title: 'Юпитер в тригоне с Марсом',
      description: 'Благоприятный аспект для финансовых вложений и развития бизнеса. Время удачи и экспансии.',
      planet: 'Юпитер',
      aspect: 'Тригон',
      startDate: '2024-02-01',
      endDate: '2024-03-01',
      intensity: 'high',
      category: 'finance',
      affectedSigns: ['Близнецы', 'Весы', 'Водолей'],
      createdAt: '2024-01-13'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIntensity, setSelectedIntensity] = useState<string>('all');
  const [selectedPlanet, setSelectedPlanet] = useState<string>('all');

  const planets = ['Солнце', 'Луна', 'Меркурий', 'Венера', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун', 'Плутон'];
  
  const categoryLabels = {
    love: 'Любовь',
    career: 'Карьера',
    health: 'Здоровье',
    finance: 'Финансы',
    spiritual: 'Духовность'
  };

  const intensityLabels = {
    low: 'Низкая',
    medium: 'Средняя',
    high: 'Высокая'
  };

  const filteredTransits = transits.filter(transit => {
    const categoryMatch = selectedCategory === 'all' || transit.category === selectedCategory;
    const intensityMatch = selectedIntensity === 'all' || transit.intensity === selectedIntensity;
    const planetMatch = selectedPlanet === 'all' || transit.planet === selectedPlanet;
    return categoryMatch && intensityMatch && planetMatch;
  });

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот транзит?')) {
      console.log('Удаляем транзит:', id);
    }
  };

  const isActiveTransit = (startDate: string, endDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return now >= start && now <= end;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <AdminHeader 
          title="Транзиты"
          actionButton={{
            label: "Добавить транзит",
            link: "/admin/transits/new",
            color: "indigo"
          }}
        />

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Список транзитов</h2>
                <span className="text-sm text-gray-500">Всего: {filteredTransits.length}</span>
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
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="all">Все категории</option>
                    {Object.entries(categoryLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="intensity-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Интенсивность
                  </label>
                  <select
                    id="intensity-filter"
                    value={selectedIntensity}
                    onChange={(e) => setSelectedIntensity(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="all">Все уровни</option>
                    {Object.entries(intensityLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="planet-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Планета
                  </label>
                  <select
                    id="planet-filter"
                    value={selectedPlanet}
                    onChange={(e) => setSelectedPlanet(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="all">Все планеты</option>
                    {planets.map(planet => (
                      <option key={planet} value={planet}>{planet}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Транзит
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Планета/Аспект
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Категория
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Интенсивность
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Период
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Знаки
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTransits.map((transit) => (
                    <tr key={transit.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">🌙</span>
                          <div>
                            <div className="text-sm font-medium text-gray-900 flex items-center">
                              {transit.title}
                              {isActiveTransit(transit.startDate, transit.endDate) && (
                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Активен
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-500 max-w-xs truncate">
                              {transit.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{transit.planet}</div>
                        <div className="text-sm text-gray-500">{transit.aspect}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          transit.category === 'love' ? 'bg-pink-100 text-pink-800' :
                          transit.category === 'career' ? 'bg-blue-100 text-blue-800' :
                          transit.category === 'health' ? 'bg-green-100 text-green-800' :
                          transit.category === 'finance' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {categoryLabels[transit.category]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          transit.intensity === 'low' ? 'bg-gray-100 text-gray-800' :
                          transit.intensity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {intensityLabels[transit.intensity]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>{new Date(transit.startDate).toLocaleDateString('ru-RU')}</div>
                        <div className="text-gray-500">до {new Date(transit.endDate).toLocaleDateString('ru-RU')}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {transit.affectedSigns.slice(0, 3).map(sign => (
                            <span key={sign} className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                              {sign}
                            </span>
                          ))}
                          {transit.affectedSigns.length > 3 && (
                            <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                              +{transit.affectedSigns.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/admin/transits/edit/${transit.id}`}
                            className="text-indigo-600 hover:text-indigo-900 transition-colors"
                          >
                            Редактировать
                          </Link>
                          <button 
                            onClick={() => handleDelete(transit.id)}
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

export default AdminTransits; 