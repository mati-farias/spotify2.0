import {
	HomeIcon,
	LibraryIcon,
	SearchIcon,
	PlusCircleIcon,
	HeartIcon,
} from '@heroicons/react/outline';
import { ThumbUpIcon } from '@heroicons/react/solid/';
import logoSpotify from '../../../../public/Spotify_Icon_RGB_Green.png';
import Image from 'next/image';
import { Playlist } from '@/components/PlaylistsList/Playlists';

type Props = {
	className?: string;
	playlists: Playlist[];
};

function Sidebar({ playlists, className }: Props) {
	return (
		<div className={`${className}`}>
			<div className='flex items-center w-full'>
				<div className='m-2'>
					<Image
						className='w-[40px] h-[40px]'
						src={logoSpotify}
						alt='Logo Spotify'
					/>
				</div>
				<h2 className='text-3xl font-bold text-white'>Spotify</h2>
			</div>
			<div className='w-52 text-gray-500 p-5 t-sm border-r border-gray-900'>
				<div className=' space-y-4'>
					<button className='flex w-full items-center space-x-2 hover:text-white'>
						<HomeIcon className='h-5 w-5' />
						<p>Home</p>
					</button>
					<button className='flex w-full items-center space-x-2 hover:text-white'>
						<SearchIcon className='h-5 w-5' />
						<p>Search</p>
					</button>
					<button className='flex w-full items-center space-x-2 hover:text-white'>
						<LibraryIcon className='h-5 w-5' />
						<p>Your Library</p>
					</button>

					<hr className='border-t-[0.1px] border-gray-900 w-full' />

					<button className='flex w-full items-center space-x-2 hover:text-white'>
						<PlusCircleIcon className='h-5 w-5' />
						<p> Create playlist</p>
					</button>
					<button className='flex w-full items-center space-x-2 hover:text-white'>
						<HeartIcon className='h-5 w-5 to-blue-500' />
						<p>Favorite songs</p>
					</button>
					<button className='flex w-full items-center space-x-2 hover:text-white'>
						<ThumbUpIcon className='h-5 w-5' />
						<p>Your Episodes</p>
					</button>
					<hr className='border-t-[0.1px] border-gray-900 w-full' />

					{/*Playlist*/}

					{playlists && (
						<ul>
							{playlists.map((playlist) => (
								<li key={playlist.id}>
									<p>{playlist.name}</p>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
