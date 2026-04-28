import React from 'react'
import { ExternalLink , Github, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../config'
import { projectsData as projects } from '../data/staticData'

function Portifilio() {

  return (
    <section
      id="portifolio"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='text-center text-4xl md:text-5xl font-bold'>
          Portfolio
        </h2>

        <h5 className='text-center text-lg md:text-xl italic my-12 text-gray-600'>
          Quelques projets sur lesquels j'ai travaillé
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100'
            >
              
              {/* Image */}
              <div className='h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden'>
                {item.image ? (
                  <img 
                    src={getImageUrl(item.image)}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white text-xl font-semibold bg-gray-200">
                    Projet #{index + 1}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className='text-xl font-bold mb-2 text-gray-900'>
                  {item.title}
                </h3>

                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                  {item.description}
                </p>

                {/* Skills */}
                <div className='flex gap-2 flex-wrap mb-6'>
                  {item.skills && item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium'
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-50">
                  <Link 
                    to={`/project/${item.id}`} 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    <Info size={16} />
                    <span>Détails</span>
                  </Link>

                  {item.github_url && (
                    <a 
                      href={item.github_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portifilio
