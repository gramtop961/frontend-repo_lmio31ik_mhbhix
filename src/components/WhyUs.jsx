export default function WhyUs() {
  const stats = [
    { k: '50+', label: 'Technology partners' },
    { k: '99.99%', label: 'Target uptime' },
    { k: '30-60%', label: 'Typical cost savings' },
    { k: '24/7', label: 'Managed support' },
  ]
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why organizations choose us</h2>
            <p className="mt-4 text-slate-700">We are a true partner from strategy to operations. Our vendor-neutral model ensures you get the right-fit solution at the best commercial terms. We own outcomes with white-glove delivery and measurable KPIs.</p>
            <ul className="mt-6 space-y-3 text-slate-700 list-disc list-inside">
              <li>Vendor-neutral evaluations and RFP management</li>
              <li>Solution architecture aligned to your roadmap</li>
              <li>Migrations without downtime</li>
              <li>Ongoing cost optimization and governance</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.k} className="p-6 rounded-2xl bg-white border border-slate-200 text-center">
                <div className="text-3xl font-extrabold text-slate-900">{s.k}</div>
                <div className="mt-1 text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}