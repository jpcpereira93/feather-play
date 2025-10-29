import { spotifyApi } from "../api";

export const authenticateSpotifyUser = async () =>
  await spotifyApi.authenticate();

export const getCurrentSpotifyUserProfile = async () =>
  await spotifyApi.currentUser.profile();

export const getCurrentSpotifyUserPlaylists = async () =>
  await spotifyApi.currentUser.playlists.playlists();
