import Nav from "../navigation/Nav";

export default function Layout(props: any) {
	return (
		<>
			<div className='primary-bg-gradient flex h-full w-full flex-col md:flex-row'>
				<Nav {...props.children.props}>{props.children}</Nav>
			</div>
		</>
	);
}
