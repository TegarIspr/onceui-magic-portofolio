'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const Scene3D = dynamic(() => import('@/components/three/Globe').then((mod) => mod.Scene3D), {
  ssr: false,
  loading: () => null,
});

const ParticleBackground = dynamic(
  () => import('@/components/three/Particles').then((mod) => mod.ParticleBackground),
  {
    ssr: false,
  },
);

export function ThreeBackground() {
  const [scrollY, setScrollY] = useState(0);

  return (
    <>
      <div style={{ position: 'relative' }} onScroll={(e) => setScrollY(e.currentTarget.scrollTop)}>
        <ParticleBackground />
        <div
          style={{
            position: 'fixed',
            right: '-10%',
            top: '10%',
            width: '50vw',
            height: '50vw',
            maxWidth: '600px',
            maxHeight: '600px',
            opacity: 0.8,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <Scene3D scrollY={scrollY} />
        </div>
      </div>
    </>
  );
}
