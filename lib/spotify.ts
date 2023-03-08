import SpotifyWebApi from 'spotify-web-api-js';

export const spotifyApi = new SpotifyWebApi();

export function getAccessToken(code: string) {
  const headers = {
    Authorization: `Basic ${Buffer.from(
      `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const data = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
  };
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers,
    body: new URLSearchParams(data),
  }).then((res) => res.json());
}