# fomo-style design system

Стартовая дизайн-система в духе [fomo.family](https://fomo.family): тёмный «космический» фон, строчные заголовки, кнопки-пилюли, фиолетовое свечение. Стек: **Next.js 15 + Tailwind CSS 4 + компоненты в стиле shadcn/ui**.

Откройте `docs/preview.html` в браузере, чтобы увидеть систему без установки чего-либо.

## Что внутри

```
tokens/tokens.json          источник правды: цвета, радиусы, тени, типографика, отступы
app/globals.css             те же токены как CSS-переменные + Tailwind-утилиты (bg-background, text-win, shadow-glow…)
components/ui/              базовые компоненты (shadcn-стиль): button, card, badge, input, avatar
components/magic/           анимации: orbiting-circles, number-ticker, marquee
components/custom/          компоненты продукта: feature-card, bet-slip, bet-row, stat-tile, leaderboard-table
app/page.tsx                демо-лендинг + превью кабинета, собранные из компонентов выше
docs/preview.html           статичный «style tile» — открывается двойным кликом
components.json             конфиг shadcn CLI, чтобы добавлять новые компоненты одной командой
```

## Запуск (когда понадобится)

```bash
npm install
npm run dev        # http://localhost:3000
```

## Как менять стиль

1. Цвета, радиусы, тени — в `app/globals.css`, блок `:root` (и продублируйте в `tokens/tokens.json`).
2. Компоненты ссылаются только на имена токенов (`bg-primary`, `text-muted-foreground`), поэтому правка одной строки перекрашивает всё.
3. Заголовки: утилиты `display` (hero) и `heading` (секции) — строчные, с плотным трекингом. Ярлыки капсом — `label-caps` или `<Badge>`.

## Как добавлять компоненты

```bash
npx shadcn@latest add dialog tabs sheet table        # базовые из shadcn/ui
npx shadcn@latest add "https://magicui.design/r/bento-grid"   # анимированные из Magic UI
```

Новые компоненты автоматически получат ваши цвета, потому что читают те же CSS-переменные.

## Использование с Claude Design System

1. Загрузите этот репозиторий на GitHub.
2. В форме **Design System** вставьте ссылку в «Link code from GitHub» и бриф в «Any other notes».
3. Claude соберёт дизайн-систему поверх этих токенов и компонентов.

## Дальше

Когда понадобится полноценная система (монорепо, собственный реестр, мобильная версия) — следуйте гайду «Пошаговый гайд: дизайн-система в стиле FOMO»: этот проект становится в нём пакетом `packages/design-system`.
