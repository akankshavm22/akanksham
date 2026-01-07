import React from 'react';
import { ExternalLink, Github, Code, Shield, Eye, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'AirSentinel - Wireless Security Tool',
    description: 'Comprehensive Python tool for Wi-Fi scanning and vulnerability detection with PyQt5 GUI. Features live scanning, PCAP analysis, and multi-format reporting.',
    image: 'https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcmVjb2duaXRpb24lMjBzZWN1cml0eSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NDUyMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'PyQt5', 'Scapy', 'Network Security'],
    icon: Shield,
    features: ['Live Wi-Fi scanning', 'Risk assessment', 'Multi-format reports']
  },
  {
    title: 'Solar System Simulator',
    description: 'Interactive 2D/3D space simulator with realistic orbital mechanics. Built with Pygame featuring celestial trails and immersive navigation.',
    image: 'https://images.unsplash.com/photo-1656842741176-538dbdcd2682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzb2xhciUyMHN5c3RlbSUyMHNwYWNlJTIwc2ltdWxhdGlvbnxlbnwxfHx8fDE3NTY0NTM5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Pygame', '3D Graphics', 'Physics'],
    icon: Code,
    features: ['2D/3D views', 'Orbit trails', 'Interactive controls']
  },
  {
    title: 'Live Face Recognition System',
    description: 'Real-time face recognition application using OpenCV and face_recognition library with intuitive Tkinter GUI for identity verification.',
    image: 'https://images.unsplash.com/photo-1639478411016-726027171e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcmVjb2duaXRpb24lMjBzZWN1cml0eSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NDUyMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'OpenCV', 'face_recognition', 'Tkinter'],
    icon: Eye,
    features: ['Real-time streaming', 'Face detection', 'Identity verification']
  },
  {
    title: 'Password Strength Analyzer',
    description: 'GUI-based tool for comprehensive password security evaluation with entropy calculations and breach detection analysis.',
    image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwYXNzd29yZCUyMHNlY3VyaXR5JTIwYW5hbHl6ZXIlMjB0b29sfGVufDF8fHx8MTc1NjQ1MzkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'Tkinter', 'Cryptography', 'Security'],
    icon: Users,
    features: ['Entropy calculation', 'Breach checks', 'Security scoring']
  }
];

const additionalProjects = [
  { name: 'AI-PhishGuard', description: 'AI phishing detection system', icon: '🛡️' },
  { name: 'Text Encryption Tool', description: 'Advanced encryption utility', icon: '🔐' },
  { name: 'Digital Clock', description: 'Feature-rich clock app', icon: '⏰' },
  { name: 'Unit Converter', description: 'Multi-unit conversion tool', icon: '📐' },
  { name: 'Calculator', description: 'Scientific calculator', icon: '🧮' },
  { name: 'Utility Scripts', description: 'Various automation tools', icon: '⚡' }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient heading-glow">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions at the intersection of security, AI, and blockchain technology
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group card-float overflow-hidden border-2 border-transparent hover:border-cyan-500/30">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg hover-glow">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs hover:bg-cyan-500 hover:text-white transition-colors duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded">
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects - Compact Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8 hover-glow">Additional Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="group text-center p-4 card-float">
                <div className="text-2xl mb-2">{project.icon}</div>
                <h4 className="font-semibold text-sm mb-1 hover-glow">{project.name}</h4>
                <p className="text-xs text-muted-foreground">{project.description}</p>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 text-sm">
                  Explore my complete portfolio of 20+ projects spanning cybersecurity, AI, blockchain, and educational applications.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  <Github className="w-4 h-4 mr-2" />
                  View Complete Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}