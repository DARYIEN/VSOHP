import { useState } from 'react';

const tabs = {
  parent: {
    title: 'Родительский режим',
    badge: 'Контроль без тревоги',
    accent: 'from-sky-500 to-cyan-400',
    glow: 'bg-sky-200/60',
    desc: 'Родитель видит только то, что действительно важно во время пути: где сейчас ребенок, как проходит маршрут, когда ожидать прибытие и есть ли впереди потенциально сложный участок.',
    screenTitle: 'Маршрут в школу',
    screenSubtitle: 'Идет по обычному пути • ETA 5 минут',
    alert: 'Впереди регулируемый переход',
    heroStats: [
      ['Прогресс', '72%'],
      ['В пути', '12 мин'],
      ['Среднее время', '14 мин'],
      ['Статус', 'Все спокойно'],
    ],
    featureBlocks: [
      {
        title: 'Что видит родитель',
        text: 'Живой статус маршрута, уведомление о старте и завершении, ETA, мягкие сигналы о потенциально рисковых точках и короткая история последних проходов.',
      },
      {
        title: 'Как выглядит экран',
        text: 'Большая карта маршрута, карточка статуса, блок безопасности, нижняя панель с быстрыми действиями и понятные показатели без перегруза тревожными деталями.',
      },
    ],
    panels: [
      'Старт пути и подтверждение, что маршрут активировался',
      'Текущий прогресс с ETA и отклонением от обычного темпа',
      'Карточка сложного участка с нейтральной подачей',
      'История: вовремя, дольше обычного, маршрут завершен',
    ],
    extraScreens: [
      'Подключение ребенка к аккаунту родителя',
      'Разрешения на геолокацию и уведомления',
      'Активный маршрут',
      'Маршрут завершен',
      'История последних маршрутов',
      'Отклонение от привычного пути',
    ],
    detailedScreens: [
      {
        name: 'Подключение ребенка',
        subtitle: 'Быстрый старт и привязка',
        tone: 'bg-sky-50 border-sky-100',
        items: [
          'QR-код или код приглашения для привязки',
          'Выбор школы, адреса дома и основных маршрутов',
          'Настройка уведомлений о старте и завершении',
          'Короткое объяснение, что трекинг работает только во время пути',
        ],
      },
      {
        name: 'Активный маршрут',
        subtitle: 'Главный экран спокойного контроля',
        tone: 'bg-white',
        items: [
          'Карта с текущим положением ребенка и прогрессом пути',
          'ETA, время в пути и сравнение с обычным временем',
          'Статус: все спокойно / задержка / отклонение от маршрута',
          'Быстрые действия: позвонить, открыть историю, посмотреть детали',
        ],
      },
      {
        name: 'Сигнал по участку',
        subtitle: 'Нейтральная подача без тревожного дизайна',
        tone: 'bg-amber-50 border-amber-100',
        items: [
          'Карточка потенциально сложного места впереди',
          'Короткая причина: переход, развязка, оживленная улица',
          'Расстояние до участка и ожидаемое время прохода',
          'Рекомендация без алармизма: просто обратить внимание',
        ],
      },
      {
        name: 'История маршрутов',
        subtitle: 'Короткая аналитика для родителя',
        tone: 'bg-slate-50 border-slate-200',
        items: [
          'Последние походы в школу и обратно',
          'Время старта, длительность и факт своевременного прибытия',
          'Повторяющиеся отклонения или задержки по дням',
          'Минимальная статистика без перегрузки деталями',
        ],
      },
    ],
  },
  child: {
    title: 'Детский режим',
    badge: 'Игровая мотивация',
    accent: 'from-amber-400 to-orange-500',
    glow: 'bg-amber-200/70',
    desc: 'Для ребенка это не контроль, а ежедневный челлендж: путь приносит XP, поддерживает серию дней, открывает достижения и помогает двигаться вверх в рейтингах.',
    screenTitle: 'Утренний маршрут',
    screenSubtitle: 'Сегодня можно получить до 120 XP',
    alert: 'Еще 1 отметка до новой ачивки',
    heroStats: [
      ['XP сегодня', '+85'],
      ['Серия', '6 дней'],
      ['Ачивки', '14'],
      ['Место', '#12'],
    ],
    featureBlocks: [
      {
        title: 'Что мотивирует ребенка',
        text: 'Очки за регулярность, бонусы за серию, визуальный прогресс, ачивки за маршруты и легкое соревнование с друзьями и школой.',
      },
      {
        title: 'Как выглядит экран',
        text: 'Игровой статус маршрута, прогресс до награды дня, видимые достижения, персональный рейтинг и понятный призыв идти регулярно.',
      },
    ],
    panels: [
      'Главная игровая с текущим маршрутом и XP за день',
      'Профиль с коллекцией ачивок и streak',
      'Лента наград за последние маршруты',
      'Рейтинг друзей, школы и города',
    ],
    extraScreens: [
      'Главный экран ребенка',
      'Профиль и достижения',
      'Дневная награда',
      'Серия дней и прогресс к следующему уровню',
      'Рейтинг друзей',
      'Экран новой ачивки',
    ],
    detailedScreens: [
      {
        name: 'Главная игровая',
        subtitle: 'Маршрут как ежедневный челлендж',
        tone: 'bg-amber-50 border-amber-100',
        items: [
          'Сколько XP можно получить сегодня',
          'Прогресс текущего маршрута и бонус за завершение',
          'Серия дней и подсказка, как не потерять streak',
          'Быстрый переход к ачивкам и рейтингу',
        ],
      },
      {
        name: 'Экран награды',
        subtitle: 'Момент дофамина после маршрута',
        tone: 'bg-orange-50 border-orange-100',
        items: [
          'Большой блок с полученными XP и наградой дня',
          'Причины начисления: регулярность, активность, пати',
          'Прогресс до следующего уровня или значка',
          'Кнопка поделиться результатом внутри приложения',
        ],
      },
      {
        name: 'Профиль и ачивки',
        subtitle: 'Личный прогресс в одном месте',
        tone: 'bg-white',
        items: [
          'Собранные достижения и редкие бейджи',
          'Статистика по маршрутам, дням и лучшей серии',
          'Выделенные цели недели',
          'Визуальный прогресс до новой ачивки',
        ],
      },
      {
        name: 'Рейтинг друзей',
        subtitle: 'Социальная динамика без перегруза',
        tone: 'bg-slate-50 border-slate-200',
        items: [
          'Позиция среди друзей и ближайшие соперники',
          'Кто поднялся выше за неделю',
          'Сколько XP не хватает до следующего места',
          'Легкие мотивационные подсказки на день',
        ],
      },
    ],
  },
  party: {
    title: 'Пати-маршрут',
    badge: 'Идти вместе интереснее',
    accent: 'from-violet-500 to-fuchsia-500',
    glow: 'bg-violet-200/70',
    desc: 'Ребенок может идти не один, а вместе с небольшой группой. Это усиливает привычку, добавляет ощущение движения вместе и делает дорогу более предсказуемой для всех участников.',
    screenTitle: 'Пати на 08:10',
    screenSubtitle: '3 участника уже в пути, 1 подходит к точке',
    alert: 'Сбор через 6 минут у первой точки',
    heroStats: [
      ['Участников', '4'],
      ['На месте', '2'],
      ['До старта', '6 мин'],
      ['Общий streak', '11'],
    ],
    featureBlocks: [
      {
        title: 'Что дает пати',
        text: 'Совместный путь в школу, понятный состав группы, точки сбора, общий прогресс маршрута и дополнительный стимул не пропускать дорогу пешком.',
      },
      {
        title: 'Как выглядит экран',
        text: 'Список участников, время сбора, статусы кто уже вышел, кто подходит, и визуальный общий маршрут всей мини-группы.',
      },
    ],
    panels: [
      'Создание пати и выбор времени выхода',
      'Экран точки сбора и статусов участников',
      'Общий прогресс пати по маршруту',
      'Завершение совместного пути и общий бонус',
    ],
    extraScreens: [
      'Создание пати',
      'Вступление по коду или приглашению',
      'Точка сбора',
      'Пати в пути',
      'Завершенный общий маршрут',
      'История совместных походов',
    ],
    detailedScreens: [
      {
        name: 'Создание пати',
        subtitle: 'Запуск совместного маршрута',
        tone: 'bg-violet-50 border-violet-100',
        items: [
          'Выбор времени выхода и точки сбора',
          'Приглашение друзей по коду или ссылке',
          'Ограничение размера группы',
          'Подтверждение общего маршрута до школы',
        ],
      },
      {
        name: 'Точка сбора',
        subtitle: 'Понятный статус перед стартом',
        tone: 'bg-fuchsia-50 border-fuchsia-100',
        items: [
          'Кто уже на месте, кто подходит, кто еще не вышел',
          'Таймер до общего старта',
          'Мини-карта точки встречи',
          'Уведомление, если кто-то опаздывает',
        ],
      },
      {
        name: 'Пати в пути',
        subtitle: 'Общий прогресс группы',
        tone: 'bg-white',
        items: [
          'Общий маршрут и прогресс пати',
          'Статусы участников внутри группы',
          'Бонус за прохождение вместе',
          'Фиксация, если кто-то отделился от маршрута',
        ],
      },
      {
        name: 'Общий финиш',
        subtitle: 'Совместная награда и история',
        tone: 'bg-slate-50 border-slate-200',
        items: [
          'Подтверждение, что группа дошла до школы',
          'Общий бонус и обновление streak пати',
          'Итоги маршрута по времени и составу',
          'Сохранение похода в историю совместных проходов',
        ],
      },
    ],
  },
  rating: {
    title: 'Рейтинги и достижения',
    badge: 'Соревнование как драйвер',
    accent: 'from-emerald-400 to-teal-500',
    glow: 'bg-emerald-200/70',
    desc: 'Рейтинг превращает ежедневную дорогу в заметное достижение. Можно сравнивать себя с друзьями, классом, школой и городом по понятным и прозрачным метрикам.',
    screenTitle: 'Рейтинг школы',
    screenSubtitle: 'Неделя 12 • обновлено сегодня',
    alert: 'До топ-10 не хватает 35 XP',
    heroStats: [
      ['Ты', '#12'],
      ['Друзья', '#4'],
      ['Класс', '#2'],
      ['Город', 'топ 8%'],
    ],
    featureBlocks: [
      {
        title: 'Что получает продукт',
        text: 'Рейтинг удерживает рутину, дает понятную цель на неделю, поддерживает социальную динамику внутри школы и работает как естественный повод возвращаться в приложение.',
      },
      {
        title: 'Как выглядит экран',
        text: 'Выбор лидерборда, позиция пользователя, ближайшие соперники, недельная динамика и карточки достижений, влияющих на очки.',
      },
    ],
    panels: [
      'Рейтинг друзей и ближайших соперников',
      'Рейтинг школы по неделе',
      'Позиция класса и общий вклад',
      'Карточки достижений, которые ускоряют рост',
    ],
    extraScreens: [
      'Рейтинг друзей',
      'Рейтинг класса',
      'Рейтинг школы',
      'Рейтинг города',
      'Детальная карточка достижения',
      'Недельная динамика позиции',
    ],
    detailedScreens: [
      {
        name: 'Рейтинг друзей',
        subtitle: 'Самый частый сценарий возврата',
        tone: 'bg-emerald-50 border-emerald-100',
        items: [
          'Текущая позиция и ближайшие соседи по очкам',
          'Разница в XP до следующего места',
          'Изменение позиции за последние дни',
          'Быстрый переход к профилю достижений',
        ],
      },
      {
        name: 'Рейтинг класса',
        subtitle: 'Командная динамика внутри школы',
        tone: 'bg-teal-50 border-teal-100',
        items: [
          'Какой класс лидирует по регулярности',
          'Средний вклад участников класса',
          'Серия побед класса по неделям',
          'Карточка общего командного результата',
        ],
      },
      {
        name: 'Рейтинг школы',
        subtitle: 'Основной презентационный экран',
        tone: 'bg-white',
        items: [
          'Топ пользователей недели по школе',
          'Фильтры по метрикам: регулярность, серия, активность',
          'Выделение позиции текущего ребенка',
          'Прогноз, как можно подняться выше',
        ],
      },
      {
        name: 'Карточка достижения',
        subtitle: 'Что влияет на продвижение вверх',
        tone: 'bg-slate-50 border-slate-200',
        items: [
          'Название достижения и сколько оно дает очков',
          'Условия открытия и текущий прогресс',
          'Связанные действия: пройти маршрут, собрать streak, идти в пати',
          'История уже открытых достижений',
        ],
      },
    ],
  },
};

