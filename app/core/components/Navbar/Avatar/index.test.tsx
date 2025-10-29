import { render, screen } from "@testing-library/react";

import { Avatar } from ".";

const mockUseGetCurrentSpotifyUserProfile = vi.fn();

vi.mock("~/core/hooks", async (importOriginal) => ({
  ...(await importOriginal()),
  useGetCurrentSpotifyUserProfileQuery: () =>
    mockUseGetCurrentSpotifyUserProfile(),
}));

test("should display the user photo", () => {
  mockUseGetCurrentSpotifyUserProfile.mockReturnValueOnce({
    data: { images: [{ url: "www.example.com" }] },
  });

  render(<Avatar />);

  expect(screen.getByAltText("profile")).toBeInTheDocument();
});

test("should display the user initials when there is no profile picture", () => {
  mockUseGetCurrentSpotifyUserProfile.mockReturnValueOnce({
    data: { display_name: "Jose Pereira", images: [] },
  });

  render(<Avatar />);

  expect(screen.getByText("JP")).toBeInTheDocument();
});

test("should display a single user initial when the display name is a single one", () => {
  mockUseGetCurrentSpotifyUserProfile.mockReturnValueOnce({
    data: { display_name: "Jose", images: [] },
  });

  render(<Avatar />);

  expect(screen.getByText("J")).toBeInTheDocument();
});
