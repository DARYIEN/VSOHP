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

const mapSize = {
  width: 1200,
  height: 680,
};

const cityBlocks = [
  { x: 35, y: 35, w: 250, h: 150, tone: 'park' },
  { x: 315, y: 35, w: 240, h: 150, tone: 'district' },
  { x: 585, y: 35, w: 240, h: 150, tone: 'district' },
  { x: 855, y: 35, w: 310, h: 150, tone: 'water' },
  { x: 35, y: 220, w: 250, h: 150, tone: 'district' },
  { x: 315, y: 220, w: 240, h: 150, tone: 'district' },
  { x: 585, y: 220, w: 240, h: 150, tone: 'district' },
  { x: 855, y: 220, w: 310, h: 150, tone: 'district' },
  { x: 35, y: 405, w: 250, h: 150, tone: 'district' },
  { x: 315, y: 405, w: 240, h: 150, tone: 'district' },
  { x: 585, y: 405, w: 240, h: 150, tone: 'park' },
  { x: 855, y: 405, w: 310, h: 150, tone: 'district' },
  { x: 35, y: 590, w: 250, h: 60, tone: 'district' },
  { x: 315, y: 590, w: 240, h: 60, tone: 'district' },
  { x: 585, y: 590, w: 240, h: 60, tone: 'district' },
  { x: 855, y: 590, w: 310, h: 60, tone: 'district' },
];

const routePoints = [
  { x: 90, y: 610, label: 'Дом', kind: 'point' },
  { x: 555, y: 465, label: 'Сбор', kind: 'point' },
  { x: 1080, y: 100, label: 'Школа', kind: 'point' },
];

const userMarker = { x: 540, y: 470, label: 'Ты', kind: 'user' };

const partyMarkers = [
  { x: 520, y: 450, label: 'Аня', kind: 'party' },
  { x: 565, y: 446, label: 'Тимур', kind: 'party' },
  { x: 585, y: 482, label: 'Лена', kind: 'party' },
];

const namedStudents = [
  { x: 150, y: 130, label: 'Оля' },
  { x: 390, y: 110, label: 'Кирилл' },
  { x: 700, y: 130, label: 'Соня' },
  { x: 970, y: 155, label: 'Марк' },
  { x: 430, y: 290, label: 'Паша' },
  { x: 950, y: 300, label: 'Илья' },
  { x: 380, y: 520, label: 'Даша' },
  { x: 990, y: 515, label: 'Ника' },
];

const crowdStudents = [
  { x: 75, y: 255 },
  { x: 170, y: 285 },
  { x: 230, y: 345 },
  { x: 320, y: 130 },
  { x: 615, y: 110 },
  { x: 790, y: 260 },
  { x: 885, y: 260 },
  { x: 1030, y: 245 },
  { x: 145, y: 505 },
  { x: 275, y: 600 },
  { x: 470, y: 620 },
  { x: 670, y: 600 },
  { x: 840, y: 625 },
  { x: 1110, y: 610 },
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

function blockToneClass(tone) {
  if (tone === 'water') return '#dbeafe';
  if (tone === 'park') return '#dcfce7';
  return '#e2e8f0';
}

function toPercentX(x) {
  return (x / mapSize.width) * 100;
}

function toPercentY(y) {
  return (y / mapSize.height) * 100;
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

  const visibleStudents = layers.users ? namedStudents.length + crowdStudents.length : 0;
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
                  {cityBlocks.map((block, index) => (
                    <rect key={index} x={block.x} y={block.y} width={block.w} height={block.h} rx="22" fill={blockToneClass(block.tone)} />
                  ))}

                  <rect x="285" y="0" width="30" height="680" fill="#cbd5e1" />
                  <rect x="555" y="0" width="30" height="680" fill="#cbd5e1" />
                  <rect x="825" y="0" width="30" height="680" fill="#cbd5e1" />

                  <rect x="0" y="185" width="1200" height="30" fill="#cbd5e1" />
                  <rect x="0" y="370" width="1200" height="30" fill="#cbd5e1" />
                  <rect x="0" y="555" width="1200" height="30" fill="#cbd5e1" />

                  <path d="M300 0 L300 680 M570 0 L570 680 M840 0 L840 680" stroke="#f8fafc" strokeWidth="3" strokeDasharray="10 12" />
                  <path d="M0 200 L1200 200 M0 385 L1200 385 M0 570 L1200 570" stroke="#f8fafc" strokeWidth="3" strokeDasharray="10 12" />
                </>
              )}

              {layers.route && (
                <>
                  <path
                    d="M90 610 L285 610 L285 465 L555 465 L555 300 L825 300 L825 100 L1080 100"
                    fill="none"
                    stroke={theme.routeSoft}
                    strokeWidth="46"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="map-route-flow"
                    d="M90 610 L285 610 L285 465 L555 465 L555 300 L825 300 L825 100 L1080 100"
                    fill="none"
                    stroke={theme.route}
                    strokeWidth="13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              )}

              {layers.party && (
                <circle cx="550" cy="466" r="78" fill="rgba(139, 92, 246, 0.16)" stroke="#8b5cf6" strokeWidth="2" />
              )}
            </svg>

            {layers.route &&
              routePoints.map((marker) => (
                <div
                  key={marker.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${toPercentX(marker.x)}%`, top: `${toPercentY(marker.y)}%` }}
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
                style={{ left: `${toPercentX(userMarker.x)}%`, top: `${toPercentY(userMarker.y)}%` }}
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
                  style={{ left: `${toPercentX(marker.x)}%`, top: `${toPercentY(marker.y)}%` }}
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
              namedStudents.map((marker) => (
                <div
                  key={marker.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${toPercentX(marker.x)}%`, top: `${toPercentY(marker.y)}%` }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className={`h-2.5 w-2.5 rounded-full ${markerClass('others', theme)}`} />
                    {layers.labels && <div className="text-[10px] font-medium text-slate-600">{marker.label}</div>}
                  </div>
                </div>
              ))}

            {layers.users &&
              crowdStudents.map((marker, index) => (
                <div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${toPercentX(marker.x)}%`, top: `${toPercentY(marker.y)}%` }}
                >
                  <div className="h-2 w-2 rounded-full bg-slate-500/85 ring-1 ring-white" />
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
