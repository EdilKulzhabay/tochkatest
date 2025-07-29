import React from 'react';
import { Link } from 'react-router-dom';

const ClubLi: React.FC = () => {
    return (
        <div className="min-h-screen bg-black p-4 pt-8 pb-[110px]">
            {/* Header */}
            <div className="relative text-center mb-8">
                <Link to="/" className="absolute left-0 flex items-center text-gray-300 hover:text-white transition-colors">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-2">
                        <span className="text-lg">←</span>
                    </div>
                </Link>
                <h1 className="text-2xl font-bold text-[#f6c499]">Клуб .li</h1>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Image Section */}
                {/* <div className="mb-8">
                    <img 
                        src="/images/clubLi.png" 
                        alt="Клуб .li"
                        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const placeholder = document.createElement('div');
                            placeholder.className = 'w-full max-w-md mx-auto h-64 bg-gray-800 rounded-lg flex items-center justify-center text-white text-center p-4';
                            placeholder.innerHTML = `<div><div class="text-4xl mb-4">🏛️</div><div class="text-lg">Клуб .li</div></div>`;
                            target.parentNode?.appendChild(placeholder);
                        }}
                    />
                </div> */}

                {/* Content Section */}
                <div className="bg-gray-900 border border-[#e4b690] rounded-lg p-6 mb-8">
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
                                <p className="text-[#cba481] leading-relaxed">
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
                                <p className="text-[#cba481] leading-relaxed">
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
                                <p className="text-[#cba481] leading-relaxed">
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
                                <p className="text-[#cba481] leading-relaxed">
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