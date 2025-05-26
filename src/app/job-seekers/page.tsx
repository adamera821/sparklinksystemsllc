'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const benefits = [
	{
		title: 'Competitive Compensation',
		description: 'Access to top-tier salary packages and comprehensive benefits',
		icon: (
			<svg
				className="h-8 w-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Career Growth',
		description: 'Opportunities to work with industry-leading companies',
		icon: (
			<svg
				className="h-8 w-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
				/>
			</svg>
		),
	},
	{
		title: 'Professional Development',
		description: 'Access to training and certification programs',
		icon: (
			<svg
				className="h-8 w-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
				/>
			</svg>
		),
	},
	{
		title: 'Job Security',
		description: 'Long-term contracts and permanent positions',
		icon: (
			<svg
				className="h-8 w-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
		),
	},
	{
		title: 'Personal Support',
		description: 'Dedicated recruiters to guide your career journey',
		icon: (
			<svg
				className="h-8 w-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Work-Life Balance',
		description: 'Flexible work arrangements and time-off policies',
		icon: (
			<svg
				className="h-8 w-8 text-blue-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
];

export default function JobSeekersPage() {
	return (
		<div className="bg-gray-900">
			{/* Hero Section */}
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/90 to-cyan-900/90 backdrop-blur-xl" />
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
							Advance Your IT Career
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
							Discover exciting opportunities with leading technology companies
						</p>
						<div className="mt-10">
							<Link
								href="/contact"
								className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-lg font-medium text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Submit Your Resume
							</Link>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Benefits Section */}
			<div className="py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl mb-12">
							Why Work With Us
						</h2>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{benefits.map((benefit, index) => (
								<motion.div
									key={benefit.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="group relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
									<div className="relative">
										<div className="mb-4 text-blue-400">{benefit.icon}</div>
										<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
											{benefit.title}
										</h3>
										<p className="text-gray-300">{benefit.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Job Categories */}
			<div className="relative overflow-hidden py-16 sm:py-24">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 backdrop-blur-3xl" />
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl mb-12">
							Job Categories
						</h2>
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{[
								'Full Stack Development',
								'Cloud Computing',
								'DevOps & SRE',
								'Data Engineering',
								'UI/UX Design',
								'Mobile Development',
								'Quality Assurance',
								'Product Management',
								'Cybersecurity',
							].map((category, index) => (
								<motion.div
									key={category}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.05 }}
									className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-4 text-gray-300 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/30"
								>
									{category}
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Application Process */}
			<div className="py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl mb-12">
							How It Works
						</h2>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
							{[
								{
									step: '1',
									title: 'Submit Resume',
									description: 'Share your experience and career goals with us',
								},
								{
									step: '2',
									title: 'Initial Screen',
									description: 'Quick discussion about your skills and preferences',
								},
								{
									step: '3',
									title: 'Job Match',
									description: 'We connect you with suitable opportunities',
								},
								{
									step: '4',
									title: 'Interview & Offer',
									description: 'We support you through the hiring process',
								},
							].map((step, index) => (
								<motion.div
									key={step.step}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="relative text-center"
								>
									<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto shadow-xl">
										<span className="text-xl font-bold text-white">
											{step.step}
										</span>
									</div>
									<h3 className="mt-6 text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
										{step.title}
									</h3>
									<p className="mt-2 text-gray-300">{step.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/90 to-cyan-900/90 backdrop-blur-xl" />
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Take the Next Step?
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
							Join our talent network and discover your next career opportunity
						</p>
						<div className="mt-8">
							<Link
								href="/contact"
								className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-lg font-medium text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Get Started Today
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
