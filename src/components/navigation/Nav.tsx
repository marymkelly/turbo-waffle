import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import WrenchBrushLogo from "@/components/logo/WrenchBrush";
import MobileBanner from "./mobile/MobileBanner";
import MobileButton from "./mobile/MobileButton";
import { navLinks as links } from "@/lib/ts/data";
import SocialIcons from "../SocialIconGroup";
import { DimensionProps } from "@/lib/ts/types";
import GalleryPage from "@/pages/gallery";

export default function Nav(props: {
	children: ReactElement;
	isMobile: boolean;
	screenDimensions: DimensionProps;
}) {
	const { children, isMobile } = props;
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>();
	const [open, setOpen] = useState<boolean>(false);
	const [mobileOffset, setMobileOffset] = useState<string | number>("");
	const [showHomeGallery, setShowHomeGallery] = useState<boolean>(false);
	const [screenDimensions, setScreenDimensions] = useState<{ height: number; width: number }>({
		height: 0,
		width: 0,
	});

	const [initLoad, setInitLoad] = useState(false);
	let window = global ?? {};

	useEffect(() => {
		if (!initLoad) setInitLoad(true);
	}, []);

	useEffect(() => {
		const screenHeight = screenDimensions?.height;
		const navBody = document.getElementById("sidebar");

		if (navBody) {
			let { height } = navBody.getBoundingClientRect();

			let offset = Math.abs(screenHeight - height);
			setMobileOffset(offset);
		}
	}, [screenDimensions]);

	useEffect(() => {
		const screen = window?.visualViewport;

		if (router.isReady) {
			setActiveLink(router.pathname);
		}

		if (screen?.width) {
			setScreenDimensions({ width: screen.width, height: screen.height });

			if (router.pathname === "/") {
				screen.width < 1400 ? setShowHomeGallery(true) : setShowHomeGallery(false);
			}
		}
	}, [window, router]);

	useEffect(() => {
		if (!isMobile && open) {
			setOpen(false);
		}
	}, [isMobile]);

	return (
		<div className='flex h-full w-full flex-col overflow-hidden md:flex-row'>
			{isMobile ? <MobileBanner /> : null}
			{isMobile ? <MobileButton open={open} setOpen={setOpen} /> : null}
			<div
				id='sidebar'
				className={`z-20 ${
					isMobile ? "min-h-screen pb-40" : ""
				} flex h-full w-full flex-col items-center justify-between bg-dark-darkest p-8 pt-10 pb-12 transition-all md:relative md:w-[380px] md:min-w-[380px] lg:p-12 ${
					isMobile
						? open
							? "bottom-0 translate-y-[0%] duration-500"
							: "-translate-y-[100%] duration-500"
						: "inline-flex translate-y-0"
				}`}>
				<div className='flex w-full flex-auto flex-col'>
					<div className='mb-12 hidden pt-11 md:mb-8 md:flex lg:mb-12'>
						<WrenchBrushLogo className='mt-1.5 mr-4 h-7 w-7 text-bronze md:mr-6 md:h-9 md:w-9 lg:mr-8 lg:h-11 lg:w-11' />
						<div className='mt-0.5 flex font-novecento-wide text-[24px] font-medium uppercase text-white md:mt-0 md:block md:text-[28px] lg:text-[37px]'>
							<div className='mr-2.5 w-fit tracking-[0.018em] md:mr-0'>Taylor</div>
							<div className='w-fit tracking-wider'>Hamill</div>
						</div>
					</div>
					<div
						className={`mt-24 ml-3 flex max-h-[480px] w-full flex-auto flex-col items-center justify-center justify-items-center p-8 md:mt-0 md:ml-8 md:max-h-0 md:w-auto md:items-start md:justify-start md:justify-items-start lg:p-12`}>
						{links.map((link, i) => {
							return link.public ? (
								<Link
									key={`link-${i}`}
									href={link.href}
									onClick={() => {
										setActiveLink(link.href);
										setOpen(false);
									}}
									className={`mb-12 font-avenir tracking-wide md:mb-9 ${
										activeLink === link.href
											? "text-3xl font-semibold text-bronze hover:text-bronze/[85%] md:text-lg lg:text-[22px]"
											: "text-[28px] font-normal text-heather hover:text-bronze/75 md:text-[17px] lg:text-xl"
									}`}>
									{link.name}
								</Link>
							) : null;
						})}
					</div>
				</div>
				<SocialIcons />
			</div>
			<div
				className={`absolute flex h-full min-h-screen w-full flex-auto overflow-auto overscroll-contain lg:relative ${
					showHomeGallery ? "" : "mt-16 pb-16"
				}`}>
				{/* {children} */}
				{router.pathname === "/" && showHomeGallery ? <GalleryPage /> : props.children}
			</div>
		</div>
	);
}
