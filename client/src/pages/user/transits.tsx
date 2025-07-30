import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Transit {
    id: string;
    dateRange: string;
    title: string;
    geneKey: string;
    accessType: 'free' | 'subscription';
    content: {
        topics: {
            title: string;
            description: string;
        }[];
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

    const transits: Transit[] = [
        {
            id: '1',
            dateRange: '25–30 июля',
            title: 'ВОРОТА ЛИДЕРСТВА',
            geneKey: 'Генный ключ «Звучание вашей истины»',
            accessType: 'free',
            content: {
                topics: [
                    {
                        title: 'Тема лидерства, голоса, и НЛП',
                        description: 'Это голос лидера. Лидерство по-настоящему успешно, только когда поддерживается противоположными 7-ми воротами. Стабильность через движение. Продолжительность через соединение коротких действий. Трансформация абстрактного в язык. Не фактическое, но эмпирическое выражение. Идея, не являющаяся решением, но являющаяся частью пути ищущего. Абстрактная проекция, отражённая от прошлого.'
                    },
                    {
                        title: 'Сиддхи – Смирение',
                        description: 'Истинное смирение возникает только на частоте Сиддхи, так как требует полного уничтожения индивидуальности. Для 31 Сиддхи любое поведение рассматривается как неличностное проявление тотальности, и здесь не существует концепции независимого деятеля. Именно смиренным абсолютно все равно, что другие могут посчитать их высокомерными. Корни Сиддхи 31-го генного ключа происходят от древней традиции Оракула. Это просто громкоговоритель Божественного, который вещает отстраненно и даже не интересуется тем, что говорит. Такая речь - чистое послание.'
                    },
                    {
                        title: 'Дар – Лидерство',
                        description: 'Сердечный брендинг. Дар влияния. Мастерское владение словом. Такие люди знают, что аудитория нуждается в руководстве и жонглирует правдой в зависимости от того, что подходит для данной аудитории. На частоте Тени все это делается для достижения личного признания, богатства, материальных выгод. На уровне Дара цель совсем другая — помочь другим выйти из матрицы. Это использование специальных слов и языка для де- программирования обусловленности других. Дар лидерства может оказывать огромное влияние на большие группы людей. Некоторые люди с этим Даром в буквальном смысле являются голосом коллектива. 31 Дар опирается на предчувствие, поэтому он всегда знает, какая тенденция придет в мир следующей. Это индивидуумы, заинтересованные не в личной выгоде, а в коллективном руководстве.'
                    },
                    {
                        title: 'Тень – Высокомерие',
                        description: 'Навык владения словами и фактами для контроля и манипуляции другими. На уровне Тени язык — это инструмент всеобщего программирования. Высокомерие же коренится в вере, что через слова мы можем контролировать реальность. Наше высокомерие упорствует в иллюзии, что мы влияем на окружающую среду, хотя между нами и средой нет никакого разделения. В любой момент, когда люди говорят, не осознавая ложную ментальную фальсификацию, в которой они живут, они говорят из Тени 31-го ключа. Майя (иллюзия) заинтересована в своем усилении через мысли и слова, и мы можем видеть это повсюду в современном мире. Тень высокомерия отступает, когда мы начинаем говорить из сердца, когда слова являются лишь посредниками послания сердца.'
                    },
                ],
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
            accessType: 'subscription',
            content: {
                topics: [],
                lines: []
            }
        },
        {
            id: '3',
            dateRange: '10–15 августа',
            title: 'ВОРОТА ГАРМОНИИ',
            geneKey: 'Генный ключ «Баланс и равновесие»',
            accessType: 'subscription',
            content: {
                topics: [],
                lines: []
            }
        }
    ];

    const currentTransit = transits[0];

    return (
        <div className="min-h-screen pb-[110px]">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Транзиты</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
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
                        {currentTransit.content.topics.length > 0 && (
                            <div>
                                <div className="space-y-2">
                                    {currentTransit.content.topics.map((topic, index) => (
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
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div id={`topic-${index}`} className="hidden px-4 py-3 border-t border-gray-200">
                                                <p className="text-gray-700">{topic.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {currentTransit.content.lines.length > 0 && (
                            <div>
                                <div className="border border-gray-200 rounded-lg">
                                    <button
                                        onClick={() => {
                                            const elem = document.getElementById(`lines`);
                                            if (elem) {
                                                elem.classList.toggle('hidden');
                                            }
                                        }}
                                        className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
                                    >
                                        <span className="font-medium text-gray-900">Подробнее о линиях</span>
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div id={`lines`} className="hidden px-4 py-3 border-t border-gray-200">
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
                                </div>
                            </div>
                        )}
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

export default Transits; 