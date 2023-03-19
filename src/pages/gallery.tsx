import Image from "next/image";
import { galleryPieces } from "@/lib/ts/data";

export default function GalleryPage() {
	return (
		<div className='grid h-full w-full grid-cols-2 gap-8 overflow-auto overscroll-contain p-10 sm:gap-10 sm:py-12 sm:px-16 md:gap-8 md:p-10 xl:grid-cols-3'>
			{galleryPieces
				.sort((a, b) => a.order - b.order)
				.map((piece, i) => (
					<div
						key={`gallery-piece-${i}`}
						className='relative col-span-2 aspect-square bg-dark-gallery md:col-span-1'>
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
			<div className='relative col-span-2 flex aspect-square items-center justify-center bg-dark-gallery p-2 text-center font-avenir text-sm font-extralight tracking-wide text-gold md:col-span-1 lg:text-lg'>
				More Coming Soon
			</div>
		</div>
	);
}
