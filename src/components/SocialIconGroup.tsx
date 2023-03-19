import Link from "next/link";
import { socialMedia as socialMediaItems } from "@/lib/ts/data";

export default function SocialIcons() {
	return (
		<div className='mb-32 flex w-full max-w-[240px] justify-between md:mb-2.5 md:w-auto md:max-w-0 md:justify-center lg:mb-2.5'>
			{socialMediaItems.map((item, i) => {
				return (
					<Link key={`social-icon-${i}`} href={item.href}>
						<item.icon
							className={`h-11 w-11 text-bronze/50 hover:text-bronze/70 md:h-9 md:w-9 ${
								i > 0 ? "md:ml-7 lg:ml-9" : ""
							}`}
						/>
					</Link>
				);
			})}
		</div>
	);
}
