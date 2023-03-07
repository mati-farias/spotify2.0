import Link from "next/link";
type Props = {
	children?: React.ReactNode;
};

function HomePage({ children }: Props) {
	return (
		<>
			<div className='h-full w-full bg-violet-300'>
				<h2>Soy un subtitulo</h2>
				<p>Soy Homepage</p>
				<button className='p-4 flex justify-center items-center text-base bg-green-200'>
					<Link href='/Playlist/1'>Go to Playlist</Link>
				</button>
			</div>
		</>
	);
}

export default HomePage;
