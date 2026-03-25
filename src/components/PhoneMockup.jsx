function ScreenTab({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs transition ${
        active ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
      }`}
    >
      {label}
    </button>
  );
}

export default function PhoneMockup({ mode, screenIndex, onScreenChange }) {
  const screen = mode.screens[screenIndex];

  return (
    <div className="relative mx-auto w-[410px] max-w-full">
      <div className={`absolute -inset-6 rounded-[3.5rem] ${mode.glow} blur-3xl`} />
      <div className="relative rounded-[3rem] border-[10px] border-slate-950 bg-slate-950 p-[10px] shadow-[0_30px_90px_rgba(15,23,42,0.28)]">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f8fafc]">
          <div className="absolute left-1/2 top-3 z-20 h-7 w-36 -translate-x-1/2 rounded-full bg-black" />
          <div className={`bg-gradient-to-b ${mode.accent} p-[1px]`}>
            <div className="min-h-[510px] bg-[#f8fafc]">
              <div className="flex items-center justify-between px-6 pb-4 pt-5 text-[13px] font-semibold text-slate-700">
                <span>9:41</span>
                <span>5G</span>
              </div>

              <div className="px-4 pb-4">
                <div className={`rounded-[1.9rem] bg-gradient-to-br ${mode.accent} p-4 text-white shadow-lg`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/70">{screen.eyebrow}</div>
                      <div className="mt-2 text-xl font-semibold leading-tight">{screen.title}</div>
                      <div className="mt-2 text-sm leading-5 text-white/85">{screen.subtitle}</div>
                    </div>
                    <div className="rounded-2xl bg-white/20 px-3 py-2 text-xs font-medium">{mode.badge}</div>
                  </div>

                  <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
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

                <div className="-mt-4 rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm leading-6 text-slate-700">
                    {screen.notice}
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {screen.metrics.map(([label, value]) => (
                      <div key={label} className="rounded-[1.2rem] border border-slate-200 bg-white p-3">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</div>
                        <div className="mt-1 text-base font-semibold text-slate-900">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 space-y-3">
                    {screen.sections.map((section) => (
                      <div key={section.title} className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-3">
                        <div className="text-sm font-semibold text-slate-900">{section.title}</div>
                        <div className="mt-2 space-y-2">
                          {section.items.map((item) => (
                            <div key={item} className="rounded-xl bg-white px-3 py-2 text-sm leading-5 text-slate-600">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-[1.2rem] bg-slate-900 px-4 py-3 text-sm leading-6 text-slate-200">
                    {screen.footer}
                  </div>
                </div>

                <div className="px-6 pb-1 pt-4">
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
