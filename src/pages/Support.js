import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SupportContent from "../components/SupportContent";
import SupportIllustration from "../assets/support-illustration.svg";

const Support = () => {
	const [isShowSidebar, setIsShowSidebar] = useState(false);
	return (
		// Page wrapper
		<div class='flex flex-col min-h-screen overflow-hidden'>
			{/* Site header */}
			<header class='fixed w-full bg-white border-b border-slate-200 z-30'>
				<div class='max-w-6xl mx-auto px-4 sm:px-6'>
					<div class='flex items-center justify-between h-16 md:h-20'>
						{/* Site branding */}
						<div class='shrink-0 mr-4'>
							{/* Logo */}
							<a
								class='flex items-center'
								href='/'
								aria-label='Cruip'
							>
								<svg
									width='30'
									height='30'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g
										fill-rule='nonzero'
										fill='none'
									>
										<g
											class='fill-blue-500'
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
										<g class='fill-sky-300'>
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
								<span class='text-slate-400 font-[550] ml-4'>
									Support Center
								</span>
							</a>
						</div>

						{/* Desktop navigation */}
						<nav class='flex grow'>
							{/* Desktop sign in links */}
							<ul class='flex grow justify-end flex-wrap items-center'>
								<li class='ml-3'>
									<a
										class='btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 shadow-sm'
										href='#0'
									>
										Get in touch
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			{/* Page content */}
			<main class='grow'>
				<section class='relative'>
					<div class='absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10'>
						<img
							alt='SupportIllustration'
							className='max-w-none'
							src={SupportIllustration}
							width='1440'
							height='286'
							aria-hidden='true'
						/>
					</div>

					<div class='max-w-6xl mx-auto px-4 sm:px-6'>
						{/* Main content */}
						<div
							class='md:flex md:justify-between'
							x-data='{ sidebarExpanded: false }'
						>
							{/* Sidebar */}
							<Sidebar isShow={isShowSidebar} />

							{/* Page container */}
							<SupportContent
								setIsShowSidebar={(val) => setIsShowSidebar(val)}
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Support;
