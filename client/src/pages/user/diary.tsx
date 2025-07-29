import React, { useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation';

const Diary: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState('today');
    const [todayData, setTodayData] = useState({
        openings: '',
        achievements: '',
        gratitude: ''
    });

    const diaryEntries = [
        {
            id: 'threeDaysAgo',
            date: '3 дня назад',
            isToday: false,
            openings: 'Понял, что мои страхи часто преувеличены. Большинство того, чего я боюсь, никогда не происходит. Это освобождает много энергии.',
            achievements: 'Начал новый курс по программированию. Организовал встречу с друзьями, которую давно планировал. Сделал генеральную уборку дома.',
            gratitude: 'Благодарен за крышу над головой и стабильную работу. За возможность путешествовать и видеть новые места. За музыку, которая поднимает настроение.'
        },
        {
            id: 'dayBeforeYesterday',
            date: 'Позавчера',
            isToday: false,
            openings: 'Осознал, что мое беспокойство часто связано с попытками контролировать то, что от меня не зависит. Это было важное прозрение.',
            achievements: 'Успешно провел презентацию перед большой аудиторией. Помог другу решить сложную проблему. Написал 1000 слов для своего блога.',
            gratitude: 'Благодарен за возможность учиться новому каждый день. За друзей, которые всегда готовы поддержать. За здоровье и энергию.'
        },
        {
            id: 'yesterday',
            date: 'Вчера',
            isToday: false,
            openings: 'Открыл для себя новую технику медитации - осознанное дыхание. Понял, что даже 5 минут в день могут кардинально изменить мое состояние.',
            achievements: 'Завершил важный проект на работе. Нашел время для чтения книги по саморазвитию. Сделал 30 минут физических упражнений.',
            gratitude: 'Благодарен за поддержку коллег в сложный момент. За прекрасную погоду и возможность прогуляться в парке. За вкусный ужин, который приготовила мама.'
        },
        {
            id: 'today',
            date: 'Сегодня',
            isToday: true,
            openings: '',
            achievements: '',
            gratitude: ''
        }
    ];

    const handleSave = () => {
        console.log('Сохранено:', todayData);
        // Здесь будет логика сохранения
        alert('Запись сохранена!');
    };

    return (
        <div className="min-h-screen bg-white p-4 pb-[110px]">
            <div className="flex flex-col items-center justify-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Дневник</h1>
            </div>

            <div className="space-y-4">
                {diaryEntries.map((entry) => (
                    <div key={entry.id} className="border border-gray-200 rounded-lg">
                        <button
                            className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg flex justify-between items-center"
                            onClick={() => setOpenAccordion(openAccordion === entry.id ? '' : entry.id)}
                        >
                            <span className="font-medium text-gray-900">{entry.date}</span>
                            <span className="text-gray-500">
                                {openAccordion === entry.id ? '▼' : '▶'}
                            </span>
                        </button>
                        
                        {openAccordion === entry.id && (
                            <div className="p-4 space-y-4">
                                {entry.isToday ? (
                                    // Сегодня - редактируемые поля
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Открытия
                                            </label>
                                            <textarea
                                                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                rows={3}
                                                placeholder="Что нового вы открыли для себя сегодня?"
                                                value={todayData.openings}
                                                onChange={(e) => setTodayData({...todayData, openings: e.target.value})}
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Достижения
                                            </label>
                                            <textarea
                                                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                rows={3}
                                                placeholder="Каких достижений вы добились сегодня?"
                                                value={todayData.achievements}
                                                onChange={(e) => setTodayData({...todayData, achievements: e.target.value})}
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Благодарности
                                            </label>
                                            <textarea
                                                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                rows={3}
                                                placeholder="За что вы благодарны сегодня?"
                                                value={todayData.gratitude}
                                                onChange={(e) => setTodayData({...todayData, gratitude: e.target.value})}
                                            />
                                        </div>
                                        
                                        <button
                                            onClick={handleSave}
                                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                        >
                                            Сохранить
                                        </button>
                                    </>
                                ) : (
                                    // Предыдущие дни - только для чтения
                                    <>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Открытия</h4>
                                            <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                                                {entry.openings}
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Достижения</h4>
                                            <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                                                {entry.achievements}
                                            </p>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Благодарности</h4>
                                            <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                                                {entry.gratitude}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <BottomNavigation active="diary" />
        </div>
    );
};

export default Diary; 