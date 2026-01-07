import React from "react";
import {
  FileText,
  ExternalLink,
  Users,
  Calendar,
  Award,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const researchPapers = [
  {
    title: "Secure Blockchain E-Voting with Anti-Spoofing and ZK Proofs",
    authors: ["Akanksha Mane", "Poonam Todkar", "Arpita Patil"],
    journal: "International Journal of Scientific Research in Engineering & Management",
    year: "2025",
    status: "Published",
    publishedDate: "September 1, 2025",
    abstract:
      "This research introduces a comprehensive e-voting solution integrating three core technologies: permissioned blockchain for tamper-proof vote storage, multi-modal facial recognition with advanced anti-spoofing to prevent impersonation attacks, and zero-knowledge proofs enabling vote verification while maintaining complete voter anonymity. The system prioritizes compatibility with current election infrastructure to facilitate real-world adoption. The architecture features ephemeral cryptographic keys, anonymous voter credentials, and encrypted ballots posted to distributed ledgers. Mix-nets and threshold decryption ensure auditable results without compromising ballot secrecy. Additional security layers include FIDO2/WebAuthn protocols and accessibility-focused fallback authentication methods. Performance targets include sub-5-second vote processing and over 95% anti-spoofing accuracy, making it scalable for large elections while addressing critical concerns around voter privacy, election integrity, and result verifiability.",
    keywords: [
      "Blockchain",
      "E-Voting",
      "Zero-Knowledge Proofs",
      "Anti-Spoofing",
      "Facial Recognition",
      "Cryptography",
      "Election Security",
      "Digital Democracy",
      "Privacy Protection"
    ],
    doi: "10.55041/IJSREM",
    doiLink: "https://www.ijsrem.com/secure-blockchain-e-voting-with-anti-spoofing-and-zk-proofs",
    citations: 0,
    type: "Research Paper",
    conference: null,
  },
 {
  title: "From WannaCry to MOVEit and Beyond – Trends, Attack Vectors, and Defense",
  authors: ["Akanksha Mane"],
  journal: "International Journal of Research Publication and Reviews (IJRPR)",
  year: "2025",
  status: "Published",
  publishedDate: "September 25, 2025",
  abstract:
    "This paper examines the evolution of ransomware attacks, tracing their progression from early large-scale outbreaks such as WannaCry to sophisticated supply-chain compromises like the MOVEit vulnerability. The study analyzes emerging attack vectors leveraging artificial intelligence, cloud infrastructures, and IoT environments, and discusses practical defense mechanisms including Zero Trust architecture, AI-driven threat detection, and proactive cybersecurity resilience strategies.",
  keywords: [
    "Ransomware",
    "WannaCry",
    "MOVEit",
    "Supply Chain Attacks",
    "Zero Trust",
    "Cyber Defense",
    "AI in Cybersecurity",
    "Cloud Security",
    "IoT Security",
  ],
  doi: null,
  doiLink: "https://ijrpr.com/uploads/V6ISSUE9/IJRPR53105.pdf",
  citations: 0,
  type: "Review Paper",
  conference: null,
}
];

const researchStats = [
  { label: "Publications", value: "2", icon: FileText },
  { label: "Co-authors", value: "2", icon: Users },
  { label: "Research Areas", value: "3", icon: ExternalLink },
];

const researchAreas = [
  {
    area: "Blockchain & Cryptography",
    description:
      "Secure blockchain applications, cryptographic protocols, zero-knowledge proofs, and distributed systems security",
    papers: 1,
  },
  {
    area: "Digital Forensics",
    description:
      "AI-assisted digital evidence analysis, automated investigation tools, and forensic technology advancement",
    papers: 1,
  },
  {
    area: "Artificial Intelligence",
    description:
      "Machine learning applications in cybersecurity, forensics, biometric authentication, and automated security analysis",
    papers: 2,
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Research & Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of cybersecurity and
            emerging technologies through research
          </p>
        </div>

        {/* Research Statistics */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {researchStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Current Research Highlight */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-500/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-500 mb-1">
                  2025-2026
                </div>
                <div className="text-sm text-muted-foreground">
                  Current Research
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Research Papers */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Published & Ongoing Research
          </h3>

          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Paper Image */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="relative overflow-hidden rounded-lg">
                        <ImageWithFallback
                          src={index === 0 ? 
                            "https://images.unsplash.com/photo-1740477959006-798042a324aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdm90aW5nJTIwc2VjdXJpdHklMjBjcnlwdG9ncmFwaHl8ZW58MXx8fHwxNzU4MzAyNTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" :
                            "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRpZ2l0YWwlMjBmb3JlbnNpY3MlMjB0b29scyUyMGN5YmVyc2VjdXJpdHl8ZW58MXx8fHwxNzU2ODMxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          }
                          alt={paper.title}
                          className="w-full h-32 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge
                            variant={
                              paper.status === "Published"
                                ? "default"
                                : paper.status === "Accepted"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {paper.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Paper Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors duration-200">
                          {paper.title}
                        </h4>
                        <div className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium">
                            Authors:
                          </span>{" "}
                          {paper.authors.join(", ")}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {paper.publishedDate || paper.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {paper.type}
                          </div>
                          {paper.citations > 0 && (
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              {paper.citations} citations
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-foreground/80 leading-relaxed">
                        {paper.abstract}
                      </p>

                      {/* Keywords */}
                      <div>
                        <div className="text-sm font-semibold mb-2">
                          Keywords:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {paper.keywords?.map(
                            (keyword, keywordIndex) => (
                              <Badge
                                key={keywordIndex}
                                variant="outline"
                                className="hover:bg-cyan-500 hover:text-white transition-colors duration-200"
                              >
                                {keyword}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Publication Details */}
                      <div className="text-sm text-muted-foreground">
                        <div>
                          <span className="font-medium">
                            Journal/Conference:
                          </span>{" "}
                          {paper.journal}
                        </div>
                        {paper.conference && (
                          <div>
                            <span className="font-medium">
                              Conference:
                            </span>{" "}
                            {paper.conference}
                          </div>
                        )}
                        <div>
                          <span className="font-medium">
                            DOI:
                          </span>{" "}
                          {paper.doiLink ? (
                            <a 
                              href={paper.doiLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-cyan-500 hover:text-cyan-600 hover:underline transition-colors duration-200"
                            >
                              {paper.doi}
                            </a>
                          ) : (
                            paper.doi
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={
                            paper.status !== "Published" || !paper.doiLink
                          }
                          onClick={() => {
                            if (paper.doiLink && paper.status === "Published") {
                              window.open(paper.doiLink, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className="hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          title={
                            paper.status !== "Published" 
                              ? "Paper not yet published" 
                              : !paper.doiLink 
                              ? "Link will be available when published" 
                              : "View published paper"
                          }
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {paper.status === "Published" && paper.doiLink 
                            ? "View Paper" 
                            : paper.status === "Published" 
                            ? "Paper Available" 
                            : "Coming Soon"}
                        </Button>
                        {paper.status === "Ongoing" && (
                          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                            <Award className="w-4 h-4" />
                            <span>Current Research</span>
                          </div>
                        )}
                        {paper.status === "Published" && (
                          <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                            <Award className="w-4 h-4" />
                            <span>Published Work</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Research Focus Areas
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="group-hover:text-cyan-500 transition-colors duration-200">
                      {area.area}
                    </span>
                    <Badge variant="secondary">
                      {area.papers} paper
                      {area.papers !== 1 ? "s" : ""}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Collaboration CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-cyan-500/20">
            <CardContent className="p-8">
              <FileText className="w-12 h-12 mx-auto mb-4 text-cyan-500" />
              <h3 className="text-2xl font-bold mb-4">
                Research Collaboration
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating on cybersecurity
                research or discussing my published work? I'm
                always open to academic partnerships and
                research opportunities.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Users className="w-4 h-4 mr-2" />
                Collaborate with Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}