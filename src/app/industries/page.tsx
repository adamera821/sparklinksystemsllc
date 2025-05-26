'use client';

import { motion } from 'framer-motion';

const industries = [
	{
		title: 'Healthcare & Life Sciences',
		description:
			'Supporting digital transformation in healthcare with specialized IT talent for medical systems, telemedicine, and health informatics.',
		icon: '🏥',
		gradient: 'from-blue-500 to-cyan-500',
	},
	{
		title: 'Financial Services',
		description:
			'Providing technical expertise for fintech, banking systems, and regulatory compliance solutions.',
		icon: '💰',
		gradient: 'from-indigo-500 to-purple-500',
	},
	{
		title: 'Technology & Software',
		description:
			'Staffing solutions for software development, cloud computing, and digital product companies.',
		icon: '💻',
		gradient: 'from-purple-500 to-pink-500',
	},
	{
		title: 'Manufacturing & Industry',
		description:
			'Supporting Industry 4.0 initiatives with expertise in IoT, automation, and industrial software.',
		icon: '🏭',
		gradient: 'from-blue-500 to-indigo-500',
	},
	{
		title: 'E-commerce & Retail',
		description:
			'Digital transformation expertise for online retail, inventory management, and customer experience.',
		icon: '🛍️',
		gradient: 'from-cyan-500 to-blue-500',
	},
	{
		title: 'Telecommunications',
		description:
			'Technical talent for network infrastructure, 5G implementation, and communications systems.',
		icon: '📡',
		gradient: 'from-pink-500 to-rose-500',
	},
];

export default function IndustriesPage() {
	return (
		<div className="bg-gray-900">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/90 to-cyan-900/90 mix-blend-multiply" />
				</div>
				<div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Industries We Serve
					</h1>
					<p className="mt-6 max-w-3xl text-xl text-blue-100">
						Delivering specialized IT staffing solutions across diverse sectors
					</p>
				</div>
			</div>

			{/* Industries Grid */}
			<div className="relative py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Our Industry Expertise
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							We understand the unique challenges and requirements of each industry
							we serve
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{industries.map((industry, index) => (
							<motion.div
								key={industry.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
							>
								<div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
								<div className="relative">
									<div className="text-4xl mb-4">{industry.icon}</div>
									<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
										{industry.title}
									</h3>
									<p className="text-gray-300">{industry.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Expertise Section */}
			<div className="py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl mb-12">
							Our Industry Advantage
						</h2>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Specialized Talent Pool
							</h3>
							<p className="text-gray-300">
								Access to professionals with industry-specific certifications and
								experience.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Industry Insights
							</h3>
							<p className="text-gray-300">
								Deep understanding of sector-specific challenges and solutions.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Compliance Focus
							</h3>
							<p className="text-gray-300">
								Ensuring all placements meet industry regulations and standards.
							</p>
						</motion.div>
					</div>
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
							Ready to Find Industry-Specific Talent?
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
							Let us help you find the right technical expertise for your industry
						</p>
						<div className="mt-8">
							<a
								href="/contact"
								className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-lg font-medium text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Contact Us Today
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
