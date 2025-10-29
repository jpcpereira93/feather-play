import { spotifyApi } from "~/core/api";

export const authenticateSpotifyUser = async () =>
  await spotifyApi.authenticate();

export const getSpotifyAlbum = async (id: string) => {
  const album = await spotifyApi.albums.get(id);

  return {
    ...album,
    tracks: {
      ...album.tracks,
      items: album.tracks.items.map((track) => ({ track })),
    },
  };
};

export const getCurrentSpotifyUserLikedSongs = async () =>
  await spotifyApi.currentUser.tracks.savedTracks();

export const getSpotifyPlaylist = async (id: string) =>
  await spotifyApi.playlists.getPlaylist(id);

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
