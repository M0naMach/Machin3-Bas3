import { motion } from "motion/react";
import { Download, FileText, Briefcase, Award, GraduationCap, Shield } from "lucide-react";
import { getResumeData } from "@/data/portfolio/resumeStats";
import { isCertificationActive } from "@/data/portfolio/certifications";

export function ResumeSection() {
  const resumeData = getResumeData();
  const { stats, skills, certifications } = resumeData;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bryanna_Barley_Resume.pdf';
    link.click();
  };

  // Determine which stats to show (include certs if any exist)
  const displayStats = stats.certifications.total > 0
    ? [stats.experience, stats.projects, stats.skills, stats.certifications]
    : [stats.experience, stats.projects, stats.skills];

  return (
    <section id="resume" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl font-light text-emerald-50">Resume</h2>
            </motion.div>
            <p className="text-emerald-100/60 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my skills, experience, and creative journey
            </p>
          </div>

          {/* Resume Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-emerald-950/20 border border-emerald-500/20 rounded-[2rem] p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] transition-all duration-700"
          >
            {/* Quick Stats Grid - Dynamic */}
            <div className={`grid grid-cols-1 md:grid-cols-${displayStats.length} gap-8 mb-12`}>
              {displayStats.map((stat, index) => {
                const icons = [Briefcase, Award, GraduationCap, Shield];
                const colors = [
                  { icon: "text-primary", border: "border-primary/20", bg: "bg-primary/10" },
                  { icon: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/10" },
                  { icon: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/10" },
                  { icon: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/10" },
                ];
                const Icon = icons[index];
                const color = colors[index];

                return (
                  <div key={stat.label} className="text-center">
                    <div className={`w-16 h-16 rounded-2xl ${color.bg} border ${color.border} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${color.icon}`} />
                    </div>
                    <div className="text-2xl font-light text-emerald-50 mb-1">{stat.label}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-black">{stat.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary to-emerald-500 text-emerald-950 py-6 px-8 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(184,115,51,0.3)] hover:shadow-[0_0_50px_rgba(184,115,51,0.5)] transition-all duration-500 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Full Resume
            </motion.button>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-emerald-100/40 text-sm">
                PDF format • Last updated January 2026
              </p>
            </div>
          </motion.div>

          {/* Skills Preview - Dynamic from data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/60 font-black mb-4">Core Competencies</div>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-emerald-500/5 rounded-xl text-emerald-500/70 border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                  title={`${Math.round(skill.proficiency * 100)}% proficiency • ${skill.yearsUsed} years • ${skill.projectsUsed} projects`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section - Only show if certifications exist */}
          {certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="text-center mb-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/60 font-black mb-4">Professional Certifications</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, i) => {
                  const isActive = isCertificationActive(cert);
                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-emerald-950/10 border rounded-2xl p-6 backdrop-blur-sm ${
                        isActive
                          ? 'border-emerald-500/20 hover:border-emerald-500/40'
                          : 'border-emerald-500/10 opacity-60'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-emerald-50 font-bold text-sm mb-1">{cert.name}</h3>
                          <p className="text-emerald-400/60 text-xs mb-2">{cert.issuer}</p>
                          <p className="text-emerald-500/50 text-[10px] uppercase tracking-wider">
                            {cert.dateEarned}
                            {!isActive && cert.expiryDate && ` • Expired ${cert.expiryDate}`}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
