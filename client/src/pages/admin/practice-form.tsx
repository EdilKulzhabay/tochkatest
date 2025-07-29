import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

interface PracticeForm {
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl: string;
  accessType: 'free' | 'paid';
  duration: number;
}

const AdminPracticeForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<PracticeForm>({
    title: '',
    subtitle: '',
    description: '',
    shortDescription: '',
    imageUrl: '',
    videoUrl: '',
    accessType: 'free',
    duration: 30
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'duration' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Здесь будет API запрос
      console.log('Сохраняем практику:', formData);
      
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/admin/practices');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <AdminHeader 
          title={isEditing ? 'Редактировать практику' : 'Добавить практику'} 
          backLink="/admin/practices"
        />

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow">
              <form onSubmit={handleSubmit}>
                <div className="px-6 py-4 border-b">
                  <h2 className="text-lg font-medium text-gray-900">
                    Информация о практике
                  </h2>
                </div>

                <div className="p-6 space-y-6">
                  {/* Основная информация */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Название *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Введите название практики"
                      />
                    </div>

                    <div>
                      <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Подзаголовок *
                      </label>
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Введите подзаголовок"
                      />
                    </div>
                  </div>

                  {/* Описания */}
                  <div>
                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Краткое описание *
                    </label>
                    <textarea
                      id="shortDescription"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Введите краткое описание практики"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Полное описание *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Введите полное описание практики"
                    />
                  </div>

                  {/* Медиа и настройки */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                        URL изображения *
                      </label>
                      <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-2">
                        URL видео *
                      </label>
                      <input
                        type="url"
                        id="videoUrl"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="https://youtube.com/watch?v=..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="accessType" className="block text-sm font-medium text-gray-700 mb-2">
                        Тип доступа *
                      </label>
                      <select
                        id="accessType"
                        name="accessType"
                        value={formData.accessType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="free">Бесплатно</option>
                        <option value="paid">Платно</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                        Длительность (минуты) *
                      </label>
                      <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                        min="1"
                        max="180"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="30"
                      />
                    </div>
                  </div>

                  {/* Превью изображения */}
                  {formData.imageUrl && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Превью изображения
                      </label>
                      <div className="w-32 h-32 border border-gray-300 rounded-lg overflow-hidden">
                        <img 
                          src={formData.imageUrl} 
                          alt="Превью"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/128x128?text=Ошибка';
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Кнопки */}
                <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
                  <Link
                    to="/admin/practices"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  >
                    Отмена
                  </Link>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? 'Сохранение...' : (isEditing ? 'Обновить' : 'Создать')}
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

export default AdminPracticeForm; 