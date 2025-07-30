import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from "react-switch";

const Profile: React.FC = () => {
    const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
    const [showClubModal, setShowClubModal] = useState(false);
    const [notification, setNotification] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Константин Павлов');

    const handleSubscribe = () => {
        window.open('https://tochka.tg/', '_blank');
        setShowSubscriptionModal(false);
    };

    const handleJoinClub = () => {
        window.open('https://tochka.tg/', '_blank');
        setShowClubModal(false);
    };

    return (
        <div className="min-h-screen pb-[110px]">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-100 p-4 mb-2">
                <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src="/icons/arrowBack.png" alt="arrowBack" className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-bold">Профиль</h1>
                <div>
                    <img src="/icons/logo.png" alt="logo" className="w-8 h-8" />
                </div>
            </div>

            <div className="max-w-md mx-auto p-4">
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
                        {isEditing ? (
                            <div className="flex items-center justify-center gap-2">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                                <button 
                                    onClick={() => setIsEditing(false)}
                                    className="text-sm text-blue-600"
                                >
                                    Сохранить
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-2">
                                {name}
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="text-sm text-gray-500"
                                >
                                    ✏️
                                </button>
                            </div>
                        )}
                    </h1>
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

                <div className="mb-8">
                    <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
                        <span className="text-gray-900 font-medium">Разрешить уведомления</span>
                        <Switch 
                            checked={notification}
                            onChange={() => setNotification(!notification)}
                            uncheckedIcon={false}
                            checkedIcon={false}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 mb-8">
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

                <div className="flex justify-end">
                    <Link to="/about" className="text-blue-600 underline text-lg">О программе</Link>
                </div>
            </div>

            {/* Subscription Status Modal */}
            {showSubscriptionModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
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
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
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