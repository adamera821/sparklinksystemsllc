'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
	{ name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Industries', href: '/industries' },
	{ name: 'Job Seekers', href: '/job-seekers' },
	{ name: 'Employers', href: '/employers' },
	{ name: 'Contact', href: '/contact' },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
			className='fixed inset-x-0 top-0 z-50'
		>
			<motion.div 
				className='absolute inset-0 bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-cyan-900/95 backdrop-blur-xl border-b border-white/10'
				initial={{ opacity: 0, scaleY: 0.9 }}
				animate={{ opacity: 1, scaleY: 1 }}
				transition={{ duration: 0.3, delay: 0.2 }}
				whileHover={{ 
					boxShadow: "0 8px 32px -8px rgba(96, 165, 250, 0.2)",
					borderColor: "rgba(255, 255, 255, 0.15)" 
				}}
			/>
			<nav className='relative flex items-center justify-between p-4 lg:px-8' aria-label='Global'>
				<div className='flex lg:flex-1'>
					<Link href='/' className='-m-1.5 p-1.5 group flex items-center'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 400, damping: 15 }}
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
								whileHover={{ 
									scale: 1.1, 
									opacity: 0.2,
									background: 'radial-gradient(circle, rgba(96,165,250,0.2) 0%, rgba(34,211,238,0.1) 100%)'
								}}
								animate={{ 
									opacity: [0, 0.1, 0],
									scale: [1, 1.05, 1] 
								}}
								transition={{ 
									repeat: Infinity,
									duration: 2,
									ease: "easeInOut"
								}}
							/>
							<motion.div
								className='absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-lg blur-xl'
								animate={{ 
									opacity: [0.3, 0.6, 0.3],
									scale: [0.95, 1.05, 0.95] 
								}}
								transition={{ 
									repeat: Infinity,
									duration: 3,
									ease: "easeInOut"
								}}
								style={{ zIndex: -1 }}
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
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 relative group'
						onClick={() => setMobileMenuOpen(true)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<motion.div
							className='absolute inset-0 rounded-lg bg-white/5'
							initial={false}
							whileHover={{ 
								scale: 1.5,
								opacity: 0,
							}}
							transition={{
								duration: 0.5,
								ease: "easeOut"
							}}
						/>
						<motion.div
							className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
							animate={{ 
								scale: [1, 1.2, 1],
								opacity: [0.1, 0.2, 0.1]
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut"
							}}
						/>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6 relative z-10' aria-hidden='true' />
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
								<motion.span 
									className='relative z-10 px-2 inline-block'
									whileHover={{ y: -2 }}
									transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								>
									{item.name}
									{pathname === item.href && (
										<>
											<motion.span
												className='absolute -right-3 -top-1 w-2 h-2 bg-blue-400 rounded-full'
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												transition={{ type: 'spring', stiffness: 500, damping: 10 }}
											/>
											<motion.span
												className='absolute -right-3 -top-1 w-2 h-2 bg-blue-400 rounded-full'
												animate={{ 
													scale: [1, 1.5, 1],
													opacity: [0.5, 0, 0.5]
												}}
												transition={{ 
													duration: 2,
													repeat: Infinity,
													ease: "easeInOut"
												}}
											/>
										</>
									)}
								</motion.span>
								<motion.span
									className='absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/0 via-cyan-600/0 to-blue-600/0 rounded-lg -z-10'
									whileHover={{ 
										scale: 1.05, 
										background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, rgba(34,211,238,0.05) 100%)'
									}}
									transition={{ type: 'spring', stiffness: 300 }}
								/>
								<motion.span 
									className='absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400'
									initial={{ width: pathname === item.href ? '100%' : '0%' }}
									animate={{ width: pathname === item.href ? '100%' : '0%' }}
									whileHover={{ width: '100%' }}
									style={{
										boxShadow: pathname === item.href ? '0 0 10px rgba(96,165,250,0.5)' : 'none'
									}}
									transition={{ type: 'spring', stiffness: 400, damping: 25 }}
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
					<motion.div
						className='absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-500/5'
						animate={{ 
							backgroundPosition: ['0% 0%', '100% 100%'],
							opacity: [0.1, 0.15, 0.1] 
						}}
						transition={{ 
							duration: 5,
							repeat: Infinity,
							ease: "linear"
						}}
					/>
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
							className='-m-2.5 rounded-md p-2.5 text-gray-300 transition-all duration-300 relative group'
							onClick={() => setMobileMenuOpen(false)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className='sr-only'>Close menu</span>
							<motion.div
								className='absolute inset-0 rounded-full bg-white/5'
								initial={false}
								whileHover={{ 
									scale: 1.5,
									opacity: 0,
								}}
								transition={{
									duration: 0.5,
									ease: "easeOut"
								}}
							/>
							<motion.div
								className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
								animate={{ 
									scale: [1, 1.2, 1],
									opacity: [0.1, 0.2, 0.1]
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
							<XMarkIcon className='h-6 w-6 relative z-10' aria-hidden='true' />
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
											className={`group flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 relative overflow-hidden ${
												pathname === item.href ? 'text-blue-400' : ''
											}`}
											onClick={() => setMobileMenuOpen(false)}
										>
											<motion.div
												className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100'
												initial={false}
												animate={pathname === item.href ? { opacity: 1 } : { opacity: 0 }}
												whileHover={{ 
													opacity: 1,
													scale: 1.05,
												}}
												transition={{ duration: 0.2 }}
											/>
											<motion.div
												className='absolute inset-0 bg-gradient-to-r from-blue-400/5 via-cyan-400/5 to-blue-400/5'
												animate={{ 
													x: ['0%', '100%'],
													opacity: [0, 0.5, 0]
												}}
												transition={{ 
													duration: 2,
													repeat: Infinity,
													ease: "linear"
												}}
											/>
											<motion.span 
												className='relative flex items-center gap-2'
												whileHover={{ x: 5 }}
												transition={{ type: 'spring', stiffness: 300 }}
											>
												{item.name}
												{pathname === item.href && (
													<motion.span
														className='h-1.5 w-1.5 rounded-full bg-blue-400'
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														transition={{ type: 'spring', stiffness: 500 }}
													/>
												)}
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
