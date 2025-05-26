'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FeatureCard from '@/components/FeatureCard';
import { 
  UserGroupIcon, 
  LightBulbIcon, 
  ClockIcon, 
  ChartBarIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Expert Matching',
    description: 'Our specialized recruiters understand both technical requirements and cultural fit.',
    icon: UserGroupIcon,
  },
  {
    title: 'Speed to Hire',
    description: 'Access our extensive network of pre-vetted IT professionals for quick placement.',
    icon: ClockIcon,
  },
  {
    title: 'Quality Focus',
    description: 'Rigorous screening process ensures only top-tier candidates are presented.',
    icon: ChartBarIcon,
  },
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of IT roles and technical requirements across industries.',
    icon: LightBulbIcon,
  },
  {
    title: 'Flexible Solutions',
    description: 'Contract, permanent, and contract-to-hire options to suit your needs.',
    icon: UserGroupIcon,
  },
  {
    title: 'Ongoing Support',
    description: 'Dedicated account management and continuous placement support.',
    icon: ClockIcon,
  }
];

const stats = [
  { id: 1, name: 'Global Clients', value: '200+' },
  { id: 2, name: 'Successful Placements', value: '1000+' },
  { id: 3, name: 'Client Retention Rate', value: '95%' },
  { id: 4, name: 'Tech Stack Coverage', value: '50+' },
];

const techExpertise = [
  { category: 'Frontend', skills: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript'] },
  { category: 'Backend', skills: ['Node.js', 'Python', 'Java', 'C#', '.NET'] },
  { category: 'Cloud', skills: ['AWS', 'Azure', 'GCP', 'DevOps', 'Kubernetes'] },
  { category: 'Data', skills: ['SQL', 'MongoDB', 'Data Science', 'AI/ML', 'Big Data'] },
];

const testimonials = [
  {
    content: "SparkLink Systems has been instrumental in building our tech team. Their understanding of our needs and the quality of candidates is exceptional.",
    author: "Sarah Chen",
    position: "CTO",
    company: "TechVision Global"
  },
  {
    content: "The speed and precision with which they match candidates to our requirements is impressive. A trusted partner in our growth journey.",
    author: "Michael Rodriguez",
    position: "VP of Engineering",
    company: "InnovateTech Solutions"
  },
  {
    content: "Their expertise in IT staffing is unmatched. They've helped us scale our development team with top talent consistently.",
    author: "David Kim",
    position: "Engineering Director",
    company: "CloudScale Systems"
  }
];

const recognitions = [
  {
    name: "Top IT Staffing Agency 2025",
    logo: "/awards/award1.svg"
  },
  {
    name: "Best Workplace Culture 2024",
    logo: "/awards/award2.svg"
  },
  {
    name: "Excellence in IT Recruitment",
    logo: "/awards/award3.svg"
  }
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900/90 to-cyan-900/90">
      {/* Hero Section */}
      <div className="relative isolate">
        {/* Background decorative elements */}
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-cyan-400 opacity-10"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 bg-clip-text text-transparent sm:text-6xl">
              Your Gateway to Tech Talent Excellence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Connecting innovative companies with exceptional IT professionals. 
              Transform your workforce with our expert staffing solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/employers"
                className="rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                Hire Talent
              </Link>
              <Link
                href="/job-seekers"
                className="rounded-xl bg-white/10 backdrop-blur-lg px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Find Jobs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center"
              >
                <motion.dt
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.dt>
                <motion.dd
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 text-sm font-medium text-gray-300"
                >
                  {stat.name}
                </motion.dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent sm:text-4xl"
            >
              Why Choose SparkLink Systems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg leading-8 text-gray-300"
            >
              Experience the difference with our comprehensive IT staffing solutions
            </motion.p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              See what our clients say about their experience with SparkLink Systems
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col justify-between bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div>
                  <p className="text-lg text-gray-300">"{testimonial.content}"</p>
                  <div className="mt-6">
                    <p className="font-semibold text-blue-400">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trust Indicators Section */}
      <div className="relative py-16 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <ShieldCheckIcon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-blue-300">Verified Professionals</h3>
              <p className="mt-2 text-sm text-center text-gray-400">Rigorous screening and verification process</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <BuildingOfficeIcon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-blue-300">Enterprise Ready</h3>
              <p className="mt-2 text-sm text-center text-gray-400">Serving Fortune 500 companies</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <CpuChipIcon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-blue-300">Tech Expertise</h3>
              <p className="mt-2 text-sm text-center text-gray-400">Specialized in modern tech stacks</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <TrophyIcon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-blue-300">Industry Recognition</h3>
              <p className="mt-2 text-sm text-center text-gray-400">Award-winning staffing solutions</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Expertise Section */}
      <div className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent sm:text-4xl">
              Technology Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We specialize in placing professionals across modern technology stacks
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {techExpertise.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 p-0.5 shadow-2xl">
            <div className="relative rounded-2xl bg-gray-900/95 backdrop-blur-2xl px-8 py-12 sm:px-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-100 bg-clip-text text-transparent sm:text-4xl">
                  Ready to Transform Your Tech Team?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                  Let's discuss how we can help you achieve your IT staffing goals
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-semibold leading-6 text-gray-200 hover:text-blue-300 transition-all duration-300"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}