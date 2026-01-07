import React, { useEffect, useRef, useState } from 'react';
import { Code, Shield, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

const technicalSkills = [
  { name: 'Python', level: 90, icon: '🐍' },
  { name: 'Java', level: 85, icon: '☕' },
  { name: 'JavaScript', level: 80, icon: '🟨' },
  { name: 'HTML/CSS', level: 90, icon: '🌐' },
  { name: 'PHP', level: 75, icon: '🐘' },
  { name: 'Android Development', level: 70, icon: '📱' },
];

const frameworks = [
  'OpenCV', 'TensorFlow', 'Pandas', 'NumPy', 'Flask', 'Streamlit', 
  'face_recognition', 'Git/GitHub', 'Firebase', 'Web3.js', 'Node.js', 
  'PyQt5', 'Tkinter'
];

const cybersecuritySkills = [
  'Secure Coding Practices',
  'Biometric Authentication',
  'Blockchain Security',
  'Penetration Testing',
  'Vulnerability Assessment',
  'Network Security',
  'Cryptography',
  'Security Compliance'
];

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: technicalSkills,
    type: 'progress'
  },
  {
    title: 'Frameworks & Tools',
    icon: Database,
    skills: frameworks,
    type: 'badges'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: cybersecuritySkills,
    type: 'badges'
  }
];

function ProgressBar({ skill, isVisible }: { skill: any, isVisible: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium flex items-center">
          <span className="mr-2">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building secure and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {category.type === 'progress' ? (
                  <div className="space-y-4">
                    {(category.skills as typeof technicalSkills).map((skill, skillIndex) => (
                      <ProgressBar key={skillIndex} skill={skill} isVisible={isVisible} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {(category.skills as string[]).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-cyan-500 hover:text-white transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
            <CardContent className="p-8">
              <Globe className="w-12 h-12 mx-auto mb-4 text-cyan-500" />
              <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
              <p className="text-lg text-muted-foreground">
                Specialized in developing secure applications with a focus on biometric authentication, 
                blockchain integration, and AI-powered security solutions. Experienced in full-stack 
                development with emphasis on backend security and performance optimization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}