import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Horoscope {
    id: string;
    dateRange: string;
    title: string;
    energyName: string;
    accessType: 'free' | 'paid';
    content: {
        energy: string;
        mission: string;
        image: string;
        strategy: string;
        levels: string;
        conditions: string;
    };
}

const Horoscope: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentFreeIndex, setCurrentFreeIndex] = useState(0);

    const horoscopes: Horoscope[] = [
        {
            id: '1',
            dateRange: '23.07–23.08',
            title: 'АНТИСОЦИУМНАЯ ЭНЕРГИЯ',
            energyName: 'ЭНЕРГИЯ ЛЬВА',
            accessType: 'free',
            content: {
                energy: 'Лев — это энергия творческого самовыражения, лидерства и внутренней силы. В этот период вы чувствуете мощный импульс к самореализации и желание быть в центре внимания. Солнечная энергия Льва наполняет вас уверенностью и харизмой.',
                mission: 'Ваша миссия — проявить свою уникальность, вдохновить других своим примером и создать что-то значимое, что оставит след в мире. Станьте маяком для тех, кто ищет свой путь.',
                image: 'Представьте себя на сцене жизни, где вы — главный актер своей судьбы. Вы излучаете уверенность, харизму и внутреннее сияние. Ваша аура подобна солнечному свету, который притягивает людей.',
                strategy: 'Действуйте смело и решительно. Не бойтесь выделяться из толпы. Используйте свою творческую энергию для реализации амбициозных проектов. Будьте щедры в проявлении своих талантов.',
                levels: 'На низком уровне: эгоцентризм и тщеславие. На среднем: здоровое самолюбие и лидерство. На высоком: вдохновляющее лидерство и творческое служение человечеству.',
                conditions: 'Для перехода на следующий уровень необходимо научиться балансировать между личными амбициями и заботой о других. Развивайте эмпатию и сострадание.'
            }
        },
        {
            id: '2',
            dateRange: '20.07–01.08',
            title: 'ЭНЕРГИЯ ТРАНСФОРМАЦИИ',
            energyName: 'ЭНЕРГИЯ СКОРПИОНА',
            accessType: 'paid',
            content: {
                energy: 'Скорпион приносит глубокую трансформацию и мощную интуицию. Это время для внутренней работы и преодоления страхов.',
                mission: 'Исследовать глубины своей души, преодолеть ограничения и трансформировать негативные паттерны в силу.',
                image: 'Вы — алхимик своей души, превращающий тьму в свет, страх в силу, боль в мудрость.',
                strategy: 'Погрузитесь в самоанализ. Работайте с подсознанием. Не бойтесь темных сторон своей личности.',
                levels: 'На низком уровне: манипуляции и ревность. На среднем: психологическая проницательность. На высоком: духовная трансформация.',
                conditions: 'Принятие своих теневых сторон и готовность к глубоким изменениям.'
            }
        },
        {
            id: '3',
            dateRange: '15.08–15.09',
            title: 'ЭНЕРГИЯ ГАРМОНИИ',
            energyName: 'ЭНЕРГИЯ ВЕСОВ',
            accessType: 'free',
            content: {
                energy: 'Весы приносят стремление к балансу, гармонии и справедливости. Это время для налаживания отношений и поиска равновесия во всех сферах жизни. Энергия Венеры наполняет вас чувством красоты и эстетики.',
                mission: 'Создавать гармонию в отношениях, находить баланс между разными сферами жизни и быть посредником в конфликтах. Привносить красоту и порядок в окружающий мир.',
                image: 'Вы — дипломат жизни, который умеет находить золотую середину и создавать красоту во всем. Ваша аура излучает спокойствие и равновесие.',
                strategy: 'Ищите компромиссы, развивайте дипломатические навыки, окружайте себя красотой и гармонией. Учитесь слушать разные точки зрения.',
                levels: 'На низком уровне: нерешительность и зависимость от мнения других. На среднем: дипломатичность и чувство справедливости. На высоком: мудрое посредничество и создание гармонии.',
                conditions: 'Развитие внутренней уверенности и способности принимать решения. Укрепление собственных принципов и ценностей.'
            }
        },
        {
            id: '4',
            dateRange: '10.09–10.10',
            title: 'ЭНЕРГИЯ МАСТЕРСТВА',
            energyName: 'ЭНЕРГИЯ ДЕВЫ',
            accessType: 'paid',
            content: {
                energy: 'Дева приносит аналитический ум, практичность и стремление к совершенству. Это время для работы над собой и развития навыков.',
                mission: 'Развивать мастерство в выбранной области, помогать другим через практическую поддержку и создавать порядок из хаоса.',
                image: 'Вы — мастер своего дела, который превращает хаос в порядок, а обыденность в искусство.',
                strategy: 'Фокусируйтесь на деталях, развивайте практические навыки, помогайте другим своим опытом.',
                levels: 'На низком уровне: критичность и перфекционизм. На среднем: практичность и полезность. На высоком: мудрое служение.',
                conditions: 'Принятие несовершенства и развитие сострадания к себе и другим.'
            }
        },
        {
            id: '5',
            dateRange: '05.10–05.11',
            title: 'ЭНЕРГИЯ ТВОРЧЕСКОГО ПОТОКА',
            energyName: 'ЭНЕРГИЯ ВОДОЛЕЯ',
            accessType: 'free',
            content: {
                energy: 'Водолей приносит инновационное мышление, оригинальность и стремление к свободе. Это время для творческих прорывов и нестандартных решений. Уран наделяет вас революционным духом.',
                mission: 'Привносить новые идеи в мир, разрушать устаревшие стереотипы и создавать будущее через инновации. Быть проводником прогресса.',
                image: 'Вы — изобретатель и визионер, который видит возможности там, где другие видят препятствия. Ваша аура электризует и вдохновляет.',
                strategy: 'Доверяйте своей интуиции, не бойтесь быть непохожим на других, экспериментируйте с новыми подходами. Общайтесь с единомышленниками.',
                levels: 'На низком уровне: бунтарство и эксцентричность. На среднем: оригинальность и прогрессивность. На высоком: революционное лидерство и гениальность.',
                conditions: 'Развитие эмоционального интеллекта и способности работать в команде. Баланс между индивидуальностью и сотрудничеством.'
            }
        },
        {
            id: '6',
            dateRange: '01.11–01.12',
            title: 'ЭНЕРГИЯ ДУХОВНОГО РОСТА',
            energyName: 'ЭНЕРГИЯ СТРЕЛЬЦА',
            accessType: 'free',
            content: {
                energy: 'Стрелец приносит оптимизм, философское мышление и стремление к расширению горизонтов. Это время для духовного роста и поиска высшего смысла. Юпитер наделяет вас мудростью.',
                mission: 'Искать истину, расширять границы познания и вдохновлять других на духовный путь. Быть учителем и проводником к высшим знаниям.',
                image: 'Вы — мудрец и путешественник духа, который стремится к вершинам познания. Ваша аура излучает оптимизм и мудрость.',
                strategy: 'Изучайте философию, путешествуйте (физически и духовно), делитесь знаниями с другими. Верьте в высшую справедливость.',
                levels: 'На низком уровне: догматизм и поверхностность. На среднем: оптимизм и стремление к знаниям. На высоком: мудрость и духовное учительство.',
                conditions: 'Развитие терпения и способности к глубокому анализу. Умение применять знания на практике.'
            }
        }
    ];

    // Получаем все бесплатные гороскопы
    const freeHoroscopes = horoscopes.filter(h => h.accessType === 'free');
    const currentHoroscope = freeHoroscopes[currentFreeIndex];

    const handleNextFree = () => {
        setCurrentFreeIndex((prev) => (prev + 1) % freeHoroscopes.length);
    };

    const handlePrevFree = () => {
        setCurrentFreeIndex((prev) => (prev - 1 + freeHoroscopes.length) % freeHoroscopes.length);
    };

    const handleSubscribe = () => {
        window.open('https://tochka.tg/', '_blank');
        setShowModal(false);
    };

    const handleHoroscopeClick = (horoscope: Horoscope) => {
        if (horoscope.accessType === 'free') {
            // Находим индекс бесплатного гороскопа
            const freeIndex = freeHoroscopes.findIndex(h => h.id === horoscope.id);
            if (freeIndex !== -1) {
                setCurrentFreeIndex(freeIndex);
            }
            setShowModal(false);
        } else {
            // Для платных гороскопов показываем модальное окно подписки
            handleSubscribe();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 pt-8 pb-[110px]">
            {/* Header */}
            <div className="relative text-center mb-8">
                <Link to="/" className="absolute left-0 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                        <span className="text-lg">←</span>
                    </div>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Энергетические<br/> гороскопы</h1>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Current Free Horoscope */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-gray-500">{currentHoroscope.dateRange}</span>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            Бесплатно
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                        {currentHoroscope.title}
                    </h2>
                    <h3 className="text-xl text-blue-600 mb-6 text-center">
                        {currentHoroscope.energyName}
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Энергия</h4>
                            <p className="text-gray-700 leading-relaxed">{currentHoroscope.content.energy}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Миссия</h4>
                            <p className="text-gray-700 leading-relaxed">{currentHoroscope.content.mission}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Образ</h4>
                            <p className="text-gray-700 leading-relaxed">{currentHoroscope.content.image}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Стратегия</h4>
                            <p className="text-gray-700 leading-relaxed">{currentHoroscope.content.strategy}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Уровни реализации</h4>
                            <p className="text-gray-700 leading-relaxed">{currentHoroscope.content.levels}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Условия перехода</h4>
                            <p className="text-gray-700 leading-relaxed">{currentHoroscope.content.conditions}</p>
                        </div>
                    </div>

                    {/* Navigation for free horoscopes */}
                    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={handlePrevFree}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span className="mr-2">←</span>
                            Предыдущий
                        </button>
                        <span className="text-sm text-gray-500">
                            {currentFreeIndex + 1} из {freeHoroscopes.length}
                        </span>
                        <button
                            onClick={handleNextFree}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            Следующий
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>

                {/* Button to open all horoscopes */}
                <div className="text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Посмотреть все гороскопы
                    </button>
                </div>
            </div>

            {/* All Horoscopes Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">
                                Все энергетические гороскопы
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {horoscopes.map((horoscope) => (
                                <div
                                    key={horoscope.id}
                                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md ${
                                        horoscope.accessType === 'free'
                                            ? 'bg-green-50 border-green-200 hover:bg-green-100'
                                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                    }`}
                                    onClick={() => handleHoroscopeClick(horoscope)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg font-semibold text-gray-900">
                                            {horoscope.dateRange}
                                        </span>
                                        {horoscope.accessType === 'paid' ? (
                                            <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
                                                🔒 Подписка
                                            </span>
                                        ) : (
                                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                                                Бесплатно
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-gray-700 text-sm">
                                        <div className="font-medium">{horoscope.title}</div>
                                        <div className="text-blue-600">{horoscope.energyName}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                onClick={handleSubscribe}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                            >
                                Оформить подписку для доступа ко всем гороскопам
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Horoscope; 