import React from 'react'
import * as LucideIcons from 'lucide-react';
import { servicesData as services } from '../data/staticData';

function Services() {
  // Helper to get Lucide icon component by name
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName] || LucideIcons.Globe;
    return <IconComponent size={30} />;
  };

  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='text-center text-4xl md:text-5xl font-bold'>
          Services
        </h2>

        <h5 className='text-center text-lg md:text-xl italic my-12 text-gray-600'>
          Des solutions complètes pour concrétiser vos projets digitaux
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className='group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
            >
              <div className='w-16 h-16 bg-blue-50 rounded-xl flex justify-center items-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300'>
                {getIcon(service.icon_name)}
              </div>

              <h3 className='text-2xl text-gray-900 font-bold mb-3'>
                {service.title}
              </h3>

              <p className='text-gray-600 mb-6 leading-relaxed'>
                {service.description}
              </p>

              <div className='flex gap-2 flex-wrap'>
                {service.skills && service.skills.map((skill, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-xs font-medium'
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
