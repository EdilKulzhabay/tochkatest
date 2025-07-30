import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Horoscope {
    id: string;
    dateRange: string;
    title: string;
    energyName: string;
    accessType: 'free' | 'subscription';
    content: {
        topics: {
            title: string;
            listType: 'bullet' | 'number';
            description: string[];
        }[];
    };
}

const Horoscope: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const horoscopes: Horoscope[] = [
        {
            id: '1',
            dateRange: '23.07–23.08',
            title: 'АНТИСОЦИУМНАЯ ЭНЕРГИЯ',
            energyName: 'ЭНЕРГИЯ ЛЬВА',
            accessType: 'free',
            content: {
                topics: [
                    {
                        title: 'Энергия: господства и верности себе. Миссия: руководить людьми. Художественный образ: царь. Стратегия: решать свои проблемы, раздавая приказы.',
                        listType: 'number',
                        description: [
                            "Низший уровень реализация (первая зона комфорта) – стремление делать все самим. По уму им стыдно делегировать свои дела и перекладывать свои проблемы на других.",
                            "Высший уровень реализация (вторая зона комфорта) – стремление распределять другим всю свою работу (заложено в генетике и энергии). Работать – это не царское дело. При этом люди благодарны за эти приказы и радостно их исполняют. Работать могут все, но заставить работать могут львы. Даже наказание из рук льва – это подарок."
                        ]
                    },
                    {
                        title: 'Условия перехода на высший уровень реализации:',
                        listType: 'bullet',
                        description: [
                            "Царь – это человек, который стремится ничего не делать своими руками. При этом не брать на себя ответственность и не объяснять детально как надо сделать. Не объяснять никому то, чем будете заниматься вы в команде.",
                            "Он раздает приказы. Но хитрость заключается в том, что окружающие рады их исполнять. Лев дает приказы, но не объясняет зачем и не читает нотации.",
                            "Царь никогда не должен быть благодарен тем, кто возвел его на престол. Если вы начинаете благодарить кого-то, то людям это дискомфортно. Для людей за честь помочь льву. Любой подарок от льва – высшая награда, внимание и интерес к жизни кого-то – подарок."
                        ],
                    }
                ]
            }
        },
        {
            id: '2',
            dateRange: '20.07–01.08',
            title: 'ЭНЕРГИЯ ТРАНСФОРМАЦИИ',
            energyName: 'ЭНЕРГИЯ СКОРПИОНА',
            accessType: 'subscription',
            content: {
                topics: []
            }
        },
        {
            id: '3',
            dateRange: '15.08–15.09',
            title: 'ЭНЕРГИЯ ГАРМОНИИ',
            energyName: 'ЭНЕРГИЯ ВЕСОВ',
            accessType: 'subscription',
            content: {
                topics: []
            }
        }
    ];

    // Получаем все бесплатные гороскопы
    const currentHoroscope = horoscopes[0];


    return (
        <div className="min-h-screen pb-[110px]">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold text-center">Антисоциумный<br/> гороскоп</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
                {/* Current Free Horoscope */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-gray-500">{currentHoroscope.dateRange}</span>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            Бесплатно
                        </span>
                    </div>

                    {/* <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                        {currentHoroscope.title}
                    </h2> */}
                    <h3 className="text-xl text-blue-600 mb-6 text-center">
                        {currentHoroscope.energyName}
                    </h3>

                    <div className="space-y-6">
                        {currentHoroscope.content.topics.map((topic, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => {
                                        const elem = document.getElementById(`topic-${index}`);
                                        if (elem) {
                                            elem.classList.toggle('hidden');
                                        }
                                    }}
                                    className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
                                >
                                    <span className="font-medium text-gray-900">{topic.title}</span>
                                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div id={`topic-${index}`} className="hidden px-4 py-3 border-t border-gray-200">
                                    {topic.listType === 'number' ? (
                                        <ol className="list-decimal list-inside space-y-4">
                                            {topic.description.map((item, index) => (
                                                <li key={index} className="text-gray-700">{item} <br/></li>
                                            ))}
                                        </ol>
                                    ) : (
                                        <ul className="list-disc list-inside space-y-4">
                                            {topic.description.map((item, index) => (
                                                <li key={index} className="text-gray-700">{item} <br/></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Button to open all horoscopes */}
                <div className="text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Посмотреть все знаки
                    </button>
                </div>
            </div>

            {/* All Horoscopes Modal */}
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

export default Horoscope; 