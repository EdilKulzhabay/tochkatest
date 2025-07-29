import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Practice {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    videoUrl: string;
    accessType: 'free' | 'paid';
}

const Practices: React.FC = () => {
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

    const freePractices: Practice[] = [
        {
            id: '1',
            title: 'Суставная гимнастика',
            subtitle: 'Омолаживающая суставная гимнастика по авторской методике Нурлана Мураткали',
            description: 'Комплекс упражнений для восстановления подвижности суставов и омоложения организма',
            imageUrl: '/images/practices/joint-gymnastics.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=YGPH_QZvSdk&t=3s',
            accessType: 'free'
        },
        {
            id: '2',
            title: 'Бесполезное упражнение',
            subtitle: 'Одна из самых действенных практик по выходу из социумной карусели',
            description: 'Практика для освобождения от социальных стереотипов и обретения внутренней свободы',
            imageUrl: '/images/practices/useless-exercise.jpg',
            videoUrl: 'https://youtu.be/Kdh7YihM8yk?feature=shared',
            accessType: 'free'
        }
    ];

    const paidPractices: Practice[] = [
        {
            id: '3',
            title: 'Коррекция через точку зачатия',
            subtitle: 'Мощная практика для максимального проявления индивидуальности',
            description: 'Мощная практика, которая позволяет максимально проявить индивидуальные особенности нашей личности и проживать свою судьбу на максимум',
            imageUrl: '/images/practices/conception-point.jpg',
            videoUrl: '',
            accessType: 'paid'
        }
    ];

    const handlePracticeClick = (practice: Practice) => {
        if (practice.accessType === 'paid') {
            setShowSubscriptionModal(true);
        } else {
            // Переход на страницу с подробным описанием
            window.location.href = `/practice/${practice.id}`;
        }
    };

    const handleSubscribe = () => {
        window.open('https://tochka.tg/', '_blank');
        setShowSubscriptionModal(false);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-orange-400 p-4 pt-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                    <Link to="/" className="text-white">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <span className="text-lg">←</span>
                        </div>
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Практики</h1>
                    <p className="text-gray-600 text-sm">Power of the Mind</p>
                </div>
            </div>

            <div className="p-4">
                {/* Introduction */}
                <div className="flex items-start mb-8">
                    <div className="w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-2xl">🧠</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-600 leading-relaxed">
                            Сравнение человеком своих преимуществ с преимуществами других людей — процесс подсознательный. Главным критерием успеха в социуме является наличие преимуществ. Самыми мощными преимуществами являются энергоинформационные навыки. С помощью упражнений этого раздела вы сможете развить в себе дремлющие в вас способности.
                        </p>
                    </div>
                </div>

                {/* Free Practices Section */}
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs">💪</span>
                        </div>
                        <h2 className="text-gray-600 font-medium">Бесплатные практики</h2>
                    </div>
                    
                    <div className="flex space-x-4 overflow-x-auto pb-4">
                        {freePractices.map((practice) => (
                            <div
                                key={practice.id}
                                onClick={() => handlePracticeClick(practice)}
                                className="w-64 bg-white border border-gray-200 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow"
                            >
                                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                                    <span className="text-4xl">🧘‍♀️</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{practice.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{practice.subtitle}</p>
                                <p className="text-xs text-gray-500">{practice.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Paid Practices Section */}
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs">🏋️</span>
                        </div>
                        <h2 className="text-gray-600 font-medium">Платные практики</h2>
                    </div>
                    
                    <div className="flex space-x-4 overflow-x-auto pb-4">
                        {paidPractices.map((practice) => (
                            <div
                                key={practice.id}
                                onClick={() => handlePracticeClick(practice)}
                                className="w-64 bg-white border border-gray-200 rounded-lg p-4 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow relative"
                            >
                                {/* Lock Icon */}
                                <div className="absolute top-2 right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">🔒</span>
                                </div>
                                
                                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                                    <span className="text-4xl">🌟</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{practice.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{practice.subtitle}</p>
                                <p className="text-xs text-gray-500">{practice.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subscription Modal */}
            {showSubscriptionModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Доступ ограничен
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Эта практика доступна по подписке. Оформите доступ для просмотра.
                            </p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleSubscribe}
                                    className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                                >
                                    Оформить подписку
                                </button>
                                <button
                                    onClick={() => setShowSubscriptionModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Practices; 