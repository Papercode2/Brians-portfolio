import { Quote, Check } from 'lucide-react';

const philosophyPoints = [
  { label: 'Clean Code' },
  { label: 'Best Practices' },
  { label: 'User-Centric' },
  { label: 'Scalable' },
];

export function Philosophy() {
  return (
    <section className="py-24 bg-zinc-900/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          {/* Quote Icon */}
          <div className="mb-8">
            <Quote className="w-16 h-16 text-indigo-500/50 mx-auto" />
          </div>

          {/* Quote */}
          <blockquote className="font-display text-2xl sm:text-3xl italic leading-relaxed mb-8">
            &ldquo;Code that makes a difference. I believe in writing clean,
            maintainable code that solves real problems and delivers exceptional
            user experiences.&rdquo;
          </blockquote>

          {/* Philosophy Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {philosophyPoints.map((point, index) => (
              <div
                key={point.label}
                className="flex items-center gap-2 px-5 py-3 bg-zinc-900 rounded-full border border-zinc-800"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Check className="w-4 h-4 text-emerald-500" />
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
