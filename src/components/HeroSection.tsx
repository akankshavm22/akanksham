import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-cyan-900/20"></div>
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 heading-gradient heading-glow animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Akanksha Mane
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-4 text-muted-foreground text-shimmer animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Aspiring Cybersecurity Specialist | Final-Year IT Engineering Student
          </p>

          {/* Description */}
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-8 text-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            Passionate about building secure, innovative, and future-ready digital solutions 
            blending AI, Blockchain, and Cybersecurity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <a href="https://drive.google.com/file/d/1Sf6b0V3Ro24o0kY492FjYZeXuB09_2Y6/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-cyan-500" />
      </div>
    </section>
  );
}