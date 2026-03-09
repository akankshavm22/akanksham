import { Shield, Code, Lock, Terminal, ChevronRight, Github, Linkedin, Mail, ArrowRight, Network, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTU4NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cybersecurity Network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-mono mb-6">
              <span className="text-white">Akanksha</span>{' '}
              <span className="text-cyan-400">Mane</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 font-mono mb-4">
              Cybersecurity Student & Defensive Security Specialist
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Protecting the digital world through vulnerability assessment, threat analysis, and security research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="px-8 py-3 bg-cyan-500 text-slate-950 rounded-md font-mono hover:bg-cyan-400 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-md font-mono hover:bg-cyan-500/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-mono text-cyan-400 text-center mb-12"
          >
            &lt;Expertise /&gt;
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Vulnerability Assessment',
                description: 'Finding and analyzing security weaknesses in web applications and systems',
              },
              {
                icon: Network,
                title: 'Network Security',
                description: 'Monitoring traffic, detecting anomalies, and analyzing packet captures',
              },
              {
                icon: Search,
                title: 'Threat Analysis',
                description: 'SIEM monitoring, incident investigation, and malware behavior analysis',
              },
              {
                icon: Terminal,
                title: 'Security Research',
                description: 'Published research on ransomware evolution and blockchain e-voting security',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-mono text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: 'Top 7%', label: 'TryHackMe Ranking' },
              { number: '138K+', label: 'Platform Points' },
              { number: '9.1/10', label: 'Academic CGPA' },
              { number: '8+', label: 'Certifications' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-mono text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-slate-400 font-mono text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-mono text-white mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            I'm always open to discussing cybersecurity projects, research opportunities, or mentorship
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-cyan-500 text-slate-950 rounded-md font-mono hover:bg-cyan-400 transition-colors inline-flex items-center gap-2"
          >
            Contact Me
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}