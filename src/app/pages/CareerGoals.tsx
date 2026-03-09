import { Target, TrendingUp, Users, Globe, Shield, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export function CareerGoals() {
  const shortTermGoals = [
    {
      icon: Shield,
      title: 'Master Defensive Security',
      description: 'Deepen expertise in SIEM platforms, threat hunting, and incident response to become proficient in protecting organizational assets.',
      timeline: '6-12 months',
    },
    {
      icon: Target,
      title: 'Advanced Certifications',
      description: 'Pursue industry-recognized certifications like CompTIA Security+, CEH, or OSCP to validate technical skills and industry knowledge.',
      timeline: '6-18 months',
    },
    {
      icon: Lightbulb,
      title: 'Research & Innovation',
      description: 'Continue publishing cybersecurity research papers and contribute to open-source security projects that benefit the community.',
      timeline: 'Ongoing',
    },
  ];

  const longTermGoals = [
    {
      icon: TrendingUp,
      title: 'Security Operations Leader',
      description: 'Advance to a senior role in Security Operations Center (SOC) or Security Architecture, leading teams in defending against sophisticated threats.',
      timeline: '3-5 years',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work with international organizations on critical infrastructure protection and contribute to cybersecurity policy development.',
      timeline: '5-7 years',
    },
    {
      icon: Users,
      title: 'Mentor & Educator',
      description: 'Establish a mentorship program to train the next generation of cybersecurity professionals and promote defensive security awareness.',
      timeline: '5+ years',
    },
  ];

  const focusAreas = [
    'Security Operations Center (SOC) Management',
    'Advanced Threat Detection & Response',
    'Cloud Security Architecture',
    'Zero Trust Implementation',
    'Security Automation & Orchestration',
    'Digital Forensics & Incident Response',
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-mono text-cyan-400 mb-4">
            &lt;Career Goals /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Dedicated to building a career in defensive cybersecurity, protecting digital infrastructure, and sharing knowledge with the community
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-mono text-cyan-400 mb-4 text-center">My Vision</h2>
          <p className="text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
            To become a leading defensive security professional who not only protects organizations from cyber threats but also contributes to making the digital world safer through research, innovation, and education. I aspire to work on challenging security problems, build resilient defense systems, and mentor aspiring cybersecurity professionals while staying at the forefront of emerging threats and technologies.
          </p>
        </motion.div>

        {/* Short-Term Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-mono text-cyan-400 mb-8">Short-Term Goals (0-2 Years)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortTermGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <goal.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-mono text-white mb-3">{goal.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{goal.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                  <Target className="w-3 h-3" />
                  <span>{goal.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Long-Term Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-mono text-cyan-400 mb-8">Long-Term Goals (3+ Years)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {longTermGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <goal.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-mono text-white mb-3">{goal.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{goal.description}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                  <Target className="w-3 h-3" />
                  <span>{goal.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-mono text-cyan-400 mb-8 text-center">Key Focus Areas</h2>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 font-mono text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-mono text-cyan-400 mb-8 text-center">Desired Career Path</h2>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8">
            <div className="space-y-6">
              {[
                {
                  role: 'Junior Security Analyst / SOC Analyst',
                  description: 'Entry-level role focusing on monitoring, threat detection, and incident triage',
                  stage: 'Current Target',
                },
                {
                  role: 'Security Analyst / Threat Hunter',
                  description: 'Proactive threat hunting, vulnerability assessment, and security research',
                  stage: '1-2 Years',
                },
                {
                  role: 'Senior Security Engineer / Incident Response Lead',
                  description: 'Leading incident response efforts, security architecture, and team mentorship',
                  stage: '3-5 Years',
                },
                {
                  role: 'Security Operations Manager / CISO',
                  description: 'Strategic security leadership, policy development, and organizational defense',
                  stage: '5+ Years',
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-slate-950 font-mono text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < 3 && <div className="w-px h-12 bg-cyan-500/30 my-2"></div>}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-mono text-white">{step.role}</h3>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                        {step.stage}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
