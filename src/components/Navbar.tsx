'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Services', href: '/services' },
	{ name: 'Industries', href: '/industries' },
	{ name: 'Job Seekers', href: '/job-seekers' },
	{ name: 'Employers', href: '/employers' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
			className='fixed inset-x-0 top-0 z-50'
		>
			<div className='absolute inset-0 bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-cyan-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' />
			<nav className='relative flex items-center justify-between p-4 lg:px-8' aria-label='Global'>
				<div className='flex lg:flex-1'>
					<Link href='/' className='-m-1.5 p-1.5 group flex items-center'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 400 }}
							className='relative h-10 w-[180px]'
						>
							<Image
								src='/logo.svg'
								alt='SparkLink Systems'
								fill
								className='object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]'
								priority
							/>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-blue-400/0 rounded-lg'
								whileHover={{ scale: 1.1, opacity: 0.2 }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 0 }}
								transition={{ type: 'spring', stiffness: 400 }}
							/>
						</motion.div>
						<motion.span
							className='absolute bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-[180px] transition-all duration-300'
						/>
					</Link>
				</div>
				<div className='flex lg:hidden'>
					<motion.button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:bg-white/10 transition-all duration-300'
						onClick={() => setMobileMenuOpen(true)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</motion.button>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					{navigation.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<Link
								href={item.href}
								className='relative group text-sm font-semibold leading-6 text-gray-300 transition-all duration-300'
							>
								<span className='relative z-10 px-2'>{item.name}</span>
								<motion.span
									className='absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/0 via-cyan-600/0 to-blue-600/0 rounded-lg -z-10 group-hover:via-cyan-600/10'
									whileHover={{ scale: 1.05 }}
									transition={{ type: 'spring', stiffness: 300 }}
								/>
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300' 
									style={{ width: pathname === item.href ? '100%' : '0' }}
								/>
							</Link>
						</motion.div>
					))}
				</div>
			</nav>
			<Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm'
				/>
				<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-cyan-900/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:border-l border-white/10 shadow-2xl'>
					<div className='flex items-center justify-between'>
						<Link href='/' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Sparklinksystems LLC</span>
							<motion.div
								whileHover={{ scale: 1.05 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className='relative h-8 w-[144px]'
							>
								<Image
									src='/logo.svg'
									alt='SparkLink Systems'
									fill
									className='object-contain'
									priority
								/>
							</motion.div>
						</Link>
						<motion.button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-300 hover:bg-white/10 transition-all duration-300'
							onClick={() => setMobileMenuOpen(false)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</motion.button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-white/10'>
							<div className='space-y-2 py-6'>
								{navigation.map((item, index) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={item.href}
											className={`group flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-cyan-600/10 transition-all duration-300 ${
												pathname === item.href ? 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10' : ''
											}`}
											onClick={() => setMobileMenuOpen(false)}
										>
											<motion.span 
												className='relative'
												whileHover={{ x: 5 }}
												transition={{ type: 'spring', stiffness: 300 }}
											>
												{item.name}
												<span 
													className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300'
													style={{ width: pathname === item.href ? '100%' : '0' }}
												/>
												<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300' />
											</motion.span>
										</Link>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</motion.header>
	);
}
