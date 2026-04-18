'use client';

import { useState } from 'react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-video rounded-lg overflow-hidden border border-vice-border hover:border-vice-pink/50 transition-all"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${img.src})` }}
            />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-xs text-white truncate">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
          >
            &times;
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full rounded-lg"
            />
            {images[selectedIndex].caption && (
              <p className="text-center text-sm text-vice-muted mt-3">
                {images[selectedIndex].caption}
              </p>
            )}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                className="px-4 py-2 bg-vice-card border border-vice-border rounded-lg text-vice-muted hover:text-white transition-colors"
                disabled={selectedIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={() => setSelectedIndex(Math.min(images.length - 1, selectedIndex + 1))}
                className="px-4 py-2 bg-vice-card border border-vice-border rounded-lg text-vice-muted hover:text-white transition-colors"
                disabled={selectedIndex === images.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
