import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';

interface ScheduleEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  hasBroadcast: boolean;
  url: string;
  description?: string;
  createdAt: string;
}

const AdminSchedule: React.FC = () => {
  const [events] = useState<ScheduleEvent[]>([
    {
      id: '1',
      title: 'Деньги, Кланы и Власть',
      date: '7-9 августа 2025',
      location: 'Лондон',
      hasBroadcast: true,
      url: 'https://tochka.li/money-clans-power',
      description: 'Семинар о финансовых стратегиях и власти',
      createdAt: '2024-12-01'
    },
    {
      id: '2',
      title: 'Точка.live «Энергия Здоровья»',
      date: '23-27 августа 2025',
      location: 'Алматы',
      hasBroadcast: true,
      url: 'https://tochka.li/live-3',
      description: 'Живое мероприятие по энергии здоровья',
      createdAt: '2024-12-02'
    },
    {
      id: '3',
      title: 'Меркантильные завтраки',
      date: '21 сентября 2025',
      location: 'Москва',
      hasBroadcast: false,
      url: 'https://tochka.li/material-breakfasts',
      description: 'Деловые завтраки для предпринимателей',
      createdAt: '2024-12-03'
    },
    {
      id: '4',
      title: 'Великие роли любви',
      date: '11 октября 2025',
      location: 'Москва',
      hasBroadcast: true,
      url: 'https://tochka.li/love-roles',
      description: 'Семинар о ролях в отношениях',
      createdAt: '2024-12-04'
    },
    {
      id: '5',
      title: 'Точка.live «Энергия Предназначения»',
      date: '1-5 ноября 2025',
      location: 'Москва',
      hasBroadcast: true,
      url: 'https://tochka.li/live-1',
      description: 'Живое мероприятие по поиску предназначения',
      createdAt: '2024-12-05'
    },
    {
      id: '6',
      title: 'Точка Цели',
      date: '21-23 декабря 2025',
      location: 'Москва',
      hasBroadcast: true,
      url: 'https://tochka.li/goals_2025',
      description: 'Постановка и достижение целей на 2026 год',
      createdAt: '2024-12-06'
    }
  ]);

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить это событие?')) {
      console.log('Удаляем событие:', id);
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
            <h1 className="text-2xl font-semibold text-gray-800">Расписание</h1>
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin/schedule/new"
                className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                Добавить событие
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
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Список событий</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Событие
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Дата
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Место
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Трансляция
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Создано
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {event.title}
                          </div>
                          {event.description && (
                            <div className="text-sm text-gray-500 mt-1">
                              {event.description}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {event.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {event.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          event.hasBroadcast 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {event.hasBroadcast ? 'Да' : 'Нет'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Открыть
                          </a>
                          <Link
                            to={`/admin/schedule/edit/${event.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Редактировать
                          </Link>
                          <button
                            onClick={() => handleDelete(event.id)}
                            className="text-red-600 hover:text-red-900"
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

export default AdminSchedule; 