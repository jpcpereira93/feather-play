import { spotifyApi } from "~core/api";

import {
  authenticateSpotifyUser,
  getCurrentSpotifyUserAlbums,
  getCurrentSpotifyUserFollowedArtists,
  getCurrentSpotifyUserPlaylists,
  getCurrentSpotifyUserProfile,
} from "./spotify.service";

test("should authenticate the user using the Spotify API", async () => {
  const mockRes = { authenticated: true, accessToken: {} as any };
  const spy = vi
    .spyOn(spotifyApi, "authenticate")
    .mockResolvedValueOnce(mockRes);

  const res = await authenticateSpotifyUser();

  expect(spy).toHaveBeenCalledOnce();
  expect(res).toEqual(mockRes);
});

test("should get the current user profile from the Spotify API", async () => {
  const mockRes = { display_name: "name1" } as any;

  const spy = vi
    .spyOn(spotifyApi.currentUser, "profile")
    .mockResolvedValueOnce(mockRes);

  const res = await getCurrentSpotifyUserProfile();

  expect(spy).toHaveBeenCalledOnce();
  expect(res).toEqual(mockRes);
});

test("should get the current user playlists from the Spotify API", async () => {
  const mockRes = { items: [] } as any;

  const spy = vi
    .spyOn(spotifyApi.currentUser.playlists, "playlists")
    .mockResolvedValueOnce(mockRes);

  const res = await getCurrentSpotifyUserPlaylists();

  expect(spy).toHaveBeenCalledOnce();
  expect(res).toEqual(mockRes);
});

test("should get the current user followed artists from the Spotify API", async () => {
  const mockRes = { artists: { items: [] } } as any;

  const spy = vi
    .spyOn(spotifyApi.currentUser, "followedArtists")
    .mockResolvedValueOnce(mockRes);

  const res = await getCurrentSpotifyUserFollowedArtists();

  expect(spy).toHaveBeenCalledOnce();
  expect(res).toEqual({ items: [] });
});

test("should get the current user saved albums from the Spotify API", async () => {
  const mockRes = { items: [] } as any;

  const spy = vi
    .spyOn(spotifyApi.currentUser.albums, "savedAlbums")
    .mockResolvedValueOnce(mockRes);

  const res = await getCurrentSpotifyUserAlbums();

  expect(spy).toHaveBeenCalledOnce();
  expect(res).toEqual(mockRes);
});
