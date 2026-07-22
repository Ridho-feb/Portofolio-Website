'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { FolderGit2, ExternalLink, Network, Layers, ShieldCheck, ArrowRight, Eye } from 'lucide-react';
import { ImageModal } from './ImageModal';

export const ProjectsRenderer: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; alt: string; title: string; caption: string } | null>(null);

  return (
    <div className="font-mono text-xs sm:text-sm my-3 space-y-6 text-[#F0F6FC]">
      <div className="text-[#8B949E] text-xs flex items-center justify-between border-b border-[#30363D] pb-1">
        <span>ENTERPRISE NETWORK & LINUX PROJECTS</span>
        <span>{projectsData.length} PROJECTS LOADED</span>
      </div>

      {projectsData.map((project, idx) => (
        <div key={project.id} className="p-4 bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg space-y-4">
          
          {/* Project Title & Links */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363D] pb-3">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[#3FB950] font-bold">[{idx + 1}]</span>
                <h2 className="text-base sm:text-lg font-bold text-[#F0F6FC]">{project.title}</h2>
              </div>
              <p className="text-[#58A6FF] text-xs font-semibold mt-0.5">{project.subtitle}</p>
            </div>

            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="px-3 py-1 bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] rounded text-xs flex items-center space-x-1.5 transition-colors self-start sm:self-center"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-[#8B949E]" />
              </a>
            )}
          </div>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-2 py-0.5 bg-[#0D1117] text-[#3FB950] border border-[#3FB950]/30 rounded text-[11px] font-mono">
                {tech}
              </span>
            ))}
          </div>

          {/* Architecture Diagram Box */}
          {project.architectureDiagram && (
            <div className="bg-[#0D1117] border border-[#30363D] rounded-lg p-3 space-y-1.5 overflow-x-auto">
              <div className="text-xs font-bold text-[#D29922] flex items-center space-x-1.5">
                <Network className="w-4 h-4" />
                <span>Topology & Packet Routing Diagram</span>
              </div>
              <pre className="text-[11px] text-[#F0F6FC] font-mono leading-tight whitespace-pre">
                {project.architectureDiagram}
              </pre>
            </div>
          )}

          {/* Screenshot Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#8B949E] flex items-center space-x-1.5">
                <Eye className="w-3.5 h-3.5 text-[#58A6FF]" />
                <span>Deployment Screenshots & Evidence</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveModalImage({ src: img.url, alt: img.alt, title: project.title, caption: img.caption })}
                    className="group relative bg-[#0D1117] border border-[#30363D] rounded-lg overflow-hidden cursor-pointer hover:border-[#58A6FF] transition-colors"
                  >
                    <div className="h-32 w-full overflow-hidden relative">
                      <img 
                        src={img.url} 
                        alt={img.alt} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs text-[#F0F6FC] font-mono">
                        Click to enlarge
                      </div>
                    </div>
                    <div className="p-2 text-[11px] text-[#8B949E] truncate border-t border-[#30363D]">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features / Deliverables */}
          <div className="space-y-1.5 bg-[#0D1117] p-3 rounded-lg border border-[#30363D]">
            <div className="text-xs font-bold text-[#58A6FF] flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3FB950]" />
              <span>Key Features & Functional Outcomes</span>
            </div>
            <ul className="space-y-1 list-disc list-inside text-xs text-[#F0F6FC] font-sans">
              {project.features.map((feat, i) => (
                <li key={i} className="leading-relaxed">{feat}</li>
              ))}
            </ul>
          </div>

          {/* Lessons & Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-2.5 bg-[#0D1117] border border-[#30363D] rounded-lg space-y-1">
              <span className="text-[#D29922] font-bold block flex items-center space-x-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Lessons Learned:</span>
              </span>
              <p className="text-[#8B949E] font-sans leading-relaxed">{project.lessonsLearned}</p>
            </div>

            <div className="p-2.5 bg-[#0D1117] border border-[#30363D] rounded-lg space-y-1">
              <span className="text-[#3FB950] font-bold block flex items-center space-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
                <span>Future Roadmap:</span>
              </span>
              <p className="text-[#8B949E] font-sans leading-relaxed">{project.futureImprovements}</p>
            </div>
          </div>

        </div>
      ))}

      {activeModalImage && (
        <ImageModal
          src={activeModalImage.src}
          alt={activeModalImage.alt}
          title={activeModalImage.title}
          caption={activeModalImage.caption}
          isOpen={!!activeModalImage}
          onClose={() => setActiveModalImage(null)}
        />
      )}
    </div>
  );
};
