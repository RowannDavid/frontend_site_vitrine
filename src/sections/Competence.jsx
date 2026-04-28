import { skillCategoriesData as skillCategories, toolsData, certificationsData } from '../data/staticData';

export default function Competence() {
  // Extract all icons for the "Technologies" section
  const technologies = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ name: s.name, icon: s.icon_emoji || '🔹' }))
  ).slice(0, 12); // Limit to 12 as in the original design

  return (
    <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise
          </p>
        </div>

        {/* Technologies Icons */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl">{tech.icon}</div>
                <span className="text-sm text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools and Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Outils de travail */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Outils Informatiques</h3>
            <div className="grid grid-cols-2 gap-4">
              {toolsData.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-2xl">{tool.icon_emoji}</div>
                  <span className="font-medium text-gray-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <div key={index} className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">{cert.title}</h4>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{cert.date}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium mb-2">{cert.issuer}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
