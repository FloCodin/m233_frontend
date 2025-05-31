import { render, screen, waitFor } from "@testing-library/react";
import WatchlistPage from "../pages/WatchlistPage";
import WatchlistService from "../services/watchlist.service";
import {jest} from "globals";
jest.mock("../services/watchlist.service");

describe("WatchlistPage", () => {
  it("sollte Filme aus der Watchlist anzeigen", async () => {
    WatchlistService.getMyWatchlist.mockResolvedValue({
      data: [
        {
          movie: { id: 1, title: "Batman", release_date: "2023-05-10" },
          rating: { score: 4, comment: "Cool!" },
        },
      ],
    });

    render(<WatchlistPage />);

    await waitFor(() => {
      expect(screen.getByText("Batman")).toBeInTheDocument();
      expect(screen.getByText("Cool!")).toBeInTheDocument();
    });
  });
});

