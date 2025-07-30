import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';

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
        <div className="min-h-screen bg-white pb-[110px]">

            <div className="flex items-center justify-between mb-2 p-4 bg-gray-100">
                <div className='w-5 bg-gray-100'></div>
                <h1 className="text-2xl font-bold text-gray-900">Расписание</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            {/* Events List */}
            <div className="max-w-2xl mx-auto space-y-4 p-4">
                {events.map((event) => (
                    <a
                        key={event.id}
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-50 border border-[#e4b690] rounded-lg p-4 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
                    >
                        <div className="flex flex-col">
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-[#f6c499] mb-1 text-center">
                                {event.title}
                            </h3>
                            
                            {/* Date, Location and Broadcast info */}
                            <p className="text-sm text-gray-600 text-center">
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
            <BottomNavigation active="schedule" />
        </div>
    );
};

export default Schedule; 