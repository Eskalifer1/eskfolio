/**
 * Plays a sound once with caching.
 *
 * Audio elements are cached by `src` to avoid reloading the same sound file multiple times.
 * For multiple rapid plays (e.g., repeated clicks), it clones the cached audio element.
 */

let audioContext: AudioContext | null = null;
const bufferCache = new Map<string, AudioBuffer>();

function getAudioContext() {
  if (typeof window === "undefined") return null; // SSR guard

  if (!audioContext) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    audioContext = new Ctx();
  }
  return audioContext;
}

export async function playSoundOnce(src: string, volume: number = 1) {
  const ctx = getAudioContext();
  if (!ctx) return;

  let buffer = bufferCache.get(src);
  if (!buffer) {
    const response = await fetch(src);
    const arrayBuffer = await response.arrayBuffer();
    buffer = await ctx.decodeAudioData(arrayBuffer);
    bufferCache.set(src, buffer);
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const gainNode = ctx.createGain();
  gainNode.gain.value = volume;

  source.connect(gainNode).connect(ctx.destination);
  source.start(0);
}
