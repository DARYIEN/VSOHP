export function FeatureCard({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="mt-3 leading-7 text-slate-600">{text}</div>
    </div>
  );
}

export function ScreenGroupCard({ title, caption, items }) {
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

export function FullScreenGroup({ group }) {
  return (
    <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
      <div className="max-w-3xl">
        <div className={`inline-flex rounded-full bg-gradient-to-r ${group.accent} px-4 py-2 text-sm text-white shadow-sm`}>
          {group.title}
        </div>
        <div className="mt-4 text-lg leading-7 text-slate-500">{group.caption}</div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {group.cards.map((card) => (
          <div key={card.name} className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6">
            <div className="text-xl font-semibold text-slate-900">{card.name}</div>
            <div className="mt-2 text-sm leading-6 text-slate-500">{card.subtitle}</div>
            <div className="mt-5 grid gap-3">
              {card.items.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
