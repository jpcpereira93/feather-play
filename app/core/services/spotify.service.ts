import { spotifyApi } from "~/core/api";

export const authenticateSpotifyUser = async () =>
  await spotifyApi.authenticate();

export const getSpotifyAlbum = async (id: string) =>
  await spotifyApi.albums.get(id);

export const getSpotifyPlaylist = async (id: string) => {
  const playlist = await spotifyApi.playlists.getPlaylist(id);

  return {
    ...playlist,
    tracks: {
      ...playlist.tracks,
      items: playlist.tracks.items.map(({ track }) => track),
    },
  };
};

export const getCurrentSpotifyUserAlbums = async () =>
  await spotifyApi.currentUser.albums.savedAlbums();

export const getCurrentSpotifyUserFollowedArtists = async () => {
  const { artists } = await spotifyApi.currentUser.followedArtists();

  return artists;
};

export const getCurrentSpotifyUserPlaylists = async () =>
  await spotifyApi.currentUser.playlists.playlists();

export const getCurrentSpotifyUserProfile = async () =>
  await spotifyApi.currentUser.profile();
