type Props = {
	className?: string;
};
function Footer({ className }: Props) {
	return <div className={`${className} h-[10vh]`}>Footer</div>;
}

export default Footer;
