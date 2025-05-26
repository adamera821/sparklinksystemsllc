'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const staffingServices = [
	{
		title: 'Contract Staffing',
		description:
			'Flexible IT staffing solutions for project-based needs, providing skilled professionals for short to long-term assignments.',
		features: [
			'Quick talent deployment',
			'Flexible contract durations',
			'Skilled professionals',
			'Cost-effective solutions',
		],
	},
	{
		title: 'Direct Hire',
		description:
			'Full-time placement services connecting companies with permanent IT professionals who match their culture and requirements.',
		features: [
			'Thorough candidate screening',
			'Culture fit assessment',
			'Industry expertise',
			'Long-term success focus',
		],
	},
	{
		title: 'Contract-to-Hire',
		description:
			'Trial period staffing solution allowing both parties to evaluate fit before committing to permanent employment.',
		features: [
			'Risk-free evaluation',
			'Performance assessment',
			'Seamless transition',
			'Team integration',
		],
	},
];

export default function ServicesPage() {
	return (
		<div className="bg-gray-900">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/90 to-cyan-900/90 mix-blend-multiply" />
				</div>
				<div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Our Services
					</h1>
					<p className="mt-6 max-w-3xl text-xl text-blue-100">
						Comprehensive IT staffing solutions tailored to your needs
					</p>
				</div>
			</div>

			{/* Services Grid */}
			<div className="relative py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Staffing Solutions
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							Choose from our range of flexible staffing options
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Contract Staffing
							</h3>
							<p className="text-gray-300">
								Flexible tech talent for project-based needs and temporary staffing requirements.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Direct Hire
							</h3>
							<p className="text-gray-300">
								Full-time placement services to build your permanent tech team.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Contract-to-Hire
							</h3>
							<p className="text-gray-300">
								Try-before-you-hire option to ensure the perfect fit for your team.
							</p>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Process Section */}
			<div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl mb-12">
							Our Staffing Process
						</h2>
						<div className="grid gap-8 md:grid-cols-4">
							{[
								{
									step: '1',
									title: 'Requirements Analysis',
									description:
										'Understanding your specific needs',
								},
								{
									step: '2',
									title: 'Candidate Sourcing',
									description: 'Finding the best matches',
								},
								{
									step: '3',
									title: 'Screening & Selection',
									description: 'Thorough evaluation',
								},
								{
									step: '4',
									title: 'Placement & Support',
									description: 'Smooth onboarding',
								},
							].map((step, index) => (
								<motion.div
									key={step.step}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
								>
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6">
										<span className="text-lg font-bold text-white">
											{step.step}
										</span>
									</div>
									<h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
										{step.title}
									</h3>
									<p className="text-gray-300">{step.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Additional Services */}
			<div className="py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Value-Added Services
						</h2>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Skill Assessment
							</h3>
							<p className="text-gray-300">
								Comprehensive technical evaluation of candidates.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Market Analysis
							</h3>
							<p className="text-gray-300">
								Stay informed about current tech hiring trends.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30"
						>
							<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
								Onboarding Support
							</h3>
							<p className="text-gray-300">
								Ensuring smooth integration of new team members.
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
							Ready to Get Started?
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
							Let's discuss how our staffing solutions can help you achieve your goals
						</p>
						<div className="mt-8">
							<Link
								href="/contact"
								className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-lg font-medium text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Contact Us Today
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
