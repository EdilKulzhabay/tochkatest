import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface MeditationLesson {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    thumbnailUrl: string;
    youtubeUrl: string;
    accessType: 'free' | 'paid' | 'subscription';
}

const MeditationDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [meditationLessons] = useState<MeditationLesson[]>([
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

    const currentMeditation = meditationLessons.find(lesson => lesson.id === id);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="min-h-screen">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/meditations" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Медитация</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        {!isPlaying ? (
                            // Превью с кнопкой воспроизведения
                            <div className="absolute top-0 left-0 w-full h-full bg-black">
                                <img 
                                    src={currentMeditation?.thumbnailUrl} 
                                    alt={currentMeditation?.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const placeholder = document.createElement('div');  
                                        placeholder.className = 'w-full h-full bg-blue-600 flex items-center justify-center text-white text-center p-4';
                                        placeholder.innerHTML = `<div><div class="text-4xl mb-4">📹</div><div class="text-lg">${currentMeditation?.title}</div></div>`;
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
                                src={`${currentMeditation?.youtubeUrl}?autoplay=1`}
                                title={currentMeditation?.title}
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
                        <h2 className="text-2xl font-bold text-gray-900">{currentMeditation?.title}</h2>
                    </div>

                    {/* Full Description */}
                    <div className="prose max-w-none">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {currentMeditation?.fullDescription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeditationDetail; 