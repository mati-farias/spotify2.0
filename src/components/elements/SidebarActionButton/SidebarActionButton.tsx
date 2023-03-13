import { ReactComponentElement } from "react";

type Props = {
	className?: React.HTMLAttributes<HTMLDivElement>;
	leftIcon: React.ReactNode;
	labelButton: string;
};

function SidebarActionButton({ className, leftIcon, labelButton }: Props) {
	return (
		<button
			className={`flex w-full items-center space-x-2 hover:text-white ${className}`}
		>
			{leftIcon}
			<p>{labelButton}</p>
		</button>
	);
}

export default SidebarActionButton;
