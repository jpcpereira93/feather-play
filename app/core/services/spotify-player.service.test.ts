import { spotifyApi } from "~core/api";

import {
  toggleSpotifyRepeatMode,
  toggleSpotifyShuffleMode,
  transferSpotifyPlaybackToCurrentDevice,
} from "./spotify-player.service";

test("should transfer the playback to the current device", async () => {
  const spy = vi
    .spyOn(spotifyApi.player, "transferPlayback")
    .mockResolvedValueOnce(void 0);

  await transferSpotifyPlaybackToCurrentDevice("deviceId");

  expect(spy).toHaveBeenCalledExactlyOnceWith(["deviceId"]);
});

test("should set the repeat mode to off", async () => {
  const spy = vi
    .spyOn(spotifyApi.player, "setRepeatMode")
    .mockResolvedValueOnce(void 0);

  await toggleSpotifyRepeatMode(true);

  expect(spy).toHaveBeenCalledExactlyOnceWith("off");
});

test("should set the repeat mode to track", async () => {
  const spy = vi
    .spyOn(spotifyApi.player, "setRepeatMode")
    .mockResolvedValueOnce(void 0);

  await toggleSpotifyRepeatMode(false);

  expect(spy).toHaveBeenCalledExactlyOnceWith("track");
});

test("should toggle the playback shuffle mode to false", async () => {
  const spy = vi
    .spyOn(spotifyApi.player, "togglePlaybackShuffle")
    .mockResolvedValueOnce(void 0);

  await toggleSpotifyShuffleMode(true);

  expect(spy).toHaveBeenCalledExactlyOnceWith(false);
});

test("should toggle the playback shuffle mode to true", async () => {
  const spy = vi
    .spyOn(spotifyApi.player, "togglePlaybackShuffle")
    .mockResolvedValueOnce(void 0);

  await toggleSpotifyShuffleMode(false);

  expect(spy).toHaveBeenCalledExactlyOnceWith(true);
});
