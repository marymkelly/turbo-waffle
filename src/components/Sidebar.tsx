import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import WrenchBrushLogo from "@/components/logo/WrenchBrush";
import FacebookIcon from "@/components/icons/Facebook";
import PinterestIcon from "@/components/icons/Pinterest";
import InstagramIcon from "@/components/icons/Instagram";

export default function Sidebar() {
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>();

	const links = [
		{ name: "Home", href: "/", public: true },
		{ name: "Gallery", href: "/gallery", public: true },
		{ name: "About", href: "#", public: true },
		{ name: "Store", href: "#", public: false },
		{ name: "Contact", href: "#", public: true },
	];

	useEffect(() => {
		if (router.isReady) {
			setActiveLink(router.pathname);
		}
	}, [router]);
	return (
		<div id="sidebar" className='w-[380px] lg:min-w-[380px] bg-dark-darkest h-full p-8 pt-10 pb-12 lg:p-12 flex flex-col justify-between'>
			<div>
				<div className='flex pt-11 mb-8 lg:mb-12'>
					<WrenchBrushLogo className='w-7 h-7 md:h-9 md:w-9 lg:w-11 lg:h-11 mt-1.5 mr-4 md:mr-6 lg:mr-8 text-bronze' />
					<div className='font-novecento-wide uppercase text-white font-medium text-[24px] md:text-[28px] lg:text-[37px]'>
						<div className='tracking-[0.018em] w-fit'>Taylor</div>
						<div className='tracking-wider w-fit'>Hamill</div>
					</div>
				</div>
				<div className='flex flex-col p-8 lg:p-12 ml-3 md:ml-8'>
					{links.map((link, i) => {
						return link.public ? (
							<Link
								key={`link-${i}`}
								href={link.href}
								onClick={() => {
									setActiveLink(link.href);
								}}
								className={`font-avenir tracking-wide mb-9 ${
									activeLink === link.href
										? "text-lg lg:text-[22px] font-semibold text-bronze hover:text-bronze/[85%]"
										: "text-[17px] lg:text-xl text-heather font-normal hover:text-bronze/75"
								}`}>
								{link.name}
							</Link>
						) : null;
					})}
				</div>
			</div>
			<div className='flex justify-center mb-2.5'>
				<FacebookIcon className='w-9 h-9 text-bronze/50 hover:text-bronze/70 mr-7 lg:mr-9' />
				<PinterestIcon className='w-9 h-9 text-bronze/50 hover:text-bronze/70 mr-7 lg:mr-9' />
				<InstagramIcon className='w-9 h-9 text-bronze/50 hover:text-bronze/70' />
			</div>
		</div>
	);
}
