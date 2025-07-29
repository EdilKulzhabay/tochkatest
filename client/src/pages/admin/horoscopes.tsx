import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

interface Horoscope {
  id: string;
  zodiacSign: string;
  title: string;
  content: string;
  date: string;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  createdAt: string;
}

const AdminHoroscopes: React.FC = () => {
  const [horoscopes] = useState<Horoscope[]>([
    {
      id: '1',
      zodiacSign: 'Овен',
      title: 'Время новых начинаний',
      content: 'Сегодня отличный день для начала новых проектов. Энергия планет поддерживает ваши инициативы...',
      date: '2024-01-15',
      period: 'daily',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      zodiacSign: 'Телец',
      title: 'Стабильность и уверенность',
      content: 'Неделя принесет стабильность в финансовых вопросах. Время для планирования долгосрочных целей...',
      date: '2024-01-15',
      period: 'weekly',
      createdAt: '2024-01-14'
    },
    {
      id: '3',
      zodiacSign: 'Близнецы',
      title: 'Общение и новые знакомства',
      content: 'Этот месяц будет богат на общение и новые знакомства. Ваша коммуникабельность поможет в карьере...',
      date: '2024-01-01',
      period: 'monthly',
      createdAt: '2024-01-13'
    }
  ]);

  const [selectedPeriod, setSelectedPeriod] = useState<'all' | 'daily' | 'weekly' | 'monthly' | 'yearly'>('all');
  const [selectedSign, setSelectedSign] = useState<string>('all');

  const zodiacSigns = [
    'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева',
    'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'
  ];

  const periodLabels = {
    daily: 'Ежедневный',
    weekly: 'Еженедельный',
    monthly: 'Ежемесячный',
    yearly: 'Годовой'
  };

  const filteredHoroscopes = horoscopes.filter(horoscope => {
    const periodMatch = selectedPeriod === 'all' || horoscope.period === selectedPeriod;
    const signMatch = selectedSign === 'all' || horoscope.zodiacSign === selectedSign;
    return periodMatch && signMatch;
  });

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот гороскоп?')) {
      console.log('Удаляем гороскоп:', id);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <AdminHeader 
          title="Гороскопы"
          actionButton={{
            label: "Добавить гороскоп",
            link: "/admin/horoscopes/new",
            color: "purple"
          }}
        />

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Список гороскопов</h2>
                <span className="text-sm text-gray-500">Всего: {filteredHoroscopes.length}</span>
              </div>
              
              {/* Фильтры */}
              <div className="flex flex-wrap gap-4">
                <div>
                  <label htmlFor="period-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Период
                  </label>
                  <select
                    id="period-filter"
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value as any)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="all">Все периоды</option>
                    <option value="daily">Ежедневные</option>
                    <option value="weekly">Еженедельные</option>
                    <option value="monthly">Ежемесячные</option>
                    <option value="yearly">Годовые</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="sign-filter" className="block text-sm font-medium text-gray-700 mb-1">
                    Знак зодиака
                  </label>
                  <select
                    id="sign-filter"
                    value={selectedSign}
                    onChange={(e) => setSelectedSign(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="all">Все знаки</option>
                    {zodiacSigns.map(sign => (
                      <option key={sign} value={sign}>{sign}</option>
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
                      Знак зодиака
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Заголовок
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Период
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Дата
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Создано
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredHoroscopes.map((horoscope) => (
                    <tr key={horoscope.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">⭐</span>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {horoscope.zodiacSign}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {horoscope.title}
                        </div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">
                          {horoscope.content}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          horoscope.period === 'daily' ? 'bg-green-100 text-green-800' :
                          horoscope.period === 'weekly' ? 'bg-blue-100 text-blue-800' :
                          horoscope.period === 'monthly' ? 'bg-purple-100 text-purple-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {periodLabels[horoscope.period]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(horoscope.date).toLocaleDateString('ru-RU')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(horoscope.createdAt).toLocaleDateString('ru-RU')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/admin/horoscopes/edit/${horoscope.id}`}
                            className="text-purple-600 hover:text-purple-900 transition-colors"
                          >
                            Редактировать
                          </Link>
                          <button 
                            onClick={() => handleDelete(horoscope.id)}
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

export default AdminHoroscopes; 