# Практическая работа №3

## Тема

Bootstrap 5, Bootstrap JavaScript и базовый JavaScript интерфейса.

## Что реализовано

В работе реализована административная панель.

Использованы:

- Bootstrap 5;
- Bootstrap Grid;
- navbar;
- cards;
- responsive table;
- modal;
- offcanvas;
- toast;
- форма;
- JavaScript.

## Dataset

Используются файлы:

- data/dashboard.json
- data/notifications.json
- images/avatar.svg
- images/chart.svg

Из dashboard.json используются показатели:

- Пользователи — 128;
- Заявки — 43;
- Ошибки — 3;
- Готовность — 92%.

Также используются восемь операций.

Из notifications.json используется текст:

`Изменения сохранены`.

## Bootstrap JavaScript

Bootstrap JavaScript отвечает за работу готовых компонентов:

- navbar collapse;
- modal;
- offcanvas;
- toast.

Подключён файл:

```html
bootstrap.bundle.min.js
```

## Собственный JavaScript

Файл:

```text
js/app.js
```

Он выполняет собственную логику страницы:

- проверяет форму;
- показывает toast;
- закрывает modal;
- увеличивает счётчик заявок;
- изменяет текст кнопки.

## Валидация

Поле email проверяется JavaScript.

При ошибке добавляется класс:

```text
is-invalid
```

При правильном значении:

```text
is-valid
```

## Запуск

1. Открыть папку проекта в VS Code.
2. Открыть index.html.
3. Запустить через браузер или Live Server.
4. Проверить Console в DevTools.

## Проверка

Проверить:

- navbar;
- modal;
- offcanvas;
- toast;
- форму;
- таблицу;
- адаптивность на 375px и 1440px.