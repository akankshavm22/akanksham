import React from 'react';
import { Award, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const certifications = [
  {
  title: 'CS50: Introduction to Programming with Python',
  provider: 'Harvard University (CS50)',
  date: 'December 2025',
  status: 'completed',
  description:
    'Comprehensive introduction to Python programming covering variables, control structures, functions, data structures, file I/O, exceptions, and problem-solving through hands-on projects.',
  icon: '🐍',
  color: 'from-blue-500 to-indigo-600',
},
  {
    title: 'Blue Team Junior Analyst',
    provider: 'Security Blue Team',
    date: 'December 2025',
    status: 'completed',
    description:
      'Entry-level Blue Team certification covering threat detection, analysis, and understanding the cybersecurity threat landscape.',
    icon: '🎯',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'CS50 Introduction to Cybersecurity',
    provider: 'Harvard University',
    date: 'October 2025',
    status: 'completed',
    description:
      'Comprehensive introduction to cybersecurity principles, covering topics from cryptography to digital forensics and ethical hacking.',
    icon: '🎓',
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Foundation Level Threat Intelligence Analyst',
    provider: 'arcX',
    date: 'September 2025',
    status: 'completed',
    description:
      'Comprehensive certification covering threat analysis, intelligence gathering, and cybersecurity threat landscape assessment.',
    icon: '🎯',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Introduction to Cybersecurity',
    provider: 'Cisco Networking Academy',
    date: 'September 2025',
    status: 'completed',
    description:
      'Fundamental cybersecurity principles including network vulnerabilities, threat detection, privacy, and data confidentiality.',
    icon: '🔒',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Junior Cybersecurity Analyst Career Path',
    provider: 'Cisco Networking Academy',
    date: 'September 2025',
    status: 'completed',
    description:
      'Comprehensive career path covering SIEM tools, network security, threat analysis, and Linux basics for cybersecurity professionals.',
    icon: '🛡️',
    color: 'from-indigo-500 to-purple-600',
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Certifications & Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey towards cybersecurity expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                {cert.status === 'completed' ? (
                  <Badge className="bg-green-500 hover:bg-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-cyan-500 text-cyan-500">
                    <Clock className="w-3 h-3 mr-1" />
                    Planned
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight group-hover:text-cyan-500 transition-colors duration-200">
                      {cert.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium mt-1">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  <span className="text-muted-foreground">
                    Completed: {cert.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategy Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-cyan-500" />
              <h3 className="text-2xl font-bold mb-2">Certification Strategy</h3>
              <p className="text-muted-foreground">
                Structured learning focused on blue team operations, threat intelligence,
                and real-world cybersecurity defense.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
