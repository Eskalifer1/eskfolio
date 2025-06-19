"use client";

import { useEffect, useRef, useState } from "react";

import { useSharedEventListener } from "@/hooks/useSharedEventListener";

interface BackgroundMusicProps {
  src: string;
  volume?: number;
  loop?: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  src,
  volume = 0.2,
  loop = true,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isManuallyTriggered, setIsManuallyTriggered] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.loop = loop;

    audio
      .play()
      .then(() => {
        audioRef.current = audio;
      })
      .catch((err) => {
        console.warn("Autoplay blocked, waiting for user interaction", err);
        audioRef.current = audio;
        setIsManuallyTriggered(true);
      });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src, volume, loop]);

  useSharedEventListener(
    document,
    "click",
    () => {
      if (!isManuallyTriggered || !audioRef.current) return;
      audioRef.current.play().catch((err) => {
        console.warn("Play failed after user interaction", err);
      });
      setIsManuallyTriggered(false);
    },
    isManuallyTriggered,
  );

  return null;
};

export default BackgroundMusic;
