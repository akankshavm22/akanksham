import { Shield, Network, Search, Code, Database, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Defensive Security',
      icon: Shield,
      skills: [
        { name: 'Vulnerability Assessment', level: 90 },
        { name: 'SIEM Monitoring', level: 85 },
        { name: 'Threat Analysis', level: 88 },
        { name: 'Malware Analysis', level: 82 },
        { name: 'Security Documentation', level: 90 },
      ],
    },
    {
      category: 'Network Security',
      icon: Network,
      skills: [
        { name: 'Packet Analysis (Wireshark)', level: 90 },
        { name: 'Network Traffic Analysis', level: 87 },
        { name: 'Network Security Monitoring', level: 85 },
        { name: 'BeEF Framework', level: 75 },
      ],
    },
    {
      category: 'Application Security',
      icon: Search,
      skills: [
        { name: 'Web Application Security', level: 92 },
        { name: 'Penetration Testing', level: 85 },
        { name: 'SQL Injection (SQLi)', level: 88 },
        { name: 'Cross-Site Scripting (XSS)', level: 88 },
        { name: 'Authentication & Authorization', level: 85 },
      ],
    },
    {
      category: 'Programming & Development',
      icon: Code,
      skills: [
        { name: 'Python Programming', level: 88 },
        { name: 'Java Programming', level: 82 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: Terminal,
      skills: [
        { name: 'Nmap', level: 87 },
        { name: 'Metasploit', level: 82 },
        { name: 'Burp Suite', level: 88 },
        { name: 'Wireshark', level: 90 },
        { name: 'Git/GitHub', level: 88 },
        { name: 'Linux Security Utilities', level: 85 },
      ],
    },
    {
      category: 'Soft Skills & Others',
      icon: Database,
      skills: [
        { name: 'Academic Research Support', level: 90 },
        { name: 'Student Mentorship', level: 92 },
        { name: 'Technical Writing', level: 90 },
        { name: 'Cyber Laws & Digital Ethics', level: 85 },
        { name: 'Risk Assessment', level: 85 },
      ],
    },
  ];

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
            &lt;Skills /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">Technical expertise and capabilities</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-mono text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm font-mono">{skill.name}</span>
                      <span className="text-cyan-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-mono text-cyan-400 mb-8 text-center">Platform Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                platform: 'TryHackMe',
                achievement: 'Top 7% Global Ranking',
                detail: '138,000+ Points | Hacker Level',
              },
              {
                platform: 'Academic Excellence',
                achievement: '9.1/10 CGPA',
                detail: 'Bachelor of Engineering - IT',
              },
              {
                platform: 'CTF Participation',
                achievement: 'Active Competitor',
                detail: 'Offensive & Defensive Challenges',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors"
              >
                <h4 className="text-lg font-mono text-white mb-2">{item.platform}</h4>
                <p className="text-cyan-400 font-mono text-sm mb-2">{item.achievement}</p>
                <p className="text-slate-400 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