const screenGroups = [
  {
    title: 'Родительские экраны',
    caption: 'Безопасность, статус и спокойная подача',
    items: [
      'Подключение ребенка',
      'Разрешения и доверенные маршруты',
      'Активный маршрут',
      'Отклонение от пути',
      'Маршрут завершен',
      'История маршрутов',
    ],
  },
  {
    title: 'Детские экраны',
    caption: 'Игровой слой и ежедневная мотивация',
    items: [
      'Главная игровая',
      'Прогресс дня',
      'Профиль и ачивки',
      'Экран новой награды',
      'Серия дней',
      'Персональная статистика',
    ],
  },
  {
    title: 'Пати и совместные сценарии',
    caption: 'Маршруты вместе и социальная динамика',
    items: [
      'Создание пати',
      'Вход по приглашению',
      'Точка сбора',
      'Пати в пути',
      'Общий финиш',
      'История совместных походов',
    ],
  },
  {
    title: 'Рейтинги и достижения',
    caption: 'Лидерборды и видимый прогресс',
    items: [
      'Рейтинг друзей',
      'Рейтинг класса',
      'Рейтинг школы',
      'Рейтинг города',
      'Карточка достижения',
      'Недельная динамика',
    ],
  },
];

function tabButton(key, label, activeTab) {
  return (
    <button
      onClick={() => activeTab.setTab(key)}
      className={`rounded-full border px-4 py-2 text-sm transition md:text-base ${
        activeTab.tab === key
          ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
      }`}
    >
      {label}
    </button>
  );
}

