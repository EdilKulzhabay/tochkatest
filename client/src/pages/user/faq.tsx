import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState('');

    const faqItems = [
        {
            id: 'start',
            question: 'С чего начать в tochka.li?',
            answer: `С постановки запроса – чего Вы хотите?

Если у Вас есть конкретный запрос – Предназначение, Отношения, Финансы, Здоровье, – то обратите внимание на те курсы и онлайн-продукты, которые представлены у нас по этим темам.

Если Вы желаете пройти полный путь, начните с oнлайн-курса "Энергия Предназначения". Это базовый курс tochka.li, на котором изучаются основы энергоинформационных технологий и запускаются процессы изменений.

После прохождения oнлай-курса "Энергия Предназначения" заходите на Точку-1 "Энергия Предназначения" .live. Это живое 5-дневное мероприятие, где вы закрепите знания oнлайн-курса, многократно приумножите их, встретитесь с Нурланом Мураткали и командой .li, а также найдёте партнеров и единомышленников среди других участников группы.

Дальнейшее прохождение Точек – 2, 3, 4, "Мастер", "Творец".`
        },
        {
            id: 'order',
            question: 'В каком порядке можно проходить Точки?',
            answer: `Любые oнлайн-курсы, вебинары и Точку "Мастер" можно проходить сразу.

Точки .live можно проходить в любом порядке. Также возможно прохождение согласно их числовому обозначению:
Точка-1 "Энергия Предназначения"
Точка-2 "Энергия Отношений"
Точка-3 "Энергия Здоровья"
Точка-4 "Материализация и Финансы"`
        },
        {
            id: 'point2',
            question: 'Можно ли проходить Точку-2 без Точки-1?',
            answer: `Можно ;)
Но начать всё-же лучше с Точки-1 "Энергия Предназначения".
На ней вы восстановите свою энергию, которую затем можно будет направить в цели. Осознанное движение к ним начинается на Точке-2.`
        },
        {
            id: 'team',
            question: 'Можно ли проходить живую Точку "Энергия Предназначения" .live без прохождения онлайн-курса?',
            answer: `Можно! Однако, онлайн-курс прекрасно готовит к живому обучению.
К тому же, если вы заходите на Точку-1 .live, то онлайн-курс вы получаете по приятной стоимости!`
        },
        {
            id: 'what',
            question: 'Онлайн-курс "Энергия Предназначения" и Точка .live "Энергия Предназначения" – это одно и то же?',
            answer: `Нет 🙂
Онлайн-курс "Энергия Предназначения" – это базовый курс tochka.li, который вы проходите самостоятельно с поддержкой кураторов в течение 8-16 недель (+2 месяца даётся на закрепление). Курс отлично подходит для подготовки к живой Точке .live

Точка .live "Энергия Предназначения" – это очное 5-дневное мероприятие, на котором вы многократно (!) дополните свои знания и навыки, лично познакомитесь с Нурланом и командой Точки, поставите защитную оболочку на подсознание, встретите своих единомышленников.`
        },
        {
          id: 'want',
          question: 'Хочу в команду Точки. Как попасть?',
          answer: `Заявляйтесь! ;)
Ждём Вас на Точке!`
      },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Вопросы и ответы</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-0 p-4">
                {faqItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-300">
                        <button
                            className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                            onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                        >
                            <span className="text-gray-900 font-medium pr-4">{item.question}</span>
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-gray-600 text-lg">
                                    {openAccordion === item.id ? '×' : '+'}
                                </span>
                            </div>
                        </button>
                        
                        {openAccordion === item.id && (
                            <div className="px-4 pb-4">
                                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ; 