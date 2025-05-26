import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'SparkLink Systems - IT Staffing Solutions',
  description: 'Leading IT staffing agency connecting top tech talent with innovative companies. Specializing in permanent placement, contract-to-hire, and project-based staffing.',
  keywords: [
    'IT staffing',
    'tech recruitment',
    'software engineers',
    'IT jobs',
    'tech talent',
    'technology recruitment',
    'IT careers',
    'tech staffing',
    'IT recruitment agency',
    'tech hiring',
  ],
};

export const metadata: { [key: string]: Metadata } = {
  home: {
    ...defaultMetadata,
  },
  employers: {
    ...defaultMetadata,
    title: 'Hire Top Tech Talent | SparkLink Systems',
    description: 'Find exceptional IT professionals for your team. Our specialized recruitment process ensures the perfect match for your technical requirements and company culture.',
  },
  jobSeekers: {
    ...defaultMetadata,
    title: 'IT Career Opportunities | SparkLink Systems',
    description: 'Discover exciting tech career opportunities with leading companies. We connect IT professionals with roles that match their skills and career aspirations.',
  },
  about: {
    ...defaultMetadata,
    title: 'About SparkLink Systems | IT Staffing Excellence',
    description: 'Learn about our mission to transform IT staffing. We combine industry expertise with personalized service to create lasting partnerships.',
  },
  contact: {
    ...defaultMetadata,
    title: 'Contact SparkLink Systems | IT Staffing Solutions',
    description: 'Get in touch with our IT staffing experts. Whether you\'re hiring or seeking opportunities, we\'re here to help you succeed.',
  },
  industries: {
    ...defaultMetadata,
    title: 'Industries We Serve | SparkLink Systems',
    description: 'We provide specialized IT staffing solutions across various industries including technology, healthcare, finance, and more.',
  },
  services: {
    ...defaultMetadata,
    title: 'IT Staffing Services | SparkLink Systems',
    description: 'Comprehensive IT staffing services including permanent placement, contract-to-hire, and project-based staffing solutions.',
  },
};