function PhonePreview({ current }) {
  return (
    <div className="relative mx-auto w-[362px]">
      <div className={`absolute -inset-6 rounded-[3.5rem] ${current.glow} blur-3xl`} />
      <div className="relative rounded-[3.2rem] border-[10px] border-slate-950 bg-slate-950 p-[10px] shadow-[0_30px_90px_rgba(15,23,42,0.28)]">
        <div className="relative overflow-hidden rounded-[2.6rem] bg-[#f8fafc]">
          <div className="absolute left-1/2 top-3 z-20 h-7 w-36 -translate-x-1/2 rounded-full bg-black" />
          <div className={`relative min-h-[700px] bg-gradient-to-b ${current.accent} p-[1px]`}>
            <div className="min-h-[780px] bg-[#f8fafc]">
              <div className="flex items-center justify-between px-6 pb-4 pt-5 text-[13px] font-semibold text-slate-700">
                <span>9:41</span>
                <span>5G</span>
              </div>

              <div className="px-5">
                <div className={`rounded-[2rem] bg-gradient-to-br ${current.accent} p-5 text-white shadow-lg`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.24em] text-white/70">
                        {current.badge}
                      </div>
                      <div className="mt-3 text-2xl font-semibold leading-tight">{current.screenTitle}</div>
                      <div className="mt-2 text-sm leading-6 text-white/85">{current.screenSubtitle}</div>
                    </div>
                    <div className="rounded-2xl bg-white/20 px-3 py-2 text-sm font-medium">72%</div>
                  </div>

                  <div className="mt-5 rounded-[1.6rem] border border-white/20 bg-white/12 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm text-white/80">
                      <span>Статус маршрута</span>
                      <span>ETA 5 мин</span>
                    </div>
                    <div className="mt-4 h-28 overflow-hidden rounded-[1.3rem] bg-white/12">
                      <svg viewBox="0 0 300 120" className="h-full w-full opacity-90">
                        <path
                          d="M18 96 C 58 86, 74 28, 126 34 S 193 102, 230 72 S 270 28, 288 22"
                          fill="none"
                          stroke="rgba(255,255,255,0.28)"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        <path
                          d="M18 96 C 58 86, 74 28, 126 34 S 193 102, 230 72 S 270 28, 288 22"
                          fill="none"
                          stroke="white"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray="10 10"
                        />
                        <circle cx="22" cy="95" r="8" fill="white" />
                        <circle cx="286" cy="22" r="9" fill="#0f172a" />
                        <circle cx="150" cy="60" r="6" fill="#0f172a" stroke="white" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="-mt-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {current.alert}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {current.heroStats.map(([label, value]) => (
                      <div key={label} className="rounded-[1.4rem] border border-slate-200 bg-white p-3">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{label}</div>
                        <div className="mt-2 text-lg font-semibold text-slate-900">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-900">Ключевые блоки экрана</div>
                    <div className="mt-3 space-y-2">
                      {current.panels.slice(0, 3).map((item) => (
                        <div key={item} className="rounded-2xl bg-white px-3 py-2 text-sm leading-6 text-slate-600">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-4">
                  <div className="mx-auto h-1.5 w-32 rounded-full bg-slate-900/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="mt-3 leading-7 text-slate-600">{text}</div>
    </div>
  );
}

function ScreenGroupCard({ title, caption, items }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="text-xl font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-500">{caption}</div>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailedScreenCard({ screen }) {
  return (
    <div className={`rounded-[1.8rem] border p-6 shadow-sm ${screen.tone}`}>
      <div className="text-lg font-semibold text-slate-900">{screen.name}</div>
      <div className="mt-2 text-sm leading-6 text-slate-500">{screen.subtitle}</div>
      <div className="mt-5 grid gap-3">
        {screen.items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 leading-6 text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UniquePrototype() {
  const [tab, setTab] = useState('parent');
  const current = tabs[tab];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.14),_transparent_28%),linear-gradient(to_bottom,_#ffffff,_#eef3f9)]">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.32em] text-slate-500">School route app</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">Unique</div>
            </div>
            <div className="hidden items-center gap-3 text-sm text-slate-600 md:flex">
              <span className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 backdrop-blur">
                Путь в школу и обратно
              </span>
              <span className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 backdrop-blur">
                Родитель, ребенок, пати, рейтинг
              </span>
            </div>
          </div>

          <div className="grid items-center gap-12 pb-14 pt-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
                Безопасность, вовлечение и привычка ходить в школу пешком
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Родитель видит спокойный статус маршрута,
                <span className="block">а ребенок получает понятную</span>
                <span className="block">игровую мотивацию идти каждый день.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Unique объединяет мягкий маршрутный контроль, игровую мотивацию, совместные
                походы и рейтинги в одном продукте, который удобно показывать как готовую
                продуктовую концепцию.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#demo"
                  className="rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg transition hover:-translate-y-px"
                >
                  Смотреть экраны
                </a>
                <a
                  href="#canva"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-800 transition hover:border-slate-400"
                >
                  Презентация в Canva
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['Родитель', 'Статус маршрута и ETA'],
                  ['Ребенок', 'XP, streak и ачивки'],
                  ['Пати', 'Совместные походы'],
                  ['Рейтинг', 'Друзья, школа, город'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-[1.8rem] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                    <div className="font-semibold text-slate-900">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PhonePreview current={current} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Что внутри продукта</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Четыре режима вокруг одного ежедневного маршрута
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Продукт связывает интересы родителя и ребенка в одном сценарии. Взрослый получает
            спокойствие и предсказуемость пути, ребенок — мотивацию возвращаться в приложение и
            видеть прогресс.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.values(tabs).map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.desc} />
          ))}
        </div>
      </section>

      <section id="demo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Детализация экранов</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Ключевые сценарии уже показаны на лендинге
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Ниже собраны режимы, которые раскрывают основной опыт: что видит родитель, как
              выглядит игровой слой для ребенка, как работает пати и почему рейтинг удерживает
              ежедневное использование.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {tabButton('parent', 'Родитель', { tab, setTab })}
            {tabButton('child', 'Ребенок', { tab, setTab })}
            {tabButton('party', 'Пати', { tab, setTab })}
            {tabButton('rating', 'Рейтинг', { tab, setTab })}
          </div>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <div className={`inline-flex rounded-full bg-gradient-to-r ${current.accent} px-4 py-2 text-sm text-white shadow-sm`}>
                  {current.badge}
                </div>
                <h3 className="mt-5 text-3xl font-bold tracking-tight">{current.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{current.desc}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {current.featureBlocks.map((item) => (
                    <div key={item.title} className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-3 leading-7 text-slate-600">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Экранный состав</div>
                <div className="mt-5 grid gap-3">
                  {current.panels.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Дополнительные экраны</div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {current.extraScreens.map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Подробные экраны режима</div>
                <div className="mt-5 grid gap-4">
                  {current.detailedScreens.map((screen) => (
                    <DetailedScreenCard key={screen.name} screen={screen} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:sticky lg:top-8">
              <PhonePreview current={current} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Полная карта экранов</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Большую часть сценариев уже можно показать прямо на сайте
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Вместо отдельного технического списка здесь собрана понятная карта экранов по всем
            основным функциям продукта. Это можно использовать и для питча, и для согласования
            наполнения будущей презентации.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {screenGroups.map((group) => (
            <ScreenGroupCard key={group.title} title={group.title} caption={group.caption} items={group.items} />
          ))}
        </div>
      </section>

      <section id="canva" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Презентация</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Место для ссылки на Canva
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Здесь можно разместить ссылку на готовую презентацию или кликабельный прототип, чтобы
                быстро переходить от лендинга к материалам для питча.
              </p>
              <div className="mt-6 rounded-[1.8rem] border border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-slate-500">
                Вставьте ссылку на Canva: `https://canva.com/...`
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <div className="text-xl font-semibold text-slate-900">Что можно найти в Canva</div>
              <div className="mt-6 grid gap-3">
                {[
                  'Короткий питч продукта и ключевая ценность',
                  'Основные пользовательские сценарии по ролям',
                  'Подборка экранов мобильного интерфейса',
                  'Примеры рейтингов, ачивок и пати-маршрутов',
                  'Финальная презентационная сборка для встреч и демо',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
