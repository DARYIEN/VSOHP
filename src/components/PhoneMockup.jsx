function ScreenTab({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] transition ${
        active ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
      }`}
    >
      {label}
    </button>
  );
}

function shortLabel(name) {
  const [first, second] = name.split(' ');
  if (!second) return first;
  if (first.length <= 8) return `${first} ${second}`;
  return first;
}

function RouteMap() {
  return (
    <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Маршрут на карте</div>
      <div className="mt-2 h-24 overflow-hidden rounded-xl bg-white">
        <svg viewBox="0 0 300 120" className="h-full w-full">
          <rect x="0" y="0" width="300" height="120" fill="#f8fafc" />
          <path d="M10 95 C 70 88, 75 45, 125 42 S 195 94, 238 66 S 272 36, 292 20" fill="none" stroke="#dbeafe" strokeWidth="22" strokeLinecap="round" />
          <path d="M10 95 C 70 88, 75 45, 125 42 S 195 94, 238 66 S 272 36, 292 20" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
          <circle cx="15" cy="94" r="8" fill="#0f172a" />
          <circle cx="291" cy="20" r="9" fill="#10b981" />
          <circle cx="154" cy="60" r="6" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
          <text x="24" y="98" fill="#475569" fontSize="10">Дом</text>
          <text x="258" y="17" fill="#065f46" fontSize="10">Школа</text>
        </svg>
      </div>
    </div>
  );
}

function BottomNav({ modeKey }) {
  const itemsByMode = {
    parent: ['Карта', 'История', 'Уведомления', 'Профиль'],
    child: ['Главная', 'Ачивки', 'Пати', 'Профиль'],
    party: ['Пати', 'Сбор', 'Маршрут', 'История'],
    rating: ['Друзья', 'Класс', 'Школа', 'Профиль'],
  };
  const items = itemsByMode[modeKey] || ['Главная', 'Маршрут', 'Рейтинг', 'Профиль'];

  return (
    <div className="mt-2 rounded-[1rem] border border-slate-200 bg-slate-50 px-2 py-1.5">
      <div className="grid grid-cols-4 gap-1">
        {items.map((item, index) => (
          <div key={item} className={`rounded-lg px-1.5 py-1 text-center text-[10px] ${index === 0 ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
            <div className={`mx-auto mb-1 h-1.5 w-6 rounded-full ${index === 0 ? 'bg-slate-900' : 'bg-slate-300'}`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhoneMockup({ mode, modeKey, screenIndex, onScreenChange }) {
  const screen = mode.screens[screenIndex];

  return (
    <div className="relative mx-auto w-[280px] max-w-full sm:w-[295px] md:w-[310px]">
      <div className={`absolute -inset-5 rounded-[3rem] ${mode.glow} blur-3xl`} />
      <div className="relative rounded-[2.8rem] border-[8px] border-slate-950 bg-slate-950 p-[8px] shadow-[0_22px_52px_rgba(15,23,42,0.24)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#f8fafc]">
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-black" />
          <div className={`relative aspect-[1170/2532] bg-gradient-to-b ${mode.accent} p-[1px]`}>
            <div className="flex h-full flex-col bg-[#f8fafc]">
              <div className="flex items-center justify-between px-5 pb-2.5 pt-4 text-[12px] font-semibold text-slate-700">
                <span>9:41</span>
                <span>5G</span>
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-3 pb-3">
                <div className={`rounded-[1.5rem] bg-gradient-to-br ${mode.accent} p-3 text-white shadow-lg`}>
                  <div className="text-[9px] uppercase tracking-[0.22em] text-white/70">{screen.eyebrow}</div>
                  <div className="mt-1 text-base font-semibold leading-tight">{screen.title}</div>
                  <div className="mt-1 text-[12px] leading-4 text-white/85">{screen.subtitle}</div>

                  <div className="mt-2 flex items-center justify-between text-[10px] text-white/85">
                    <span>{mode.badge}</span>
                    <span>
                      Экран {screenIndex + 1}/{mode.screens.length}
                    </span>
                  </div>

                  <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                    {mode.screens.map((item, index) => (
                      <ScreenTab
                        key={item.name}
                        active={index === screenIndex}
                        onClick={() => onScreenChange(index)}
                        label={shortLabel(item.name)}
                      />
                    ))}
                  </div>
                </div>

                <div className="-mt-3 flex min-h-0 flex-1 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                  <div className="rounded-[1rem] border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] leading-5 text-slate-700">
                    {screen.notice}
                  </div>

                  {modeKey === 'parent' && <div className="mt-2.5"><RouteMap /></div>}

                  <div className="mt-2.5 grid grid-cols-2 gap-2">
                    {screen.metrics.map(([label, value]) => (
                      <div key={label} className="rounded-[1rem] border border-slate-200 bg-white p-2">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2.5 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
                    {screen.sections.map((section) => (
                      <div key={section.title} className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
                        <div className="text-[12px] font-semibold text-slate-900">{section.title}</div>
                        <div className="mt-1.5 space-y-1.5">
                          {section.items.map((item) => (
                            <div key={item} className="rounded-lg bg-white px-2.5 py-1.5 text-[11px] leading-4 text-slate-600">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <BottomNav modeKey={modeKey} />
                </div>

                <div className="px-6 pb-1 pt-3">
                  <div className="mx-auto h-1.5 w-24 rounded-full bg-slate-900/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
