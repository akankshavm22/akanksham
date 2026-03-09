import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Education() {
  const educationData = [
    {
      institution: 'University of Mumbai',
      degree: 'Bachelor of Engineering - BE, Information Technology',
      period: 'Sep 2023 - Jun 2026',
      grade: '9.1/10',
      activities: [
        'Teaching Assistant',
        'Cybersecurity Research & Development Projects',
        'Technical Paper Writing',
        'AI & Web Security Workshops',
      ],
    },
    {
      institution: 'Maharashtra State Board of Technical Education (MSBTE)',
      degree: 'Diploma, Information Technology',
      period: 'Sep 2020 - Jun 2023',
      grade: '7/10',
      activities: [
        'Networking & Security Lab Practice',
        'Linux System Administration Basics',
        'Academic Mini Projects',
      ],
    },
    {
      institution: 'Canossa High School',
      degree: 'Maharashtra State Board of Secondary and Higher Secondary Education',
      period: 'Jun 2010 - Jun 2020',
      grade: '74%',
      activities: [
        'Sea Cadet Corps',
        'March-Past',
        'Athletics Events',
        'School Sports Team Participation',
      ],
      achievements: [
        'Multiple prize winner in Marathi & Hindi Language Competitions (1st, 2nd & 3rd positions)',
        'Information Technology Scholarship recipient (Dept. of School Level Examination & Edulight)',
        'Awarded in Creative Masters Drawing Contest (Multiple Years)',
        'Inter-School March-Past: 2nd & 3rd Place',
        'Times NIE National Aptitude Challenge – 2nd Place',
        'Recognized for Leadership, Discipline & Coordination – Sea Cadet Corps',
        'Active participation in Dance, Karate & Summer Camps',
      ],
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
            &lt;Education /&gt;
          </h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg">Academic journey and achievements</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-900 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-colors">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl md:text-2xl font-mono text-white mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-cyan-400 font-mono text-sm md:text-base">{edu.degree}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    {edu.grade && (
                      <div className="flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-md mb-2">
                        <Award className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-mono text-sm">Grade: {edu.grade}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Activities */}
                {edu.activities && edu.activities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-mono text-cyan-400 mb-3">Activities & Societies:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-mono text-cyan-400 mb-3">Achievements:</h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}