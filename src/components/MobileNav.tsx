import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import WrenchBrushLogo from "@/components/logo/WrenchBrush";
import FacebookIcon from "@/components/icons/Facebook";
import PinterestIcon from "@/components/icons/Pinterest";
import InstagramIcon from "@/components/icons/Instagram";
import MenuBarsIcon from "./icons/MenuBars";
import XMarkIcon from "./icons/XMark";

export default function MobileNav({ isMobile }: { isMobile: boolean }) {
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>();
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!isMobile && open) {
			setOpen(false);
		}
	}, [isMobile]);

	const links = [
		{ name: "Home", href: "/", public: true },
		{ name: "Gallery", href: "/gallery", public: true },
		{ name: "About", href: "#", public: false },
		{ name: "Store", href: "#", public: false },
		{ name: "Contact", href: "#", public: false },
	];

	useEffect(() => {
		if (router.isReady) {
			setActiveLink(router.pathname);
		}
	}, [router]);
	return (
		<>
			<div className='w-full h-[75px] bg-dark-darkest relative md:hidden'>
				<div className='h-full flex items-center justify-center mb-8 lg:mb-12'>
					<WrenchBrushLogo className='w-8 h-8 mt-1.5 mr-4 md:mr-6 lg:mr-8 text-bronze -ml-2.5' />
					<div className='flex items-center justify-center mt-[5px] font-novecento-wide uppercase text-white tracking-wider font-medium text-[24px]'>
						<div className='w-fit mr-2.5'>Taylor</div>
						<div className='w-fit'>Hamill</div>
					</div>
				</div>
			</div>
			<div
				className={`w-full md:w-[380px] lg:min-w-[380px] bg-dark-darkest h-full absolute z-20 p-8 pt-10 pb-12 lg:p-12 flex flex-col justify-between items-center transition-all duration-500 ${
					open ? "translate-y-0" : "-translate-y-full"
				}`}>
				<div className='flex flex-col flex-auto'>
					<div className='flex pt-11 mb-12'>
						<WrenchBrushLogo className='w-7 h-7 md:h-9 md:w-9 lg:w-11 lg:h-11 mt-1.5 mr-4 md:mr-6 lg:mr-8 text-bronze' />
						<div className='flex font-novecento-wide uppercase text-white font-medium text-[24px] md:text-[28px] lg:text-[37px] mt-0.5'>
							<div className='tracking-[0.018em] w-fit mr-2.5'>Taylor</div>
							<div className='tracking-wider w-fit'>Hamill</div>
						</div>
					</div>
					<div className='flex flex-col p-8 lg:p-12 ml-3 md:ml-8 w-full flex-auto justify-center justify-items-center items-center max-h-[480px]'>
						{links.map((link, i) => {
							return link.public ? (
								<Link
									key={`link-${i}`}
									href={link.href}
									onClick={() => {
										setActiveLink(link.href);
										setOpen(false);
									}}
									className={`font-avenir tracking-wide mb-12 ${
										activeLink === link.href
											? "text-3xl lg:text-[22px] font-semibold text-bronze hover:text-bronze/[85%]"
											: "text-[28px] lg:text-xl text-heather font-normal hover:text-bronze/75"
									}`}>
									{link.name}
								</Link>
							) : null;
						})}
					</div>
				</div>
				<div className='flex justify-between max-w-[240px] mb-32 lg:mb-2.5 w-full'>
					<FacebookIcon className='w-11 h-11 text-bronze/50 hover:text-bronze/70 lg:mr-9' />
					<PinterestIcon className='w-11 h-11 text-bronze/50 hover:text-bronze/70 lg:mr-9' />
					<InstagramIcon className='w-11 h-11 text-bronze/50 hover:text-bronze/70' />
				</div>
			</div>
			<div
				onClick={() => {
					setOpen(!open);
				}}
				className='z-40 absolute bottom-12 right-8 h-14 w-14 bronze-gradient rounded-full flex items-center justify-center'>
				<span className='h-full w-full flex items-center justify-center'>
					<XMarkIcon
						className={`absolute text-yellow-gold h-7 w-7 stroke-[2px] ml-px transition-all duration-500 flex-none ${
							open
								? "delay-[250ms] opacity-100 rotate-[360deg]"
								: "opacity-0 rotate-0"
						}	`}
					/>
					<MenuBarsIcon
						className={`absolute text-yellow-gold h-8 w-8 stroke-[1.5px] transition-all duration-500 ${
							open
								? "opacity-0 rotate-0"
								: "delay-[250ms] opacity-100 -rotate-[360deg]"
						}	`}
					/>
				</span>
			</div>
		</>
	);
}
