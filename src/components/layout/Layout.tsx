import Sidebar from "@/components/Sidebar";
import GalleryPage from "@/pages/gallery";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MobileNav from "../MobileNav";

export default function Layout(props: any) {
	const router = useRouter();
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [showHomeGallery, setShowHomeGallery] = useState<boolean>(false);

	useEffect(() => {
		function handleResize(e: any) {
			if (e.target.visualViewport.width < 768) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}

			// if (router.pathname === "/") {
			// 	e.target.visualViewport.width < 1400
			// 		? setShowHomeGallery(true)
			// 		: setShowHomeGallery(false);
			// }
		}

		handleResize({ target: window });

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			<div className='flex flex-col md:flex-row primary-bg-gradient w-full h-full'>
				{!isMobile ? <Sidebar /> : <MobileNav isMobile={isMobile} />}
				<div className='flex flex-auto w-full h-full overflow-auto'>
					{router.pathname === "/" && showHomeGallery ? <GalleryPage /> : props.children}
				</div>
			</div>
		</>
	);
}
