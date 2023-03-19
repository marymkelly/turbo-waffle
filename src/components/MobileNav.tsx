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
			<div className='relative h-[75px] w-full bg-dark-darkest md:hidden'>
				<div className='mb-8 flex h-full items-center justify-center lg:mb-12'>
					<WrenchBrushLogo className='mt-1.5 mr-4 -ml-2.5 h-8 w-8 text-bronze md:mr-6 lg:mr-8' />
					<div className='mt-[5px] flex items-center justify-center font-novecento-wide text-[24px] font-medium uppercase tracking-wider text-white'>
						<div className='mr-2.5 w-fit'>Taylor</div>
						<div className='w-fit'>Hamill</div>
					</div>
				</div>
			</div>
			<div
				className={`absolute z-20 flex h-full w-full flex-col items-center justify-between bg-dark-darkest p-8 pt-10 pb-12 transition-all duration-500 md:w-[380px] lg:min-w-[380px] lg:p-12 ${
					open ? "translate-y-0" : "-translate-y-full"
				}`}>
				<div className='flex flex-auto flex-col'>
					<div className='mb-12 flex pt-11'>
						<WrenchBrushLogo className='mt-1.5 mr-4 h-7 w-7 text-bronze md:mr-6 md:h-9 md:w-9 lg:mr-8 lg:h-11 lg:w-11' />
						<div className='mt-0.5 flex font-novecento-wide text-[24px] font-medium uppercase text-white md:text-[28px] lg:text-[37px]'>
							<div className='mr-2.5 w-fit tracking-[0.018em]'>Taylor</div>
							<div className='w-fit tracking-wider'>Hamill</div>
						</div>
					</div>
					<div className='ml-3 flex max-h-[480px] w-full flex-auto flex-col items-center justify-center justify-items-center p-8 md:ml-8 lg:p-12'>
						{links.map((link, i) => {
							return link.public ? (
								<Link
									key={`link-${i}`}
									href={link.href}
									onClick={() => {
										setActiveLink(link.href);
										setOpen(false);
									}}
									className={`mb-12 font-avenir tracking-wide ${
										activeLink === link.href
											? "text-3xl font-semibold text-bronze hover:text-bronze/[85%] lg:text-[22px]"
											: "text-[28px] font-normal text-heather hover:text-bronze/75 lg:text-xl"
									}`}>
									{link.name}
								</Link>
							) : null;
						})}
					</div>
				</div>
				<div className='mb-32 flex w-full max-w-[240px] justify-between lg:mb-2.5'>
					<FacebookIcon className='h-11 w-11 text-bronze/50 hover:text-bronze/70 lg:mr-9' />
					<PinterestIcon className='h-11 w-11 text-bronze/50 hover:text-bronze/70 lg:mr-9' />
					<InstagramIcon className='h-11 w-11 text-bronze/50 hover:text-bronze/70' />
				</div>
			</div>
			<div
				onClick={() => {
					setOpen(!open);
				}}
				className='bronze-gradient absolute bottom-12 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full'>
				<span className='flex h-full w-full items-center justify-center'>
					<XMarkIcon
						className={`absolute ml-px h-7 w-7 flex-none stroke-[2px] text-yellow-gold transition-all duration-500 ${
							open
								? "rotate-[360deg] opacity-100 delay-[250ms]"
								: "rotate-0 opacity-0"
						}	`}
					/>
					<MenuBarsIcon
						className={`absolute h-8 w-8 stroke-[1.5px] text-yellow-gold transition-all duration-500 ${
							open
								? "rotate-0 opacity-0"
								: "-rotate-[360deg] opacity-100 delay-[250ms]"
						}	`}
					/>
				</span>
			</div>
		</>
	);
}
