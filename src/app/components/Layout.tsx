import { Outlet, Link, useLocation } from 'react-router';
import { Shield, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/research', label: 'Research' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/career-goals', label: 'Career Goals' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Shield className="w-8 h-8" />
              <span className="font-mono text-lg">AM_Security</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-mono transition-colors ${
                    location.pathname === item.path
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-cyan-400 hover:text-cyan-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-mono transition-colors ${
                    location.pathname === item.path
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/akankshavm22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-colors text-cyan-400 hover:text-cyan-300"
              >
                <Github className="w-5 h-5" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akankshavmane/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-colors text-cyan-400 hover:text-cyan-300"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:akankshavm22@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-colors text-cyan-400 hover:text-cyan-300"
              >
                <Mail className="w-5 h-5" />
                <span className="font-mono text-sm">Email</span>
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
                <Shield className="w-5 h-5" />
                <span className="font-mono text-sm">Akanksha Mane - Cybersecurity Professional</span>
              </div>
              <p className="text-slate-400 text-sm font-mono">
                © 2026 All rights reserved. Built with security in mind.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}