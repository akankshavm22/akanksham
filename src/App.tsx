import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { CertificationsSection } from './components/CertificationsSection';
import { CareerGoalsSection } from './components/CareerGoalsSection';
import { ContactSection } from './components/ContactSection';
import { BackToTop } from './components/BackToTop';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header with Navigation */}
        <Header />
        
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />
          
          {/* About Section */}
          <AboutSection />
          
          {/* Education Section */}
          <EducationSection />
          
          {/* Experience Section */}
          <ExperienceSection />
          
          {/* Skills Section */}
          <SkillsSection />
          
          {/* Projects Section */}
          <ProjectsSection />
          
          {/* Research Section */}
          <ResearchSection />
          
          {/* Certifications Section */}
          <CertificationsSection />
          
          {/* Career Goals Section */}
          <CareerGoalsSection />
          
          {/* Contact Section */}
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="bg-muted/30 py-12 border-t">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center space-x-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Akanksha Mane
                </div>
              </div>
              <p className="text-muted-foreground">
                Aspiring Cybersecurity Specialist | Building Secure Digital Solutions
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/akankshavm22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akankshavmane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://medium.com/@akankshavm22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors duration-200"
                  aria-label="Medium Articles"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <span>&copy; 2025 Akanksha Mane. All rights reserved.</span>
              </div>
              <div className="pt-4 border-t border-muted-foreground/20">
                <p className="text-xs text-muted-foreground">
                  Built with React, TypeScript, and Tailwind CSS | Designed for modern browsers
                </p>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Back to Top Button */}
        <BackToTop />
        
        {/* Toast Notifications */}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'hsl(var(--background))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}