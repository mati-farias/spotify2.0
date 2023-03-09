import Link from "next/link";
import styles from "../styles/login.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
	children?: React.ReactNode;
	session: {
		status: string;
		data: any;
	};
};

function HomePage({ children, session }: Props) {
	return (
		<>
			<div className='h-full w-full bg-violet-300'>
				<h1 className={styles.title}>
					Welcome,{" "}
					{session.status === "authenticated"
						? session.data.user?.name || "friend"
						: "stranger"}
					!
				</h1>
				<button className='p-4 flex justify-center items-center text-base bg-green-200'>
					<Link href='/playlist/1'>Go to Playlist</Link>
				</button>
				<button
					className={styles.button}
					type='button'
					onClick={() => signOut()}
				>
					Sign out {session.data.user?.email}
				</button>
			</div>
		</>
	);
}

export default HomePage;
