import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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

const VideoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [video, setVideo] = useState<VideoLesson | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Здесь в реальном приложении был бы API запрос
        // Пока используем моковые данные
        const mockVideo: VideoLesson = {
            id: id || '1',
            title: 'Введение в энергоинформационные технологии',
            shortDescription: 'Базовые принципы работы с энергией и информацией',
            fullDescription: `Подробное введение в мир энергоинформационных технологий. 

В этом видеоуроке вы изучите:
• Основные принципы работы с энергией
• Как чувствовать информационные потоки
• Техники направленного воздействия
• Практические упражнения для начинающих

Этот урок является фундаментом для дальнейшего изучения энергоинформационных технологий и поможет вам понять базовые концепции, на которых строится вся система tochka.li.

Рекомендуется проходить этот урок в спокойной обстановке, где вас никто не будет отвлекать.`,
            thumbnailUrl: '/images/video-thumbnails/intro.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0',
            accessType: 'free',
            duration: '15:30'
        };
        setVideo(mockVideo);
    }, [id]);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    if (!video) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Загрузка видео...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 pt-8">
            {/* Header with Back Button */}
            <div className="relative text-center mb-8">
                <Link to="/video" className="absolute left-0 flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <span className="text-lg">←</span>
                    </div>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Медитация</h1>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Video Player */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        {!isPlaying ? (
                            // Превью с кнопкой воспроизведения
                            <div className="absolute top-0 left-0 w-full h-full bg-black">
                                <img 
                                    src={video.thumbnailUrl} 
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const placeholder = document.createElement('div');
                                        placeholder.className = 'w-full h-full bg-blue-600 flex items-center justify-center text-white text-center p-4';
                                        placeholder.innerHTML = `<div><div class="text-4xl mb-4">📹</div><div class="text-lg">${video.title}</div></div>`;
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
                                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                                    {video.duration}
                                </div>
                            </div>
                        ) : (
                            // YouTube iframe после нажатия кнопки воспроизведения
                            <iframe
                                src={`${video.youtubeUrl}&autoplay=1`}
                                title={video.title}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        )}
                    </div>
                </div>

                {/* Video Info */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{video.title}</h2>
                        <div className="flex items-center space-x-2">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {video.duration}
                            </span>
                        </div>
                    </div>

                    {/* Full Description */}
                    <div className="prose max-w-none">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {video.fullDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail; 