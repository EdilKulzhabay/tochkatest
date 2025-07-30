import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Meditation {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    thumbnailUrl: string;
    youtubeUrl: string;
    accessType: 'free' | 'subscription';
}

const Meditations: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [meditations] = useState<Meditation[]>([
        {
            id: '1',
            title: 'Медитация Новой Эры',
            shortDescription: 'Медитация – это новая форма молитвы, когда мы созидаем из состояния Я-Личность-Душа',
            fullDescription: `Главная проблема человечества — в выборе между путём и потребностью Души. Большинство ведется на соблазн, когда социум заманивает рекламой, блогерами, привлекательными побрякушками, и, человек, запутавшись, выбирает Путь. А он неизбежно ведет в ловушку социумных каруселей. Но парадокс в том, что начать жить в потоке, на нужной Вам скорости, жить в кайф, можно только через замедление, т.е. выскочив из замкнутого круга. Мы попадаем в поток и начинаем жить в кайф. 
В потоковом состоянии у Вас появится возможность создавать свои системы. Потому что в Душе, Вы двигаетесь дальше и через поток входите в следующий процесс, в котором сознание направляется вовнутрь. И Ваша энергия, Ваше внимание, как вся энергия эволюции, начинает идти вовнутрь. Это состояние «Я-Личность-Душа». Располагайтесь удобно и проделайте эту медитацию:`,
            thumbnailUrl: '/images/meditation-thumbnails/meditation1.png',
            youtubeUrl: 'https://www.youtube.com/embed/pBDvKvDskXM',
            accessType: 'free'
        },
        {
            id: '2',
            title: 'Технология медленных мыслей',
            shortDescription: 'Медитация, которая позволяет овладеть навыком изменения объективной реальности через технологию медленных мыслей',
            fullDescription: `У 98% людей мысли не материальны, потому что они мыслят на «быстрых» мыслях (болталка в голове). Эфимероид – короткоживущий эгрегор (один сезон). «Медленная» мысль как бы идет фоном, вы делаете дела, а фоном идет мысль «позвони маме»; они даже во сне работают. Вы слушаете лекцию, а инсайты идут на «медленных» мыслях.
Разница между быстрыми и медленными мыслями – как меняется русло подземной реки и направление ветра. Большую цель люди потока мыслят на «медленных» мыслях, все что не для себя – на «быстрых». А в социуме негативные вещи мыслят на «медленных» мыслях, а свои желания на «быстрых» мыслях.
Подробнее об этом в новом видео Нурлана Мураткали:`,
            thumbnailUrl: '/images/meditation-thumbnails/meditation2.png',
            youtubeUrl: 'https://www.youtube.com/embed/cg6lg0lAbyE',
            accessType: 'free',
        },
        {
            id: '3',
            title: 'Медитация «Идеальные роды»',
            shortDescription: 'Это уникальный метод, позволяющий изменить процесс собственного рождения в своем сознании, подсознании и энергоинформационной пространстве',
            fullDescription: 'Это уникальный метод, позволяющий изменить процесс собственного рождения в своем сознании, подсознании и энергоинформационной пространстве',
            thumbnailUrl: '/images/meditation-thumbnails/meditation3.png',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'subscription',
        }
    ]);

    const handleMeditationClick = (meditation: Meditation) => {
        if (meditation.accessType === 'free') {
            // Переход на страницу видео
            window.location.href = `/meditation/${meditation.id}`;
        } else if (meditation.accessType === 'subscription') {
            setShowModal(true);
        }
    };

    const getAccessIcon = (accessType: string) => {
        switch (accessType) {
            case 'free':
                return null;
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
            case 'subscription':
                return 'bg-purple-500 hover:bg-purple-600';
            default:
                return 'bg-gray-500 hover:bg-gray-600';
        }
    };

    return (
        <div className="min-h-screen relative">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Медитации</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            {/* Video Lessons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {meditations.map((meditation) => (
                    <div key={meditation.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        {/* Thumbnail */}
                        <div className="relative">
                            <img 
                                src={meditation.thumbnailUrl} 
                                alt={meditation.title}
                                className="w-full h-48 object-cover bg-gray-200"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    // Показываем заглушку с текстом
                                    const placeholder = document.createElement('div');
                                    placeholder.className = 'w-full h-48 bg-blue-600 flex items-center justify-center text-white text-center p-4';
                                    placeholder.innerHTML = `<div><div class="text-2xl mb-2">📹</div><div class="text-sm">${meditation.title}</div></div>`;
                                    target.parentNode?.appendChild(placeholder);
                                }}
                            />
                            {/* <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                {meditation.duration}
                            </div> */}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                {meditation.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {meditation.shortDescription}
                            </p>

                            {/* Action Button */}
                            <button
                                onClick={() => handleMeditationClick(meditation)}
                                className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors flex items-center justify-center ${
                                    meditation.accessType === 'free' 
                                        ? getAccessColor(meditation.accessType)
                                        : 'bg-gray-400 hover:bg-gray-500'
                                }`}
                            >
                                {meditation.accessType === 'free' ? (
                                    <>
                                        <span>Перейти</span>
                                        <span className="ml-2">▶</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-2">{getAccessIcon(meditation.accessType)}</span>
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
                                Нужна подписка
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