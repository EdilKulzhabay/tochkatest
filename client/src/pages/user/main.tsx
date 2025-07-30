import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const Main: React.FC = () => {
    return (
        <div className="min-h-screen pb-[110px]">
            {/* Header */}
            <header className="flex justify-between items-center mb-2 p-4 bg-gray-100">
                <h1 className="text-lg font-medium text-gray-900">
                    Добро пожаловать, <br/>Константин Павлов
                </h1>
                <div className='flex items-center'>
                    <Link to="/profile" className="">
                        <img src={'/icons/settings.png'} alt="settings" className="w-6 h-6" />
                    </Link>

                    <div className='ml-2'>
                        <img src={'/icons/logo.png'} alt="logo" className="w-8 h-8" />
                    </div>
                </div>
            </header>
        
            {/* Main Content */}
            <main className="p-4">
                {/* Hexagonal Buttons */}
                <div className="mb-8">
                
                    <div className="grid grid-cols-2 gap-2 h-[200px]">
                        {/* Top-Left: Transits */}
                        <Link to="/transits" className="relative w-full pt-[100%] bg-gray-100 flex flex-col items-center justify-center text-center p-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div>
                                <img src={'/icons/transits.png'} alt="transits" className="w-18 h-18" />
                            </div>
                            <div className='mt-3'>Описание<br/> транзитов</div> 
                        </div>
                        </Link>

                        {/* Top-Right: Horoscope */}
                        <Link to="/horoscope" className="relative w-full pt-[100%] bg-gray-100 flex flex-col items-center justify-center text-center p-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div>
                                <img src={'/icons/horoscope.png'} alt="horoscope" className="w-18 h-18" />
                            </div>
                            <div className='mt-3'>Антисоциумный<br/> гороскоп</div>
                        </div>
                        </Link>
                    </div>

                    <div className="h-[200px] -mt-[44px]">
                        {/* Bottom-Center: Club .li */}
                        <Link to="/club-li" className="mx-auto relative w-1/2 max-h-[100%] pt-[200px] bg-gray-100 flex flex-col items-center justify-center text-black text-center p-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div>
                                <img src={'/icons/clubLi.png'} alt="clubLi" className="w-18 h-18" />
                            </div>
                            <div className='mt-3'>Клуб tochka.li</div>
                        </div>
                        </Link>
                    </div>
                </div>

                {/* Additional Functions - Rectangular Buttons */}
                <div className="rectangular-buttons grid grid-cols-2 gap-4 mb-8 font-medium">
                    <Link to="/faq" className="bg-gray-100 rounded-lg flex items-center justify-between p-4 text-gray-800 text-center pl-2">
                        <div className=""><img src={'/icons/faq.png'} alt="faq" className="w-16 h-16" /></div>
                        <div>Вопросы<br/> и ответы</div>
                    </Link>
                    <Link to="/meditations" className="bg-gray-100 rounded-lg flex items-center justify-between p-4 text-gray-800 text-center pl-2">
                    <div className=""><img src={'/icons/meditations.png'} alt="meditations" className="w-16 h-16" /></div>
                        <span>Меди<br/>тации</span>
                    </Link>
                    <Link to="/video" className="bg-gray-100 rounded-lg flex items-center justify-between p-4 text-gray-800 text-center pl-2">
                        <div className=""><img src={'/icons/video.png'} alt="video" className="w-16 h-16" /></div>
                        <span>Видео</span>
                    </Link>
                    <Link to="/practices" className="bg-gray-100 rounded-lg flex items-center justify-between p-4 text-gray-800 text-center pl-2">
                        <div className=""><img src={'/icons/practices.png'} alt="practices" className="w-16 h-16" /></div>
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