import { FileText, Calendar, ExternalLink, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Research() {
  const publications = [
    {
      title: 'From WannaCry to MOVEit and Beyond – Trends, Attacks Vectors, and Defense',
      journal: 'International Journal of Research Publication and Reviews',
      date: 'Sep 25, 2025',
      abstract: 'A study on how ransomware has evolved—from early mass attacks like WannaCry to modern supply-chain breaches like MOVEit. It explains new attack methods using AI, cloud, and IoT, and highlights practical defense strategies like Zero Trust and AI-based detection.',
      topics: ['Ransomware Evolution', 'Supply Chain Security', 'Zero Trust Architecture', 'AI-Based Detection', 'Threat Intelligence'],
      paperUrl: 'https://ijrpr.com/uploads/V6ISSUE9/IJRPR53105.pdf',
    },
    {
      title: 'Secure Blockchain E-Voting with Anti-Spoofing and ZK Proofs',
      journal: 'International Journal of Scientific Research in Engineering & Management',
      date: 'Sep 1, 2025',
      authors: 'Akanksha Mane, Poonam Todkar, Arpita Patil',
      abstract: 'A secure e-voting model combining blockchain, face recognition with anti-spoofing, and zero-knowledge proofs. It ensures anonymous, tamper-proof voting with strong authentication, encrypted ledgers, and fast processing for real-world election use.',
      topics: ['Blockchain Security', 'Zero-Knowledge Proofs', 'Biometric Authentication', 'Anti-Spoofing', 'Electoral Security'],
      paperUrl: 'https://ijsrem.com/download/secure-blockchain-e-voting-with-anti-spoofing-and-zk-proofs/',
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
            &lt;Research /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">Published papers and academic contributions</p>
        </motion.div>

        {/* Publications */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-colors"
            >
              {/* Publication Header */}
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-mono text-white mb-3">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{pub.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-mono">{pub.journal}</span>
                    </div>
                  </div>
                  {pub.authors && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                      <Users className="w-4 h-4" />
                      <span className="font-mono">Authors: {pub.authors}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="text-sm font-mono text-cyan-400 mb-3">Abstract:</h4>
                <p className="text-slate-300 leading-relaxed">{pub.abstract}</p>
              </div>

              {/* Topics */}
              <div>
                <h4 className="text-sm font-mono text-cyan-400 mb-3">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {pub.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-cyan-400 text-xs font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Paper Link */}
              {pub.paperUrl && (
                <div className="mt-4">
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 rounded-md font-mono hover:bg-cyan-400 transition-colors"
                  >
                    Read the Paper
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-mono text-cyan-400 mb-8 text-center">Research Interests</h3>
          <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Ransomware & Malware Analysis',
                'Blockchain Security',
                'Zero-Knowledge Cryptography',
                'AI in Cybersecurity',
                'Supply Chain Security',
                'Biometric Authentication',
                'Threat Intelligence',
                'Zero Trust Architecture',
                'Electoral & Voting Security',
              ].map((interest, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300 font-mono text-sm">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-slate-900 border border-cyan-500/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-mono text-white mb-4">Interested in Collaboration?</h3>
          <p className="text-slate-400 mb-6">
            I'm open to research collaborations in cybersecurity, particularly in defensive security, threat analysis, and emerging security technologies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 rounded-md font-mono hover:bg-cyan-400 transition-colors"
          >
            Contact for Research Opportunities
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}