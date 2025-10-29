import { spotifyApi } from "~/core/api";

export const authenticateSpotifyUser = async () =>
  await spotifyApi.authenticate();

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

export const getSpotifyPlaylist = async (id: string) =>
  await spotifyApi.playlists.getPlaylist(id);
