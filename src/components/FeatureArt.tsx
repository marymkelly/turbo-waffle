import Image from "next/image";
import { FeatureProjProps } from "@/lib/ts/data";
import { useEffect } from "react";

export default function FeatureArt<
	T extends FeatureProjProps & { i: number; animationPlayed?: boolean }
>(props: T) {
	return (
		<>
			<div
				id='feat-projs'
				className={`flex flex-auto h-full w-full pl-28 lg:pl-32 justify-start relative overscroll-contain transition-all `}>
				<div className='absolute pl-16 lg:pl-0 mr-10 lg:mr-20 z-10 -ml-40 lg:-ml-6 mt-8'>
					<div
						className={`relative flex flex-col justify-center min-h-[200px] pl-20 lg:pl-24 pb-36 mt-28 ${
							props.i === 0
								? !props.animationPlayed
									? "duration-500 -translate-y-[110%] opacity-0"
									: "duration-500 translate-y-0 opacity-100"
								: ""
						}`}>
						<span className='font-nova text-[120px] tracking-tight lg:text-[150px] text-stone/50 absolute left-0'>
							{props.i <= 10 ? "0" + (props.i + 1) : props.i + 1}
						</span>
						<h3 className='font-novecento text-gold font-light tracking-wide text-6xl lg:text-7xl z-10 w-fit'>
							{props.header}
						</h3>
					</div>
					<div
						className={`bg-dark-darkest text-white z-10 w-[410px] p-9 pt-8 pr-10 ml-4 hidden lg:inline-block  ${
							props.i === 0
								? !props.animationPlayed
									? "delay-[600ms] translate-y-[250%] duration-[800ms]"
									: "delay-[650ms] translate-y-0 opacity-100 duration-[400ms] "
								: ""
						}`}>
						<h4 className='font-novecento font-medium text-2xl mb-5'>
							{props.card.title}, {props.card.date?.start}
							{props.card.date?.end ? ` - ${props.card.date.end}` : ""}
						</h4>
						<h5 className='font-avenir font-medium text-lg mb-7'>
							{props.card.subtitle}
						</h5>
						<p>{props.card.description}</p>
					</div>
				</div>
				<div className={`w-[70vw] flex justify-end ml-16 pr-12 lg:pr-16 pb-10 pt-8`}>
					<div
						className={`group w-[80vw] h-[75vh] min-w-[80vw] md:min-w-0 lg:w-[85vh] lg:h-[85vh] right-8 flex justify-center items-center self-center relative ${props.animationPlayed ? "scale-100 duration-75" : " scale-90 delay-[1200ms] duration-700 translate-x-[4.6rem]"}`}>
						<div
							className={`border-2 w-full h-full absolute transition-all scale-100 translate-x-0 border-bronze/40`}
						/>
						<div
							className={`w-[85%] h-[75%] lg:w-[70%] lg:h-[85%] -mr-10 -mt-4 relative -translate-x-6`}>
							<Image
								src={props.image}
								alt={props.card.title}
								className='aspect-square'
								sizes='100'
								fill
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
