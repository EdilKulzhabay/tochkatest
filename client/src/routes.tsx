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

// Импорт страниц админа
import AdminDashboard from './pages/admin/dashboard';

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
        path: '/admin',
        element: <AdminDashboard />,
    },
]); 