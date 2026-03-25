function ScreenTab({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-2.5 py-1 text-[11px] transition ${
        active ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
      }`}
    >
      {label}
    </button>
  );
}

export default function PhoneMockup({ mode, screenIndex, onScreenChange }) {
  const screen = mode.screens[screenIndex];
  const isFirst = screenIndex === 0;
  const isLast = screenIndex === mode.screens.length - 1;

  return (
    <div className="relative mx-auto w-[290px] max-w-full sm:w-[310px] md:w-[326px]">
      <div className={`absolute -inset-5 rounded-[3rem] ${mode.glow} blur-3xl`} />
      <div className="relative rounded-[2.8rem] border-[8px] border-slate-950 bg-slate-950 p-[8px] shadow-[0_26px_70px_rgba(15,23,42,0.24)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#f8fafc]">
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-black" />
          <div className={`relative aspect-[1170/2532] bg-gradient-to-b ${mode.accent} p-[1px]`}>
            <div className="flex h-full flex-col bg-[#f8fafc]">
              <div className="flex items-center justify-between px-5 pb-3 pt-4 text-[12px] font-semibold text-slate-700">
                <span>9:41</span>
                <span>5G</span>
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-3 pb-3">
                <div className={`rounded-[1.6rem] bg-gradient-to-br ${mode.accent} p-3 text-white shadow-lg`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.22em] text-white/70">{screen.eyebrow}</div>
                      <div className="mt-1.5 text-base font-semibold leading-tight">{screen.title}</div>
                      <div className="mt-1 text-[12px] leading-4 text-white/85">{screen.subtitle}</div>
                    </div>
                    <div className="rounded-xl bg-white/20 px-2 py-1 text-[10px] font-medium">{mode.badge}</div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onScreenChange(screenIndex - 1)}
                      disabled={isFirst}
                      className={`rounded-full px-2.5 py-1 text-[10px] ${
                        isFirst ? 'bg-white/20 text-white/50' : 'bg-white/25 text-white'
                      }`}
                    >
                      Назад
                    </button>
                    <div className="text-[10px] text-white/80">
                      Экран {screenIndex + 1}/{mode.screens.length}
                    </div>
                    <button
                      onClick={() => onScreenChange(screenIndex + 1)}
                      disabled={isLast}
                      className={`rounded-full px-2.5 py-1 text-[10px] ${
                        isLast ? 'bg-white/20 text-white/50' : 'bg-white/25 text-white'
                      }`}
                    >
                      Вперед
                    </button>
                  </div>

                  <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
                    {mode.screens.map((item, index) => (
                      <ScreenTab
                        key={item.name}
                        active={index === screenIndex}
                        onClick={() => onScreenChange(index)}
                        label={index + 1}
                      />
                    ))}
                  </div>
                </div>

                <div className="-mt-3 flex min-h-0 flex-1 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                  <div className="rounded-[1rem] border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] leading-5 text-slate-700">
                    {screen.notice}
                  </div>

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

                  <div className="mt-2.5 rounded-[1rem] bg-slate-900 px-3 py-2 text-[11px] leading-4 text-slate-200">
                    {screen.footer}
                  </div>
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
