import { motion } from 'framer-motion'
import { PhoneCall, Lock, Headphones } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-700 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-400 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              UCaaS, CX and Security Solutions that grow with you
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-5 text-lg text-sky-100 max-w-xl"
            >
              We help businesses modernize communications, elevate customer experience and protect what matters — all with vendor-neutral consulting and white-glove delivery.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-slate-900 font-semibold px-5 py-3 rounded-lg shadow">
                <PhoneCall className="h-5 w-5" /> Talk to an expert
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/30 hover:bg-white/10">
                Explore solutions
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sky-200">
              <div className="flex items-center gap-2"><PhoneCall className="h-5 w-5" /> UCaaS</div>
              <div className="flex items-center gap-2"><Headphones className="h-5 w-5" /> CX</div>
              <div className="flex items-center gap-2"><Lock className="h-5 w-5" /> Security</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Unified Communications', desc: 'Cloud voice, video and messaging built for hybrid work.' },
                { title: 'Contact Center (CX)', desc: 'AI-powered routing, omnichannel and real-time analytics.' },
                { title: 'Security', desc: 'Zero Trust, SASE and MDR to reduce risk and accelerate compliance.' },
                { title: 'Connectivity', desc: 'SD-WAN and private networks that scale globally.' },
              ].map((card) => (
                <div key={card.title} className="bg-slate-900/40 rounded-xl p-4 border border-white/10">
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-1 text-sm text-sky-200">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}