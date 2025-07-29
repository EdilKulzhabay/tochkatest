import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
    const [showClubModal, setShowClubModal] = useState(false);

    const handleSubscribe = () => {
        window.open('https://tochka.tg/', '_blank');
        setShowSubscriptionModal(false);
    };

    const handleJoinClub = () => {
        window.open('https://tochka.tg/', '_blank');
        setShowClubModal(false);
    };

    return (
        <div className="min-h-screen bg-white p-4 pt-8 pb-[110px]">
            {/* Header */}
            <div className="relative flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center text-gray-900">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <span className="text-lg">←</span>
                    </div>
                </Link>
                <div className="flex items-center space-x-4">
                    <button className="w-8 h-8 flex items-center justify-center">
                        <span className="text-lg">⏰</span>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center">
                        <span className="text-lg">⚙️</span>
                    </button>
                </div>
            </div>

            <div className="max-w-md mx-auto">
                {/* Profile Header Section */}
                <div className="text-center mb-8">
                    {/* Profile Picture */}
                    <div className="relative inline-block mb-4">
                        <div className="w-24 h-24 bg-blue-200 rounded-lg flex items-center justify-center relative">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-2xl text-gray-400">👤</span>
                            </div>
                            {/* Edit Icon */}
                            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">✏️</span>
                            </button>
                        </div>
                    </div>

                    {/* User Name */}
                    <h1 className="text-xl font-bold text-gray-900 mb-2">
                        Константин Павлов
                    </h1>

                    {/* Add Bio Link */}
                    <button className="text-blue-400 underline text-sm mb-2">
                        ADD BIO
                    </button>

                    {/* Follower/Following Count */}
                    <p className="text-gray-400 text-sm">
                        0 Follower • 0 Following
                    </p>
                </div>

                {/* Badges Section */}
                <div className="bg-gray-100 rounded-lg p-4 mb-8">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-white text-lg">🏆</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-900 font-medium">Badges</span>
                                <span className="text-gray-900 font-bold text-lg">2</span>
                            </div>
                            <p className="text-gray-700 text-sm mt-1">
                                За выполнение Б/У и дневник
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                    <button
                        onClick={() => setShowSubscriptionModal(true)}
                        className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Статус подписки
                    </button>

                    <button
                        onClick={() => setShowClubModal(true)}
                        className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Членство в клубе
                    </button>
                </div>
            </div>

            {/* Subscription Status Modal */}
            {showSubscriptionModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📋</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Статус подписки
                            </h3>
                            <p className="text-gray-600 mb-6">
                                У вас нет активной подписки. Оформите подписку для доступа к премиум контенту.
                            </p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleSubscribe}
                                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Оформить подписку
                                </button>
                                <button
                                    onClick={() => setShowSubscriptionModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Club Membership Modal */}
            {showClubModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏛️</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Членство в клубе
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Вы не являетесь членом клуба .li. Присоединитесь к эксклюзивному сообществу.
                            </p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleJoinClub}
                                    className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    Вступить в клуб
                                </button>
                                <button
                                    onClick={() => setShowClubModal(false)}
                                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile; 