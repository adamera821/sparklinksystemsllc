'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const benefits = [
	{
		title: 'Specialized IT Talent',
		description:
			'Access to a curated pool of tech professionals with expertise across various domains.',
	},
	{
		title: 'Fast Placement',
		description:
			'Streamlined recruitment process to fill your positions quickly without compromising quality.',
	},
	{
		title: 'Cost-Effective',
		description:
			'Competitive rates and flexible hiring models to optimize your staffing budget.',
	},
	{
		title: 'Quality Assurance',
		description:
			'Rigorous screening and skill assessment to ensure the best fit for your team.',
	},
];

const hiringProcess = [
	{
		step: '1',
		title: 'Initial Consultation',
		description:
			'We discuss your staffing needs, company culture, and technical requirements.',
	},
	{
		step: '2',
		title: 'Talent Search',
		description:
			'Our team identifies and screens qualified candidates from our extensive network.',
	},
	{
		step: '3',
		title: 'Candidate Presentation',
		description:
			'Review pre-vetted candidates with detailed profiles and technical assessments.',
	},
	{
		step: '4',
		title: 'Interview & Selection',
		description: 'Conduct interviews and select the ideal candidate for your team.',
	},
];

const testimonials = [
	{
		quote:
			'SparkLink Systems helped us find exceptional tech talent quickly. Their understanding of our needs was spot-on.',
		author: 'Sarah Chen',
		position: 'CTO',
		company: 'TechVision Inc.',
	},
	{
		quote:
			'The quality of candidates and the speed of placement exceeded our expectations. Highly recommended!',
		author: 'Michael Rodriguez',
		position: 'Engineering Manager',
		company: 'DataFlow Solutions',
	},
];

export default function EmployersPage() {
	return (
		<div className="bg-gray-900">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/90 to-cyan-900/90 mix-blend-multiply" />
				</div>
				<div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Find Your Next Tech Star
					</h1>
					<p className="mt-6 max-w-3xl text-xl text-blue-100">
						Partner with SparkLink Systems to access top IT talent and transform
						your tech workforce.
					</p>
					<div className="mt-10">
						<Link
							href="/contact"
							className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-base font-medium text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							Start Hiring
						</Link>
					</div>
				</div>
			</div>

			{/* Benefits Section */}
			<div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Why Choose Us
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							We bring years of experience in IT staffing, combining industry
							knowledge with a personalized approach.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
							{benefits.map((benefit) => (
								<motion.div
									key={benefit.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5 }}
									className="relative"
								>
									<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
										{benefit.title}
									</h3>
									<p className="mt-2 text-base text-gray-300">
										{benefit.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Process Section */}
			<div className="bg-gray-900 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Our Hiring Process
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							A streamlined approach to finding your perfect tech match
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
							{hiringProcess.map((step) => (
								<motion.div
									key={step.step}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5 }}
									className="relative"
								>
									<div className="flex items-center gap-4">
										<span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg">
											{step.step}
										</span>
										<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
											{step.title}
										</h3>
									</div>
									<p className="mt-4 text-base text-gray-300">
										{step.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Testimonials Section */}
			<div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20">
				<div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Client Success Stories
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							Hear from companies that have transformed their tech teams with our
							help
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
						{testimonials.map((testimonial) => (
							<motion.div
								key={testimonial.author}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="flex flex-col backdrop-blur-xl bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
							>
								<blockquote className="flex-1">
									<p className="text-lg text-gray-300">{testimonial.quote}</p>
								</blockquote>
								<div className="mt-6 border-t border-gray-800 pt-6">
									<div className="flex items-start">
										<div>
											<p className="font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
												{testimonial.author}
											</p>
											<p className="text-sm text-blue-300">
												{testimonial.position}
											</p>
											<p className="text-sm text-gray-500">
												{testimonial.company}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900">
				<div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-16">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Build Your Dream Tech Team?
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
							Let's discuss your staffing needs and find the perfect tech talent
							for your organization.
						</p>
						<div className="mt-8">
							<Link
								href="/contact"
								className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-base font-medium text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Schedule a Consultation
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
