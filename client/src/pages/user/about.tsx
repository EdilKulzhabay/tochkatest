import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/profile" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg">←</span>
                </Link>
                <h1 className="text-2xl font-bold">О приложении</h1>
                <div className="w-8 h-8">
                    {/* Placeholder for logo */}
                </div>
            </div>

            <div className="max-w-2xl mx-auto p-6">
                {/* App Version */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">tochka.li</h2>
                    <p className="text-gray-600">Версия приложения: 0.0.1</p>
                </div>

                {/* Contact Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Контакты</h3>
                    
                    <div className="space-y-6">
                        {/* Email */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">E-mail</h4>
                            <a 
                                href="mailto:support@tochka.li" 
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                support@tochka.li
                            </a>
                        </div>

                        {/* Website */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Website</h4>
                            <a 
                                href="https://tochka.li" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                www.tochka.li
                            </a>
                        </div>

                        {/* YouTube */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">YouTube</h4>
                            <a 
                                href="https://youtube.com/@tochkali" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                youtube.com/@tochkali
                            </a>
                        </div>

                        {/* Instagram */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Instagram</h4>
                            <a 
                                href="https://instagram.com/nurlan_muratkali" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                instagram.com/nurlan_muratkali
                            </a>
                        </div>

                        {/* Address */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Адрес</h4>
                            <p className="text-gray-600">
                                123104, г. Москва, ул. Малая Бронная, д. 21/13, кв. 3
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>© 2025 tochka.li. Все права защищены.</p>
                </div>
            </div>
        </div>
    );
};

export default About; 