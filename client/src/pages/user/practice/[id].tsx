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
    const [isPlaying, setIsPlaying] = useState(false);

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

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

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
                        {!isPlaying ? (
                            // Превью с кнопкой воспроизведения
                            <div className="absolute top-0 left-0 w-full h-full bg-black">
                                <img 
                                    src={practice.imageUrl} 
                                    alt={practice.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const placeholder = document.createElement('div');
                                        placeholder.className = 'w-full h-full bg-blue-600 flex items-center justify-center text-white text-center p-4';
                                        placeholder.innerHTML = `<div><div class="text-4xl mb-4">📹</div><div class="text-lg">${practice.title}</div></div>`;
                                        target.parentNode?.appendChild(placeholder);
                                    }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                    <button
                                        onClick={handlePlayClick}
                                        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-20 h-20 flex items-center justify-center transition-colors shadow-lg"
                                    >
                                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // YouTube iframe после нажатия кнопки воспроизведения
                            <iframe
                                src={`${practice.youtubeUrl}?autoplay=1`}
                                title={practice.title}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        )}
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
                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {practice.description}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PracticeDetail; 