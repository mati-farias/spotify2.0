import { HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid/';

const Sidebar = () => {
	return (
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
							<HomeIcon className='h-5 w-5' />
						</div>
						Home
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
							<LibraryIcon className='h-5 w-5' />
						</div>
						Your Library
					</div>
				</button>
				<div className='border-b-[0.2px] border-slate-800 w-full'></div>
			</div>
			<div>{/*Playlist*/}</div>
		</div>
	);
};

export default Sidebar;
