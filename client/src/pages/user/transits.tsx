import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Transit {
    id: string;
    dateRange: string;
    title: string;
    geneKey: string;
    accessType: 'free' | 'paid';
    content: {
        siddhi: string;
        gift: string;
        shadow: string;
        lines: {
            date: string;
            line: string;
            description: string;
            upArrow: string;
            downArrow: string;
        }[];
    };
}

const Transits: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentFreeIndex, setCurrentFreeIndex] = useState(0);

    const transits: Transit[] = [
        {
            id: '1',
            dateRange: '25–30 июля',
            title: 'ВОРОТА ЛИДЕРСТВА',
            geneKey: 'Генный ключ «Звучание вашей истины»',
            accessType: 'free',
            content: {
                siddhi: 'Смирение - Истинное смирение возникает только на частоте Сиддхи, так как требует полного уничтожения индивидуальности. Для 31 Сиддхи любое поведение рассматривается как неличностное проявление тотальности, и здесь не существует концепции независимого деятеля. Именно смиренным абсолютно все равно, что другие могут посчитать их высокомерными. Корни Сиддхи 31-го генного ключа происходят от древней традиции Оракула. Это просто громкоговоритель Божественного, который вещает отстраненно и даже не интересуется тем, что говорит. Такая речь - чистое послание.',
                gift: 'Лидерство - Сердечный брендинг. Дар влияния. Мастерское владение словом. Такие люди знают, что аудитория нуждается в руководстве и жонглирует правдой в зависимости от того, что подходит для данной аудитории. На частоте Тени все это делается для достижения личного признания, богатства, материальных выгод. На уровне Дара цель совсем другая — помочь другим выйти из матрицы. Это использование специальных слов и языка для де-программирования обусловленности других. Дар лидерства может оказывать огромное влияние на большие группы людей. Некоторые люди с этим Даром в буквальном смысле являются голосом коллектива. 31 Дар опирается на предчувствие, поэтому он всегда знает, какая тенденция придет в мир следующей. Это индивидуумы, заинтересованные не в личной выгоде, а в коллективном руководстве.',
                shadow: 'Высокомерие - Навык владения словами и фактами для контроля и манипуляции другими. На уровне Тени язык — это инструмент всеобщего программирования. Высокомерие же коренится в вере, что через слова мы можем контролировать реальность. Наше высокомерие упорствует в иллюзии, что мы влияем на окружающую среду, хотя между нами и средой нет никакого разделения. В любой момент, когда люди говорят, не осознавая ложную ментальную фальсификацию, в которой они живут, они говорят из Тени 31-го ключа. Майя (иллюзия) заинтересована в своем усилении через мысли и слова, и мы можем видеть это повсюду в современном мире. Тень высокомерия отступает, когда мы начинаем говорить из сердца, когда слова являются лишь посредниками послания сердца.',
                lines: [
                    {
                        date: '25 июля',
                        line: 'Линия 1. Манифестация',
                        description: 'Влияние не может существовать в вакууме.',
                        upArrow: 'Солнце не может и не сдерживает свой свет и, следовательно, своего влияния на всякую жизнь. Природное выражение лидерства.',
                        downArrow: 'Поглощение света, которое во тьме может только обещать манифестацию. Неестественное выражение лидерства.'
                    },
                    {
                        date: '26 июля',
                        line: 'Линия 2. Самонадеянность',
                        description: 'Независимое действие без руководства.',
                        upArrow: 'Преданность высшим принципам, которая не может дожидаться консенсуса. Лидерство, которое не может дожидаться консенсуса.',
                        downArrow: 'Мотивированное высокомерие, которое часто из-за нервного напряжения тут же переходит к действию и ошибается (стреляет, но даёт осечку). Стремление к выражению, которое не может ждать и за это может поплатиться лидерством.'
                    },
                    {
                        date: '27 июля',
                        line: 'Линия 3. Избирательность',
                        description: 'Способность тщательно соотнести и выбрать верное влияние.',
                        upArrow: 'Способность тщательно соотнести и выбрать верное влияние и подстраивать своё поведение соответственно. Лидерская сила больше за счёт единения с соответствующими влияниями.',
                        downArrow: 'Качественная избирательность к риску удариться в бега с энтузиазмом, который может привести к унижению. Стремление к лидерству, которое будет принимать любые риски и любых последователей.'
                    },
                    {
                        date: '28 июля',
                        line: 'Линия 4. Намерение',
                        description: 'Успех влияния, основанный на его восприятии.',
                        upArrow: 'Публичное признание воспитания и защищающего влияния. Внешнее положительное признание своей способности вести за собой.',
                        downArrow: 'Воспринимаемое возвеличивание эго и попытки манипуляции. Внешние отрицательные проекции своей способности вести за собой.'
                    },
                    {
                        date: '29 июля',
                        line: 'Линия 5. Самодовольство',
                        description: 'Отсутствие внешнего воздействия гарантировано подходом.',
                        upArrow: 'Естественная специализация, которая развивается только в изоляции. Однако, когда развитие завершено, крайне сложно и в общем то невозможно воплотить влияние. Специализация, которая требует быть лидером для самого себя.',
                        downArrow: 'Глубокий фокус на личном опыте, который исполняется сам и не имеет никаких внешних амбиций. Отсутствие честолюбия, где достаточно быть лидером для самого себя.'
                    },
                    {
                        date: '30 июля',
                        line: 'Линия 6. Приложение',
                        description: 'Действия, которые соответствуют словам.',
                        upArrow: 'Действия, которые соответствуют словам и таким образом гарантируют успех. Лидерство, в котором слова и действия должны совпадать.',
                        downArrow: 'Поверхностность в приложении, которое граничит с лицемерием и справедливо рассматривается соответствующим образом. Лицемерие быть лидером на словах, а не на деле.'
                    }
                ]
            }
        },
        {
            id: '2',
            dateRange: '1–5 августа',
            title: 'ВОРОТА ТРАНСФОРМАЦИИ',
            geneKey: 'Генный ключ «Алхимия души»',
            accessType: 'paid',
            content: {
                siddhi: 'Трансформация - Глубокое преображение на уровне души.',
                gift: 'Алхимия - Способность превращать тьму в свет.',
                shadow: 'Страх - Боязнь изменений и трансформации.',
                lines: []
            }
        },
        {
            id: '3',
            dateRange: '10–15 августа',
            title: 'ВОРОТА ГАРМОНИИ',
            geneKey: 'Генный ключ «Баланс и равновесие»',
            accessType: 'free',
            content: {
                siddhi: 'Гармония - Полное единство с космическим порядком. На уровне Сиддхи человек становится проводником божественной гармонии, создавая равновесие во всех сферах жизни. Это состояние, когда внутренний и внешний мир находятся в совершенном резонансе.',
                gift: 'Дипломатия - Дар находить золотую середину в любых ситуациях. Способность видеть разные точки зрения и создавать компромиссы, которые удовлетворяют всех участников. Мастерство в разрешении конфликтов и создании атмосферы сотрудничества.',
                shadow: 'Нерешительность - Склонность к бесконечным размышлениям и неспособность принимать решения. Страх сделать неправильный выбор приводит к застою и упущенным возможностям.',
                lines: [
                    {
                        date: '10 августа',
                        line: 'Линия 1. Баланс',
                        description: 'Поиск равновесия в жизни.',
                        upArrow: 'Естественное стремление к гармонии во всех сферах жизни.',
                        downArrow: 'Потеря равновесия из-за внешних обстоятельств.'
                    },
                    {
                        date: '11 августа',
                        line: 'Линия 2. Дипломатия',
                        description: 'Искусство ведения переговоров.',
                        upArrow: 'Способность находить общий язык с любыми людьми.',
                        downArrow: 'Излишняя уступчивость в ущерб собственным интересам.'
                    }
                ]
            }
        },
        {
            id: '4',
            dateRange: '20–25 августа',
            title: 'ВОРОТА МАСТЕРСТВА',
            geneKey: 'Генный ключ «Совершенство в действии»',
            accessType: 'free',
            content: {
                siddhi: 'Совершенство - Достижение абсолютного мастерства в выбранной области. Это состояние, когда каждое действие становится произведением искусства, а человек становится проводником божественного мастерства.',
                gift: 'Практичность - Способность превращать идеи в конкретные результаты. Дар видеть детали и создавать порядок из хаоса. Мастерство в организации и систематизации.',
                shadow: 'Перфекционизм - Нездоровое стремление к совершенству, которое парализует действие. Критичность к себе и другим, которая мешает движению вперед.',
                lines: [
                    {
                        date: '20 августа',
                        line: 'Линия 1. Мастерство',
                        description: 'Развитие навыков и умений.',
                        upArrow: 'Естественное стремление к совершенству в деле.',
                        downArrow: 'Излишняя самокритика, мешающая развитию.'
                    },
                    {
                        date: '21 августа',
                        line: 'Линия 2. Организация',
                        description: 'Создание порядка и структуры.',
                        upArrow: 'Способность систематизировать и упорядочивать.',
                        downArrow: 'Излишняя педантичность и зацикленность на деталях.'
                    }
                ]
            }
        }
    ];

    // Получаем все бесплатные транзиты
    const freeTransits = transits.filter(t => t.accessType === 'free');
    const currentTransit = freeTransits[currentFreeIndex];

    const handleNextFree = () => {
        setCurrentFreeIndex((prev) => (prev + 1) % freeTransits.length);
    };

    const handlePrevFree = () => {
        setCurrentFreeIndex((prev) => (prev - 1 + freeTransits.length) % freeTransits.length);
    };

    const handleTransitClick = (transit: Transit) => {
        if (transit.accessType === 'free') {
            // Находим индекс бесплатного транзита
            const freeIndex = freeTransits.findIndex(t => t.id === transit.id);
            if (freeIndex !== -1) {
                setCurrentFreeIndex(freeIndex);
            }
            setShowModal(false);
        } else {
            // Для платных транзитов показываем модальное окно подписки
            handleSubscribe();
        }
    };

    const handleSubscribe = () => {
        window.open('https://tochka.tg/', '_blank');
        setShowModal(false);
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
                <h1 className="text-2xl font-bold text-gray-900">Энергетические<br/> транзиты</h1>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Current Free Transit */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-gray-500">{currentTransit.dateRange}</span>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            Бесплатно
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                        {currentTransit.title}
                    </h2>
                    <h3 className="text-xl text-blue-600 mb-6 text-center">
                        {currentTransit.geneKey}
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Сиддхи</h4>
                            <p className="text-gray-700 leading-relaxed">{currentTransit.content.siddhi}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Дар</h4>
                            <p className="text-gray-700 leading-relaxed">{currentTransit.content.gift}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Тень</h4>
                            <p className="text-gray-700 leading-relaxed">{currentTransit.content.shadow}</p>
                        </div>

                        {currentTransit.content.lines.length > 0 && (
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Подробнее о линиях</h4>
                                <div className="space-y-4">
                                    {currentTransit.content.lines.map((line, index) => (
                                        <div key={index} className="border-l-4 border-blue-200 pl-4">
                                            <div className="font-semibold text-gray-900 mb-2">
                                                {line.date} – {line.line}
                                            </div>
                                            <p className="text-gray-700 mb-2">{line.description}</p>
                                            <div className="space-y-2">
                                                <div className="flex items-start">
                                                    <span className="text-green-600 mr-2">⬆️</span>
                                                    <span className="text-gray-700 text-sm">{line.upArrow}</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-red-600 mr-2">⬇️</span>
                                                    <span className="text-gray-700 text-sm">{line.downArrow}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation for free transits */}
                    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={handlePrevFree}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span className="mr-2">←</span>
                            Предыдущий
                        </button>
                        <span className="text-sm text-gray-500">
                            {currentFreeIndex + 1} из {freeTransits.length}
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

                {/* Button to open all transits */}
                <div className="text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Посмотреть все транзиты
                    </button>
                </div>
            </div>

            {/* All Transits Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">
                                Все энергетические транзиты
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {transits.map((transit) => (
                                <div
                                    key={transit.id}
                                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md ${
                                        transit.accessType === 'free'
                                            ? 'bg-green-50 border-green-200 hover:bg-green-100'
                                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                    }`}
                                    onClick={() => handleTransitClick(transit)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg font-semibold text-gray-900">
                                            {transit.dateRange}
                                        </span>
                                        {transit.accessType === 'paid' ? (
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
                                        <div className="font-medium">{transit.title}</div>
                                        <div className="text-blue-600">{transit.geneKey}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                onClick={handleSubscribe}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                            >
                                Оформить подписку для доступа ко всем транзитам
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Transits; 