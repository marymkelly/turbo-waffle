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
		<div
			id='sidebar'
			className='flex h-full w-[380px] flex-col justify-between bg-dark-darkest p-8 pt-10 pb-12 lg:min-w-[380px] lg:p-12'>
			<div>
				<div className='mb-8 flex pt-11 lg:mb-12'>
					<WrenchBrushLogo className='mt-1.5 mr-4 h-7 w-7 text-bronze md:mr-6 md:h-9 md:w-9 lg:mr-8 lg:h-11 lg:w-11' />
					<div className='font-novecento-wide text-[24px] font-medium uppercase text-white md:text-[28px] lg:text-[37px]'>
						<div className='w-fit tracking-[0.018em]'>Taylor</div>
						<div className='w-fit tracking-wider'>Hamill</div>
					</div>
				</div>
				<div className='ml-3 flex flex-col p-8 md:ml-8 lg:p-12'>
					{links.map((link, i) => {
						return link.public ? (
							<Link
								key={`link-${i}`}
								href={link.href}
								onClick={() => {
									setActiveLink(link.href);
								}}
								className={`mb-9 font-avenir tracking-wide ${
									activeLink === link.href
										? "text-lg font-semibold text-bronze hover:text-bronze/[85%] lg:text-[22px]"
										: "text-[17px] font-normal text-heather hover:text-bronze/75 lg:text-xl"
								}`}>
								{link.name}
							</Link>
						) : null;
					})}
				</div>
			</div>
			<div className='mb-2.5 flex justify-center'>
				<FacebookIcon className='mr-7 h-9 w-9 text-bronze/50 hover:text-bronze/70 lg:mr-9' />
				<PinterestIcon className='mr-7 h-9 w-9 text-bronze/50 hover:text-bronze/70 lg:mr-9' />
				<InstagramIcon className='h-9 w-9 text-bronze/50 hover:text-bronze/70' />
			</div>
		</div>
	);
}
