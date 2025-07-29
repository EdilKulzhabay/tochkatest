import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const Main: React.FC = () => {
    return (
        <div className="min-h-screen bg-white p-4 pb-20">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-lg font-medium text-gray-900">
                    Добро пожаловать, <br/>Константин Павлов
                </h1>
                <Link to="/profile" className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center relative">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </Link>
            </header>
        
            {/* Main Content */}
            <main className="">
                {/* Hexagonal Buttons */}
                <div className="mb-8">
                
                    <div className="grid grid-cols-2 gap-2 h-[200px]">
                        {/* Top-Left: Transits */}
                        <Link to="/transits" className="relative w-full pt-[100%] bg-[#346270] flex flex-col items-center justify-center text-white text-center p-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-4xl mb-2">🫁</div>
                            <span>Транзиты</span>
                        </div>
                        </Link>

                        {/* Top-Right: Horoscope */}
                        <Link to="/horoscope" className="relative w-full pt-[100%] bg-[#87CEEB] flex flex-col items-center justify-center text-white text-center p-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-4xl mb-2">☀️</div>
                            <span>Гороскоп</span>
                        </div>
                        </Link>
                    </div>

                    <div className="h-[200px] -mt-[50px]">
                        {/* Bottom-Center: Club .li */}
                        <Link to="/club-li" className="mx-auto relative w-1/2 max-h-[100%] pt-[200px] bg-[#FFD700] flex flex-col items-center justify-center text-black text-center p-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-4xl mb-2">🧠</div>
                            <span>Клуб .li</span>
                        </div>
                        </Link>
                    </div>
                </div>

                {/* Additional Functions - Rectangular Buttons */}
                <div className="rectangular-buttons grid grid-cols-2 gap-4 mb-8">
                    <Link to="/faq" className="rect-button bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4 text-gray-800 text-center">
                        <div className="rect-icon text-4xl mb-2">❓</div>
                        <span>FAQ</span>
                    </Link>
                    <Link to="/meditations" className="rect-button bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4 text-gray-800 text-center">
                        <div className="rect-icon text-4xl mb-2">🧘</div>
                        <span>Медитации</span>
                    </Link>
                    <Link to="/video" className="rect-button bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4 text-gray-800 text-center">
                        <div className="rect-icon text-4xl mb-2">📹</div>
                        <span>Видео</span>
                    </Link>
                    <Link to="/practices" className="rect-button bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4 text-gray-800 text-center">
                        <div className="rect-icon text-4xl mb-2">🎭</div>
                        <span>Практики</span>
                    </Link>
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNavigation active="home" />
        </div>
    );
};

export default Main; 