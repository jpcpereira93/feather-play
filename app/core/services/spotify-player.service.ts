import { spotifyApi } from "~/core/api";

export const transferSpotifyPlaybackToCurrentDevice = async (
  deviceId: string,
) => await spotifyApi.player.transferPlayback([deviceId]);

export const toggleSpotifyRepeatMode = async (isRepeatMode: boolean) =>
  await spotifyApi.player.setRepeatMode(isRepeatMode ? "off" : "track");

export const toggleSpotifyShuffleMode = async (isShuffleMode: boolean) =>
  await spotifyApi.player.togglePlaybackShuffle(!isShuffleMode);

export const playSpotifyItem = async (uri?: string, uris?: string[]) =>
  await spotifyApi.player.startResumePlayback("", uri, uris);
