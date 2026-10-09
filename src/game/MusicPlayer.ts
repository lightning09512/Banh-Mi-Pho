const MUSIC_SETTINGS_KEY = "alley-grill-music-settings-v1";
const DEFAULT_VOLUME = 0.16;
const MAX_VOLUME = 0.4;
const FADE_DURATION_MS = 1_200;

const TRACKS = [
  { name: "Autumn Evening", src: new URL("../../assets/sound/Autumn Evening.mp3", import.meta.url).href },
  { name: "Countryside Loop", src: new URL("../../assets/sound/Countryside Loop.mp3", import.meta.url).href },
  { name: "Lantern-lit Tavern", src: new URL("../../assets/sound/Lantern-lit Tavern.mp3", import.meta.url).href },
  { name: "Market Day Melody", src: new URL("../../assets/sound/Market Day Melody.mp3", import.meta.url).href },
  { name: "Countryside Morning", src: new URL("../../assets/sound/Countryside Morning.mp3", import.meta.url).href },
  { name: "Countryside Morning 2", src: new URL("../../assets/sound/Countryside Morning 2.mp3", import.meta.url).href },
  { name: "Countryside Morning 3", src: new URL("../../assets/sound/Countryside Morning 3.mp3", import.meta.url).href },
] as const;

export interface MusicPlayerState {
  isPlaying: boolean;
  enabled: boolean;
  volumePercent: number;
  trackName: string;
}

export class MusicPlayer {
  private readonly audio = new Audio();
  private trackIndex = 0;
  private volume = DEFAULT_VOLUME;
  private enabled = true;
  private fade = 1;
  private fadeTimer?: number;

  constructor(private readonly onStateChange: (state: MusicPlayerState) => void) {
    this.audio.preload = "auto";
    this.audio.addEventListener("ended", this.handleEnded);
    this.audio.addEventListener("error", this.handleAudioError);
    this.restoreSettings();
    this.applyVolume();
    this.publish();
  }

  get shouldAutoStart(): boolean {
    return this.enabled;
  }

  async toggle(): Promise<void> {
    if (this.enabled && !this.audio.paused) {
      this.enabled = false;
      this.saveSettings();
      this.audio.pause();
      this.clearFadeTimer();
      this.fade = 1;
      this.applyVolume();
      this.publish();
      return;
    }

    this.enabled = true;
    this.saveSettings();
    await this.play();
  }

  async play(): Promise<boolean> {
    if (!this.enabled) return false;
    if (!this.audio.src) this.audio.src = TRACKS[this.trackIndex].src;

    try {
      await this.audio.play();
      this.fadeIn();
      this.publish();
      return true;
    } catch {
      this.publish();
      return false;
    }
  }

  setVolume(volumePercent: number): void {
    this.volume = Math.max(0, Math.min(MAX_VOLUME, volumePercent / 100));
    this.applyVolume();
    this.saveSettings();
    this.publish();
  }

  private readonly handleEnded = (): void => {
    if (!this.enabled) return;
    this.trackIndex = (this.trackIndex + 1) % TRACKS.length;
    this.fade = 0;
    this.audio.src = TRACKS[this.trackIndex].src;
    this.audio.load();
    void this.play();
  };

  private readonly handleAudioError = (): void => {
    this.publish();
  };

  private fadeIn(): void {
    this.clearFadeTimer();
    this.fade = 0;
    this.applyVolume();
    const startedAt = performance.now();
    this.fadeTimer = window.setInterval(() => {
      this.fade = Math.min(1, (performance.now() - startedAt) / FADE_DURATION_MS);
      this.applyVolume();
      if (this.fade >= 1) this.clearFadeTimer();
    }, 40);
  }

  private clearFadeTimer(): void {
    if (this.fadeTimer !== undefined) window.clearInterval(this.fadeTimer);
    this.fadeTimer = undefined;
  }

  private applyVolume(): void {
    this.audio.volume = this.volume * this.fade;
  }

  private restoreSettings(): void {
    try {
      const raw = localStorage.getItem(MUSIC_SETTINGS_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as { volume?: unknown; enabled?: unknown };
      if (typeof saved.volume === "number" && Number.isFinite(saved.volume)) {
        this.volume = Math.max(0, Math.min(MAX_VOLUME, saved.volume));
      }
      if (typeof saved.enabled === "boolean") this.enabled = saved.enabled;
    } catch {
      // Ignore malformed or unavailable audio preferences and use the defaults.
    }
  }

  private saveSettings(): void {
    try {
      localStorage.setItem(MUSIC_SETTINGS_KEY, JSON.stringify({ volume: this.volume, enabled: this.enabled }));
    } catch {
      // Music continues normally when browser storage is unavailable.
    }
  }

  private publish(): void {
    this.onStateChange({
      isPlaying: !this.audio.paused && !this.audio.error,
      enabled: this.enabled,
      volumePercent: Math.round(this.volume * 100),
      trackName: TRACKS[this.trackIndex].name,
    });
  }
}
