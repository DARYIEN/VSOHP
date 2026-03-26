import { useState } from 'react';

const mapThemes = {
  parent: {
    route: '#0ea5e9',
    routeSoft: '#bae6fd',
    badge: 'border-sky-200 bg-sky-50 text-sky-700',
    user: 'bg-sky-500',
  },
  child: {
    route: '#f59e0b',
    routeSoft: '#fde68a',
    badge: 'border-amber-200 bg-amber-50 text-amber-700',
    user: 'bg-amber-500',
  },
  party: {
    route: '#2563eb',
    routeSoft: '#bfdbfe',
    badge: 'border-blue-200 bg-blue-50 text-blue-700',
    user: 'bg-blue-500',
  },
  rating: {
    route: '#334155',
    routeSoft: '#cbd5e1',
    badge: 'border-slate-200 bg-slate-100 text-slate-700',
    user: 'bg-slate-700',
  },
};

const routePoints = [
  { x: 9, y: 84, label: 'Дом', kind: 'point' },
  { x: 52, y: 55, label: 'Сбор', kind: 'point' },
  { x: 88, y: 18, label: 'Школа', kind: 'point' },
];

const userMarker = { x: 48, y: 57, label: 'Ты', kind: 'user' };

const partyMarkers = [
  { x: 50, y: 54, label: 'Аня', kind: 'party' },
  { x: 53, y: 56, label: 'Тимур', kind: 'party' },
  { x: 55, y: 52, label: 'Лена', kind: 'party' },
];

const cityUsers = [
  { x: 14, y: 16, label: 'Оля', className: '6А' },
  { x: 23, y: 24, label: 'Кирилл', className: '5В' },
  { x: 31, y: 14, label: 'Маша', className: '7Б' },
  { x: 68, y: 14, label: 'Соня', className: '5А' },
  { x: 77, y: 22, label: 'Марк', className: '6Б' },
  { x: 84, y: 31, label: 'Илья', className: '5Б' },
  { x: 10, y: 45, label: 'Лиза', className: '4А' },
  { x: 19, y: 52, label: 'Рома', className: '6В' },
  { x: 27, y: 68, label: 'Даша', className: '5А' },
  { x: 37, y: 74, label: 'Костя', className: '8А' },
  { x: 63, y: 71, label: 'Юра', className: '7А' },
  { x: 72, y: 63, label: 'Ника', className: '6А' },
  { x: 81, y: 78, label: 'Ева', className: '5Б' },
  { x: 90, y: 52, label: 'Саша', className: '7В' },
  { x: 61, y: 39, label: 'Варя', className: '4Б' },
  { x: 41, y: 37, label: 'Паша', className: '5Г' },
];

const layersList = [
  { key: 'city', label: 'Город' },
  { key: 'route', label: 'Маршрут' },
  { key: 'party', label: 'Пати' },
  { key: 'users', label: 'Ученики вокруг' },
  { key: 'labels', label: 'Подписи' },
];

function markerClass(kind, theme) {
  if (kind === 'user') return `${theme.user} map-marker-pulse ring-2 ring-white`;
  if (kind === 'party') return 'bg-violet-500 ring-2 ring-violet-100';
  if (kind === 'point') return 'bg-emerald-500 ring-2 ring-white';
  return 'bg-slate-600 ring-2 ring-white';
}

