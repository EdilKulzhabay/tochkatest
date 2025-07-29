# API Endpoints для Tochka Li Server

## Аутентификация

### Пользователи
- `POST /api/auth/register` - Регистрация пользователя
- `POST /api/auth/login` - Вход пользователя
- `GET /api/auth/profile` - Получение профиля (требует токен)
- `PUT /api/auth/profile` - Обновление профиля (требует токен)
- `PUT /api/auth/change-password` - Смена пароля (требует токен)

### Администраторы
- `POST /api/auth/admin/login` - Вход администратора

## Публичные endpoints

### FAQ
- `GET /api/faq` - Получение всех FAQ
- `GET /api/faq/:id` - Получение FAQ по ID

### Гороскопы
- `GET /api/horoscope` - Получение всех гороскопов
- `GET /api/horoscope/:id` - Получение гороскопа по ID

### Транзиты
- `GET /api/transits` - Получение всех транзитов
- `GET /api/transits/:id` - Получение транзита по ID

### Практики
- `GET /api/practices` - Получение всех практик
- `GET /api/practices/:id` - Получение практики по ID

### Медитации
- `GET /api/meditations` - Получение всех медитаций
- `GET /api/meditations/:id` - Получение медитации по ID

### Видео
- `GET /api/videos` - Получение всех видео
- `GET /api/videos/:id` - Получение видео по ID

## Пользовательские endpoints (требуют токен)

### Дневник
- `GET /api/diary` - Получение записей пользователя
- `GET /api/diary/:id` - Получение записи по ID
- `POST /api/diary` - Создание записи (+10 бонусов)
- `PUT /api/diary/:id` - Обновление записи
- `DELETE /api/diary/:id` - Удаление записи

### Пользователи
- `PUT /api/users/subscription` - Обновление подписки
- `PUT /api/users/club-membership` - Обновление членства в клубе

## Админские endpoints (требуют админский токен)

### Управление контентом
- `POST /api/faq` - Создание FAQ
- `PUT /api/faq/:id` - Обновление FAQ
- `DELETE /api/faq/:id` - Удаление FAQ

- `POST /api/horoscope` - Создание гороскопа
- `PUT /api/horoscope/:id` - Обновление гороскопа
- `DELETE /api/horoscope/:id` - Удаление гороскопа

- `POST /api/transits` - Создание транзита
- `PUT /api/transits/:id` - Обновление транзита
- `DELETE /api/transits/:id` - Удаление транзита

- `POST /api/practices` - Создание практики
- `PUT /api/practices/:id` - Обновление практики
- `DELETE /api/practices/:id` - Удаление практики

- `POST /api/meditations` - Создание медитации
- `PUT /api/meditations/:id` - Обновление медитации
- `DELETE /api/meditations/:id` - Удаление медитации

- `POST /api/videos` - Создание видео
- `PUT /api/videos/:id` - Обновление видео
- `DELETE /api/videos/:id` - Удаление видео

### Управление пользователями
- `GET /api/users` - Получение всех пользователей
- `GET /api/users/:id` - Получение пользователя по ID
- `PUT /api/users/:id/subscription` - Обновление подписки пользователя
- `PUT /api/users/:id/club-membership` - Обновление членства пользователя
- `DELETE /api/users/:id` - Удаление пользователя

## Служебные endpoints
- `GET /api/health` - Проверка работы сервера

## Модели данных

### User
- email, password, firstName, lastName, userName, phone
- subscription: {status, startDate, endDate, plan}
- clubMembership: {status, joinDate, expireDate}
- bonus (увеличивается при создании записи в дневнике)

### Admin
- userName, password

### DiaryEntry
- userId, date, openings, achievements, gratitude

### FAQ
- question, answer

### Horoscope
- startDate, endDate, title, subtitle, description
- content: [{title, items: []}]

### Transit
- startDate, endDate, title, subtitle, description
- content: [{title, items: []}]

### Practice
- title, subtitle, description, shortDescription
- imageUrl, videoUrl, accessType, duration

### Meditation
- title, subtitle, description, shortDescription
- imageUrl, videoUrl, accessType, duration

### Video
- title, subtitle, description, shortDescription
- imageUrl, videoUrl, accessType, duration 