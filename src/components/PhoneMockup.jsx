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

function shortLabel(screen) {
  if (screen.tabLabel) return screen.tabLabel;
  const [first] = screen.name.split(' ');
  return first.length > 10 ? `${first.slice(0, 9)}…` : first;
}

function mapVariant(modeKey) {
  if (modeKey === 'party') return 'party';
  if (modeKey === 'child') return 'child';
  return 'parent';
}

function shouldShowMap(modeKey, screenName) {
  const mapScreens = {
    parent: ['Активный маршрут'],
    child: ['Прогресс дня'],
    party: ['Точка сбора', 'Пати в пути'],
    rating: [],
  };
  return (mapScreens[modeKey] || []).includes(screenName);
}

function RouteMap({ variant }) {
  if (variant === 'party') {
    return (
      <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
        <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Карта группы</div>
        <div className="mt-2 h-24 overflow-hidden rounded-xl bg-white">
          <svg viewBox="0 0 300 120" className="h-full w-full">
            <rect x="0" y="0" width="300" height="120" fill="#f8fafc" />
            <path d="M18 98 C 66 86, 86 42, 134 44 S 202 98, 244 70 S 278 38, 292 26" fill="none" stroke="#ede9fe" strokeWidth="22" strokeLinecap="round" />
            <path d="M18 98 C 66 86, 86 42, 134 44 S 202 98, 244 70 S 278 38, 292 26" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
            <circle cx="24" cy="96" r="6" fill="#9333ea" />
            <circle cx="52" cy="88" r="6" fill="#a855f7" />
            <circle cx="80" cy="78" r="6" fill="#c084fc" />
            <circle cx="292" cy="26" r="9" fill="#10b981" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'child') {
    return (
      <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
        <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Прогресс на маршруте</div>
        <div className="mt-2 h-24 overflow-hidden rounded-xl bg-white">
          <svg viewBox="0 0 300 120" className="h-full w-full">
            <rect x="0" y="0" width="300" height="120" fill="#fffbeb" />
            <path d="M12 96 C 56 90, 84 52, 120 48 S 186 70, 228 56 S 272 28, 292 18" fill="none" stroke="#fde68a" strokeWidth="22" strokeLinecap="round" />
            <path d="M12 96 C 56 90, 84 52, 120 48 S 186 70, 228 56 S 272 28, 292 18" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
            <circle cx="12" cy="96" r="8" fill="#f59e0b" />
            <circle cx="292" cy="18" r="8" fill="#22c55e" />
            <circle cx="170" cy="62" r="7" fill="#fff" stroke="#0f172a" strokeWidth="3" />
          </svg>
        </div>
      </div>
    );
  }

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

function HistoryRoutesView({ screen }) {
  return (
    <div className="space-y-2.5">
      <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="rounded-lg bg-white px-2 py-1 text-center text-[10px] text-slate-900 shadow-sm">Дом → Школа</div>
          <div className="rounded-lg bg-slate-100 px-2 py-1 text-center text-[10px] text-slate-600">Школа → Дом</div>
          <div className="rounded-lg bg-slate-100 px-2 py-1 text-center text-[10px] text-slate-600">Все</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {screen.metrics.map(([label, value]) => (
          <div key={label} className="rounded-[1rem] border border-slate-200 bg-white p-2">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
        <div className="space-y-1.5">
          {['Сегодня 08:14 • 13 мин • вовремя', 'Вчера 08:16 • 14 мин • вовремя', 'Пн 08:20 • 16 мин • небольшая задержка'].map((item) => (
            <div key={item} className="rounded-lg bg-white px-2.5 py-2 text-[11px] text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeaderboardRow({ row, units, highlight = false }) {
  return (
    <div className={`grid grid-cols-[28px_1fr_68px_54px] items-center gap-1.5 rounded-lg px-2.5 py-2 text-[11px] ${
      highlight ? 'border border-emerald-200 bg-emerald-50 text-emerald-900' : 'bg-white text-slate-700'
    }`}>
      <div className="font-semibold">{row.place}</div>
      <div className="truncate">{row.name}</div>
      <div className="truncate text-[10px] text-slate-500">{row.className}</div>
      <div className="text-right font-semibold">
        {row.points}
        {units ? ` ${units}` : ''}
      </div>
    </div>
  );
}

function LeaderboardView({ leaderboard }) {
  const units = leaderboard.units || 'XP';

  return (
    <div className="space-y-2.5">
      <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-500">
          <span>{leaderboard.title}</span>
          <span>Обновлено</span>
        </div>
        <div className="mt-2 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] text-slate-500">
          <div className="grid grid-cols-[28px_1fr_68px_54px] gap-1.5">
            <span>Место</span>
            <span>Ученик</span>
            <span>Класс</span>
            <span className="text-right">Очки</span>
          </div>
        </div>
        <div className="mt-1.5 space-y-1.5">
          {leaderboard.rows.map((row) => (
            <LeaderboardRow key={`${row.place}-${row.name}`} row={row} units={units} />
          ))}
        </div>
      </div>

      <div className="rounded-[1rem] border border-emerald-200 bg-emerald-50 p-2.5">
        <div className="mb-1.5 text-[10px] uppercase tracking-[0.16em] text-emerald-700">Твоя позиция</div>
        <LeaderboardRow row={leaderboard.userRow} units={units} highlight />
      </div>
    </div>
  );
}

function BottomNav({ activeMode, onModeChange }) {
  const tabs = [
    { key: 'parent', label: 'Родитель' },
    { key: 'child', label: 'Ребенок' },
    { key: 'party', label: 'Пати' },
    { key: 'rating', label: 'Рейтинг' },
  ];

  return (
    <div className="mt-2 rounded-[1rem] border border-slate-200 bg-slate-50 px-2 py-1.5">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map((tab) => {
          const active = tab.key === activeMode;
          return (
            <button
              key={tab.key}
              onClick={() => onModeChange(tab.key)}
              className={`rounded-lg px-1.5 py-1 text-center text-[10px] ${
                active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              <div className={`mx-auto mb-1 h-1.5 w-6 rounded-full ${active ? 'bg-slate-900' : 'bg-slate-300'}`} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PhoneMockup({ mode, modeKey, screenIndex, onScreenChange, onModeChange }) {
  const screen = mode.screens[screenIndex];
  const flatItems = (screen.sections || []).flatMap((section) => section.items);
  const metrics = screen.metrics || [];
  const showMap = shouldShowMap(modeKey, screen.name);
  const isHistory = modeKey === 'parent' && screen.name === 'История маршрутов';
  const showLeaderboard = modeKey === 'rating' && Boolean(screen.leaderboard);

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
                <div className="rounded-[1.1rem] border border-slate-200 bg-white px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{mode.title}</div>
                    <div className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
                      {screenIndex + 1}/{mode.screens.length}
                    </div>
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-slate-900">{screen.title}</div>
                  <div className="mt-1 text-[11px] leading-4 text-slate-600">{screen.subtitle}</div>
                </div>

                <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                  {mode.screens.map((item, index) => (
                    <ScreenTab
                      key={item.name}
                      active={index === screenIndex}
                      onClick={() => onScreenChange(index)}
                      label={shortLabel(item)}
                    />
                  ))}
                </div>

                <div className="mt-1 flex min-h-0 flex-1 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                  <div className="rounded-[1rem] border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] leading-5 text-slate-700">
                    {screen.notice}
                  </div>

                  {showMap && (
                    <div className="mt-2.5">
                      <RouteMap variant={mapVariant(modeKey)} />
                    </div>
                  )}

                  {showLeaderboard ? (
                    <div className="mt-2.5 min-h-0 flex-1 overflow-y-auto pr-1">
                      <LeaderboardView leaderboard={screen.leaderboard} />
                    </div>
                  ) : isHistory ? (
                    <div className="mt-2.5 min-h-0 flex-1 overflow-y-auto pr-1">
                      <HistoryRoutesView screen={screen} />
                    </div>
                  ) : (
                    <>
                      <div className="mt-2.5 grid grid-cols-2 gap-2">
                        {metrics.map(([label, value]) => (
                          <div key={label} className="rounded-[1rem] border border-slate-200 bg-white p-2">
                            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</div>
                            <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2.5 min-h-0 flex-1 overflow-y-auto pr-1">
                        <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
                          <div className="space-y-1.5">
                            {flatItems.map((item) => (
                              <div key={item} className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 text-[11px] text-slate-600">
                                <span>{item}</span>
                                <span className="text-slate-400">›</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <BottomNav activeMode={modeKey} onModeChange={onModeChange} />
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
