import React from 'react';
import { Link } from 'react-router-dom';

const ClubLi: React.FC = () => {
    return (
        <div className="min-h-screen bg-white pb-[110px]">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 p-4">
                <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Клуб .li</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
                {/* Content Section */}
                <div className="bg-gray-50 border border-[#e4b690] rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-bold text-[#f6c499] mb-6 text-center">
                        Что входит в подписку
                    </h2>

                    <div className="space-y-6">
                        {/* Эксклюзивный контент */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#5a412c] rounded-full flex items-center justify-center">
                                <span className="text-[#f6c499] text-sm">🎯</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#f6c499] mb-2">
                                    Эксклюзивный контент от Нурлана Мураткали
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Видео, аудио и тексты, которых нет в публичных каналах.
                                </p>
                            </div>
                        </div>

                        {/* Ежемесячные занятия */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#5a412c] rounded-full flex items-center justify-center">
                                <span className="text-[#f6c499] text-sm">🛡️</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#f6c499] mb-2">
                                    Ежемесячные занятия по установке Пространства Защиты
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Раз в месяц — прямой эфир 1.5–2 часа для защиты себя, близких, дома и бизнеса.
                                </p>
                            </div>
                        </div>

                        {/* Работа с сущностями */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#5a412c] rounded-full flex items-center justify-center">
                                <span className="text-[#f6c499] text-sm">✨</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#f6c499] mb-2">
                                    Регулярная работа с энергетическими сущностями
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Защитник Пространства, Проводник Целей, Хранитель Равновесия, Хранитель Клуба, Союзник, Энергетический Двойник и прочие.
                                </p>
                            </div>
                        </div>

                        {/* Сообщество */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#5a412c] rounded-full flex items-center justify-center">
                                <span className="text-[#f6c499] text-sm">👥</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#f6c499] mb-2">
                                    Сообщество единомышленников
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Чат-группа для общения с другими участниками клуба.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Join Button */}
                <div className="text-center">
                    <a
                        href="https://tochka.tg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-[#f6c499] to-[#e4b690] text-black font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:from-[#e4b690] hover:to-[#cba481] transition-all duration-300 transform hover:scale-105"
                    >
                        ВСТУПИТЬ В КЛУБ
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ClubLi; 