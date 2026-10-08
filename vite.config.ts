import { defineConfig, type Plugin } from "vite";
import { GAME_DESCRIPTION, GAME_NAME, GAME_NAME_VI, GAME_TITLE } from "./src/config/game.ts";

const gameMetadata: Plugin = {
  name: "game-metadata",
  transformIndexHtml(html) {
    return html
      .replaceAll("__GAME_NAME__", GAME_NAME)
      .replaceAll("__GAME_NAME_VI__", GAME_NAME_VI)
      .replaceAll("__GAME_TITLE__", GAME_TITLE)
      .replaceAll("__GAME_DESCRIPTION__", GAME_DESCRIPTION);
  },
};

export default defineConfig({
  plugins: [gameMetadata],
  server: { host: "0.0.0.0" },
});
