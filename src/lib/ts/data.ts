import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import PinterestIcon from "@/components/icons/Pinterest";

export interface FeatureCardProps {
	title: string;
	date?: {
		start?: number | string;
		end?: number | string;
	};
	subtitle?: string;
	description?: string;
}

export interface FeatureProjProps {
	header: string;
	image: string;
	order?: number;
	card: FeatureCardProps;
}

interface SocialMediaProps {
	icon: Function;
	href: string;
}

interface NavLinkProps {
	name: string;
	href: string;
	public: boolean;
}

export const featureData: FeatureProjProps[] = [
	{
		header: "Sculpture",
		image: "/images/wire-sculpture.png",
		card: {
			title: "Untitled",
			date: {
				start: 2020,
				end: undefined,
			},
			subtitle: "Copper Wire, Springs, Gears",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	},
	{
		header: "Resin",
		image: "/images/resin-double.png",
		card: {
			title: "Flower Power Collection",
			date: { start: 2020, end: "Current" },
			subtitle: "Resin, Chain, Miscellaneous",
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		},
	},
	{
		header: "Welding",
		image: "/images/table.png",
		card: {
			title: "Engine Table",
			date: { start: 2020, end: undefined },
			subtitle: "Glass, Engine Parts, Metal",
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
		},
	},
	{
		header: "Painting",
		image: "/images/painting-2-crop-edit.png",
		card: {
			title: "Untitled",
			date: { start: 2021, end: undefined },
			subtitle: "Oil Paint, Canvas",
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
		},
	},
];

export const galleryPieces = [
	{
		title: "House",
		description: "",
		image: "/images/gallery/painting-1.png",
		order: 3,
		classNames: "object-cover",
	},
	{
		title: "Zombie",
		description: "",
		image: "/images/gallery/painting-2-sm.png",
		order: 5,
		classNames: "object-cover",
	},
	{
		title: "Skull",
		description: "",
		image: "/images/gallery/painting-3.png",
		order: 1,
		classNames: "object-cover",
	},
	{
		title: "Double Flower",
		description: "",
		image: "/images/resin-1.png",
		order: 4,
		classNames: "object-contain p-8",
	},
	{
		title: "Single Flower",
		description: "",
		image: "/images/resin-2.png",
		order: 8,
		classNames: "object-contain p-8",
	},
	{
		title: "Small Flower",
		description: "",
		image: "/images/resin-3.png",
		order: 7,
		classNames: "object-contain p-8",
	},
	{
		title: "Engine Table",
		description: "",
		image: "/images/gallery/table.png",
		order: 2,
		classNames: "object-contain p-3 pt-9",
	},
	{
		title: "Hand Wire Sculpture",
		description: "",
		image: "/images/gallery/wire-sculpture.png",
		order: 6,
		classNames: "object-contain p-8",
	},
];

export const socialMedia: SocialMediaProps[] = [
	{
		icon: FacebookIcon,
		href: "#",
	},
	{
		icon: PinterestIcon,
		href: "#",
	},
	{
		icon: InstagramIcon,
		href: "#",
	},
];

export const navLinks: NavLinkProps[] = [
	{ name: "Home", href: "/", public: true },
	{ name: "Gallery", href: "/gallery", public: true },
	{ name: "About", href: "#", public: false },
	{ name: "Store", href: "#", public: false },
	{ name: "Contact", href: "#", public: false },
];
