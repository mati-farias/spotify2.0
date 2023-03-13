import { ReactComponentElement } from "react";

type Props = {
	children: React.ReactNode;
	className?: React.HTMLAttributes<HTMLDivElement>;
	leftIcon: React.ReactNode;
	labelButton: string;
};

function SidebarActionButton({ children, className, leftIcon }: Props) {
	return <div>sidebarActionButton</div>;
}

export default SidebarActionButton;
