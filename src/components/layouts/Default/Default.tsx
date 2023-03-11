import Footer from '@/components/modules/Footer/Footer';
import Sidebar from '@/components/modules/Sidebar/Sidebar';
import { Playlist } from '@/components/PlaylistsList/Playlists';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Playlists from '@/components/PlaylistsList/Playlists';

type Props = {
	children: React.ReactNode;
	playlists: Playlist[];
};

function Default({ children }: Props) {
	return (
		<>
			<div className='w-full h-full'>
				<div className='min-h-screen w-full flex '>
					<Sidebar className='bg-black w-1/3 h-auto' />
					<div className='h-auto w-2/3 bg-green-300'>{children}</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Default;
