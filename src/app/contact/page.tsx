'use client';

import { useForm } from '@formspree/react';
import Link from 'next/link';

export default function ContactPage() {
	const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Replace with your Formspree form ID

	if (state.succeeded) {
		return (
			<div className="bg-white min-h-screen">
				<div className="relative bg-blue-600">
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 mix-blend-multiply" />
					</div>
					<div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
								Thank You!
							</h1>
							<p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
								We've received your message and will get back to you shortly.
							</p>
							<div className="mt-10">
								<Link
									href="/"
									className="inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-300"
								>
									Return Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-900">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/90 to-cyan-900/90 mix-blend-multiply" />
				</div>
				<div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
						Get in Touch
					</h1>
					<p className="mt-6 max-w-2xl text-xl text-blue-100">
						Let's discuss how we can help you achieve your IT staffing goals
					</p>
				</div>
			</div>

			<main>
				<div className="mx-auto max-w-7xl py-16 sm:py-24">
					<div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
						{/* Contact Info */}
						<div className="relative mb-12 lg:mb-0">
							<div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 lg:p-12">
								<h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
									Contact Information
								</h2>
								<p className="mt-4 text-lg text-gray-300">
									Whether you're looking to hire top tech talent or explore career opportunities, we're here to help.
								</p>
								<dl className="mt-8 space-y-6">
									<div>
										<dt className="text-base font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Office Location</dt>
										<dd className="mt-2 text-base text-gray-400">
											74C Dorchester Dr
											<br />
											Lakewood, New Jersey 08701
										</dd>
									</div>
									<div>
										<dt className="text-base font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Email</dt>
										<dd className="mt-2">
											<a href="mailto:info@sparklinksystems.com" className="text-blue-400 hover:text-cyan-400 transition-colors duration-300">
												info@sparklinksystems.com
											</a>
										</dd>
									</div>
									<div>
										<dt className="text-base font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Phone</dt>
										<dd className="mt-2">
											<a href="tel:+1-555-123-4567" className="text-blue-400 hover:text-cyan-400 transition-colors duration-300">
												732-773-6992
											</a>
										</dd>
									</div>
								</dl>
							</div>
						</div>

						{/* Contact Form */}
						<div className="relative">
							<div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-8 lg:p-12">
								<h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
									Send us a Message
								</h2>
								<div className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-300">
											Name
										</label>
										<input
											type="text"
											name="name"
											id="name"
											className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
											required
										/>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-300">
											Email
										</label>
										<input
											type="email"
											name="email"
											id="email"
											className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
											required
										/>
									</div>

									<div>
										<label htmlFor="type" className="block text-sm font-medium text-gray-300">
											I am a
										</label>
										<select
											name="type"
											id="type"
											className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-gray-300 focus:border-blue-500 focus:ring-blue-500"
											required
										>
											<option value="" className="bg-gray-900">Select one...</option>
											<option className="bg-gray-900">Job Seeker</option>
											<option className="bg-gray-900">Employer</option>
										</select>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-300">
											Message
										</label>
										<textarea
											name="message"
											id="message"
											rows={4}
											className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
											required
										/>
									</div>

									<div>
										<button
											type="submit"
											className="inline-flex justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
										>
											Send Message
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
