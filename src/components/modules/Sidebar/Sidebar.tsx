import {
	HomeIcon,
	LibraryIcon,
	SearchIcon,
	PlusCircleIcon,
	HeartIcon,
} from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid/";
import logoSpotify from "../../../../public/Spotify_Icon_RGB_Green.png";
import Image from "next/image";
import { Playlist } from "@/components/PlaylistsList/Playlists";
import SidebarActionButton from "@/components/elements/SidebarActionButton/sidebarActionButton";

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
					<SidebarActionButton
						leftIcon={<HomeIcon className='h-5 w-5' />}
						labelButton='Home'
					/>
					<SidebarActionButton
						leftIcon={<SearchIcon className='h-5 w-5' />}
						labelButton='Search'
					/>
					<SidebarActionButton
						leftIcon={<LibraryIcon className='h-5 w-5' />}
						labelButton='Your Library'
					/>

					<hr className='border-t-[0.1px] border-gray-900 w-full' />

					<SidebarActionButton
						leftIcon={<PlusCircleIcon className='h-5 w-5' />}
						labelButton='Create playlist'
					/>
					<SidebarActionButton
						leftIcon={<HeartIcon className='h-5 w-5 to-blue-500' />}
						labelButton='Favorite songs'
					/>
					<SidebarActionButton
						leftIcon={<ThumbUpIcon className='h-5 w-5' />}
						labelButton='Your Episodes'
					/>
					{/*
						button
							leftIcon
							textButton
						/button
					*/}
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
