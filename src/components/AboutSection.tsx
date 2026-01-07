import React from 'react';
import { Heart, Target, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import profileImage from './profile.jpg';


const personalValues = [
  {
    title: 'Innovation',
    description: 'Passionate about leveraging cutting-edge technologies to solve real-world problems',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Security First',
    description: 'Committed to building secure, robust solutions that protect user data and privacy',
    icon: Shield,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and methodologies to stay ahead in cybersecurity',
    icon: Target,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Community Impact',
    description: 'Dedicated to contributing to open-source projects and sharing knowledge with others',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by passion for cybersecurity and innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-background p-4 rounded-2xl">
                <img
                  src={profileImage}
                  alt="Akanksha Mane"
                  className="w-80 h-90 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">My Journey</h3>
              <div className="space-y-3 text-foreground/80 text-sm">
             <p>
              I'm an IT student with a deep and growing passion for protecting the digital world. 
              From identifying vulnerabilities and analyzing network traffic to piecing together 
              digital evidence in forensic investigations, I enjoy understanding how cyber threats 
              operate — and more importantly, how to stop them before they cause harm.
              </p>
              <p>
                My learning journey is strongly hands-on. I've built projects such as an AI-driven 
                web vulnerability scanner and a Python-based File Integrity Monitoring (FIM) tool, 
                which strengthened my skills in secure coding, threat detection, and system analysis. 
                Alongside this, my internships provided real-world exposure to malware behavior, 
                threat analysis, and building security-aware applications.
              </p>
              <p>
                 Teaching and mentoring are equally important to me. I enjoy helping fellow students 
                  break down complex cybersecurity concepts into simple, practical ideas that can be 
                  applied in real scenarios. Sharing knowledge not only strengthens the community but 
                  also deepens my own understanding.
            </p>
            <p>
               Based in Mumbai, I'm continuously learning, experimenting, and collaborating on 
               cybersecurity projects that contribute to safer and more resilient digital spaces 
               for everyone.
          </p>

              </div>
            </div>
          </div>
        </div>

        {/* Personal Values & Approach */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Core Values & Approach
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {personalValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-500 transition-colors duration-200">
                          {value.title}
                        </h4>
                        <p className="text-foreground/80 text-sm">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-center mb-6">Beyond Technology</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-semibold mb-2">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Enjoy tackling complex challenges and finding innovative solutions
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">📚</div>
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Always reading about latest cybersecurity trends and emerging technologies
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-semibold mb-2">Mentoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate about helping fellow students and sharing knowledge
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}