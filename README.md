# 🔧 React Custom Hooks Demo

Этот проект демонстрирует реализацию пользовательских хуков (custom hooks) в React с использованием TypeScript. Каждый хук инкапсулирует определённую логику и используется в отдельном компоненте.

---

## 🚀 Запуск проекта

1. Установите зависимости:
```bash
npm install
```

2. Установите TypeScript и типы:
```bash
npm install --save-dev typescript @types/react @types/react-dom
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

---

## 📁 Структура проекта

src/
├── hooks/             
│   ├── useFetch.ts
│   ├── useLocalStorage.ts
│   ├── useHover.ts
│   ├── useViewportSize.ts
│   ├── useWindowScroll.ts
│   └── useToggle.ts
├── components/       
│   ├── FetchDemo.tsx
│   ├── LocalStorageDemo.tsx
│   ├── HoverDemo.tsx
│   ├── ViewportDemo.tsx
│   ├── ScrollDemo.tsx
│   └── ToggleDemo.tsx
├── App.tsx           # Главный компонент
└── main.tsx          # Точка входа

## 🧩 Реализованные хуки

| Хук                | Назначение                                        |
| ------------------ | ------------------------------------------------- |
| `useFetch`         | Получение данных с API и ручной рефетч            |
| `useLocalStorage`  | Работа с localStorage                             |
| `useHover`         | Отслеживание наведения мыши на элемент            |
| `useViewportSize`  | Отслеживание размеров viewport                    |
| `useWindowScroll`  | Отслеживание позиции скролла                      |
| `useToggle`        | Переключение между значениями в массиве           |

