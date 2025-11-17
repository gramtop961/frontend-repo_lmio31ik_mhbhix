import { useState } from 'react'
import { Menu, X, ShieldCheck, PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 grid place-items-center text-white shadow-lg">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="font-bold text-gray-900 tracking-tight">Unified Consulting</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
              <PhoneCall className="h-4 w-4" /> Get a Quote
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-gray-800" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow" onClick={() => setOpen(false)}>
              <PhoneCall className="h-4 w-4" /> Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}