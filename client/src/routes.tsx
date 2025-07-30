import { createBrowserRouter } from 'react-router-dom';

// Импорт страниц пользователя
import Main from './pages/user/main';
import Practices from './pages/user/practices';
import PracticeDetail from './pages/user/practice/[id]';
import Meditations from './pages/user/meditations';
import Video from './pages/user/video';
import VideoDetail from './pages/user/video/[id]';
import Horoscope from './pages/user/horoscope';
import Transits from './pages/user/transits';
import Profile from './pages/user/profile';
import FAQ from './pages/user/faq';
import ClubLi from './pages/user/clubLi';
import Diary from './pages/user/diary';
import Schedule from './pages/user/schedule';
import About from './pages/user/about';

// Импорт страниц админа
import AdminDashboard from './pages/admin/dashboard';
import AdminMeditations from './pages/admin/meditations';
import AdminMeditationForm from './pages/admin/meditation-form';
import AdminPractices from './pages/admin/practices';
import AdminPracticeForm from './pages/admin/practice-form';
import AdminHoroscopes from './pages/admin/horoscopes';
import AdminHoroscopeForm from './pages/admin/horoscope-form';
import AdminVideoLessons from './pages/admin/video-lessons';
import AdminVideoLessonForm from './pages/admin/video-lesson-form';
import AdminTransits from './pages/admin/transits';
import AdminTransitForm from './pages/admin/transit-form';
import AdminSchedule from './pages/admin/schedule';
import AdminScheduleForm from './pages/admin/schedule-form';
import AdminFAQ from './pages/admin/faq';
import AdminFAQForm from './pages/admin/faq-form';
import MeditationDetail from './pages/user/meditation/[id]';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/practices',
        element: <Practices />,
    },
    {
        path: '/practice/:id',
        element: <PracticeDetail />,
    },
    {
        path: '/meditations',
        element: <Meditations />,
    },
    {
        path: '/meditation/:id',
        element: <MeditationDetail />,
    },
    {
        path: '/video',
        element: <Video />,
    },
    {
        path: '/video/:id',
        element: <VideoDetail />,
    },
    {
        path: '/horoscope',
        element: <Horoscope />,
    },
    {
        path: '/transits',
        element: <Transits />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/faq',
        element: <FAQ />,
    },
    {
        path: '/club-li',
        element: <ClubLi />,
    },
    {
        path: '/diary',
        element: <Diary />,
    },
    {
        path: '/schedule',
        element: <Schedule />,
    },
    {
        path: '/about',
        element: <About />,
    },
    // Админские роуты
    {
        path: '/admin',
        element: <AdminDashboard />,
    },
    // Медитации
    {
        path: '/admin/meditations',
        element: <AdminMeditations />,
    },
    {
        path: '/admin/meditations/new',
        element: <AdminMeditationForm />,
    },
    {
        path: '/admin/meditations/edit/:id',
        element: <AdminMeditationForm />,
    },
    // Практики
    {
        path: '/admin/practices',
        element: <AdminPractices />,
    },
    {
        path: '/admin/practices/new',
        element: <AdminPracticeForm />,
    },
    {
        path: '/admin/practices/edit/:id',
        element: <AdminPracticeForm />,
    },
    // Видео (старые)
    {
        path: '/admin/videos',
        element: <AdminPractices />, // Временно используем ту же страницу
    },
    {
        path: '/admin/videos/new',
        element: <AdminMeditationForm />, // Временно используем ту же форму
    },
    {
        path: '/admin/videos/edit/:id',
        element: <AdminMeditationForm />, // Временно используем ту же форму
    },
    // Видео-уроки
    {
        path: '/admin/video-lessons',
        element: <AdminVideoLessons />,
    },
    {
        path: '/admin/video-lessons/new',
        element: <AdminVideoLessonForm />,
    },
    {
        path: '/admin/video-lessons/edit/:id',
        element: <AdminVideoLessonForm />,
    },
    // Гороскопы
    {
        path: '/admin/horoscopes',
        element: <AdminHoroscopes />,
    },
    {
        path: '/admin/horoscopes/new',
        element: <AdminHoroscopeForm />,
    },
    {
        path: '/admin/horoscopes/edit/:id',
        element: <AdminHoroscopeForm />,
    },
    // Транзиты
    {
        path: '/admin/transits',
        element: <AdminTransits />,
    },
    {
        path: '/admin/transits/new',
        element: <AdminTransitForm />,
    },
    {
        path: '/admin/transits/edit/:id',
        element: <AdminTransitForm />,
    },
    // Расписание
    {
        path: '/admin/schedule',
        element: <AdminSchedule />,
    },
    {
        path: '/admin/schedule/new',
        element: <AdminScheduleForm />,
    },
    {
        path: '/admin/schedule/edit/:id',
        element: <AdminScheduleForm />,
    },
    // FAQ
    {
        path: '/admin/faq',
        element: <AdminFAQ />,
    },
    {
        path: '/admin/faq/new',
        element: <AdminFAQForm />,
    },
    {
        path: '/admin/faq/edit/:id',
        element: <AdminFAQForm />,
    },
    // Пользователи
    {
        path: '/admin/users',
        element: <AdminPractices />, // Временно используем ту же страницу
    },
]); 