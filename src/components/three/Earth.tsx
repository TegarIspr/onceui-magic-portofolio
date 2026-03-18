'use client';

import { Html, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const JAKARTA_COORDS = {
  lat: -6.2088,
  lng: 106.8456,
};

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}

function LocationMarker({ lat, lng, label }: { lat: number; lng: number; label: string }) {
  const markerRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const position: [number, number, number] = latLngToVector3(lat, lng, 2.02) as [
    number,
    number,
    number,
  ];

  useFrame(() => {
    if (markerRef.current) {
      markerRef.current.scale.setScalar(hovered ? 1.3 : 1);
    }
  });

  return (
    <group ref={markerRef} position={position}>
      <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.2, 8]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      <pointLight color="#ef4444" intensity={0.8} distance={0.8} />

      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              background: 'rgba(0,0,0,0.85)',
              color: 'white',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              fontFamily: 'system-ui, sans-serif',
              whiteSpace: 'nowrap',
              transform: 'translate(-50%, -150%)',
              pointerEvents: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            📍 {label}
          </div>
        </Html>
      )}
    </group>
  );
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const earthTexture = useLoader(
    THREE.TextureLoader,
    'https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg',
  );
  const bumpTexture = useLoader(
    THREE.TextureLoader,
    'https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png',
  );

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group>
      <Sphere
        ref={earthRef}
        args={[2, 64, 64]}
        scale={hovered ? 1.02 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.04}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>

      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial color="#4fc3f7" transparent opacity={0.1} />
      </Sphere>

      <LocationMarker
        lat={JAKARTA_COORDS.lat}
        lng={JAKARTA_COORDS.lng}
        label="Jakarta, Indonesia"
      />

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#fff5e6" />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#4488ff" />
    </group>
  );
}

export function EarthGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <Earth />
    </Canvas>
  );
}
