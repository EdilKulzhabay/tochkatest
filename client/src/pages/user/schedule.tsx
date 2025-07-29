import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    hasBroadcast: boolean;
    url: string;
}

const Schedule: React.FC = () => {
    const events: Event[] = [
        {
            id: '1',
            title: 'Деньги, Кланы и Власть',
            date: '7-9 августа 2025',
            location: 'Лондон',
            hasBroadcast: true,
            url: 'https://tochka.li/money-clans-power'
        },
        {
            id: '2',
            title: 'Точка.live «Энергия Здоровья»',
            date: '23-27 августа 2025',
            location: 'Алматы',
            hasBroadcast: true,
            url: 'https://tochka.li/live-3'
        },
        {
            id: '3',
            title: 'Меркантильные завтраки',
            date: '21 сентября 2025',
            location: 'Москва',
            hasBroadcast: false,
            url: 'https://tochka.li/material-breakfasts'
        },
        {
            id: '4',
            title: 'Великие роли любви',
            date: '11 октября 2025',
            location: 'Москва',
            hasBroadcast: true,
            url: 'https://tochka.li/love-roles'
        },
        {
            id: '5',
            title: 'Точка.live «Энергия Предназначения»',
            date: '1-5 ноября 2025',
            location: 'Москва',
            hasBroadcast: true,
            url: 'https://tochka.li/live-1'
        },
        {
            id: '6',
            title: 'Точка Цели',
            date: '21-23 декабря 2025',
            location: 'Москва',
            hasBroadcast: true,
            url: 'https://tochka.li/goals_2025'
        }
    ];

    return (
        <div className="min-h-screen bg-black p-4 pt-8 pb-[110px]">
            {/* Header with Back Button */}
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-[#f6c499]">Расписание</h1>
            </div>

            {/* Events List */}
            <div className="max-w-2xl mx-auto space-y-4">
                {events.map((event) => (
                    <a
                        key={event.id}
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-900 border border-[#e4b690] rounded-lg p-4 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
                    >
                        <div className="flex flex-col">
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-[#f6c499] mb-1 text-center">
                                {event.title}
                            </h3>
                            
                            {/* Date, Location and Broadcast info */}
                            <p className="text-sm text-[#cba481] text-center">
                                {event.date}, {event.location}
                                {event.hasBroadcast && (
                                    <span className="ml-2">+ трансляция</span>
                                )}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-[#e4b690] flex justify-around items-center p-3 shadow-lg">

                <Link to="/diary" className={`flex flex-col items-center p-2 rounded-lg w-[100px]`}>
                    <div className="text-2xl">📖</div>
                    <span className="text-xs mt-1 text-white">Дневник</span>
                </Link>

                <Link to="/" className={`flex flex-col items-center p-2 rounded-lg w-[100px]`}> {/* Active state */}
                    <div className="text-2xl text-white">🏠</div>
                    <span className="text-xs mt-1 text-white">Домой</span> 
                </Link>

                <Link to="/schedule" className={`flex flex-col items-center bg-[#5a412c] p-2 rounded-lg w-[100px]`}>
                    <div className="text-2xl">🗓️</div>
                    <span className="text-xs mt-1">Расписание</span>
                </Link>

            </nav>
        </div>
    );
};

export default Schedule; 