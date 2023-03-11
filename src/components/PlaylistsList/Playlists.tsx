import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

export interface Playlist {
	id: string;
	name: string;
	description: string;
}

interface Props {
	playlists: Playlist[];
}

const Playlists: FC<Props> = ({ playlists }) => (
	<div>
		<h1>Playlists</h1>
		{playlists && (
			<ul>
				{playlists.map((playlist) => (
					<li key={playlist.id}>
						<h2>{playlist.name}</h2>
						<p>{playlist.description}</p>
					</li>
				))}
			</ul>
		)}
	</div>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const response = await axios.get<{ items: Playlist[] }>(
		'https://api.spotify.com/v1/me/playlists',
		{
			headers: {
				Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
			},
		}
	);

	const playlists = response.data.items;

	return { props: { playlists } };
};

export default Playlists;
