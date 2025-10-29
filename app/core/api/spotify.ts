import {
  AuthorizationCodeWithPKCEStrategy,
  Scopes,
  SpotifyApi,
} from "@spotify/web-api-ts-sdk";

const clientId = import.meta.env.VITE_SPOTIFY_AUTH_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_SPOTIFY_AUTH_REDIRECT_URL;

const scopes: string[] = [
  ...Scopes.userDetails,
  ...Scopes.playlistRead,
  ...Scopes.userPlaybackRead,
  ...Scopes.userPlayback,
  ...Scopes.userPlaybackModify,
  ...Scopes.userFollow,
  ...Scopes.userFollowRead,
];

const auth = new AuthorizationCodeWithPKCEStrategy(
  clientId,
  redirectUrl,
  scopes,
);

export const spotifyApi = new SpotifyApi(auth, {});
