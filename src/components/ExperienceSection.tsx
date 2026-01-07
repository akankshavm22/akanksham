import React from 'react';
import { GraduationCap, Code, Target, Building, Calendar, MapPin, Shield, Bug } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const workExperience = [
  {
  year: '2025',
  duration: 'Dec 2025 – Present',
  title: 'Cyber Security Analyst',
  company: 'Main Crafts Technology',
  location: 'Remote',
  type: 'Internship',
  department: 'Cybersecurity & SOC Operations',
  description: 'Working as a Cybersecurity Analyst with a focus on monitoring, detecting, and responding to security incidents. Actively involved in protecting organizational assets through continuous security monitoring, vulnerability assessment, and incident response.',
  responsibilities: [
    'Monitor and analyze security alerts generated from SIEM and endpoint security tools',
    'Investigate potential security incidents and perform initial triage and analysis',
    'Conduct vulnerability assessments and assist in remediation planning',
    'Analyze logs from firewalls, servers, and endpoints to identify malicious activity',
    'Prepare incident reports and escalate confirmed threats to senior security teams'
  ],
  technologies: ['SIEM', 'EDR', 'Firewalls', 'IDS/IPS', 'Linux', 'Windows', 'Networking', 'MITRE ATT&CK'],
  achievements: [
    'Detected and responded to multiple security incidents with minimal business impact',
    'Improved incident response time through optimized alert triaging',
    'Contributed to strengthening security monitoring and reporting processes'
  ],
  skills_gained: [
    'Security Monitoring & Incident Response',
    'Threat Detection & Analysis',
    'Log Analysis',
    'Vulnerability Management',
    'SOC Operations'
  ],
  icon: Shield,
  color: 'from-blue-500 to-indigo-600',
  bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
},
{
  year: '2025',
  duration: '6 months',
  title: 'Teaching Assistant',
  company: 'YTCEM',
  location: 'On-site',
  type: 'Academic Role',
  department: 'Computer Engineering / Cybersecurity',
  description: 'Assisted faculty in academic and laboratory sessions, supporting students in understanding core concepts of cybersecurity, networking, and programming. Played an active role in mentoring and academic coordination.',
  responsibilities: [
    'Assist professors during lectures and practical lab sessions',
    'Guide students in cybersecurity, networking, and programming concepts',
    'Support evaluation of assignments, labs, and internal assessments',
    'Help students troubleshoot technical and practical issues',
    'Assist in preparing academic materials and lab manuals'
  ],
  technologies: ['Networking Fundamentals', 'Linux', 'Python', 'Cybersecurity Tools', 'Operating Systems'],
  achievements: [
    'Mentored multiple students in cybersecurity fundamentals',
    'Improved lab efficiency through structured guidance and documentation',
    'Recognized for effective communication and student support'
  ],
  skills_gained: [
    'Technical Mentorship',
    'Communication & Teaching',
    'Academic Coordination',
    'Problem Solving',
    'Leadership'
  ],
  icon: GraduationCap,
  color: 'from-purple-500 to-pink-600',
  bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
},
{
  year: '2025',
  duration: '1 month',
  title: 'Security Analyst',
  company: 'Oasis Infobyte',
  location: 'Remote',
  type: 'Internship',
  department: 'Cybersecurity',
  description: 'Worked as a Security Analyst Intern focusing on practical cybersecurity tasks including vulnerability assessment, security research, and threat analysis through real-world scenarios.',
  responsibilities: [
    'Perform basic vulnerability scanning and security assessments',
    'Analyze common security threats and attack vectors',
    'Research real-world cyberattacks and mitigation strategies',
    'Document findings and security recommendations',
    'Assist in improving organizational security awareness'
  ],
  technologies: ['Vulnerability Scanners', 'OWASP Top 10', 'Linux', 'Networking Basics', 'Security Tools'],
  achievements: [
    'Successfully completed multiple security assessment tasks',
    'Gained hands-on exposure to real-world cybersecurity challenges',
    'Delivered clear and actionable security documentation'
  ],
  skills_gained: [
    'Vulnerability Assessment',
    'Threat Analysis',
    'Security Research',
    'Technical Documentation',
    'Cybersecurity Fundamentals'
  ],
  icon: Bug,
  color: 'from-red-500 to-orange-500',
  bgColor: 'from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20'
},
  {
    year: '2025',
    duration: '2 months',
    title: 'Java Programmer Intern',
    company: 'HawksCode',
    location: 'Remote',
    type: 'Internship',
    department: 'Backend Development Team',
    description: 'Gained hands-on experience in enterprise-level backend development, focusing on security implementations and performance optimization. Collaborated with senior developers on critical system modules and contributed to major product releases.',
    responsibilities: [
      'Developed and maintained backend services using Java and Spring Boot',
      'Implemented security patches and vulnerability fixes',
      'Optimized database queries and API performance',
      'Participated in code reviews and agile development practices',
      'Collaborated on system architecture and design decisions'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Framework', 'Spring Security', 'Hibernate', 'Maven', 'MySQL', 'Git', 'REST APIs', 'JUnit', 'Mockito'],
    achievements: [
      'Improved application performance by 25% through code optimization',
      'Successfully implemented security patches for 5+ backend modules',
      'Reduced API response time by 40% through database optimization',
      'Contributed to team code reviews and comprehensive documentation',
      'Received outstanding intern performance rating'
    ],
    skills_gained: [
      'Enterprise Java Development',
      'Security Best Practices',
      'Performance Optimization',
      'Team Collaboration',
      'Agile Methodologies'
    ],
    icon: Code,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20'
  }
];

const volunteerExperience = [
 
  {
    year: 'June 2024 - Present',
    title: 'Peer Mentor',
    organization: 'Yadavrao Tasgaonkar College of Engineering & Management',
    location: 'College Campus',
    type: 'Leadership',
    description: 'Served as a Peer Mentor, actively supporting classmates by providing academic guidance, technical assistance, and collaborative learning opportunities across all core subjects in our Information Technology program. This role went beyond tutoring — I focused on empowering peers to build problem-solving skills, technical confidence, and exam readiness.',
    responsibilities: [
      'Assisted classmates in understanding concepts across all subjects',
      'Provided guidance in coding, debugging, and lab work',
      'Led group study sessions and exam preparation activities',
      'Mentored peers in project development and presentations',
      'Encouraged collaborative learning and problem-solving approaches'
    ],
    achievements: [
      'Successfully guided 15+ classmates across all core IT subjects, improving their average grades by 20%',
      'Led 10+ group study sessions, boosting peer participation and collaborative problem-solving skills',
      'Mentored 5+ academic projects, ensuring timely completion and improved technical quality',
      'Provided 1:1 tutoring that helped struggling students pass critical exams with confidence',
      'Received positive feedback from both peers and faculty for mentorship effectiveness'
    ],
    icon: Target,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient heading-glow">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on professional work, leadership roles, and meaningful contributions to the tech community
          </p>
        </div>

        {/* Professional Work Experience */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 hover-glow">Work Experience</h3>
          
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <Card key={index} className={`group card-float bg-gradient-to-br ${exp.bgColor} border-2 border-transparent hover:border-cyan-500/30`}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8">
                    {/* Company Info & Role */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <exp.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge variant={exp.type === 'Internship' ? 'default' : 'secondary'} className="mb-2">
                            {exp.type}
                          </Badge>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.year}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Duration: {exp.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                      <div className="mb-6">
                        <h4 className="text-xl font-bold mb-2 hover-glow">{exp.title}</h4>
                        <p className="text-base text-cyan-600 dark:text-cyan-400 font-semibold mb-4">{exp.department}</p>
                        <p className="text-foreground/80 leading-relaxed text-sm">{exp.description}</p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-lg">📋 Key Responsibilities</h5>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          {exp.responsibilities?.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-foreground/80">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-lg">🛠️ Technologies & Tools</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies?.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="hover:bg-cyan-500 hover:text-white transition-colors duration-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-lg">🏆 Key Achievements</h5>
                        <div className="grid md:grid-cols-2 gap-2">
                          {exp.achievements?.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-foreground/80">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Gained */}
                      <div>
                        <h5 className="font-semibold mb-3 text-lg">📈 Skills Gained</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills_gained?.map((skill, skillIndex) => (
                            <Badge key={skillIndex} className="bg-gradient-to-r from-green-600 to-emerald-600">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership & Volunteer Experience */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 hover-glow">Leadership & Community Contributions</h3>
          
          <div className="space-y-8">
            {volunteerExperience.map((vol, index) => (
              <Card key={index} className={`group card-float bg-gradient-to-br ${vol.bgColor} border-2 border-transparent hover:border-cyan-500/30`}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Role Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${vol.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <vol.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {vol.type}
                          </Badge>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {vol.year}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{vol.organization}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{vol.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold mb-4 hover-glow">{vol.title}</h4>
                        <p className="text-foreground/80 leading-relaxed">{vol.description}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Responsibilities */}
                        <div>
                          <h5 className="font-semibold mb-3 text-lg">📋 Responsibilities</h5>
                          <ul className="space-y-2 text-sm">
                            {vol.responsibilities?.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-foreground/80">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h5 className="font-semibold mb-3 text-lg">🏆 Achievements</h5>
                          <ul className="space-y-2 text-sm">
                            {vol.achievements?.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-foreground/80">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
            <CardContent className="p-8 text-center">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-500 mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years of Education</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-500 mb-2">1+</div>
                  <div className="text-sm text-muted-foreground">Professional Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-500 mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Technical Projects</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}