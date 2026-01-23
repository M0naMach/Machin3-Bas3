/**
 * Dynamic Resume Generator Component
 * Generates print-ready resume from live portfolio data
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, Printer, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import { getResumeData } from "@/data/portfolio/resumeStats";
import { caseStudies } from "@/data/portfolio/caseStudies";

interface ResumeSectionConfig {
  contact: boolean;
  skills: boolean;
  certifications: boolean;
  projects: boolean;
  stats: boolean;
  selectedProjects: string[]; // IDs of selected projects
}

interface ResumeGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeGenerator({ isOpen, onClose }: ResumeGeneratorProps) {
  const resumeData = getResumeData();
  const [config, setConfig] = useState<ResumeSectionConfig>({
    contact: true,
    skills: true,
    certifications: true,
    projects: true,
    stats: true,
    selectedProjects: caseStudies.slice(0, 3).map(p => p.id), // Default to first 3
  });
  const [showPreview, setShowPreview] = useState(false);

  const toggleProject = (projectId: string) => {
    setConfig(prev => ({
      ...prev,
      selectedProjects: prev.selectedProjects.includes(projectId)
        ? prev.selectedProjects.filter(id => id !== projectId)
        : [...prev.selectedProjects, projectId]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Browser's print to PDF functionality
    window.print();
  };

  const selectedProjectsData = caseStudies.filter(p =>
    config.selectedProjects.includes(p.id)
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-emerald-950/90 border border-emerald-500/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden backdrop-blur-xl"
        >
          {/* Header */}
          <div className="p-8 border-b border-emerald-500/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-light text-emerald-50">Generate Resume</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <X className="w-5 h-5 text-emerald-400" />
              </button>
            </div>
            <p className="text-emerald-400/70 text-sm">
              Select sections to include in your dynamic resume. Data is always current.
            </p>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-240px)]">
            {/* Section Toggles */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <div>
                  <h3 className="text-emerald-50 font-bold text-sm">Contact Information</h3>
                  <p className="text-emerald-400/60 text-xs">Email, phone, location, links</p>
                </div>
                <input
                  type="checkbox"
                  checked={config.contact}
                  onChange={(e) => setConfig({...config, contact: e.target.checked})}
                  className="w-5 h-5 rounded bg-emerald-500/10 border-emerald-500/30"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <div>
                  <h3 className="text-emerald-50 font-bold text-sm">Skills & Proficiency</h3>
                  <p className="text-emerald-400/60 text-xs">{resumeData.skills.length} skills tracked</p>
                </div>
                <input
                  type="checkbox"
                  checked={config.skills}
                  onChange={(e) => setConfig({...config, skills: e.target.checked})}
                  className="w-5 h-5 rounded bg-emerald-500/10 border-emerald-500/30"
                />
              </div>

              {resumeData.certifications.length > 0 && (
                <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                  <div>
                    <h3 className="text-emerald-50 font-bold text-sm">Certifications</h3>
                    <p className="text-emerald-400/60 text-xs">{resumeData.certifications.length} active certifications</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.certifications}
                    onChange={(e) => setConfig({...config, certifications: e.target.checked})}
                    className="w-5 h-5 rounded bg-emerald-500/10 border-emerald-500/30"
                  />
                </div>
              )}

              <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <div>
                  <h3 className="text-emerald-50 font-bold text-sm">Statistics Overview</h3>
                  <p className="text-emerald-400/60 text-xs">Years, projects, skills summary</p>
                </div>
                <input
                  type="checkbox"
                  checked={config.stats}
                  onChange={(e) => setConfig({...config, stats: e.target.checked})}
                  className="w-5 h-5 rounded bg-emerald-500/10 border-emerald-500/30"
                />
              </div>

              <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-emerald-50 font-bold text-sm">Portfolio Projects</h3>
                    <p className="text-emerald-400/60 text-xs">Select projects to include</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.projects}
                    onChange={(e) => setConfig({...config, projects: e.target.checked})}
                    className="w-5 h-5 rounded bg-emerald-500/10 border-emerald-500/30"
                  />
                </div>

                {config.projects && (
                  <div className="space-y-2 mt-4 pl-4 border-l-2 border-emerald-500/20">
                    {caseStudies.filter(p => p.category === "coding").map(project => (
                      <label key={project.id} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={config.selectedProjects.includes(project.id)}
                          onChange={() => toggleProject(project.id)}
                          className="w-4 h-4 rounded bg-emerald-500/10 border-emerald-500/30"
                        />
                        <span className="text-emerald-300/80 text-sm group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-8 border-t border-emerald-500/20 flex gap-4">
            <button
              onClick={handlePrint}
              className="flex-1 bg-gradient-to-r from-primary to-emerald-500 text-emerald-950 py-4 px-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(184,115,51,0.5)] transition-all duration-300"
            >
              <Printer className="w-5 h-5" />
              Print / Save as PDF
            </button>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-6 py-4 rounded-2xl border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              {showPreview ? "Hide" : "Preview"}
            </button>
          </div>
        </motion.div>

        {/* Print Preview (hidden on screen, visible when printing) */}
        {showPreview || true /* Always render for print */}
        <ResumePrintTemplate
          config={config}
          resumeData={resumeData}
          projects={selectedProjectsData}
          visible={showPreview}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Separate print template component
function ResumePrintTemplate({ config, resumeData, projects, visible }: any) {
  return (
    <div className={`${visible ? 'block' : 'hidden'} print:block fixed inset-0 bg-white z-[100] overflow-auto print:relative print:z-auto`}>
      <div className="max-w-[8.5in] mx-auto p-12 print:p-0 bg-white text-black">
        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-gray-300">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Bryanna Barley</h1>
          <p className="text-lg text-gray-600 mb-4">Systems Designer • Creative Technologist • AI Specialist</p>

          {config.contact && (
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>machin3.space</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>github.com/M0naMach</span>
              </div>
            </div>
          )}
        </header>

        {/* Stats */}
        {config.stats && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-3xl font-bold text-gray-900">{resumeData.stats.experience.years}+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-3xl font-bold text-gray-900">{resumeData.stats.projects.total}+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-3xl font-bold text-gray-900">{resumeData.stats.skills.total}+</div>
                <div className="text-sm text-gray-600">Technical Skills</div>
              </div>
            </div>
          </section>
        )}

        {/* Skills */}
        {config.skills && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Proficiency</h2>
            <div className="grid grid-cols-2 gap-4">
              {resumeData.skills.map((skill: any) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600"
                      style={{ width: `${skill.proficiency * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{Math.round(skill.proficiency * 100)}%</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {config.projects && projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="space-y-4">
              {projects.map((project: any) => (
                <div key={project.id} className="border-l-4 border-emerald-600 pl-4">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {config.certifications && resumeData.certifications.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="space-y-3">
              {resumeData.certifications.map((cert: any) => (
                <div key={cert.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-gray-600">{cert.dateEarned}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>Generated {new Date().toLocaleDateString()} • Always current at machin3.space/portfolio</p>
        </footer>
      </div>
    </div>
  );
}
