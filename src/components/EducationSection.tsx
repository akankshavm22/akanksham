import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const educationData = [
  {
    year: '2023-2026',
    degree: 'Bachelor of Engineering',
    field: 'Information Technology',
    institution: 'Yadavrao Tasgaonkar College of Engineering & Management - Mumbai University',
    location: 'India',
    status: 'Pursuing',
    cgpa: '9.10',
    maxCgpa: '10.0',
    description: 'Specializing in cybersecurity, blockchain technology, and artificial intelligence. Active member of the cybersecurity club and technical societies.',
    achievements: [
      'Consistently ranked in top 2% of class',
      'Lead technical projects in AI and blockchain',
      'Active member of Cybersecurity Club',
      'Published research papers in international journals',
    ],
    coursework: [
      'Ethical Hacking & Forensic', 'Cybersecurity & Laws', ' Artificial Intelligence & Data Science', 
      'Computer Network & Network Security', 'Data Structures & Algorithms',
      'Software Engineering', 'Database Management', 'Web Technologies'
    ],
    projects: [
      'Blockchain-based E-Voting System',
      'AI-Powered Network Security Monitor',
      'Face Recognition Authentication System'
    ],
    icon: GraduationCap,
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
  },
  {
    year: '2020-2023',
    degree: 'Diploma',
    field: 'Information Technology',
    institution: 'Vidyalankar Ploytechnic - Maharashtra State Board of Technical Education',
    location: 'Mumbai, Maharashtra, India',
    status: 'Completed',
    cgpa: '70',
    maxCgpa: '100',
    description: 'Comprehensive foundation in programming, database management, and IT systems. Graduated with First Class.',
    achievements: [
      'Successfully developed and presented SocialBook networking system with advanced user authentication',
      'Designed comprehensive Student Management System with database optimization and reporting features',
      'Created responsive E-Commerce application with payment gateway integration and user management',
      'Consistently maintained above 70% performance across all practical assignments and laboratory work',
      'Led team projects demonstrating leadership skills and collaborative problem-solving abilities',
      'Received recognition for innovative approach in final year project presentation'
    ],
    coursework: [
      'Programming in C/C++', 'Java Programming', 'Database Management Systems',
      'Computer Networks', 'Operating Systems', 'Web Development',
      'Software Testing', 'Digital Electronics', 'Data Communication'
    ],
    projects: [
      'SocialBook - College Networking System',
      'Student Management System',
      'E-Commerce Web Application'
    ],
    icon: Award,
    color: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
  }
];
const academicStats = [
  { label: 'Current CGPA', value: '9.09/10', icon: TrendingUp, color: 'text-green-500' },
  { label: 'Years of Study', value: '6', icon: Calendar, color: 'text-blue-500' },
  { label: 'Major Projects', value: '3', icon: BookOpen, color: 'text-purple-500' },
  { label: 'Certifications', value: '6', icon: Trophy, color: 'text-orange-500' }
];

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
    proficiency: 78
  },
  {
    category: 'Cybersecurity Tools',
    skills: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP'],
    proficiency: 65
  },
  {
    category: 'Web Technologies',
    skills: ['React', 'Node.js', 'HTML/CSS', 'REST APIs', 'MongoDB'],
    proficiency: 75
  },
  {
    category: 'AI/ML Frameworks',
    skills: ['TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy'],
    proficiency: 70
  }
];

export function EducationSection() {
  // Defensive checks to ensure data exists
  const safeEducationData = Array.isArray(educationData) ? educationData : [];
  const safeAcademicStats = Array.isArray(academicStats) ? academicStats : [];
  const safeSkillCategories = Array.isArray(skillCategories) ? skillCategories : [];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient heading-glow">
            Education & Academic Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in technology and cybersecurity through rigorous academic pursuit and hands-on learning
          </p>
        </div>

        {/* Academic Statistics */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {safeAcademicStats.map((stat, index) => (
              <Card key={index} className="text-center group card-float">
                <CardContent className="p-6">
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center ${stat.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-lg font-bold mb-1 text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 hover-glow">Academic Journey</h3>
          
          <div className="space-y-12">
            {safeEducationData.map((edu, index) => (
              <div key={index} className="relative">
                <Card className={`group card-float bg-gradient-to-br ${edu.bgColor} border-2 border-transparent hover:border-cyan-500/30`}>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <edu.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                              <div>
                                <h4 className="text-xl font-bold hover-glow">{edu.degree}</h4>
                                <p className="text-base text-cyan-600 dark:text-cyan-400 font-semibold">{edu.field}</p>
                              </div>
                              <div className="flex flex-col lg:items-end gap-2">
                                <Badge variant={edu.status === 'Pursuing' ? 'default' : 'secondary'} className="w-fit">
                                  {edu.status}
                                </Badge>
                                <div className="text-sm text-muted-foreground flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {edu.year}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {edu.institution}, {edu.location}
                              </div>
                            </div>

                            <p className="text-foreground/80 mb-6 leading-relaxed text-sm">{edu.description}</p>

                            {/* CGPA Display */}
                            <div className="mb-6">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-sm">Academic Performance</span>
                                <span className="text-lg font-bold text-cyan-500">
                                  {edu.maxCgpa === '100' ? `${edu.cgpa}%` : `${edu.cgpa}/${edu.maxCgpa}`}
                                </span>
                              </div>
                              <Progress 
                                value={(parseFloat(edu.cgpa) / parseFloat(edu.maxCgpa)) * 100} 
                                className="h-3"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h5 className="font-semibold mb-3 text-base">🏆 Key Achievements</h5>
                          <div className="grid md:grid-cols-2 gap-2">
                            {(edu.achievements || []).map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-foreground/80">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Major Projects */}
                        <div className="mb-6">
                          <h5 className="font-semibold mb-3 text-base">💻 Major Projects</h5>
                          <div className="flex flex-wrap gap-2">
                            {(edu.projects || []).map((project, projIndex) => (
                              <Badge key={projIndex} variant="outline" className="hover:bg-cyan-500 hover:text-white transition-colors duration-200">
                                {project}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Coursework Sidebar */}
                      <div className="lg:col-span-1">
                        <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                          <h5 className="font-semibold mb-4 text-base flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-cyan-500" />
                            Core Coursework
                          </h5>
                          <div className="space-y-2">
                            {(edu.coursework || []).map((course, courseIndex) => (
                              <div 
                                key={courseIndex} 
                                className="text-sm p-2 rounded-lg bg-background/50 hover:bg-cyan-500/10 transition-colors duration-200 cursor-default"
                              >
                                {course}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Skills Progress */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 hover-glow">Academic Proficiency</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {safeSkillCategories.map((category, index) => (
              <Card key={index} className="group card-float">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-base hover-glow">{category.category}</h4>
                    <span className="text-lg font-bold text-cyan-500">{category.proficiency}%</span>
                  </div>
                  
                  <Progress value={category.proficiency} className="mb-4 h-3" />
                  
                  <div className="flex flex-wrap gap-2">
                    {(category.skills || []).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-cyan-500 hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Excellence CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
            <CardContent className="p-8">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-cyan-500" />
              <h3 className="text-xl font-bold mb-4 hover-glow">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Education is a lifelong journey. I'm committed to staying current with emerging technologies 
                and pursuing advanced certifications in cybersecurity and AI.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500">
                  Cybersecurity - Blue Team
                </Badge>
                <Badge variant="outline">
                  Industry Certifications
                </Badge>
                <Badge variant="outline">
                  Research Publications
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}