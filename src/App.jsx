import { useState } from 'react';
import PhoneMockup from './components/PhoneMockup';
import { FeatureCard, FullScreenGroup, ScreenGroupCard } from './components/ContentBlocks';
import { canvaItems, modes, screenGroups } from './data/productData';

function ModeButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition md:text-base ${
        active
          ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
      }`}
    >
      {label}
    </button>
  );
}

function ScreenNameButton({ active, onClick, label, index }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl px-3 py-2 text-left text-sm transition ${
        active ? 'bg-slate-900 text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-700'
      }`}
    >
      {index + 1}. {label}
    </button>
  );
}

export default function UniquePrototype() {
  const [tab, setTab] = useState('parent');
  const [screenIndexes, setScreenIndexes] = useState({
    parent: 0,
    child: 0,
    party: 0,
    rating: 0,
  });

  const current = modes[tab];
  const currentScreenIndex = screenIndexes[tab];

  const fullScreenGroups = Object.values(modes).map((mode) => ({
    title: mode.title,
    caption: mode.desc,
    accent: mode.accent,
    cards: mode.screens.map((screen) => ({
      name: screen.name,
      subtitle: screen.subtitle,
      items: [
        ...screen.metrics.map(([label, value]) => `${label}: ${value}`),
        ...screen.sections.flatMap((section) => section.items.slice(0, 2)),
      ],
    })),
  }));

  const handleScreenChange = (index) => {
    setScreenIndexes((prev) => ({
      ...prev,
      [tab]: index,
    }));
  };

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
              <PhoneMockup mode={current} screenIndex={currentScreenIndex} onScreenChange={handleScreenChange} />
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
          {Object.values(modes).map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.desc} />
          ))}
        </div>
      </section>

      <section id="demo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Интерактивный демо-блок</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Каждый экран можно открыть прямо внутри телефона
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Сначала переключайте режимы продукта, а затем листайте отдельные экраны внутри самого
              телефона. Так лендинг уже работает как кликабельная презентация основного UX.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ModeButton active={tab === 'parent'} onClick={() => setTab('parent')} label="Родитель" />
            <ModeButton active={tab === 'child'} onClick={() => setTab('child')} label="Ребенок" />
            <ModeButton active={tab === 'party'} onClick={() => setTab('party')} label="Пати" />
            <ModeButton active={tab === 'rating'} onClick={() => setTab('rating')} label="Рейтинг" />
          </div>

          <div className="mt-5 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-slate-600">
                Экраны режима: <span className="font-semibold text-slate-900">{current.screens.length}</span>
              </div>
              <div className="text-sm text-slate-600">
                Сейчас открыт: <span className="font-semibold text-slate-900">{currentScreenIndex + 1}</span> / {current.screens.length}
              </div>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {current.screens.map((screen, index) => (
                <ScreenNameButton
                  key={screen.name}
                  index={index}
                  label={screen.name}
                  active={currentScreenIndex === index}
                  onClick={() => handleScreenChange(index)}
                />
              ))}
            </div>
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
                    <FeatureCard key={item.title} title={item.title} text={item.text} />
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Ключевые блоки режима</div>
                <div className="mt-5 grid gap-3">
                  {current.panels.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Текущий экран в телефоне</div>
                <div className="mt-4 rounded-2xl bg-slate-900 px-5 py-4 text-white">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{current.title}</div>
                  <div className="mt-2 text-xl font-semibold">{current.screens[currentScreenIndex].name}</div>
                  <div className="mt-1 text-sm text-slate-300">{current.screens[currentScreenIndex].subtitle}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:sticky lg:top-8">
              <PhoneMockup mode={current} screenIndex={currentScreenIndex} onScreenChange={handleScreenChange} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Полная карта экранов</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            На лендинге можно раскрыть весь функционал по ключевым ролям
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Ниже собран полный набор экранов по родительскому, детскому, совместному и
            рейтинговому опыту. Это уже выглядит как структурированная демонстрация продукта, а не
            как внутренний список пожеланий.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {screenGroups.map((group) => (
            <ScreenGroupCard key={group.title} title={group.title} caption={group.caption} items={group.items} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 pb-16 md:px-10 lg:px-12">
        <div className="space-y-8">
          {fullScreenGroups.map((group) => (
            <FullScreenGroup key={group.title} group={group} />
          ))}
        </div>
      </section>

      <section id="canva" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Презентация</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Место для ссылки на Canva</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Здесь можно разместить ссылку на готовую презентацию или кликабельный прототип, чтобы
                быстро переходить от лендинга к материалам для питча.
              </p>
              <div className="mt-6 rounded-[1.8rem] border border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-slate-500">
                Вставьте ссылку на Canva: https://canva.com/...
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <div className="text-xl font-semibold text-slate-900">Что можно найти в Canva</div>
              <div className="mt-6 grid gap-3">
                {canvaItems.map((item) => (
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
