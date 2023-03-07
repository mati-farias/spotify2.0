import { HomeIcon } from "@heroicons/react/outline";

type Props = {
	className?: string;
};

function Sidebar({ className }: Props) {
	return (
		<div className={`${className}`}>
			<div>
				<button>
					<HomeIcon />
					asdasdas
				</button>
			</div>
		</div>
	);
}

export default Sidebar;
