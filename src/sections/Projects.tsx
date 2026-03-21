import { useState } from 'react';
import { Github, ExternalLink, Star, Smartphone, Globe, Server, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'android', label: 'Android', icon: Smartphone },
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'api', label: 'API', icon: Server },
  { id: 'desktop', label: 'Desktop', icon: Monitor },
];

const projects = [
  {
    id: 1,
    title: 'Modern Android Application',
    description:
      'Built with Kotlin and Jetpack Compose, featuring modern UI patterns and best practices with MVVM architecture.',
    category: 'android',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room'],
    featured: true,
    github: 'https://github.com/Papercode2',
  },
  {
    id: 2,
    title: 'Laravel E-Commerce Platform',
    description:
      'Full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    category: 'web',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    featured: true,
    github: 'https://github.com/Papercode2',
  },
  {
    id: 3,
    title: 'Django REST API Service',
    description:
      'Scalable RESTful API built with Django REST Framework, featuring JWT authentication and comprehensive documentation.',
    category: 'api',
    technologies: ['Django', 'DRF', 'PostgreSQL', 'Docker'],
    featured: true,
    github: 'https://github.com/Papercode2',
  },
  {
    id: 4,
    title: 'Java Desktop Management System',
    description:
      'Comprehensive desktop application for business management with inventory tracking and sales reporting.',
    category: 'desktop',
    technologies: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    featured: false,
    github: 'https://github.com/Papercode2',
  },
  {
    id: 5,
    title: 'Task Management Dashboard',
    description:
      'Collaborative task management application with real-time updates and team collaboration features.',
    category: 'web',
    technologies: ['Django', 'React', 'WebSocket', 'Redis'],
    featured: false,
    github: 'https://github.com/Papercode2',
  },
  {
    id: 6,
    title: 'Payment Gateway Integration API',
    description:
      'Secure payment processing API with multiple payment provider support and webhook notifications.',
    category: 'api',
    technologies: ['Laravel', 'Stripe API', 'PayPal API', 'PHPUnit'],
    featured: false,
    github: 'https://github.com/Papercode2',
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'android':
      return 'from-green-500 to-emerald-600';
    case 'web':
      return 'from-red-500 to-rose-600';
    case 'api':
      return 'from-blue-500 to-indigo-600';
    case 'desktop':
      return 'from-cyan-500 to-teal-600';
    default:
      return 'from-indigo-500 to-purple-600';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'android':
      return <Smartphone className="w-8 h-8" />;
    case 'web':
      return <Globe className="w-8 h-8" />;
    case 'api':
      return <Server className="w-8 h-8" />;
    case 'desktop':
      return <Monitor className="w-8 h-8" />;
    default:
      return <Globe className="w-8 h-8" />;
  }
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500 rounded-full text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-indigo-500/50 hover:text-white'
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
                    project.category
                  )} flex items-center justify-center text-white`}
                >
                  {getCategoryIcon(project.category)}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-500 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <button className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center text-white hover:bg-zinc-600 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs text-indigo-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Button
            size="lg"
            onClick={() => window.open('https://github.com/Papercode2', '_blank')}
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white group"
          >
            View All Projects
            <Github className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
