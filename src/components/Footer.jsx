import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { profileData as profile } from '../data/staticData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const name = profile?.full_name || 'David Kian';
  const role = profile?.role || 'Développeur Fullstack';
  const bio = profile?.bio || 'Développeur Fullstack passionné, créant des solutions web modernes et performantes.';
  
  const socialLinks = [
    { icon: Github, href: profile?.github_url || '#', label: 'GitHub' },
    { icon: Linkedin, href: profile?.linkedin_url || '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portifolio' },
    { label: 'Compétence', href: '#competences' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {name}
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              {role}. {bio.substring(0, 80)}...
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact & Mobilité</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">📧</span> kiandavid2501@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">📱</span> +225 01 73 13 70 02
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">📍</span> Abidjan, Côte d'Ivoire
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">🕐</span> Lun - Sam: 8h - 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {name}. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
