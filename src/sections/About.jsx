import React from 'react'
import { Award, BookOpen, Code, Target } from 'lucide-react';
import { getImageUrl } from '../config';
import { profileData as profile } from '../data/staticData';

const highlights = [
  {
    icon: Code,
    title: 'Développement',
    description: 'Expérience en développement web moderne'
  },
  {
    icon: Award,
    title: 'Qualité',
    description: 'Code propre et bonnes pratiques'
  },
  {
    icon: BookOpen,
    title: 'Veille tech',
    description: 'Toujours à jour sur les nouvelles technologies'
  },
  {
    icon: Target,
    title: 'Orienté résultats',
    description: 'Livraison dans les délais'
  }
];

function About() {
  // Use profile data or defaults
  const fullName = profile?.full_name || "David Kian";
  const role = profile?.role || "Développeur FullStack";
  const bio = profile?.bio || "Développeur basé en Côte d'Ivoire, je me spécialise dans la création de solutions informatiques modernes et performantes.";
  const yearsExp = profile?.years_of_experience || 1;
  const profilePic = profile?.profile_picture ? getImageUrl(profile.profile_picture) : "/src/assets/logo.jpg";

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className='text-center text-4xl md:text-5xl font-bold mb-10'>
          À propos de moi
        </h2>

        <div className='grid md:grid-cols-2 gap-12 items-center min-h-[80vh]'>
          {/* Image */}
          <div className='relative'>
            <div className="flex justify-center">
              <img
                src={profilePic}
                alt={fullName}
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-6 rounded-xl shadow-lg border border-blue-50">
              <p className="text-3xl font-bold text-blue-600">+{yearsExp}</p>
              <p className="text-gray-600 font-medium">Années d'expérience</p>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {role} {fullName}
            </h3>

            <p className="text-xl text-gray-600 leading-relaxed">
              {bio}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {profile?.cv_url && (
              <div className="pt-8">
                <a 
                  href={getImageUrl(profile.cv_url)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Télécharger mon CV
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
