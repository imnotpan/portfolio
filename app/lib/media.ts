import manifest from "../data/media.json";

export type MediaEntry = {
  src: string;
  width: number;
  height: number;
  nativeWidth: number;
  nativeHeight: number;
  scale: number;
  animated: boolean;
  pixelated: boolean;
  thumb?: string;
  poster?: string;
  webm?: string;
  video?: boolean;
  frames?: number;
  fps?: number;
  bg?: string;
  /** Average colour of each image edge (scripts/edge-colors.mjs). */
  edge?: { t: string; b: string; l: string; r: string };
  bytes: number;
};

const media = manifest as Record<string, MediaEntry>;

export function getMedia(source: string): MediaEntry {
  const entry = media[source];
  if (!entry) throw new Error(`Missing media for "${source}". Run: npm run media`);
  return entry;
}
