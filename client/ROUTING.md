# Роутинг проекта

## Структура папок

```
src/
├── pages/
│   ├── user/
│   │   ├── main.tsx          # Главная страница (/)
│   │   ├── practices.tsx     # Практики (/practices)
│   │   ├── meditations.tsx   # Медитации (/meditations)
│   │   ├── video.tsx         # Видео (/video)
│   │   ├── horoscope.tsx     # Гороскоп (/horoscope)
│   │   ├── transits.tsx      # Транзиты (/transits)
│   │   ├── profile.tsx       # Профиль (/profile)
│   │   ├── faq.tsx          # FAQ (/faq)
│   │   ├── clubLi.tsx       # Клуб .li (/club-li)
│   │   ├── diary.tsx        # Дневник (/diary)
│   │   └── schedule.tsx     # Расписание (/schedule)
│   └── admin/
│       └── dashboard.tsx    # Админ-панель (/admin)
├── components/
│   └── Navigation.tsx       # Компонент навигации
├── routes.tsx              # Конфигурация роутинга
└── App.tsx                 # Главный компонент с роутером
```

## Доступные маршруты

### Пользовательские страницы
- `/` - Главная страница
- `/practices` - Практики
- `/meditations` - Медитации
- `/video` - Видео
- `/horoscope` - Гороскоп
- `/transits` - Транзиты
- `/profile` - Профиль
- `/faq` - Часто задаваемые вопросы
- `/club-li` - Клуб .li
- `/diary` - Дневник
- `/schedule` - Расписание

### Админские страницы
- `/admin` - Админ-панель

## Использование

1. Запустите проект: `npm run dev`
2. Откройте браузер и перейдите по адресу: `http://localhost:5173`
3. Используйте навигацию на главной странице для перехода между страницами

## Добавление новых страниц

1. Создайте новый файл в соответствующей папке (`user/` или `admin/`)
2. Добавьте маршрут в файл `src/routes.tsx`
3. При необходимости добавьте ссылку в компонент `Navigation.tsx`

## Технологии

- React Router DOM v6.20.1
- TypeScript
- Vite 