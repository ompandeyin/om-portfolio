import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 1800 }) {
  const mesh = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const c1 = new THREE.Color('#6366f1');
    const c2 = new THREE.Color('#a855f7');
    const c3 = new THREE.Color('#06b6d4');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const color = [c1, c2, c3][Math.floor(Math.random() * 3)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      siz[i] = Math.random() * 3 + 0.5;
    }
    return [pos, col, siz];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const pointer = state.pointer;

    mouse.current.x += (pointer.x * viewport.width * 0.3 - mouse.current.x) * 0.02;
    mouse.current.y += (pointer.y * viewport.height * 0.3 - mouse.current.y) * 0.02;

    mesh.current.rotation.y = t * 0.04 + mouse.current.x * 0.1;
    mesh.current.rotation.x = t * 0.02 + mouse.current.y * 0.1;

    const posAttr = mesh.current.geometry.attributes.position;
    const arr = posAttr.array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3 + 1] += Math.sin(t * 0.3 + i * 0.01) * 0.002;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * 0.4 + i * 2) * 1.5;
      child.position.x = Math.cos(t * 0.3 + i * 1.5) * 0.5 + child.userData.ox;
    });
  });

  const orbs = useMemo(() => {
    return [
      { pos: [-5, 0, -3], color: '#6366f1', scale: 0.6, ox: -5 },
      { pos: [5, 2, -4], color: '#a855f7', scale: 0.4, ox: 5 },
      { pos: [0, -3, -5], color: '#06b6d4', scale: 0.3, ox: 0 },
      { pos: [-3, 3, -6], color: '#6366f1', scale: 0.25, ox: -3 },
      { pos: [4, -2, -3], color: '#a855f7', scale: 0.35, ox: 4 },
    ];
  }, []);

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos} userData={{ ox: orb.ox }}>
          <sphereGeometry args={[orb.scale, 32, 32]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.08} />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <Particles />
      <FloatingOrbs />
    </Canvas>
  );
}
