import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

interface ScheduleEventForm {
  title: string;
  date: string;
  location: string;
  hasBroadcast: boolean;
  url: string;
  description: string;
}

const AdminScheduleForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<ScheduleEventForm>({
    title: '',
    date: '',
    location: '',
    hasBroadcast: false,
    url: '',
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Здесь будет API запрос
      console.log('Сохраняем событие:', formData);
      
      // Имитация задержки API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Переход обратно к списку
      navigate('/admin/schedule');
    } catch (error) {
      console.error('Ошибка при сохранении:', error);
      alert('Произошла ошибка при сохранении события');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <AdminHeader title={isEditing ? 'Редактирование события' : 'Создание события'} />

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  {isEditing ? 'Редактировать событие' : 'Создать новое событие'}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Название события */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Название события *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Введите название события"
                  />
                </div>

                {/* Дата */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Дата события *
                  </label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Например: 7-9 августа 2025"
                  />
                </div>

                {/* Место проведения */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Место проведения *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Например: Москва, Алматы, Лондон"
                  />
                </div>

                {/* URL */}
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                    Ссылка на событие *
                  </label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    required
                    value={formData.url}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://tochka.li/event-name"
                  />
                </div>

                {/* Трансляция */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hasBroadcast"
                    name="hasBroadcast"
                    checked={formData.hasBroadcast}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="hasBroadcast" className="ml-2 block text-sm text-gray-700">
                    Есть трансляция
                  </label>
                </div>

                {/* Описание */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Описание события
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Краткое описание события (необязательно)"
                  />
                </div>

                {/* Кнопки */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <Link
                    to="/admin/schedule"
                    className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Отмена
                  </Link>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? 'Сохранение...' : (isEditing ? 'Обновить событие' : 'Создать событие')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminScheduleForm; 