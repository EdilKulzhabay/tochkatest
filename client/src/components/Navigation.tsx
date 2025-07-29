import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Навигация по страницам:</h3>
      <ul className="grid grid-cols-2 gap-2">
        <li><Link to="/" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Главная</Link></li>
        <li><Link to="/practices" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Практики</Link></li>
        <li><Link to="/meditations" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Медитации</Link></li>
        <li><Link to="/video" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Видео</Link></li>
        <li><Link to="/horoscope" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Гороскоп</Link></li>
        <li><Link to="/transits" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Транзиты</Link></li>
        <li><Link to="/profile" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Профиль</Link></li>
        <li><Link to="/faq" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">FAQ</Link></li>
        <li><Link to="/club-li" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Клуб .li</Link></li>
        <li><Link to="/diary" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Дневник</Link></li>
        <li><Link to="/schedule" className="block p-2 text-blue-600 hover:bg-blue-50 rounded">Расписание</Link></li>
        <li><Link to="/admin" className="block p-2 text-red-600 hover:bg-red-50 rounded">Админ-панель</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation; 