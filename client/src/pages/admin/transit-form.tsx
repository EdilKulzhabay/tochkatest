import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

interface TransitForm {
  title: string;
  description: string;
  planet: string;
  aspect: string;
  startDate: string;
  endDate: string;
  intensity: 'low' | 'medium' | 'high';
  category: 'love' | 'career' | 'health' | 'finance' | 'spiritual';
  affectedSigns: string[];
}

const AdminTransitForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<TransitForm>({
    title: '',
    description: '',
    planet: 'Солнце',
    aspect: 'Соединение',
    startDate: '',
    endDate: '',
    intensity: 'medium',
    category: 'spiritual',
    affectedSigns: []
  });

  const [isLoading, setIsLoading] = useState(false);

  const planets = ['Солнце', 'Луна', 'Меркурий', 'Венера', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун', 'Плутон'];
  const aspects = ['Соединение', 'Оппозиция', 'Тригон', 'Квадрат', 'Секстиль', 'Ретроград'];
  const zodiacSigns = [
    'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева',
    'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'
  ];
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignToggle = (sign: string) => {
    setFormData(prev => ({
      ...prev,
      affectedSigns: prev.affectedSigns.includes(sign)
        ? prev.affectedSigns.filter(s => s !== sign)
        : [...prev.affectedSigns, sign]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Сохраняем транзит:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/admin/transits');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <AdminHeader 
          title={isEditing ? 'Редактировать транзит' : 'Добавить транзит'} 
          backLink="/admin/transits"
        />

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow">
              <form onSubmit={handleSubmit}>
                <div className="px-6 py-4 border-b">
                  <h2 className="text-lg font-medium text-gray-900">
                    Информация о транзите
                  </h2>
                </div>

                <div className="p-6 space-y-6">
                  {/* Основная информация */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Название транзита *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Введите название транзита"
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Категория *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {Object.entries(categoryLabels).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Описание */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Описание транзита *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Введите описание влияния транзита"
                    />
                  </div>

                  {/* Астрологические параметры */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="planet" className="block text-sm font-medium text-gray-700 mb-2">
                        Планета *
                      </label>
                      <select
                        id="planet"
                        name="planet"
                        value={formData.planet}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {planets.map(planet => (
                          <option key={planet} value={planet}>{planet}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="aspect" className="block text-sm font-medium text-gray-700 mb-2">
                        Аспект *
                      </label>
                      <select
                        id="aspect"
                        name="aspect"
                        value={formData.aspect}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {aspects.map(aspect => (
                          <option key={aspect} value={aspect}>{aspect}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="intensity" className="block text-sm font-medium text-gray-700 mb-2">
                        Интенсивность *
                      </label>
                      <select
                        id="intensity"
                        name="intensity"
                        value={formData.intensity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        {Object.entries(intensityLabels).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Период действия */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Дата начала *
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Дата окончания *
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Затронутые знаки зодиака */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Затронутые знаки зодиака *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {zodiacSigns.map(sign => (
                        <label key={sign} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.affectedSigns.includes(sign)}
                            onChange={() => handleSignToggle(sign)}
                            className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">{sign}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Кнопки */}
                <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
                  <Link
                    to="/admin/transits"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Отмена
                  </Link>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

export default AdminTransitForm; 