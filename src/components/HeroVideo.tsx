"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (!isDesktop) return null;

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/fernanda-portrait-arch-poster.webp"
      aria-label="Vídeo institucional de Fernanda Yaryd"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
