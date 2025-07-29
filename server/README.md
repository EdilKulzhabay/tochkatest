# Tochka Li - Серверная часть

Серверная часть приложения Tochka Li, построенная на Node.js, Express и MongoDB.

## Технологии

- **Node.js** - среда выполнения JavaScript
- **Express.js** - веб-фреймворк для Node.js
- **MongoDB** - NoSQL база данных
- **Mongoose** - ODM для MongoDB
- **JWT** - аутентификация и авторизация
- **bcryptjs** - хеширование паролей
- **multer** - загрузка файлов
- **express-validator** - валидация данных
- **helmet** - безопасность
- **cors** - CORS middleware
- **express-rate-limit** - ограничение запросов

## Структура проекта

```
server/
├── controllers/          # Контроллеры для обработки запросов
│   ├── authController.js
│   ├── userController.js
│   ├── practiceController.js
│   ├── meditationController.js
│   ├── videoController.js
│   ├── diaryController.js
│   ├── horoscopeController.js
│   ├── transitController.js
│   └── faqController.js
├── models/              # Модели MongoDB
│   ├── User.js
│   ├── Practice.js
│   ├── Meditation.js
│   ├── Video.js
│   ├── DiaryEntry.js
│   ├── Horoscope.js
│   ├── Transit.js
│   └── FAQ.js
├── routes/              # Маршруты API
│   ├── auth.js
│   ├── users.js
│   ├── practices.js
│   ├── meditations.js
│   ├── videos.js
│   ├── diary.js
│   ├── horoscope.js
│   ├── transits.js
│   └── faq.js
├── middleware/          # Middleware функции
│   ├── auth.js
│   └── upload.js
├── uploads/            # Загруженные файлы
├── index.js           # Основной файл сервера
├── package.json       # Зависимости проекта
└── README.md         # Документация
```

## Установка и запуск

### Предварительные требования

- Node.js (версия 14 или выше)
- MongoDB (локально или облачная версия)
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Настройка окружения

Создайте файл `.env` в корневой папке сервера:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/tochka-li

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Запуск сервера

**Режим разработки:**
```bash
npm run dev
```

**Продакшн режим:**
```bash
npm start
```

## API Endpoints

### Аутентификация

- `POST /api/auth/register` - Регистрация пользователя
- `POST /api/auth/login` - Вход пользователя
- `GET /api/auth/profile` - Получение профиля
- `PUT /api/auth/profile` - Обновление профиля
- `PUT /api/auth/change-password` - Изменение пароля
- `POST /api/auth/logout` - Выход

### Пользователи

- `GET /api/users` - Получение всех пользователей (админ)
- `GET /api/users/:id` - Получение пользователя по ID
- `PUT /api/users/:id/subscription` - Обновление подписки
- `PUT /api/users/:id/club-membership` - Обновление членства в клубе
- `POST /api/users/avatar` - Загрузка аватара

### Практики

- `GET /api/practices` - Получение всех практик
- `GET /api/practices/popular` - Популярные практики
- `GET /api/practices/recommended` - Рекомендуемые практики
- `GET /api/practices/:id` - Получение практики по ID
- `POST /api/practices/:id/complete` - Завершение практики
- `POST /api/practices/:id/like` - Лайк практики

### Медитации

- `GET /api/meditations` - Получение всех медитаций
- `GET /api/meditations/popular` - Популярные медитации
- `GET /api/meditations/sleep` - Медитации для сна
- `GET /api/meditations/morning` - Утренние медитации
- `GET /api/meditations/:id` - Получение медитации по ID

### Видео

- `GET /api/videos` - Получение всех видео
- `GET /api/videos/popular` - Популярные видео
- `GET /api/videos/featured` - Рекомендуемые видео
- `GET /api/videos/lectures` - Лекции
- `GET /api/videos/:id` - Получение видео по ID

### Дневник

- `GET /api/diary` - Получение записей дневника
- `GET /api/diary/today` - Запись на сегодня
- `POST /api/diary` - Создание записи
- `PUT /api/diary/:id` - Обновление записи
- `DELETE /api/diary/:id` - Удаление записи

### Гороскоп

- `GET /api/horoscope/daily/:zodiacSign` - Гороскоп на день
- `GET /api/horoscope/weekly/:zodiacSign` - Гороскоп на неделю
- `GET /api/horoscope/monthly/:zodiacSign` - Гороскоп на месяц
- `GET /api/horoscope/all-signs/daily` - Гороскопы всех знаков

### Транзиты

- `GET /api/transits/current` - Текущие транзиты
- `GET /api/transits/major` - Важные транзиты
- `GET /api/transits/planet/:planet` - Транзиты по планете

### FAQ

- `GET /api/faq` - Получение всех FAQ
- `GET /api/faq/popular` - Популярные FAQ
- `GET /api/faq/search` - Поиск FAQ
- `GET /api/faq/:id` - Получение FAQ по ID

## Модели данных

### User
- Основная информация пользователя
- Подписка и членство в клубе
- Статистика и достижения
- Настройки

### Practice
- Информация о практиках
- Тип доступа (бесплатные/платные)
- Статистика просмотров и завершений
- Инструкции и преимущества

### Meditation
- Информация о медитациях
- Тип и категория медитации
- Аудио файлы
- Настройки воспроизведения

### Video
- Информация о видео
- Категории (лекции, интервью и т.д.)
- Статистика просмотров
- Настройки видео

### DiaryEntry
- Записи дневника пользователя
- Открытия, достижения, благодарность
- Настроение и энергия
- Теги и вложения

### Horoscope
- Гороскопы по знакам зодиака
- Типы (дневные, недельные, месячные)
- Счастливые числа и цвета
- Совместимость

### Transit
- Астрологические транзиты
- Планеты и аспекты
- Важность и интенсивность
- Исторические параллели

### FAQ
- Вопросы и ответы
- Категории и теги
- Статистика полезности
- Связанные FAQ

## Безопасность

- JWT аутентификация
- Хеширование паролей с bcrypt
- Валидация входных данных
- CORS настройки
- Rate limiting
- Helmet для безопасности заголовков
- Проверка прав доступа

## Загрузка файлов

Поддерживаемые типы файлов:
- **Изображения**: JPEG, JPG, PNG, GIF, WebP
- **Видео**: MP4, AVI, MOV, WMV, FLV
- **Аудио**: MP3, WAV, OGG, M4A

Максимальный размер файла: 10MB

## Обработка ошибок

Все ошибки обрабатываются централизованно с возвратом JSON ответов:

```json
{
  "success": false,
  "message": "Описание ошибки",
  "errors": [] // Детали ошибок валидации
}
```

## Логирование

Сервер логирует:
- Ошибки подключения к базе данных
- Ошибки обработки запросов
- Информацию о запуске сервера

## Развертывание

### Локальное развертывание

1. Установите MongoDB
2. Создайте базу данных `tochka-li`
3. Настройте переменные окружения
4. Запустите сервер

### Облачное развертывание

Рекомендуемые платформы:
- Heroku
- DigitalOcean
- AWS
- Google Cloud Platform

Не забудьте настроить:
- Переменные окружения
- MongoDB Atlas или другую облачную БД
- SSL сертификаты
- Доменное имя

## Лицензия

ISC License 