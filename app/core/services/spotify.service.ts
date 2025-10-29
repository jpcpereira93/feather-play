import { spotifyApi } from "../api";

export const authenticateSpotifyUser = async () =>
  await spotifyApi.authenticate();

export const getCurrentSpotifyUserFollowedArtists = async () => {
  const { artists } = await spotifyApi.currentUser.followedArtists();

  return artists;
};

export const getCurrentSpotifyUserPlaylists = async () =>
  await spotifyApi.currentUser.playlists.playlists();

export const getCurrentSpotifyUserProfile = async () =>
  await spotifyApi.currentUser.profile();
