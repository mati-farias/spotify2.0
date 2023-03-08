import {
	HomeIcon,
	LibraryIcon,
	SearchIcon,
	PlusCircleIcon,
} from '@heroicons/react/outline';
import { HeartIcon, ThumbUpIcon } from '@heroicons/react/solid/';
import logoSpotify from '../../../../public/Spotify_Icon_RGB_Green.png';
import Image from 'next/image';
type Props = {
	className?: string;
};

function Sidebar({ className }: Props) {
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
				<h2 className='text-3xl font-bold'>Spotify</h2>
			</div>
			<div className=' w-52'>
				<div className='flex flex-col items-start w-full'>
					<button>
						<div className='flex w-40 items-center'>
							<div className='m-2'>
								<HomeIcon className='h-5 w-5' />
							</div>
							Home
						</div>
					</button>
					<button>
						<div className='flex w-full items-center'>
							<div className='m-2'>
								<SearchIcon className='h-5 w-5' />
							</div>
							Search
						</div>
					</button>
					<button>
						<div className='flex w-full items-center'>
							<div className='m-2'>
								<LibraryIcon className='h-5 w-5' />
							</div>
							Your Library
						</div>
					</button>
					<div className='border-b-[0.2px] border-slate-800 w-full'></div>
				</div>
				<div className='flex flex-col items-start w-full'>
					<button>
						<div className='flex w-full items-center'>
							<div className='m-2'>
								<PlusCircleIcon className='h-5 w-5' />
							</div>
							Create playlist
						</div>
					</button>
					<button>
						<div className='flex w-full items-center'>
							<div className='m-2'>
								<HeartIcon className='h-5 w-5' />
							</div>
							Favorite songs
						</div>
					</button>
					<button>
						<div className='flex w-full items-center'>
							<div className='m-2'>
								<ThumbUpIcon className='h-5 w-5' />
							</div>
							Favorite Episodes
						</div>
					</button>
					<div className='border-b-[0.2px] border-slate-800 w-full'></div>
				</div>
				<div>{/*Playlist*/}</div>
			</div>
		</div>
	);
}

export default Sidebar;
