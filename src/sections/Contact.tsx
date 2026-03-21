import { useState } from 'react';
import { Mail, MapPin, Briefcase, Send, Github, Linkedin, Twitter, ChevronDown, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactMethod {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string | null;
}

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'brianmaweu505@gmail.com',
    href: 'mailto:brianmaweu505@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
  },
  {
    icon: Briefcase,
    label: 'Availability',
    value: 'Open to opportunities',
    href: null,
  },
];

const socialLinks: SocialLink[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Papercode2' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/brianmaweu' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/brianmaweu' },
  { 
    icon: Phone,
    label: 'WhatsApp', 
    href: 'https://wa.me/254740770403?text=Hello%20Brian%2C%20I%20would%20like%20to%20work%20with%20you'
  },
];
const faqs: FAQ[] = [
  {
    question: 'What type of projects do you work on?',
    answer:
      'I work on a variety of projects including mobile apps (Android with Kotlin), web applications (Laravel, Django), REST APIs, and desktop applications. I\'m open to both short-term and long-term collaborations.',
  },
  {
    question: 'What is your typical project process?',
    answer:
      'My process involves: 1) Understanding requirements and goals, 2) Planning and architecture design, 3) Iterative development with regular updates, 4) Thorough testing and quality assurance, 5) Deployment and post-launch support.',
  },
  {
    question: 'Are you available for freelance work?',
    answer:
      'Yes! I\'m currently available for freelance projects and consulting. Feel free to reach out with your project details and I\'ll get back to you with my availability and a quote within 24-48 hours.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'My main specialties are Kotlin with Jetpack Compose for Android, Laravel and Django for web development, Python and Java for backend, and various databases like MySQL, PostgreSQL, and MongoDB.',
  },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [notification, setNotification] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
    show: false,
    type: 'success',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Show success notification
      setNotification({
        show: true,
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      // Show error notification
      setNotification({
        show: true,
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, type: 'success', message: '' });
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      
      {/* Notification */}
      {notification.show && (
        <div className="fixed top-24 right-4 z-50 animate-slide-in">
          <div className={`px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 ${
            notification.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
          } text-white`}>
            <CheckCircle className="w-5 h-5" />
            <div>
              <h4 className="font-semibold">
                {notification.type === 'success' ? 'Success!' : 'Error!'}
              </h4>
              <p className="text-sm opacity-90">{notification.message}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Let's{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div data-aos="fade-right">
            <h3 className="font-display text-2xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hi, I'm always open to discussing new opportunities
              and interesting ideas.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <div 
                  key={method.label} 
                  className="flex items-center gap-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 rounded-xl flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500">{method.label}</span>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="block font-medium hover:text-indigo-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="block font-medium">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="font-display font-semibold mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all hover:transform hover:translate-y-[-2px]"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-xl"
            >
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  Send Me a Message
                </h3>
                <p className="text-zinc-400 text-sm">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-300">
                    <Mail className="w-4 h-4 inline mr-2 text-indigo-500" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Qwerty Bright"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-zinc-950/50 border-zinc-800 focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300">
                    <Mail className="w-4 h-4 inline mr-2 text-indigo-500" />
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="qwerty@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-zinc-950/50 border-zinc-800 focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <Label htmlFor="subject" className="text-zinc-300">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-zinc-950/50 border-zinc-800 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-zinc-300">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-zinc-950/50 border-zinc-800 focus:border-indigo-500 resize-none transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg hover:shadow-indigo-500/25 transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3
            className="font-display text-2xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/30 transition-colors group"
                >
                  <span className="font-medium group-hover:text-indigo-400 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-500 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}