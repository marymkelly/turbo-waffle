import WrenchBrushLogo from "../../logo/WrenchBrush";

export default function MobileBanner() {
	return (
		<div className='relative z-[40] h-[75px] w-full bg-dark-darkest md:hidden'>
			<div className='mb-8 flex h-full items-center justify-center lg:mb-12'>
				<WrenchBrushLogo className='mt-1.5 mr-4 -ml-2.5 h-8 w-8 text-bronze md:mr-6 lg:mr-8' />
				<div className='mt-[5px] flex items-center justify-center font-novecento-wide text-[24px] font-medium uppercase tracking-wider text-white'>
					<div className='mr-2.5 w-fit'>Taylor</div>
					<div className='w-fit'>Hamill</div>
				</div>
			</div>
		</div>
	);
}
