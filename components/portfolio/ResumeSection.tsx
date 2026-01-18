import { motion } from "motion/react";
import { Download, FileText, Briefcase, Award, GraduationCap } from "lucide-react";

export function ResumeSection() {
  const handleDownload = () => {
    // This will trigger a download - you can replace with your actual resume file
    // For now, it will download a placeholder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
    link.download = 'Mona_Machin3_Resume.pdf';
    link.click();
  };

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
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-light text-emerald-50 mb-1">5+ Years</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-black">Experience</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-2xl font-light text-emerald-50 mb-1">12+ Projects</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-black">Completed</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl font-light text-emerald-50 mb-1">18+ Skills</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-black">Mastered</div>
              </div>
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

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/60 font-black mb-4">Core Competencies</div>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "React & TypeScript",
                "UI/UX Design",
                "Motion Design",
                "Creative Coding",
                "Metalwork & Craft",
                "Sound Design",
                "3D Rendering",
                "Generative Art"
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-emerald-500/5 rounded-xl text-emerald-500/70 border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
