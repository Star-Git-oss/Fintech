import { useState } from "react";

const Sidebar = ({ isShow }) => {
	const [expand, setExpand] = useState({ sending_money: true });

	const handleClickExpand = (id) => {
		if (id) {
			setExpand((prevState) => ({
				...prevState,
				[id]: !prevState[id],
			}));
		}
	};

	return (
		<aside
			id='sidebar'
			className={`fixed left-0 top-0 bottom-0 w-64 h-screen bg-white border-r border-slate-200 px-4 sm:px-6 md:ml-0 md:pr-8 md:left-auto overflow-y-auto no-scrollbar md:shrink-0 z-20 ${
				isShow ? "block pop" : "hidden push"
			} md:!opacity-100 md:!block`}
		>
			<div className='pt-28 pb-12 md:pt-36 md:pb-16'>
				<h3 className='text-lg font-bold text-slate-800 mb-4'>
					Popular topics
				</h3>

				{/* Docs nav */}
				<nav className='md:block'>
					<ul className='space-y-3'>
						{/* 1st level */}
						<li>
							<a
								id='welcome'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["welcome"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>Welcome</span>
							</a>
							{/* 2nd level */}
							{expand["welcome"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Installation
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Quick start
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Folder content
										</a>
									</li>
								</ul>
							)}
						</li>
						{/* 1st level */}
						<li x-data='{ open: true }'>
							<a
								id='sending_money'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["sending_money"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>Sending money</span>
							</a>
							{/* 2nd level */}
							{expand["sending_money"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-blue-500 font-[550]'
											href='#0'
										>
											How do I send money to a bank account or card?
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											What recipient account details do I need?
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											How do I send money to a bank account or card?
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											How do I download my transfer confirmation?
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											How to send money to a specific currency
										</a>
									</li>
								</ul>
							)}
						</li>
						{/* 1st level */}
						<li x-data='{ open: false }'>
							<a
								id='account_management'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["ccount_management"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>Account management</span>
							</a>
							{/* 2nd level */}
							{expand["account_management"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
								</ul>
							)}
						</li>
						{/* 1st level */}
						<li x-data='{ open: false }'>
							<a
								id='card'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["card"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>Card</span>
							</a>
							{/* 2nd level */}
							{expand["card"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
								</ul>
							)}
						</li>
						{/* 1st level */}
						<li x-data='{ open: false }'>
							<a
								id='credit_product'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["credit_product"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>Credit products</span>
							</a>
							{/* 2nd level */}
							{expand["credit_product"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
								</ul>
							)}
						</li>
						{/* 1st level */}
						<li x-data='{ open: false }'>
							<a
								id='app_feature'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["app_feature"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>App features</span>
							</a>
							{/* 2nd level */}
							{expand["app_feature"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
								</ul>
							)}
						</li>
						{/* 1st level */}
						<li x-data='{ open: false }'>
							<a
								id='insurance'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["app_feature"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>Insurance</span>
							</a>
							{/* 2nd level */}
							{expand["insurance"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
								</ul>
							)}
						</li>
						{/* 1st level */}
						<li x-data='{ open: false }'>
							<a
								id='wealth_trading'
								onClick={(e) => handleClickExpand(e.currentTarget.id)}
								className='flex items-center text-md font-bold text-slate-800'
								href='#0'
							>
								<svg
									className={`fill-slate-400 mr-2 ${
										expand["wealth_trading"] ? "rotate-90" : ""
									}`}
									width='8'
									height='8'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.854.647A.5.5 0 0 0 2 1v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 .058-.638l-.058-.07-3-3Z' />
								</svg>
								<span>Wealth and trading</span>
							</a>
							{/* 2nd level */}
							{expand["wealth_trading"] && (
								<ul className='pl-6 mt-2 space-y-2 text-sm'>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
									<li>
										<a
											className='text-slate-600 font-[350]'
											href='#0'
										>
											Link
										</a>
									</li>
								</ul>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
