import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface VideoLesson {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    thumbnailUrl: string;
    youtubeUrl: string;
    accessType: 'free' | 'paid' | 'subscription';
}

const VideoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [videoLessons] = useState<VideoLesson[]>([
        {
            id: '1',
            title: 'Медленные мысли',
            shortDescription: 'Мастер-класс Нурлана Мураткали, который позволяет овладеть навыком изменения объективной реальности через технологию медленных мыслей',
            fullDescription: `У 98% людей мысли не материальны, потому что они мыслят на «быстрых» мыслях (болталка в голове). Эфимероид – короткоживущий эгрегор (один сезон). «Медленная» мысль как бы идет фоном, вы делаете дела, а фоном идет мысль «позвони маме»; они даже во сне работают. Вы слушаете лекцию, а инсайты идут на «медленных» мыслях.
Разница между быстрыми и медленными мыслями – как меняется русло подземной реки и направление ветра. Большую цель люди потока мыслят на «медленных» мыслях, все что не для себя – на «быстрых». А в социуме негативные вещи мыслят на «медленных» мыслях, а свои желания на «быстрых» мыслях.
Подробнее об этом в новом видео Нурлана Мураткали:`,
            thumbnailUrl: '/images/video-thumbnails/video1.png',
            youtubeUrl: 'https://www.youtube.com/embed/4ayAeaJPC10',
            accessType: 'free'
        },
        {
            id: '2',
            title: 'Референтная группа',
            shortDescription: 'Мощная технология вхождения в состояния для решения конкретных задач и собирания нужных для вас сущностей',
            fullDescription: `Референтная группа – мощная технология вхождения в состояния для решения конкретных задач (здоровье, деньги). Люди на уровне сознания видят тела, а на уровне подсознания ощущаем реальную силу привлекаемых сущностей. Референтную группу мы выбираем умом, а отбирает и договаривается наш Дух; она вытягивает нас в новые локации, на новые социальные слои.
Подробнее о том, как правильно собрать референтную группу, в новом видео Нурлана Мураткали:`,
            thumbnailUrl: '/images/video-thumbnails/video2.png',
            youtubeUrl: 'https://www.youtube.com/embed/A0OVUJgGoWM',
            accessType: 'free',
        },
        {
            id: '3',
            title: 'Спиральная динамика',
            shortDescription: 'Новейшая интегральная модель архитектуры сознания человека, которая реализует передний край представлений об этапах развития человека и общества',
            fullDescription: 'Новейшая интегральная модель архитектуры сознания человека, которая реализует передний край представлений об этапах развития человека и общества',
            thumbnailUrl: '/images/video-thumbnails/video3.png',
            youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            accessType: 'subscription',
        }
    ]);

    const currentVideo = videoLessons.find(video => video.id === id);

    if (!currentVideo) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Видео не найдено</h2>
                    <Link to="/video" className="text-blue-600 hover:text-blue-700">
                        Вернуться к списку видео
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/video" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Видео</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
                {/* Video Player */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            src={`${currentVideo.youtubeUrl}`}
                            title={currentVideo.title}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Video Info */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{currentVideo.title}</h2>
                    </div>

                    {/* Full Description */}
                    <div className="prose max-w-none">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {currentVideo.fullDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail; 