export default function RouteMapShowcase({ mode, modeKey }) {
  const theme = mapThemes[modeKey] || mapThemes.parent;
  const [layers, setLayers] = useState({
    city: true,
    route: true,
    party: true,
    users: true,
    labels: true,
  });

  const toggleLayer = (key) => {
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const visibleStudents = layers.users ? cityUsers.length : 0;
  const visibleParty = layers.party ? partyMarkers.length + 1 : 0;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
      <div className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-[linear-gradient(120deg,_#ffffff_0%,_#eef3fb_58%,_#f9fafb_100%)] p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.22em] text-slate-500">Детальная карта маршрута</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Схематичный город: маршрут до школы, твое пати и ученики вокруг
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Карта показывает не только твой путь, но и обстановку по всему району: где находятся другие ученики, кто
            идет рядом с тобой и как движется пати.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-[#f8fafc]">
            <svg viewBox="0 0 1200 680" className="h-full w-full">
              <rect x="0" y="0" width="1200" height="680" fill="#f8fafc" />

              {layers.city && (
                <>
                  <rect x="820" y="40" width="320" height="200" rx="36" fill="#dbeafe" />
                  <rect x="60" y="70" width="230" height="140" rx="28" fill="#dcfce7" />
                  <rect x="860" y="450" width="250" height="150" rx="28" fill="#dcfce7" />
                  <rect x="320" y="80" width="140" height="90" rx="18" fill="#e2e8f0" />
                  <rect x="500" y="88" width="180" height="88" rx="18" fill="#e2e8f0" />
                  <rect x="300" y="228" width="180" height="110" rx="20" fill="#e2e8f0" />
                  <rect x="540" y="228" width="210" height="110" rx="20" fill="#e2e8f0" />
                  <rect x="790" y="270" width="200" height="120" rx="20" fill="#e2e8f0" />
                  <rect x="170" y="390" width="190" height="118" rx="20" fill="#e2e8f0" />
                  <rect x="420" y="410" width="220" height="136" rx="20" fill="#e2e8f0" />
                  <rect x="700" y="448" width="130" height="90" rx="18" fill="#e2e8f0" />

                  <path d="M20 602 L430 190 L640 530 L1140 130" stroke="#cbd5e1" strokeWidth="64" strokeLinecap="round" />
                  <path d="M80 560 L470 260 L760 598 L1180 350" stroke="#cbd5e1" strokeWidth="46" strokeLinecap="round" />
                  <path d="M70 130 L280 230 L440 140 L660 260 L840 185 L1080 322" stroke="#cbd5e1" strokeWidth="28" strokeLinecap="round" />
                </>
              )}

              {layers.route && (
                <>
                  <path
                    d="M108 552 C 250 505, 316 376, 430 364 S 624 432, 756 318 S 932 186, 1058 110"
                    fill="none"
                    stroke={theme.routeSoft}
                    strokeWidth="46"
                    strokeLinecap="round"
                  />
                  <path
                    className="map-route-flow"
                    d="M108 552 C 250 505, 316 376, 430 364 S 624 432, 756 318 S 932 186, 1058 110"
                    fill="none"
                    stroke={theme.route}
                    strokeWidth="13"
                    strokeLinecap="round"
                  />
                </>
              )}

              {layers.party && (
                <circle cx="604" cy="381" r="88" fill="rgba(139, 92, 246, 0.16)" stroke="#8b5cf6" strokeWidth="2" />
              )}
            </svg>

            {layers.route &&
              routePoints.map((marker) => (
                <div
                  key={marker.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-3.5 w-3.5 rounded-full ${markerClass(marker.kind, theme)}`} />
                    {layers.labels && (
                      <div className="rounded-full border border-slate-200 bg-white/95 px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                        {marker.label}
                      </div>
                    )}
                  </div>
                </div>
              ))}

            {(layers.route || layers.party) && (
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${userMarker.x}%`, top: `${userMarker.y}%` }}
              >
                <div className="flex items-center gap-2">
                  <div className={`h-4 w-4 rounded-full ${markerClass(userMarker.kind, theme)}`} />
                  {layers.labels && (
                    <div className="rounded-full border border-slate-200 bg-white/95 px-2 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur">
                      {userMarker.label}
                    </div>
                  )}
                </div>
              </div>
            )}

            {layers.party &&
              partyMarkers.map((marker) => (
                <div
                  key={marker.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-3.5 w-3.5 rounded-full ${markerClass(marker.kind, theme)}`} />
                    {layers.labels && (
                      <div className="rounded-full border border-violet-200 bg-violet-50/95 px-2 py-1 text-[11px] font-medium text-violet-700 shadow-sm">
                        {marker.label}
                      </div>
                    )}
                  </div>
                </div>
              ))}

            {layers.users &&
              cityUsers.map((marker) => (
                <div
                  key={`${marker.label}-${marker.className}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className={`h-2.5 w-2.5 rounded-full ${markerClass('others', theme)}`} />
                    {layers.labels && <div className="text-[10px] font-medium text-slate-600">{marker.label}</div>}
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
                До школы 7 минут, до точки сбора 2 минуты. Пати выделено фиолетовой зоной рядом с тобой.
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Слои карты</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {layersList.map((layer) => {
                  const active = layers[layer.key];
                  return (
                    <button
                      key={layer.key}
                      type="button"
                      onClick={() => toggleLayer(layer.key)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                        active
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {layer.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Что видно сейчас</div>
              <div className="mt-3 grid gap-2 text-sm text-slate-700">
                <div className="rounded-xl bg-slate-50 px-3 py-2">Пользователей вокруг: {visibleStudents}</div>
                <div className="rounded-xl bg-violet-50 px-3 py-2 text-violet-700">Участников пати: {visibleParty}</div>
                <div className="rounded-xl bg-slate-50 px-3 py-2">Маршрут: {layers.route ? 'включен' : 'скрыт'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
