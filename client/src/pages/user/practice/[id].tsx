import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Practice {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    youtubeUrl: string;
    accessType: 'free' | 'paid';
}

const PracticeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [practice, setPractice] = useState<Practice | null>(null);

    // Моковые данные практик
    const practices: Practice[] = [
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

    useEffect(() => {
        const foundPractice = practices.find(p => p.id === id);
        setPractice(foundPractice || null);
    }, [id]);

    if (!practice) {
        return (
            <div className="min-h-screen bg-white p-4 pt-8">
                <div className="text-center">
                    <p className="text-gray-600">Практика не найдена</p>
                    <Link to="/practices" className="text-blue-600 hover:underline">
                        Вернуться к практикам
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/practices" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Практики</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
                {/* Video Section */}

                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            src={`${practice.youtubeUrl}`}
                            title={practice.title}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{practice.title}</h2>
                    </div>

                    {/* Full Description */}
                    <div className="prose max-w-none">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                        {id === '1' && (
                            <div className="space-y-6">
                                <div className="">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                                        Вы молоды настолько, насколько молоды ваши суставы!
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Омолаживающая энергетическая суставная гимнастика – это комплекс простых 
                                        физических движений и энергетических практик, направленных на восстановление 
                                        подвижности суставов, гибкости позвоночника, расслабление мышечных зажимов и 
                                        укрепление сухожилий глаз, что прямым образом влияет на улучшение вашего зрения.
                                    </p>
                                    
                                    {/* Изображение-заглушка для суставов */}
                                    <div className="">
                                        <img src="/images/practiceContent1.png" alt="practice1" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <div className="">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                        Самое главное – уловить суть и запомнить последовательность движений:
                                    </h4>
                                    
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>тело делится на несколько частей;</span>
                                        </li>
                                        
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>
                                                каждая часть может двигаться в нескольких плоскостях, например: вперед, назад, 
                                                влево, вправо, затем скручивание в 2-4 стороны и вращательные движения в обе 
                                                стороны;
                                            </span>
                                        </li>
                                        
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>в каждой плоскости нужно сделать по 5-10 движений;</span>
                                        </li>
                                        
                                        <li className="flex items-start">
                                            <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>в конце каждого блока – медитативная энергетическая практика.</span>
                                        </li>
                                    </ul>

                                    <p className="text-gray-700 leading-relaxed">
                                        Заниматься такой гимнастикой можно от 1 до 6 раз в неделю.
                                    </p>
                                </div>
                            </div>
                        )}

                        {id === '2' && (
                            <div className="space-y-6">
                                <div className="">
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Бесполезное упражнение – внешне очень простой инструмент в работе с подсознанием. 
                                        Но, как вы уже догадались, глубокий по содержанию и сложный по исполнению. И очень 
                                        эффективный. Главная цель этого упражнения – взять под осознанный контроль и 
                                        управление своё подсознание и свою жизнь.
                                    </p>
                                </div>

                                <div className="">
                                    <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                                        Получите удовольствие от этого упражнения, двигайтесь и посмотрите, что 
                                        вы получите. Примите этот вызов самому себе.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PracticeDetail; 