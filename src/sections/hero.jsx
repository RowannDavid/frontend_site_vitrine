import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { profileData as profile } from '../data/staticData';

function Hero() {
  const name = profile?.full_name ? profile.full_name.split(' ')[0] : 'David';
  const role = profile?.role || 'développeur web';
  const github = profile?.github_url || "https://github.com/RowannDavid";
  const linkedin = profile?.linkedin_url || "https://www.linkedin.com/in/rowann-eli-david-kian-029625334/";


  return (
    <section
      id="hero"
      className="h-screen scroll-mt-20 flex items-center justify-center bg-gray-50"
    >
      <div className="max-w-2xl text-center px-6">
        {/* Badge */}
        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          👋 Bienvenue sur mon portfolio
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Je suis <span className="text-blue-600">{name}</span>, {role}
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg">
          Je conçois des sites web modernes, rapides et performants pour
          aider les entreprises et particuliers à réussir leur présence en ligne.
        </p>

        {/* Boutons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition shadow-md hover:shadow-lg active:scale-95"
          >
            Me contacter
          </a>

          <a
            href="#portifolio"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-sm hover:shadow-md active:scale-95"
          >
            Voir mes projets
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center pt-10">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="#contact"
            className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          >
            <FaMailBulk size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;