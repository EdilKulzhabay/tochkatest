import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Practice {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    imageUrl: string;
    videoUrl: string;
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
            fullDescription: 'Эта практика представляет собой комплекс специальных упражнений, разработанных Нурланом Мураткали для восстановления подвижности суставов и общего омоложения организма. Регулярное выполнение этих упражнений помогает улучшить кровообращение, укрепить связки и сухожилия, а также повысить общий уровень энергии.',
            imageUrl: '/images/practices/joint-gymnastics.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=YGPH_QZvSdk&t=3s',
            accessType: 'free'
        },
        {
            id: '2',
            title: 'Бесполезное упражнение',
            subtitle: 'Одна из самых действенных практик по выходу из социумной карусели',
            description: 'Практика для освобождения от социальных стереотипов и обретения внутренней свободы',
            fullDescription: 'Эта уникальная практика помогает освободиться от социальных стереотипов и обрести внутреннюю свободу. Она направлена на разрушение автоматических реакций и привычных паттернов поведения, которые мешают нам жить в соответствии с нашей истинной природой.',
            imageUrl: '/images/practices/useless-exercise.jpg',
            videoUrl: 'https://youtu.be/Kdh7YihM8yk?feature=shared',
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

    const getYouTubeEmbedUrl = (url: string) => {
        const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0` : '';
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-orange-400 p-4 pt-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                    <Link to="/practices" className="text-white">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <span className="text-lg">←</span>
                        </div>
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 mb-1">{practice.title}</h1>
                    <p className="text-gray-600 text-sm">{practice.subtitle}</p>
                </div>
            </div>

            <div className="p-4">
                {/* Video Section */}
                <div className="mb-6">
                    {!isPlaying ? (
                        <div 
                            className="relative w-full h-48 bg-gray-100 rounded-lg cursor-pointer"
                            onClick={() => setIsPlaying(true)}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl">▶️</span>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                    Бесплатно
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                src={getYouTubeEmbedUrl(practice.videoUrl)}
                                title={practice.title}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Описание практики
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {practice.fullDescription}
                    </p>
                    
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                        <h3 className="font-semibold text-gray-900 mb-2">Как выполнять:</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li>• Найдите удобное место для выполнения практики</li>
                            <li>• Убедитесь, что вас никто не отвлекает</li>
                            <li>• Следуйте инструкциям в видео</li>
                            <li>• Выполняйте практику регулярно для достижения лучших результатов</li>
                        </ul>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-6 text-center">
                    <Link
                        to="/practices"
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
                    >
                        <span className="mr-2">←</span>
                        Назад к практикам
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PracticeDetail; 