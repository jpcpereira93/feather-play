import {
  AuthorizationCodeWithPKCEStrategy,
  Scopes,
  SpotifyApi,
} from "@spotify/web-api-ts-sdk";

const redirectUrl = import.meta.env.VITE_SPOTIFY_AUTH_REDIRECT_URL;

const scopes: string[] = [...Scopes.all];

export const createSpotifyApi = (clientId: string) => {
  const auth = new AuthorizationCodeWithPKCEStrategy(
    clientId,
    redirectUrl,
    scopes,
  );

  return new SpotifyApi(auth, {});
};
