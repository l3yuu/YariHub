import { ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_URL from '../config';
import Folder from './Folder';
import SectionMoreLink from './SectionMoreLink';
import type { SectionPageProps } from '../types/section';

interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  isVisible: boolean;
  badge: string;
}

const SelectedWork = ({ standalone = false, preview = false, moreHref = '/portfolio' }: SectionPageProps) => {
  const sectionPad = standalone ? 'pt-28 pb-24' : 'py-24';
  const [projects, setProjects] = useState<Project[]>([
    {
      _id: 'p1',
      title: 'POS SYSTEM',
      description: 'A modern shopping experience.',
      tags: ['React', 'Node.js'],
      gradient: 'from-blue-600 to-cyan-500',
      isVisible: true,
      badge: 'PRO'
    },
    {
      _id: 'p2',
      title: 'SAVINGS TRACKER APP',
      description: 'Secure financial management.',
      tags: ['TypeScript', 'Auth'],
      gradient: 'from-violet-600 to-indigo-500',
      isVisible: true,
      badge: 'FINTECH'
    },
    {
      _id: 'p3',
      title: 'PAYROLL SYSTEM',
      description: 'Manages employee compensation and benefits.',
      tags: ['PHP', 'MySQL'],
      gradient: 'from-emerald-500 to-teal-400',
      isVisible: true,
      badge: 'FINTECH'
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`);
        if (response.ok) {
          const data = await response.json();
          const visibleData = data.filter((p: Project) => p.isVisible);
          if (visibleData.length > 0) {
            setProjects(visibleData);
          }
        }
      } catch (err) {
        console.error('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className={`${sectionPad} bg-slate-50 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-20 gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Selected Work
            </h2>
          </div>
          <Link
            to={moreHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group transition-colors shrink-0"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Folder Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400">Our amazing projects are coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 pt-10">
            {projects.slice(0, 6).map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <Folder
                    size={2.2}
                    color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
                    items={[
                      <div className="w-full h-full p-2 flex flex-col justify-center items-center bg-white">
                        <div className={`w-full h-8 rounded-sm mb-1 bg-gradient-to-br ${project.gradient} opacity-20`} />
                        <span className="text-[6px] font-bold text-slate-400 uppercase tracking-tighter">Project Spec</span>
                      </div>,
                      <div className="w-full h-full p-2 flex flex-col justify-center items-center bg-white">
                        <span className="text-[8px] font-black text-blue-600 mb-1 leading-none">{project.badge}</span>
                        <div className="w-full h-[1px] bg-slate-100" />
                      </div>,
                      <div className="w-full h-full overflow-hidden bg-white flex flex-col">
                        <div className={`w-full h-1/2 bg-gradient-to-br ${project.gradient}`} />
                        <div className="p-2 flex-1 flex flex-col justify-between">
                          <div className="space-y-1">
                            <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                            <div className="w-3/4 h-1.5 bg-slate-100 rounded-full" />
                          </div>
                          <ExternalLink className="w-3 h-3 text-slate-300 ml-auto" />
                        </div>
                      </div>
                    ]}
                  />
                </div>

                <div className="text-center mt-12 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {preview && moreHref && <SectionMoreLink to={moreHref} label="View full portfolio" />}
    </section>
  );
};

export default SelectedWork;
