import { useEffect, useRef, useState } from 'react';
import { Smartphone, Code, Globe, Database } from 'lucide-react';

const skillCategories = [
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['Kotlin', 'Jetpack Compose', 'Android SDK'],
  },
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python', 'Java', 'PHP', 'JavaScript'],
  },
  {
    icon: Globe,
    title: 'Web',
    skills: ['Laravel', 'Django', 'HTML/CSS', 'React'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'SQLite'],
  },
];

const techStack = [
  { name: 'Python', icon: 'Py' },
  { name: 'Java', icon: 'Ja' },
  { name: 'Kotlin', icon: 'Kt' },
  { name: 'Laravel', icon: 'Lv' },
  { name: 'Django', icon: 'Dj' },
  { name: 'PHP', icon: 'Ph' },
  { name: 'MySQL', icon: 'My' },
  { name: 'Git', icon: 'Gi' },
];

const detailedSkills = [
  { name: 'Python', proficiency: 90 },
  { name: 'Kotlin', proficiency: 85 },
  { name: 'Java', proficiency: 80 },
  { name: 'PHP', proficiency: 85 },
  { name: 'Laravel', proficiency: 90 },
  { name: 'Django', proficiency: 88 },
  { name: 'Jetpack Compose', proficiency: 90 },
  { name: 'MySQL', proficiency: 85 },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars
            setTimeout(() => {
              setAnimatedSkills(detailedSkills.map((s) => s.proficiency));
            }, 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-zinc-900/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500 rounded-full text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-indigo-500" />
                <h3 className="font-display font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-500/10 rounded-full text-sm text-indigo-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Skills with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {detailedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="space-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-zinc-500">{skill.proficiency}%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animatedSkills[index]
                      ? `${animatedSkills[index]}%`
                      : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div
          className="overflow-hidden py-6 bg-zinc-900 rounded-xl border border-zinc-800"
          data-aos="fade-up"
        >
          <div className="flex gap-12 animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-2 text-zinc-400 whitespace-nowrap"
              >
                <span className="text-indigo-500 font-mono">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
