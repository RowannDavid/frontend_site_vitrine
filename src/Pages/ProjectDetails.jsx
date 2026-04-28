import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowLeft, Calendar, Tag } from 'lucide-react';
import { getImageUrl } from '../config';
import { projectsData } from '../data/staticData';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProject = projectsData.find(p => p.id.toString() === id);
        setProject(foundProject || null);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Projet non trouvé</h2>
                <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Retour à l'accueil
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Retour au portfolio</span>
                </Link>

                {/* Main Content */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Image Hero */}
                    <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-blue-600 to-purple-600">
                        {project.image ? (
                            <img 
                                src={getImageUrl(project.image)} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-white text-4xl font-bold">
                                {project.title}
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-8 w-full">
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                    {project.title}
                                </h1>
                                <div className="flex flex-wrap gap-4 text-white/90">
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                        <Calendar size={18} />
                                        <span>{new Date(project.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}</span>
                                    </div>
                                    {project.skills && project.skills.length > 0 && (
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                            <Tag size={18} />
                                            <span>{project.skills.length} Technologies</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Project Details */}
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">À propos du projet</h2>
                                <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-6">
                                    <p className="text-lg font-medium text-gray-800">
                                        {project.description}
                                    </p>
                                    <div className="whitespace-pre-wrap">
                                        {project.long_description || "Pas de description détaillée disponible pour le moment."}
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Technologies utilisées</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.skills && project.skills.map((skill, index) => (
                                            <div 
                                                key={index}
                                                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                                            >
                                                {skill.image && (
                                                    <img src={getImageUrl(skill.image)} alt={skill.name} className="w-5 h-5 object-contain" />
                                                )}
                                                {skill.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Links */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Liens utiles</h3>
                                    
                                    {project.live_demo_url && (
                                        <a 
                                            href={project.live_demo_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1"
                                        >
                                            <ExternalLink size={20} />
                                            Voir le projet live
                                        </a>
                                    )}

                                    {project.github_url && (
                                        <a 
                                            href={project.github_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold transition-all shadow-lg shadow-gray-200 hover:shadow-gray-300 transform hover:-translate-y-1"
                                        >
                                            <Github size={20} />
                                            Code source
                                        </a>
                                    )}

                                    {!project.live_demo_url && !project.github_url && (
                                        <p className="p-6 bg-gray-100 rounded-2xl text-gray-500 text-center italic border border-gray-200">
                                            Aucun lien externe disponible pour ce projet.
                                        </p>
                                    )}

                                    {/* Project Summary Card */}
                                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 mt-12 shadow-inner">
                                        <h4 className="font-bold text-gray-900 mb-4">Résumé</h4>
                                        <ul className="space-y-4 text-sm">
                                            <li className="flex justify-between border-b border-gray-100 pb-2 text-gray-600">
                                                <span>Catégorie</span>
                                                <span className="font-medium text-gray-900">Développement Web</span>
                                            </li>
                                            <li className="flex justify-between border-b border-gray-100 pb-2 text-gray-600">
                                                <span>Date</span>
                                                <span className="font-medium text-gray-900">{new Date(project.created_at).getFullYear()}</span>
                                            </li>
                                            <li className="flex justify-between border-b border-gray-100 pb-2 text-gray-600">
                                                <span>Client</span>
                                                <span className="font-medium text-gray-900">Projet Personnel</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
