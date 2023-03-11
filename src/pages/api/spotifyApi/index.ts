import axios from 'axios';

export async function getPlaylists(accessToken: string) {
  const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  const playlists = response.data.items.map((playlist: any) => ({
    id: playlist.id,
    name: playlist.name,
    description: playlist.description,
    imageUrl: playlist.images[0].url
  }));

  return playlists;
}