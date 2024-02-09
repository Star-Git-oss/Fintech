import React from "react";

const Navbar = () => {
	return (
		<header className='absolute w-full z-30'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='flex items-center justify-between h-16 md:h-20'>
					<div className='shrink-0 mr-4'>
						<a
							className='block'
							href='/'
							aria-label='Cruip'
						>
							<svg
								width='30'
								height='30'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g
									fillRule='nonzero'
									fill='none'
								>
									<g
										className='fill-blue-50'
										transform='translate(3 3)'
									>
										<circle
											cx='5'
											cy='5'
											r='5'
										/>
										<circle
											cx='19'
											cy='5'
											r='5'
										/>
										<circle
											cx='5'
											cy='19'
											r='5'
										/>
										<circle
											cx='19'
											cy='19'
											r='5'
										/>
									</g>
									<g className='fill-sky-300'>
										<circle
											cx='15'
											cy='5'
											r='5'
										/>
										<circle
											cx='25'
											cy='15'
											r='5'
										/>
										<circle
											cx='15'
											cy='25'
											r='5'
										/>
										<circle
											cx='5'
											cy='15'
											r='5'
										/>
									</g>
								</g>
							</svg>
						</a>
					</div>

					<nav className='flex grow'>
						<ul className='flex grow justify-end flex-wrap items-center'>
							<li className='ml-3'>
								<a
									className='btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-sm'
									href='/'
								>
									Get your card
									<span className='tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2'>
										<svg
											className='fill-current'
											width='12'
											height='10'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z' />
										</svg>
									</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
