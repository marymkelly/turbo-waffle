import { IconProps } from "@/lib/ts/types";

function MenuBarsIcon(props: IconProps) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			stroke='currentColor'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={props.className}>
			<path d='M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	);
}

export default MenuBarsIcon;
