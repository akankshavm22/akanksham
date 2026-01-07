import React from "react";
import {
  Target,
  TrendingUp,
  Globe,
  Shield,
  Brain,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const careerPath = [
  {
    phase: "Completed",
    title: "Diploma in IT",
    description:
      "Completed IT Diploma with hands-on IT skills",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    year: "2020-2023",
  },
  {
    phase: "Current",
    title: "BE IT Student",
    description:
      "Final year IT Engineering with cybersecurity focus",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    year: "2023-2026",
  },
 {
  phase: "Next Focus",
  title: "Cybersecurity Specialization",
  description: "Research, certifications, and hands-on security projects",
  icon: Shield,
  color: "from-cyan-500 to-cyan-600",
  year: "2026-2027",
},
  {
    phase: "Entry Level",
    title: "Blue Team Specialist",
    description:
      "Hands-on security operations and threat hunting",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
    year: "2028-2031",
  },
  {
    phase: "Advanced",
    title: "Senior Security Analyst",
    description:
      "Leading security initiatives in global companies",
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
    year: "2031+",
  },
];

const focusAreas = [
  {
    title: "AI-Driven Security",
    description:
      "Machine learning applications in threat detection and response",
    icon: Brain,
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
    ],
  },
  {
    title: "Blockchain Security",
    description:
      "Securing decentralized systems and smart contracts",
    icon: Shield,
    technologies: [
      "Solidity",
      "Web3.js",
      "Ethereum",
      "Hyperledger",
    ],
  },
  {
    title: "Global Impact",
    description:
      "Contributing to cybersecurity standards and practices worldwide",
    icon: Globe,
    technologies: [
      "ISO 27001",
      "NIST Framework",
      "GDPR",
      "CCPA",
    ],
  },
];

export function CareerGoalsSection() {
  return (
    <section id="career-goals" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Career Vision & Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A strategic roadmap towards becoming a leading
            cybersecurity professional, contributing to
            innovative security solutions that protect digital
            infrastructure worldwide.
          </p>
        </div>

        {/* Career Path Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Career Progression Path
          </h3>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-4 gap-8 relative">
              {careerPath.map((phase, index) => (
                <div
                  key={index}
                  className="text-center relative"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>

                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="text-sm text-cyan-500 font-semibold mb-2">
                        {phase.phase}
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        {phase.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {phase.description}
                      </p>
                      <div className="text-xs text-muted-foreground font-medium">
                        {phase.year}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {careerPath.map((phase, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <div className="text-sm text-cyan-500 font-semibold mb-1">
                      {phase.phase}
                    </div>
                    <h4 className="font-bold mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {phase.description}
                    </p>
                    <div className="text-xs text-muted-foreground font-medium">
                      {phase.year}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Areas */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Specialization Focus Areas
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">
                    {area.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-cyan-500">
                      Key Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {area.technologies.map(
                        (tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-muted px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
          <CardContent className="p-8 text-center">
            <Target className="w-12 h-12 mx-auto mb-6 text-cyan-500" />
            <h3 className="text-2xl font-bold mb-4">
              Mission Statement
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To become a leading cybersecurity professional
              who bridges the gap between cutting-edge
              technology and practical security solutions. My
              goal is to contribute to the development of
              AI-driven and blockchain-based security
              innovations that protect organizations and
              individuals in our increasingly digital world."
            </p>

            <div className="mt-8 pt-6 border-t border-cyan-500/20">
              <h4 className="font-semibold mb-3">
                Target Companies & Organizations
              </h4>
              <p className="text-muted-foreground">
                Global cybersecurity leaders including
                Microsoft, Google Cloud Security, CrowdStrike,
                Palo Alto Networks, and emerging fintech
                security teams
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}