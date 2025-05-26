'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/90 to-cyan-900/90 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 relative">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="relative h-10 w-[180px]"
              >
                <Image
                  src="/logo.svg"
                  alt="SparkLink Systems"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-blue-400/0 rounded-lg"
                  whileHover={{ scale: 1.1, opacity: 0.2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                />
              </motion.div>
            </Link>
            <p className="text-base text-gray-300">
              Connecting top IT talent with innovative companies.
              Building the future of technology staffing.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Contract Staffing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Direct Hire
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Contract-to-Hire
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">For Employers</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/employers" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Hire Talent
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Industries
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">For Job Seekers</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/job-seekers" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Find Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="/job-seekers" className="text-base text-gray-300 hover:text-blue-200 hover:bg-blue-500/10 px-2 py-1 rounded-md transition-all duration-300">
                      Submit Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
