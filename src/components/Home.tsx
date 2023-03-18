import Image from "next/image";

export default function HomeIntro({
	isMobile,
	fadeLanding,
	featTextVisible,
	initScrollTextFaded,
}: {
	isMobile: boolean;
	fadeLanding: boolean;
	animationPlayed?: boolean;
	setAnimationPlayed: Function;
	featTextVisible: boolean;
	initScrollTextFaded: boolean;
}) {
	return (
		<div className='relative flex-auto p-20 pl-24 flex flex-col justify-end z-10 primary-bg-gradient'>
			<div className={`flex flex-col w-full h-full justify-between relative mt-24 mb-4`}>
				<div id='feature-text' className='max-w-[470px]'>
					<div
						className={`flex flex-col items-end text-soft-yellow font-novecento-wide tracking-wide leading-[1.15] ${
							featTextVisible
								? "opacity-0 delay-200 duration-[800ms]"
								: "delay-[900ms] duration-[1200ms]"
						}`}>
						<p className='self-start text-white text-[100px]  tracking-[.02em] m-0'>
							Art{" "}
							<span className='text-heather font-avenir text-5xl tracking-wide'>
								born of
							</span>
						</p>
						<p className='text-[80px] font-extralight tracking-[.040em] m-0'>
							mechanics,
						</p>
						<p className='text-[77px] font-extralight tracking-[.02em] m-0'>
							magic{" "}
							<span className='text-heather font-avenir text-5xl tracking-wide'>
								and
							</span>
						</p>
						<p className='text-[74px] font-extralight tracking-[.025em] m-0'>more</p>
					</div>
				</div>
				<div
					id='desc-text'
					className={`flex transition-all ${
						featTextVisible
							? "opacity-0 delay-[600ms] duration-[1200ms]"
							: "delay-[2100ms] duration-[1400ms] opacity-100"
					}`}>
					<p className='text-heather text-[22px] font-avenir font-light tracking-[0.02em] max-w-xl mb-10'>
						Taylor Hamill is a multi-disciplinary artist who creates whimsical art using
						different materials in a variety of mediums.
					</p>
				</div>
			</div>
			<div id='scroll-text'>
				<p
					className={`mb-12 uppercase font-novecento-wide text-dark-stone transition-all duration-[1200ms] ${
						initScrollTextFaded ? "opacity-0 translate-y-10" : "delay-[400ms]"
					}`}>
					{isMobile ? "drag" : "scroll"} to learn more{" "}
					{isMobile ? null : <span className='ml-2 font-extralight'>&rarr;</span>}
				</p>
			</div>
			<div
				className={`group w-[85vh] h-[85vh] border-0 absolute flex items-center justify-center transition-all ${
					!isMobile
						? featTextVisible
							? "-translate-x-[4.6rem] delay-[850ms] duration-[900ms] right-0"
							: "-right-20"
						: "delay-[150ms] duration-[900ms] -right-8"
				} ${fadeLanding ? `-z-[10] -right-20 transition-all ${!featTextVisible ? 'opacity-25' : 'delay-[700ms] duration-300 opacity-50' }` : ""}`}>
				<div
					className={`border-2 w-full h-full absolute  transition-all ${
						featTextVisible
							? "scale-100 translate-x-8 border-bronze/40 delay-[800ms] duration-[900ms]"
							: "scale-90 translate-x-0 border-transparent delay-[200ms] duration-[1100ms]"
					}`}
				/>
				<div
					className={`w-[70%] h-[85%] -mr-10 -mt-4 relative transition-all duration-[1000ms] ${
						!isMobile
							? featTextVisible
								? "translate-x-2 delay-[800ms] scale-100"
								: "-translate-x-6 scale-90 delay-[200ms]"
							: "-translate-x-6"
					}`}>
					<Image
						src='/images/wire-sculpture.png'
						alt='Wire-scuplure Image'
						className='aspect-square'
						sizes='100'
						fill
						priority
					/>
				</div>
			</div>
		</div>
	);
}
