import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface VideoLesson {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    thumbnailUrl: string;
    youtubeUrl: string;
    accessType: 'free' | 'paid' | 'subscription';
    duration: string;
}

const Meditations: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [videoLessons] = useState<VideoLesson[]>([
        {
            id: '1',
            title: 'Введение в энергоинформационные технологии',
            shortDescription: 'Базовые принципы работы с энергией и информацией',
            fullDescription: 'Подробное введение в мир энергоинформационных технологий. Изучите основные принципы работы с энергией, научитесь чувствовать и направлять информационные потоки.',
            thumbnailUrl: '/images/meditation-thumbnails/intro.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'free',
            duration: '15:30'
        },
        {
            id: '2',
            title: 'Техника осознанного дыхания',
            shortDescription: 'Практические упражнения для восстановления энергии',
            fullDescription: 'Мастер-класс по технике осознанного дыхания. Научитесь правильно дышать для восстановления энергии и улучшения самочувствия.',
            thumbnailUrl: '/images/meditation-thumbnails/breathing.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'free',
            duration: '22:15'
        },
        {
            id: '3',
            title: 'Медитация для начинающих',
            shortDescription: 'Простые техники медитации для ежедневной практики',
            fullDescription: 'Пошаговое руководство по медитации для начинающих. Узнайте, как правильно медитировать и интегрировать практику в повседневную жизнь.',
            thumbnailUrl: '/images/meditation-thumbnails/meditation.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'free',
            duration: '18:45'
        },
        {
            id: '4',
            title: 'Работа с чакрами',
            shortDescription: 'Активация и балансировка энергетических центров',
            fullDescription: 'Глубокое погружение в работу с чакрами. Изучите методы активации и балансировки энергетических центров для гармонизации жизни.',
            thumbnailUrl: '/images/meditation-thumbnails/chakras.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'paid',
            duration: '45:20'
        },
        {
            id: '5',
            title: 'Техники материализации желаний',
            shortDescription: 'Практические методы воплощения целей в реальность',
            fullDescription: 'Продвинутые техники материализации желаний. Научитесь правильно формулировать и воплощать свои цели в реальность.',
            thumbnailUrl: '/images/meditation-thumbnails/manifestation.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'subscription',
            duration: '52:10'
        },
        {
            id: '6',
            title: 'Защита от энергетических атак',
            shortDescription: 'Методы создания защитных барьеров',
            fullDescription: 'Изучите эффективные методы защиты от негативных энергетических воздействий и создания сильных защитных барьеров.',
            thumbnailUrl: '/images/meditation-thumbnails/protection.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'subscription',
            duration: '38:25'
        }
    ]);

    const handleVideoClick = (video: VideoLesson) => {
        if (video.accessType === 'free') {
            // Переход на страницу видео
            window.location.href = `/meditation/${video.id}`;
        } else if (video.accessType === 'paid') {
            setModalMessage('Для того чтобы просмотреть медитацию вы должны купить доступ на 3 месяца');
            setShowModal(true);
        } else if (video.accessType === 'subscription') {
            setModalMessage('Для того чтобы просмотреть медитацию вы должны оформить подписку');
            setShowModal(true);
        }
    };

    const getAccessIcon = (accessType: string) => {
        switch (accessType) {
            case 'free':
                return null;
            case 'paid':
            case 'subscription':
                return '🔒';
            default:
                return null;
        }
    };

    const getAccessColor = (accessType: string) => {
        switch (accessType) {
            case 'free':
                return 'bg-green-500 hover:bg-green-600';
            case 'paid':
                return 'bg-blue-500 hover:bg-blue-600';
            case 'subscription':
                return 'bg-purple-500 hover:bg-purple-600';
            default:
                return 'bg-gray-500 hover:bg-gray-600';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 pt-8 relative">
            {/* Header with Back Button */}
            <div className="relative text-center mb-8">
                <Link to="/" className="absolute left-0 flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <span className="text-lg">←</span>
                    </div>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Медитации</h1>
            </div>

            {/* Video Lessons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLessons.map((video) => (
                    <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        {/* Thumbnail */}
                        <div className="relative">
                            <img 
                                src={video.thumbnailUrl} 
                                alt={video.title}
                                className="w-full h-48 object-cover bg-gray-200"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    // Показываем заглушку с текстом
                                    const placeholder = document.createElement('div');
                                    placeholder.className = 'w-full h-48 bg-blue-600 flex items-center justify-center text-white text-center p-4';
                                    placeholder.innerHTML = `<div><div class="text-2xl mb-2">📹</div><div class="text-sm">${video.title}</div></div>`;
                                    target.parentNode?.appendChild(placeholder);
                                }}
                            />
                            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                {video.duration}
                            </div>
                            {video.accessType !== 'free' && (
                                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                    {video.accessType === 'paid' ? '💎' : '⭐'}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                {video.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {video.shortDescription}
                            </p>

                            {/* Action Button */}
                            <button
                                onClick={() => handleVideoClick(video)}
                                className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors flex items-center justify-center ${
                                    video.accessType === 'free' 
                                        ? getAccessColor(video.accessType)
                                        : 'bg-gray-400 hover:bg-gray-500'
                                }`}
                            >
                                {video.accessType === 'free' ? (
                                    <>
                                        <span>Перейти</span>
                                        <span className="ml-2">▶</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-2">{getAccessIcon(video.accessType)}</span>
                                        <span>Закрыто</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-10 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>

                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Доступ ограничен
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {modalMessage}
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Понятно
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Meditations; 