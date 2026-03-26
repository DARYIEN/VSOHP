const mapThemes = {
  parent: {
    route: '#0ea5e9',
    routeSoft: '#bae6fd',
    badge: 'border-sky-200 bg-sky-50 text-sky-700',
    user: 'bg-sky-500',
    party: 'bg-violet-500',
  },
  child: {
    route: '#f59e0b',
    routeSoft: '#fde68a',
    badge: 'border-amber-200 bg-amber-50 text-amber-700',
    user: 'bg-amber-500',
    party: 'bg-fuchsia-500',
  },
  party: {
    route: '#8b5cf6',
    routeSoft: '#ddd6fe',
    badge: 'border-violet-200 bg-violet-50 text-violet-700',
    user: 'bg-violet-500',
    party: 'bg-violet-400',
  },
  rating: {
    route: '#0f172a',
    routeSoft: '#cbd5e1',
    badge: 'border-slate-200 bg-slate-100 text-slate-700',
    user: 'bg-slate-800',
    party: 'bg-emerald-500',
  },
};

const legendItems = [
  { key: 'user', label: 'Ты на маршруте' },
  { key: 'party', label: 'Твое пати' },
  { key: 'others', label: 'Другие ученики' },
  { key: 'point', label: 'Дом, школа и точка сбора' },
];

const markers = [
  { x: 10, y: 84, label: 'Дом', kind: 'point' },
  { x: 87, y: 18, label: 'Школа', kind: 'point' },
  { x: 53, y: 54, label: 'Сбор', kind: 'point' },
  { x: 39, y: 59, label: 'Ты', kind: 'user' },
  { x: 44, y: 56, label: 'Аня', kind: 'party' },
  { x: 49, y: 52, label: 'Тимур', kind: 'party' },
  { x: 57, y: 48, label: 'Лена', kind: 'party' },
  { x: 30, y: 65, label: 'Марк', kind: 'others' },
  { x: 64, y: 44, label: 'Даша', kind: 'others' },
  { x: 75, y: 35, label: 'Илья', kind: 'others' },
];

function markerClass(kind, theme) {
  if (kind === 'user') return `${theme.user} map-marker-pulse ring-4 ring-white`;
  if (kind === 'party') return `${theme.party} ring-2 ring-white`;
  if (kind === 'others') return 'bg-slate-500 ring-2 ring-white';
  return 'bg-emerald-500 ring-2 ring-white';
}

export default function RouteMapShowcase({ mode, modeKey }) {
  const theme = mapThemes[modeKey] || mapThemes.parent;
  const partyMembers = ['Ты', 'Аня', 'Тимур', 'Лена'];
  const nearbyStudents = ['Марк (5Б)', 'Даша (6А)', 'Илья (5В)'];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-[linear-gradient(120deg,_#ffffff_0%,_#eef3fb_58%,_#f9fafb_100%)] p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Детальная карта маршрута</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Большая карта показывает путь, твой прогресс и движение пати в реальном времени
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Здесь видно главный маршрут до школы, где сейчас находишься ты, кто идет рядом в твоем пати и какие
            ученики еще движутся по соседним траекториям.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-[#f8fafc]">
            <svg viewBox="0 0 1080 540" className="h-full w-full">
              <rect x="0" y="0" width="1080" height="540" fill="#f8fafc" />

              <path d="M20 520 L360 180 L560 420 L990 120" stroke="#dbeafe" strokeWidth="54" strokeLinecap="round" />
              <path d="M70 500 L430 240 L710 470 L1060 250" stroke="#e2e8f0" strokeWidth="42" strokeLinecap="round" />
              <path d="M120 110 L300 210 L410 120 L580 240 L720 170 L930 280" stroke="#e2e8f0" strokeWidth="26" strokeLinecap="round" />

              <path
                d="M78 455 C 220 420, 270 310, 370 300 S 560 370, 700 280 S 870 180, 980 95"
                fill="none"
                stroke={theme.routeSoft}
                strokeWidth="44"
                strokeLinecap="round"
              />
              <path
                className="map-route-flow"
                d="M78 455 C 220 420, 270 310, 370 300 S 560 370, 700 280 S 870 180, 980 95"
                fill="none"
                stroke={theme.route}
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>

            {markers.map((marker) => (
              <div
                key={marker.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              >
                <div className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 rounded-full ${markerClass(marker.kind, theme)}`} />
                  <div className="rounded-full border border-slate-200 bg-white/95 px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                    {marker.label}
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
              Live map · каждые 5 сек
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${theme.badge}`}>
                {mode.badge}
              </div>
              <div className="mt-3 text-xl font-semibold text-slate-900">{mode.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                До школы 7 минут, до точки сбора 2 минуты, пати движется без отклонений.
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Легенда</div>
              <div className="mt-3 grid gap-2">
                {legendItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    <div className={`h-2.5 w-2.5 rounded-full ${
                      item.key === 'user'
                        ? theme.user
                        : item.key === 'party'
                          ? theme.party
                          : item.key === 'others'
                            ? 'bg-slate-500'
                            : 'bg-emerald-500'
                    }`} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Пати и соседи по маршруту</div>
              <div className="mt-3 text-sm font-medium text-slate-700">Твое пати: {partyMembers.join(', ')}</div>
              <div className="mt-2 text-sm text-slate-600">Рядом также идут: {nearbyStudents.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
