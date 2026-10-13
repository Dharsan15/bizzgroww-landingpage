import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTASection from './components/CTASection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#141414] antialiased selection:bg-[#141414] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
