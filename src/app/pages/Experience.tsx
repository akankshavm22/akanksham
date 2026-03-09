import { Briefcase, Calendar, MapPin, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'CTF Player',
      company: 'TryHackMe',
      type: 'Part-time',
      period: 'Mar 2026 - Present · 1 mo',
      location: 'London Area, United Kingdom · Remote',
      responsibilities: [
        'Participating in hands-on cybersecurity Capture The Flag (CTF) challenges on the TryHackMe platform to develop practical skills in offensive and defensive security.',
        'Solving real-world cybersecurity challenges involving web exploitation, privilege escalation, network analysis, and digital forensics.',
        'Gaining hands-on experience with tools such as Nmap, Wireshark, Metasploit, Burp Suite, and Linux security utilities.',
        'Practicing vulnerability discovery techniques including SQL Injection (SQLi), Cross-Site Scripting (XSS), and authentication bypass.',
        'Performing network traffic analysis and malware investigation in guided lab environments.',
        'Ranked among the Top 7% of 3M+ global users, earning the Hacker level with 138,000+ platform points.',
        'Continuously improving problem-solving and incident analysis skills through practical cybersecurity labs and challenges.',
      ],
      skills: ['Vulnerability Assessment', 'Cybersecurity', 'Web Application Security', 'Capture The Flag', 'Network Security'],
    },
    {
      title: 'Research And Teaching Assistant',
      company: 'Yadavrao Tasgaonkar College of Engineering and Management',
      type: 'Part-time',
      period: 'Jan 2026 - Present · 3 mos',
      location: 'Karjat, Maharashtra, India · On-site',
      responsibilities: [
        'Collaborated with faculty to design and deliver tutorials on cybersecurity principles, cyber laws, and digital ethics, guiding 40+ students to understand legal frameworks and security practices in simple and practical ways.',
        'Assessed, reviewed, and validated assignments, case studies, and quizzes, providing constructive feedback that boosted student understanding and improved overall class performance by 20%.',
        'Developed and presented demonstrations on cyber threats, legal compliance, and safe digital practices, helping students detect and analyze common security issues in real-world scenarios.',
        'Mentored and supported student teams in cybersecurity-related projects and presentations, enhancing research quality and increasing project completion efficiency by 18%.',
        'Maintained and logged academic records, lab materials, and coursework submissions while ensuring students comply with course guidelines and institutional policies.',
      ],
      skills: ['Academic Research Support', 'Cyber Laws & Digital Ethics Instruction', 'Assistant Teaching', 'Student Mentorship'],
    },
    {
      title: 'Cyber Security Analyst',
      company: 'Main Crafts Technology',
      type: 'Internship',
      period: 'Dec 2025 - Mar 2026 · 4 mos',
      location: 'Uttar Pradesh, India · Remote',
      responsibilities: [
        'Assessed and investigated web applications and internal systems to detect security vulnerabilities such as XSS, weak authentication, and misconfigurations, helping the team secure multiple testing environments.',
        'Collaborated with senior analysts to analyze security logs and observed suspicious activities, logging and validating incidents to improve monitoring and response efficiency.',
        'Implemented and supported vulnerability assessment tasks using security tools and manual testing techniques, enhancing the accuracy of security analysis and reporting.',
        'Developed and presented clear vulnerability reports with recommended remediation strategies, helping developers fix critical issues and improve application security by 22%.',
        'Maintained and logged security findings, incident records, and testing results while ensuring projects comply with cybersecurity best practices and company guidelines.',
      ],
      skills: ['Malware Analysis', 'Vulnerability Assessment', 'Web Application Security', 'Threat Analysis', 'Network Security Monitoring'],
    },
    {
      title: 'Cyber Security Intern',
      company: 'ELiteTech Intern',
      type: 'Internship',
      period: 'Dec 2025 - Feb 2026 · 3 mos',
      location: 'Delhi, India · Remote',
      responsibilities: [
        'Monitored security events using SIEM tools to detect anomalies and suspicious activity.',
        'Examined systems and network logs to identify potential threats and attack indicators.',
        'Conducted security gap assessments across applications and network environments.',
        'Documented investigation findings and presented threat analysis reports to senior analysts.',
        'Contributed to simulated incident response exercises to understand security operations workflows.',
      ],
      skills: ['Security Documentation', 'Vulnerability Assessment', 'SIEM Monitoring', 'Threat Identification', 'Risk Assessment'],
    },
    {
      title: 'Cyber Security Intern',
      company: 'VOIS',
      type: 'Internship',
      period: 'Dec 2025 - Jan 2026 · 2 mos',
      location: 'Kolkata, West Bengal, India · Remote',
      responsibilities: [
        'Analyzed captured network traffic using Wireshark to identify abnormal communication patterns.',
        'Simulated browser-based exploitation scenarios using BeFF Framework.',
        'Investigated phishing indicators, malicious traffic behavior, and potential MITM patterns in controlled lab environments.',
        'Prepared technical documentation outlining attack vectors and corresponding defensive measures.',
        'Assisted mentors during weekly security analysis sessions reviewing real-world threat scenarios.',
      ],
      skills: ['Cybersecurity Fundamentals', 'BeEF Framework', 'Packet Analysis (Wireshark)', 'Generative AI for Security Analysis', 'Network Traffic Analysis'],
    },
    {
      title: 'Security Analyst',
      company: 'Oasis Infobyte',
      type: 'Internship',
      period: 'Nov 2025 - Nov 2025 · 1 mo',
      location: 'New Delhi, Delhi, India · Remote',
      responsibilities: [
        'Inspected network packet captures involving HTTP, DNS, TCP and UDP traffic.',
        'Detected irregular communication flows indicating potential suspicious activity.',
        'Compiled structured reports summarizing packet analysis observations and security insights.',
      ],
      skills: ['Vulnerability Assessment', 'Packet Analysis (Wireshark)'],
    },
    {
      title: 'Java Programmer',
      company: 'HawksCode',
      type: 'Internship',
      period: 'Jun 2025 - Aug 2025 · 3 mos',
      location: 'Jaipur, Rajasthan, India · Remote',
      responsibilities: [
        'Programmed backend modules using Java following object-oriented design principles.',
        'Optimized legacy code to improve application stability and execution efficiency.',
        'Implemented modular architecture enabling easier integration of additional system features.',
      ],
      skills: ['Backend Development', 'Object-Oriented Programming (OOP)', 'Modular System Design', 'Java Programming'],
    },
    {
      title: 'Web Developer',
      company: 'Vidyalankar Institute Of Technology',
      type: 'Internship',
      period: 'Jun 2022 - Sep 2022 · 4 mos',
      location: 'Mumbai, Maharashtra, India · Hybrid',
      responsibilities: [
        'Developed responsive web pages using HTML5, CSS3, and JavaScript, improving mobile usability and reducing page load time by 30%.',
        'Built and optimized interactive UI components, increasing user engagement by 25% through improved navigation and dynamic content.',
        'Integrated REST APIs to display real-time data, reducing manual data processing by 40%.',
        'Debugged and resolved front-end issues using browser developer tools, decreasing UI bugs by 35%.',
        'Collaborated with a team using Git and GitHub for version control, improving development workflow and reducing merge conflicts by 20%.',
      ],
      skills: ['Frontend Development', 'HTML5 & CSS3', 'REST APIs', 'JavaScript', 'Git/GitHub'],
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
            &lt;Experience /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">Professional journey and accomplishments</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-lg p-6 md:p-8 hover:border-cyan-500/50 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-mono text-white mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 font-mono text-sm">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span className="font-mono">{exp.location}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-mono text-cyan-400">Skills:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-cyan-400 text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
