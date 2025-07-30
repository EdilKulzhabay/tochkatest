import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Practice {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    youtubeUrl: string;
    accessType: 'free' | 'subscription';
}

const Practices: React.FC = () => {
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

    const freePractices: Practice[] = [
        {
            id: '1',
            title: 'Суставная гимнастика',
            subtitle: 'Омолаживающая суставная гимнастика по авторской методике Нурлана Мураткали',
            description: 'Комплекс упражнений для восстановления подвижности суставов и омоложения организма',
            imageUrl: '/images/practices/practice1.png',
            youtubeUrl: 'https://www.youtube.com/embed/YGPH_QZvSdk',
            accessType: 'free'
        },
        {
            id: '2',
            title: 'Бесполезное упражнение',
            subtitle: 'Одна из самых действенных практик по выходу из социумной карусели',
            description: 'Практика для освобождения от социальных стереотипов и обретения внутренней свободы',
            imageUrl: '/images/practices/practice2.png',
            youtubeUrl: 'https://www.youtube.com/embed/Kdh7YihM8yk',
            accessType: 'free'
        }
    ];

    const paidPractices: Practice[] = [
        {
            id: '3',
            title: 'Коррекция через точку зачатия',
            subtitle: 'Мощная практика для максимального проявления индивидуальности',
            description: 'Мощная практика, которая позволяет максимально проявить индивидуальные особенности нашей личности и проживать свою судьбу на максимум',
            imageUrl: '/images/practices/practice3.png',
            youtubeUrl: 'https://www.youtube.com/embed/4ayAeaJPC10',
            accessType: 'subscription'
        }
    ];

    const handlePracticeClick = (practice: Practice) => {
        if (practice.accessType === 'subscription') {
            setShowSubscriptionModal(true);
        } else {
            // Переход на страницу с подробным описанием
            window.location.href = `/practice/${practice.id}`;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Практики</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="p-4">
                {/* Introduction */}
                <div className="flex items-start mb-8">
                    {/* <div className="w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-2xl">🧠</span>
                    </div> */}
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
                                    <img src={practice.imageUrl} alt={practice.title} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{practice.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{practice.subtitle}</p>
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
                                    <img src={practice.imageUrl} alt={practice.title} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{practice.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{practice.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subscription Modal */}
            {showSubscriptionModal && (
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
                            onClick={() => setShowSubscriptionModal(false)}
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

export default Practices; 