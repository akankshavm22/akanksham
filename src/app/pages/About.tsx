import { Shield, Code, Users, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-mono text-cyan-400 mb-4">
            &lt;About Me /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-900 border border-cyan-500/20 rounded-lg overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFP85kzqBTehw/profile-displayphoto-scale_400_400/B56Zsqn0aCIYAk-/0/1765946642882?e=1779321600&v=beta&t=GVGxG6qap9N_1qOLbHiS_g2ZpW9JVM77z66Qxz4qk6Q"
                alt="Akanksha Mane"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h2 className="text-2xl font-mono text-white mb-2">Akanksha Mane</h2>
                <p className="text-cyan-400 font-mono text-sm mb-4">Cybersecurity Student</p>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-mono text-cyan-400 mb-6">My Journey in Cybersecurity</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm an IT student with a growing passion for protecting the digital world. Whether it's finding vulnerabilities, analyzing network traffic, or piecing together digital clues in forensics, I enjoy understanding how threats work and how to stop them.
                </p>
                <p>
                  I've built hands-on projects like an AI-driven web vulnerability scanner and a Python-based FIM tool, and my internships gave me real exposure to threat analysis, malware behavior, and secure development.
                </p>
                <p>
                  Teaching is something I equally enjoy. As a mentor, I help students understand cyber concepts in simple, practical ways.
                </p>
                <p>
                  Based in Mumbai, I'm always looking to learn, share, and work on cybersecurity projects that create safer digital spaces for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-mono text-cyan-400 mb-8 text-center">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Defensive Security',
                description: 'Passionate about protecting systems, analyzing threats, and implementing security best practices to create safer digital environments.',
              },
              {
                icon: Code,
                title: 'Hands-On Learning',
                description: 'Building real-world security tools and participating in CTF challenges to develop practical skills and stay current with emerging threats.',
              },
              {
                icon: Users,
                title: 'Knowledge Sharing',
                description: 'Mentoring students and sharing cybersecurity knowledge to help others understand complex security concepts in accessible ways.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h4 className="text-xl font-mono text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-mono text-cyan-400 mb-6 text-center">Core Competencies</h3>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Vulnerability Assessment',
                'SIEM Monitoring',
                'Network Security',
                'Web Application Security',
                'Threat Analysis',
                'Malware Analysis',
                'Packet Analysis (Wireshark)',
                'Security Research & Documentation',
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 font-mono text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
