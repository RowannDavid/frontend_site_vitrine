import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profileData as profile } from '../data/staticData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const name = profile?.full_name ? profile.full_name.split(' ')[0] : 'David';

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-black text-blue-600 tracking-tighter hover:scale-105 transition-transform cursor-pointer">
          Dev&{name}
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-bold">
          <a href="#hero" className="hover:text-blue-600 transition-colors">Accueil</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">À propos</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#portifolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
          <a href="#competences" className="hover:text-blue-600 transition-colors">Compétence</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg px-6 pb-6 pt-4 space-y-4 text-gray-800 font-bold animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#hero" className="block p-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#about" className="block p-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>À propos</a>
          <a href="#services" className="block p-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portifolio" className="block p-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#competences" className="block p-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Compétence</a>
          <a href="#contact" className="block p-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

    </header>
  )
}

export default Navbar