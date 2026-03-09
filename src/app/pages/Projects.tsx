import { Code, ExternalLink, Github, Shield, Cpu, Smartphone, DollarSign, Users, Globe, Terminal, Lock, Keyboard, FileKey, Video, Wifi } from 'lucide-react';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: 'AI-Based Network IDS',
      description: 'AI-NIDS is an advanced student-built cybersecurity project that uses a Random Forest ML model to detect malicious network traffic from the CIC-IDS dataset. It combines real-time attack simulation, SOC-style attack analysis, and malicious vs benign traffic detection.',
      icon: Shield,
      technologies: ['Python', 'Random Forest', 'Machine Learning', 'Network Security', 'CIC-IDS Dataset'],
      category: 'Cybersecurity',
      github: 'https://github.com/akankshavm22/AI-Based-Network-IDS',
      license: 'MIT License',
    },
    {
      title: 'AirSentinel - Wireless Security Audit Tool',
      description: 'A comprehensive wireless security audit and analysis tool for penetration testing and network monitoring. Provides detailed insights into wireless network vulnerabilities and security posture.',
      icon: Wifi,
      technologies: ['Python', 'Network Analysis', 'Wireless Security', 'Penetration Testing'],
      category: 'Cybersecurity',
      github: 'https://github.com/akankshavm22/AirSentinel-Wireless-Security-Audit-Analysis-Tool',
      license: 'Open Source',
    },
    {
      title: 'AI-PhishGuard',
      description: 'AI-PhishGuard is an AI-powered phishing email detection tool with a beautiful Streamlit dashboard. It uses Natural Language Processing (NLP) and Machine Learning to classify emails as Phishing or Safe with high accuracy.',
      icon: Shield,
      technologies: ['Python', 'NLP', 'Machine Learning', 'Streamlit', 'Email Security'],
      category: 'Cybersecurity',
      github: 'https://github.com/akankshavm22/AI-PhishGuard',
      license: 'Open Source',
    },
    {
      title: 'FaceSecure ATM Pinless Banking System',
      description: 'FaceSecure ATM is a pinless banking system that uses face recognition for secure authentication. It integrates a webcam, Arduino-based RFID triggers, and a Streamlit web interface, allowing users to perform banking operations without traditional PIN codes.',
      icon: Smartphone,
      technologies: ['Python', 'OpenCV', 'Arduino', 'RFID', 'SQLite', 'Biometrics'],
      category: 'Security & IoT',
      github: 'https://github.com/akankshavm22/FaceSecure-ATM-Pinless-Banking-System',
      license: 'MIT License',
    },
    {
      title: 'Live Stream Face Recognition System',
      description: 'Real-time face recognition system capable of detecting and identifying faces from live video streams. Implements advanced computer vision algorithms for accurate facial detection and recognition.',
      icon: Video,
      technologies: ['Python', 'OpenCV', 'Face Recognition', 'Real-time Processing', 'Computer Vision'],
      category: 'Security & IoT',
      github: 'https://github.com/akankshavm22',
      license: 'Open Source',
    },
    {
      title: 'Advanced Web Vulnerability Scanner',
      description: 'An advanced student-built web security tool that scans websites for common vulnerabilities including XSS, SQL injection, and security misconfigurations. Provides detailed reports and remediation suggestions.',
      icon: Terminal,
      technologies: ['Python', 'Web Security', 'Vulnerability Assessment', 'Penetration Testing'],
      category: 'Cybersecurity',
      github: 'https://github.com/akankshavm22/advanced-web-vulnerability-scanner',
      license: 'Open Source',
    },
    {
      title: 'File Integrity Checker',
      description: 'A Python-based File Integrity Monitoring (FIM) tool that monitors file changes, detects unauthorized modifications, and maintains cryptographic hashes for security verification.',
      icon: Shield,
      technologies: ['Python', 'Cryptography', 'File Monitoring', 'Security'],
      category: 'Cybersecurity',
      github: 'https://github.com/akankshavm22/file-integrity-checker',
      license: 'Open Source',
    },
    {
      title: 'Password Strength Analyzer',
      description: 'A comprehensive tool that evaluates password strength using multiple criteria including length, complexity, and common patterns. Provides detailed feedback and suggestions for creating stronger passwords.',
      icon: Lock,
      technologies: ['Python', 'Security', 'Password Analysis', 'Cryptography'],
      category: 'Cybersecurity',
      github: 'https://github.com/akankshavm22',
      license: 'Open Source',
    },
    {
      title: 'Text Encryption Tool',
      description: 'A secure text encryption and decryption tool implementing modern cryptographic algorithms. Allows users to encrypt sensitive information with strong encryption standards.',
      icon: FileKey,
      technologies: ['Python', 'Cryptography', 'Encryption', 'Security'],
      category: 'Cybersecurity',
      github: 'https://github.com/akankshavm22',
      license: 'Open Source',
    },
    {
      title: 'Laptop Diagnoser',
      description: 'Laptop Diagnoser is a Python-based Windows tool that monitors system health, lists top processes, checks network & event logs, cleans temp files, and suggests safe repair commands. It generates detailed diagnostic reports.',
      icon: Cpu,
      technologies: ['Python', 'PySimpleGUI', 'Windows', 'System Monitoring', 'Event Logs'],
      category: 'System Tools',
      github: 'https://github.com/akankshavm22/Laptop-Diagnoser',
      license: 'MIT License',
    },
    {
      title: 'SocialBook',
      description: 'SocialBook is a web platform for college students to connect, share educational resources, send messages, and collaborate globally. Features include friend requests, profile management, and a secure chat system.',
      icon: Users,
      technologies: ['React', 'Redux', 'Firebase', 'Next.js', 'Chat System'],
      category: 'Web Application',
      github: 'https://github.com/akankshavm22/SocialBook',
      license: 'Open Source',
    },
    {
      title: 'Currency Converter',
      description: 'A responsive and interactive Currency Converter built using HTML, CSS, and JavaScript, which allows users to convert currencies from one country to another using real-time exchange rates.',
      icon: DollarSign,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'API Integration', 'Responsive Design'],
      category: 'Web Application',
      github: 'https://github.com/akankshavm22/Currency-Converter',
      license: 'Open Source',
    },
    {
      title: 'Typing Speed Test',
      description: 'An interactive typing speed test application that measures words per minute (WPM), accuracy, and typing proficiency. Features real-time feedback and performance statistics.',
      icon: Keyboard,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Interactive UI'],
      category: 'Web Application',
      github: 'https://github.com/akankshavm22',
      license: 'Open Source',
    },
    {
      title: 'ATM Simulation System',
      description: 'A simple ATM Simulation System built in Java with an interactive Swing GUI. It simulates basic ATM operations like Login, Balance Inquiry, Deposit, and Withdrawal with a modern card-based interface.',
      icon: Cpu,
      technologies: ['Java', 'Swing', 'OOP', 'GUI', 'Desktop Application'],
      category: 'Desktop Application',
      github: 'https://github.com/akankshavm22/ATM-Simulation-System',
      license: 'MIT License',
    },
    {
      title: 'Solar System Simulator',
      description: 'An interactive solar system simulation that visualizes planetary orbits and celestial mechanics. Built to demonstrate space physics and orbital dynamics in an educational context.',
      icon: Globe,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Animation', 'Physics Simulation'],
      category: 'Educational',
      github: 'https://github.com/akankshavm22',
      license: 'Open Source',
    },
  ];

  const categories = ['All', 'Cybersecurity', 'Web Application', 'Desktop Application', 'Security & IoT', 'System Tools', 'Educational'];
  const [selectedCategory, setSelectedCategory] = (window as any).React?.useState?.('All') || ['All', () => {}];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-mono text-cyan-400 mb-4">
            &lt;Projects /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">Cybersecurity tools, web applications, and innovative solutions</p>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <a
            href="https://github.com/akankshavm22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-colors"
          >
            <Github className="w-6 h-6 text-cyan-400" />
            <div className="text-left">
              <div className="text-white font-mono text-sm">View All Projects on GitHub</div>
              <div className="text-cyan-400 text-xs">@akankshavm22</div>
            </div>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center">
            <Code className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-mono text-white mb-1">{projects.length}</div>
            <div className="text-slate-400 text-sm font-mono">Total Projects</div>
          </div>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center">
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-mono text-white mb-1">
              {projects.filter(p => p.category === 'Cybersecurity').length}
            </div>
            <div className="text-slate-400 text-sm font-mono">Security Projects</div>
          </div>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center">
            <Terminal className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-mono text-white mb-1">
              {new Set(projects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-slate-400 text-sm font-mono">Technologies Used</div>
          </div>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center">
            <Github className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-mono text-white mb-1">Open</div>
            <div className="text-slate-400 text-sm font-mono">Source Contributions</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors flex flex-col"
            >
              {/* Project Icon & Title */}
              <div className="flex items-start gap-3 mb-4">
                <project.icon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-mono text-white mb-1">{project.title}</h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-800 border border-cyan-500/10 rounded text-cyan-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-800 border border-cyan-500/10 rounded text-cyan-400 text-xs font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-cyan-500/10">
                <span className="text-xs font-mono text-slate-500">{project.license}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 hover:bg-cyan-500/20 transition-colors text-sm font-mono"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-mono text-cyan-400 mb-8 text-center">Technologies & Skills Demonstrated</h3>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from(new Set(projects.flatMap(p => p.technologies))).sort().map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 font-mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}