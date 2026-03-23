import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Certifications() {
  const certifications = [
     {
      title: 'SOC Level 1',
      issuer: 'TryHackMe',
      issued: 'Mar 2026',
      expires: 'Mar 2029',
      credentialId: 'THM-AIHFL27TQ9',
    },
    {
      title: 'Network Defenses',
      issuer: 'Cisco Networking Academy',
      issued: 'Mar 2026',
      expires: null,
      credentialId: 'e41f2688-3eae-43a0-b290-3410cdb34799',
    },
    {
      title: 'Endpoint Security',
      issuer: 'Cisco Networking Academy',
      issued: 'Mar 2026',
      expires: null,
      credentialId: 'd6d78c00-9077-48a9-97de-0ca321ccb608',
    },
    {
      title: 'Cyber Security 101',
      issuer: 'TryHackMe',
      issued: 'Mar 2026',
      expires: 'Mar 2029',
      credentialId: 'THM-0CI4SNSOM9',
    },
    {
      title: 'Pre-Security',
      issuer: 'TryHackMe',
      issued: 'Mar 2026',
      expires: 'Mar 2029',
      credentialId: 'THM-4JE1U7FGST',
    },
    {
      title: 'Fortinet Certified Associate in Cybersecurity',
      issuer: 'Fortinet',
      issued: 'Jan 2026',
      expires: 'Jan 2028',
      credentialId: '6caef694-96e2-416f-b62e-6cf81f66d4bf',
    },
    {
      title: 'CS50 Introduction to Python Programming',
      issuer: 'Harvard University',
      issued: 'Dec 2025',
      expires: null,
      credentialId: null,
    },
    {
      title: 'Blue Team Junior Analyst',
      issuer: 'Security Blue Team',
      issued: 'Dec 2025',
      expires: null,
      credentialId: null,
    },
    {
      title: 'edX Verified Certificate for CS50\'s Introduction to Cybersecurity',
      issuer: 'edX',
      issued: 'Oct 2025',
      expires: null,
      credentialId: '7824b06717ff48dfb4e53e0cd920001d',
    },
    {
      title: 'CS50 Introduction to Cybersecurity',
      issuer: 'Harvard University',
      issued: 'Oct 2025',
      expires: null,
      credentialId: null,
    },
    {
      title: 'Foundation Level Threat Intelligence Analyst',
      issuer: 'arcX',
      issued: 'Sep 2025',
      expires: null,
      credentialId: '4a6ac4e111025b758211dbaec46887b92ab5706b',
    },
    {
      title: 'Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco Networking Academy',
      issued: 'Sep 2025',
      expires: null,
      credentialId: '964b38b9-6f02-481a-b03a-3eed139c714d',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      issued: 'Sep 2025',
      expires: null,
      credentialId: 'b64fce7f-88b9-4d4f-9fe6-0de1c993b58c',
    },
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
            &lt;Certifications /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">Professional certifications and credentials</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center">
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-mono text-white mb-1">{certifications.length}</div>
            <div className="text-slate-400 text-sm font-mono">Total Certifications</div>
          </div>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center">
            <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-mono text-white mb-1">
              {certifications.filter(c => c.expires).length}
            </div>
            <div className="text-slate-400 text-sm font-mono">Active Credentials</div>
          </div>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 text-center">
            <ExternalLink className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-mono text-white mb-1">
              {new Set(certifications.map(c => c.issuer)).size}
            </div>
            <div className="text-slate-400 text-sm font-mono">Issuing Organizations</div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
            >
              {/* Certification Header */}
              <div className="flex items-start gap-3 mb-4">
                <Award className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-mono text-white mb-2">{cert.title}</h3>
                  <p className="text-cyan-400 text-sm font-mono">{cert.issuer}</p>
                </div>
              </div>

              {/* Certification Details */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">Issued: {cert.issued}</span>
                </div>
                {cert.expires && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">Expires: {cert.expires}</span>
                  </div>
                )}
                {cert.credentialId && (
                  <div className="flex items-start gap-2 text-slate-400 mt-3 pt-3 border-t border-cyan-500/10">
                    <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-cyan-400 mb-1">Credential ID:</div>
                      <div className="text-xs font-mono break-all">{cert.credentialId}</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-mono text-cyan-400 mb-8 text-center">Certification Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: 'Defensive Security',
                count: 5,
                examples: ['Blue Team', 'SIEM', 'Threat Analysis'],
              },
              {
                area: 'Programming',
                count: 1,
                examples: ['Python', 'CS50'],
              },
              {
                area: 'Network Security',
                count: 5,
                examples: ['Cisco', 'Fortinet', 'Traffic Analysis'],
              },
              {
                area: 'CTF & Practical',
                count: 3,
                examples: ['TryHackMe', 'Hands-on Labs'],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-3xl font-mono text-cyan-400 mb-2">{category.count}</div>
                <h4 className="text-lg font-mono text-white mb-3">{category.area}</h4>
                <div className="space-y-1">
                  {category.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-400 text-xs">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
