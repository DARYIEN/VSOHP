import { useState } from 'react';

export default function SOSHPPrototype() {
  const [tab, setTab] = useState('parent');

  const tabs = {
    parent: {
      title: 'Родительский режим',
      badge: 'Спокойствие без перегиба',
      desc: 'Мягкий контроль только по пути в школу и обратно. Родитель видит статус маршрута, прогресс и короткую статистику без ощущения тотальной слежки.',
      screenTitle: 'Идет в школу',
      screenSubtitle: 'Маршрут активен • 12 мин',
      points: [
        'Статус пути в реальном времени',
        'Минимальная статистика по маршруту',
        'Сигналы о потенциально опасных участках',
        'Трекинг включается только по дороге',
      ],
      stats: [
        ['Пройдено', '1.8 км'],
        ['Прогресс', '72%'],
        ['Среднее время', '14 мин'],
        ['Вовремя', '9/10'],
      ],
    },
    child: {
      title: 'Детский режим',
      badge: 'Игровая мотивация',
      desc: 'Ребенок не чувствует надзора. Для него это игра: очки за путь, серия дней, ачивки, рейтинг среди друзей и школы.',
      screenTitle: 'Утренний маршрут',
      screenSubtitle: 'Сегодня можно заработать 120 XP',
      points: [
        'Очки за регулярность и активность',
        'Ачивки и серии дней',
        'Рейтинги: друзья, школа, город',
        'Позитивная механика без давления',
      ],
      stats: [
        ['XP сегодня', '+85'],
        ['Серия', '6 дней'],
        ['Место в школе', '#12'],
        ['Ачивок', '14'],
      ],
    },
    party: {
      title: 'Пати-маршрут',
      badge: 'Идти вместе интереснее',
      desc: 'Дети могут объединяться в небольшие группы и идти вместе. Это усиливает привычку, добавляет социальность и повышает вовлеченность.',
      screenTitle: 'Пати на 08:10',
      screenSubtitle: '3 участника уже в пути',
      points: [
        'Совместный поход в школу',
        'Видимость участников пати',
        'Общий прогресс маршрута',
        'Социальная механика удержания',
      ],
      stats: [
        ['Участников', '4'],
        ['На месте сбора', '2'],
        ['До выхода', '6 мин'],
        ['Общий streak', '11'],
      ],
    },
    rating: {
      title: 'Рейтинги и достижения',
      badge: 'Соревнование как драйвер',
      desc: 'Рейтинг делает ежедневный поход в школу заметным и ценным действием. Можно соревноваться с друзьями, классом, школой и городом.',
      screenTitle: 'Рейтинг школы',
      screenSubtitle: 'Неделя 12 • обновлено сегодня',
      points: [
        'Отдельные доски лидеров',
        'Разные метрики: регулярность, серия, активность',
        'Прозрачная и понятная механика',
        'Основа для вирусности внутри школы',
      ],
      stats: [
        ['Ты', '#12'],
        ['Друзья', '#4'],
        ['Класс', '#2'],
        ['Город', 'топ 8%'],
      ],
    },
  };

  const current = tabs[tab];

  const tabButton = (key, label) => (
    <button
      onClick={() => setTab(key)}
      className={`rounded-2xl border px-4 py-2 text-sm transition md:text-base ${
        tab === key
          ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
      }`}
    >
      {label}
    </button>
  );

  const featureCard = (title, text) => (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-2 text-lg font-semibold text-slate-900">{title}</div>
      <div className="leading-7 text-slate-600">{text}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-100">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-slate-200 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-slate-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white shadow-lg">
                С
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Прототип</div>
                <div className="text-lg font-semibold">СОШП</div>
              </div>
            </div>
            <div className="hidden items-center gap-3 text-sm text-slate-600 md:flex">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Путь в школу</span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                Родитель + ребенок
              </span>
            </div>
          </div>

          <div className="grid items-center gap-12 pb-14 pt-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Безопасность, спокойствие и вовлечение в одном маршруте
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Пока ребенок идет в школу —
                <span className="block">родитель спокоен,</span>
                <span className="block">а ребенок вовлечен.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Прототип приложения для пути в школу и обратно: мягкий GPS-трекинг для родителя,
                игровая мотивация и рейтинги для ребенка, совместные маршруты и спокойная подача
                без ощущения слежки.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#demo"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg transition hover:-translate-y-px"
                >
                  Смотреть прототип
                </a>
                <a
                  href="#figma-scope"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-slate-800 transition hover:border-slate-400"
                >
                  Что уходит в Figma
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['Только по пути', 'Трекинг активен не постоянно'],
                  ['Родительский режим', 'Статус и минимум статистики'],
                  ['Детский режим', 'Очки, streak, ачивки'],
                  ['Пати', 'Идти в школу вместе'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="font-semibold text-slate-900">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[320px] md:w-[360px]">
                <div className="absolute -inset-6 rounded-[3rem] bg-slate-300/40 blur-2xl" />
                <div className="relative rounded-[2.5rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[2rem] bg-white">
                    <div className="border-b border-slate-200 bg-slate-100 px-5 pb-3 pt-4">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>08:14</span>
                        <span>Маршрут активен</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-500">Ребенок</div>
                          <div className="text-xl font-semibold">Идет в школу</div>
                        </div>
                        <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                          72%
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="relative h-72 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-100 to-white">
                        <div className="absolute inset-0 opacity-80">
                          <svg viewBox="0 0 300 300" className="h-full w-full">
                            <path
                              d="M20 240 C 90 160, 110 170, 160 120 S 240 70, 280 30"
                              fill="none"
                              stroke="#cbd5e1"
                              strokeWidth="18"
                              strokeLinecap="round"
                            />
                            <path
                              d="M20 240 C 90 160, 110 170, 160 120 S 240 70, 280 30"
                              fill="none"
                              stroke="#0f172a"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray="14 10"
                            />
                            <circle cx="28" cy="238" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
                            <circle cx="278" cy="34" r="16" fill="#0f172a" />
                            <circle cx="145" cy="135" r="10" fill="#ffffff" stroke="#0f172a" strokeWidth="4" />
                          </svg>
                        </div>
                        <div className="absolute left-4 top-4 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 text-sm shadow-sm">
                          Осторожно: оживленный переход впереди
                        </div>
                        <div className="absolute bottom-4 right-4 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-lg">
                          <div className="text-xs text-slate-300">ETA</div>
                          <div className="text-lg font-semibold">5 минут</div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {[
                          ['В пути', '12 мин'],
                          ['Дистанция', '1.8 км'],
                          ['Серия', '6 дней'],
                          ['Место', '#12'],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                            <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                            <div className="mt-1 text-lg font-semibold">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Концепция</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Главная продуктовая связка</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Родитель покупает спокойствие. Ребенок удерживается игрой. Поэтому продукт должен
            одновременно быть надежным, но не тревожным; игровым, но не детским; понятным, но не
            перегруженным.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featureCard(
            'Для родителя',
            'Статус маршрута, мягкий GPS-трекинг, сигналы о рисковых участках, завершение пути и короткая статистика.'
          )}
          {featureCard(
            'Для ребенка',
            'Очки, рейтинги, streak, достижения, легкое соревнование с друзьями, школой и городом.'
          )}
          {featureCard(
            'Для пары “родитель-ребенок”',
            'Общий сценарий вокруг одного и того же пути: взрослому — спокойствие, ребенку — вовлечение и смысл открывать приложение каждый день.'
          )}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Как это работает</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Сценарий пути</h2>
              <div className="mt-8 space-y-4">
                {[
                  [
                    '1. Старт маршрута',
                    'Ребенок выходит из дома. Приложение активирует маршрут только на время дороги в школу или обратно.',
                  ],
                  [
                    '2. Родитель видит статус',
                    'На экране родителя — спокойная карта, прогресс пути, примерное время прибытия и сигналы о сложных участках.',
                  ],
                  [
                    '3. Ребенок получает игровой слой',
                    'Очки за регулярность, серию дней, активность и участие в совместных походах.',
                  ],
                  [
                    '4. Завершение',
                    'У школы или дома маршрут закрывается. Обновляется статистика, ачивки и позиция в рейтинге.',
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="text-lg font-semibold">{title}</div>
                    <div className="mt-2 leading-7 text-slate-600">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Принципы</div>
              <div className="mt-6 grid gap-4">
                {[
                  'Трекинг не должен ощущаться как слежка.',
                  'Безопасность подается спокойно, без тревожных сценариев на первом плане.',
                  'Игровой слой должен работать даже без сложной серверной части на этапе прототипа.',
                  'Вся ценность должна считываться за 30–40 секунд демонстрации.',
                  'Прототип должен продавать идею, а не пытаться эмулировать production-систему.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <div className="leading-7 text-slate-700">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Демо-экраны</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Интерактивный блок прототипа</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Ниже — минимальный набор экранов, который уже достаточно хорошо демонстрирует продукт.
            Это не реальное приложение, а сильная презентационная обертка поверх концепции.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {tabButton('parent', 'Родитель')}
          {tabButton('child', 'Ребенок')}
          {tabButton('party', 'Пати')}
          {tabButton('rating', 'Рейтинг')}
        </div>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              {current.badge}
            </div>
            <h3 className="mt-5 text-3xl font-bold tracking-tight">{current.title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">{current.desc}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {current.points.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {current.stats.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-900 p-4 text-white shadow-lg">
                  <div className="text-xs uppercase tracking-wide text-slate-300">{label}</div>
                  <div className="mt-2 text-xl font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[320px] rounded-[2.5rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <div className="border-b border-slate-200 bg-slate-100 p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>08:14</span>
                    <span>{current.badge}</span>
                  </div>
                  <div className="mt-3 text-2xl font-semibold">{current.screenTitle}</div>
                  <div className="mt-1 text-sm text-slate-500">{current.screenSubtitle}</div>
                </div>

                <div className="space-y-4 p-4">
                  <div className="relative h-44 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-100 to-white p-4">
                    <div className="absolute inset-0 opacity-80">
                      <svg viewBox="0 0 300 180" className="h-full w-full">
                        <path
                          d="M15 150 C 70 130, 90 80, 130 85 S 190 115, 220 90 S 260 45, 290 30"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="24"
                          strokeLinecap="round"
                        />
                        <path
                          d="M15 150 C 70 130, 90 80, 130 85 S 190 115, 220 90 S 260 45, 290 30"
                          fill="none"
                          stroke="#0f172a"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray="14 10"
                        />
                        <circle cx="20" cy="150" r="11" fill="#fff" stroke="#0f172a" strokeWidth="4" />
                        <circle cx="290" cy="30" r="12" fill="#0f172a" />
                        <circle cx="145" cy="90" r="9" fill="#fff" stroke="#0f172a" strokeWidth="4" />
                      </svg>
                    </div>
                    <div className="relative flex h-full items-end justify-between">
                      <div className="rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 text-sm shadow-sm">
                        Маршрут
                      </div>
                      <div className="rounded-2xl bg-slate-900 px-3 py-2 text-sm text-white shadow-lg">
                        ETA 5 мин
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {current.stats.map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                        <div className="mt-1 text-lg font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-900">Что показывает экран</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">
                      В реальном приложении здесь будут настоящая карта, реальные участники,
                      реальные рейтинги и данные маршрута. В прототипе это визуальный слой для
                      презентации концепции.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Что реально делаем сейчас
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">В scope кодового прототипа</h2>
              <div className="mt-6 space-y-3">
                {[
                  'Лендинг с сильным первым экраном.',
                  'Два сценария: родитель и ребенок.',
                  'Псевдоэкран карты и активного маршрута.',
                  'Фейковая статистика пути и вовлечения.',
                  'Рейтинги, ачивки, streak.',
                  'Экран пати и совместного маршрута.',
                  'Позиционирование “безопасность без давления”.',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div id="figma-scope" className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Что уходит в Figma</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Сложные фичи не кодим за час</h2>
              <div className="mt-6 space-y-3">
                {[
                  'Настоящий GPS-трекинг и background location.',
                  'Реальная карта и геоданные.',
                  'Push-уведомления и системные разрешения.',
                  'Опасные зоны на основе реальных данных.',
                  'Подбор пати в реальном времени.',
                  'Реальные рейтинги по школе и городу.',
                  'Регистрация, привязка родителя и ребенка, backend.',
                  'История маршрутов и edge-case экраны.',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.2em] text-slate-500">ТЗ для Figma</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Набор экранов, которые стоит дорисовать
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-xl font-semibold">Родительские экраны</div>
            <div className="mt-5 space-y-3 leading-7 text-slate-600">
              <div>• Подключение ребенка</div>
              <div>• Разрешение на геолокацию</div>
              <div>• Активный маршрут</div>
              <div>• Завершенный маршрут</div>
              <div>• История маршрутов</div>
              <div>• Опасный участок рядом</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-xl font-semibold">Детские экраны</div>
            <div className="mt-5 space-y-3 leading-7 text-slate-600">
              <div>• Главная игровая</div>
              <div>• Профиль и ачивки</div>
              <div>• Рейтинг друзей</div>
              <div>• Рейтинг школы</div>
              <div>• Рейтинг города</div>
              <div>• Создание и вход в пати</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-xl font-semibold">Системные экраны</div>
            <div className="mt-5 space-y-3 leading-7 text-slate-600">
              <div>• Онбординг</div>
              <div>• Выбор роли: родитель / ребенок</div>
              <div>• Consent / privacy</div>
              <div>• Пустые состояния</div>
              <div>• Ошибка GPS или нет сигнала</div>
              <div>• Состояние “маршрут не начат”</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Итог</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Сейчас нужен не production, а убедительный продуктовый прототип
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Этот лендинг уже можно использовать как основу демонстрации концепции. Следующий
                слой — докрутить тексты, бренд, визуальный стиль и отдельно дорисовать мобильные
                экраны в Figma.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-xl font-semibold">Что делать дальше</div>
              <div className="mt-5 space-y-3 leading-7 text-slate-300">
                <div>1. Утвердить структуру и формулировки ценности.</div>
                <div>2. Дошлифовать визуальный стиль под айдентику проекта.</div>
                <div>3. Вынести тяжелые экраны в Figma по готовому списку.</div>
                <div>4. При желании превратить этот лендинг в презентационную демо-страницу для питча.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
