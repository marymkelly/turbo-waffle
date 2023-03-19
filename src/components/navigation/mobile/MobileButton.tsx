import MenuBarsIcon from "../../icons/MenuBars";
import XMarkIcon from "../../icons/XMark";

interface MobileButtonProps {
	open: boolean;
	setOpen: Function;
}

export default function MobileButton({ open, setOpen }: MobileButtonProps) {
	return (
		<div
			onClick={() => {
				setOpen(!open);
			}}
			className='bronze-gradient absolute bottom-12 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full'>
			<span className='flex h-full w-full items-center justify-center'>
				<XMarkIcon
					className={`absolute ml-px h-7 w-7 flex-none stroke-[2px] text-yellow-gold transition-all duration-500 ${
						open ? "rotate-[360deg] opacity-100 delay-[250ms]" : "rotate-0 opacity-0"
					}	`}
				/>
				<MenuBarsIcon
					className={`absolute h-8 w-8 stroke-[1.5px] text-yellow-gold transition-all duration-500 ${
						open ? "rotate-0 opacity-0" : "-rotate-[360deg] opacity-100 delay-[250ms]"
					}	`}
				/>
			</span>
		</div>
	);
}
