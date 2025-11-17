import { PhoneCall, Headphones, Shield, Network } from 'lucide-react'

const items = [
  {
    icon: PhoneCall,
    title: 'Unified Communications (UCaaS)',
    desc: 'Cloud-based calling, meetings and messaging with reliability and global scale. Migrate from legacy PBXs without disruption.',
    bullets: ['Call routing and IVR', 'Teams/Zoom integrations', 'Device & SBC management']
  },
  {
    icon: Headphones,
    title: 'Customer Experience (CX)',
    desc: 'Deliver effortless support with omnichannel, AI assistance and real-time analytics across voice, chat, email and social.',
    bullets: ['Omnichannel routing', 'Workforce engagement', 'AI bots and agent assist']
  },
  {
    icon: Shield,
    title: 'Security',
    desc: 'Reduce risk with Zero Trust, SASE and MDR. We assess, design and operate a modern security posture end-to-end.',
    bullets: ['Zero Trust & SASE', 'MDR/SOC services', 'Compliance & governance']
  },
  {
    icon: Network,
    title: 'Connectivity',
    desc: 'High-performance networks for cloud-first enterprises including SD-WAN and private connectivity.',
    bullets: ['SD-WAN design', 'Global circuits', 'Cloud interconnects']
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we deliver</h2>
          <p className="mt-3 text-slate-600">Vendor-neutral consulting, solution design, and managed services.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 text-white grid place-items-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}