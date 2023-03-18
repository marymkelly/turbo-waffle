import { useEffect, useState } from "react";
import Image from "next/image";
import { galleryPieces } from "@/lib/ts/data";

export default function GalleryPage() {
	return (
		<>
			<div className='grid grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-8 w-full h-full p-10 sm:py-12 sm:px-16 md:p-10 overflow-auto overscroll-contain'>
				{galleryPieces
					.sort((a, b) => a.order - b.order)
					.map((piece, i) => (
						<div
							key={`gallery-piece-${i}`}
							className='col-span-2 md:col-span-1 aspect-square relative bg-dark-gallery'>
							<Image
								src={piece.image}
								alt={piece.title}
								fill
								className={piece.classNames}
								sizes='100'
								priority
							/>
						</div>
					))}
				<div className='col-span-2 md:col-span-1 aspect-square relative bg-dark-gallery flex justify-center items-center text-gold font-avenir text-sm lg:text-lg text-center font-extralight tracking-wide p-2'>
					More Coming Soon
				</div>
			</div>
		</>
	);
}
