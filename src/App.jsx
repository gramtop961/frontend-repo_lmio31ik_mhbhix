import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Solutions />
      <WhyUs />
      <Contact />
      <footer className="py-10 bg-slate-950 text-slate-300 text-center">
        <p>© {new Date().getFullYear()} Unified Consulting. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App