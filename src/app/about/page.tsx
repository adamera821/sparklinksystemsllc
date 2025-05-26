'use client';

import { motion } from 'framer-motion';

const values = [
	{
		name: 'Excellence',
		description:
			'We strive for excellence in every placement, ensuring the perfect match between talent and opportunity.',
	},
	{
		name: 'Integrity',
		description:
			'We operate with complete transparency and honesty in all our business relationships.',
	},
	{
		name: 'Innovation',
		description:
			'We continuously adapt to the evolving tech landscape to provide cutting-edge staffing solutions.',
	},
	{
		name: 'Partnership',
		description:
			'We build long-term partnerships with both clients and candidates, focusing on mutual success.',
	},
];

const team = [
	{
		name: 'Sharvani Enugala',
		role: 'CEO & Founder',
		bio: '10+ years of experience in IT staffing and talent acquisition.',
		image: '/team/john.jpg',
	},
	{
		name: 'Deekshit Gomasa',
		role: 'Global Client Relations Manager',
		bio: 'CEO & Founder of Gomasa IT technologies PVT LTD(India) Specialized in building strong client partnerships.',
		image: '/team/david.jpg',
	},
    {
		name: 'Arun Kumar Damera',
		role: 'Technical Recruitment & Managing Director',
		bio: 'Expert in identifying and evaluating top tech talent.',
		image: '/team/emily.jpg',
	}
];

export default function AboutPage() {
	return (
		<div className="bg-gray-900">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/90 to-cyan-900/90 mix-blend-multiply" />
				</div>
				<div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
						About SparkLink Systems
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
						Building bridges between talent and opportunity in the IT industry
					</p>
				</div>
			</div>

			{/* Mission Section */}
			<div className="bg-gray-900 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Our Mission
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							At SparkLink Systems, we're dedicated to transforming the IT staffing
							landscape by connecting exceptional talent with innovative companies.
							Our mission is to bridge the gap between skilled technology
							professionals and organizations seeking to build high-performing
							teams.
						</p>
					</div>
				</div>
			</div>

			{/* Values Section */}
			<div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Our Core Values
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							The principles that guide us in delivering exceptional service
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
							{values.map((value, index) => (
								<motion.div
									key={value.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="relative"
								>
									<h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
										{value.name}
									</h3>
									<p className="mt-2 text-base text-gray-300">
										{value.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Team Section */}
			<div className="bg-gray-900 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Our Leadership Team
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							Meet the experienced professionals leading our mission
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{team.map((member) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
							>
								<h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
									{member.name}
								</h3>
								<p className="text-sm text-blue-300">{member.role}</p>
								<p className="mt-4 text-sm text-gray-400">{member.bio}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* History Section */}
			<div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent sm:text-4xl">
							Our Journey
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Founded with a vision to revolutionize IT staffing, SparkLink Systems
							has grown to become a trusted partner for companies and professionals
							alike. Our journey is marked by continuous innovation, exceptional
							service, and a commitment to building lasting relationships.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
