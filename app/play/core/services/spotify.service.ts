import { spotifyApi } from "~/play/core/api";

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

export const hasCurrentSpotifyUserSavedTracks = async (tracks: string[]) =>
  await spotifyApi.currentUser.tracks.hasSavedTracks(tracks);

export const logout = () => spotifyApi.logOut();

export const removeSavedTracks = async (tracks: string[]) =>
  // @ts-expect-error: Spotify API is wrongly typed, should be {ids: string[]}
  await spotifyApi.currentUser.tracks.removeSavedTracks({ ids: tracks });

export const saveTracks = async (tracks: string[]) =>
  // @ts-expect-error: Spotify API is wrongly typed, should be {ids: string[]}
  await spotifyApi.currentUser.tracks.saveTracks({ ids: tracks });

export const searchSpotify = async (searchTerm: string) =>
  await spotifyApi.search(searchTerm, ["track"]);
