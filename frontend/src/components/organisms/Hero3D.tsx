/* eslint-disable react-hooks/purity */
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed, distort, scale }: {
    position: [number, number, number]; color: string; speed: number; distort: number; scale: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
            <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.8}
                    distort={distort}
                    speed={speed * 2}
                    transparent
                    opacity={0.7}
                />
            </Sphere>
        </Float>
    );
}

function Particles({ count = 500 }: { count?: number }) {
    const points = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, [count]);

    const ref = useRef<THREE.Points>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.02;
            ref.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#00f0ff" transparent opacity={0.6} sizeAttenuation />
        </points>
    );
}

function TorusKnot() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.15;
            ref.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
            <mesh ref={ref} position={[3, -1, -2]} scale={0.6}>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <meshStandardMaterial
                    color="#a855f7"
                    roughness={0.2}
                    metalness={0.9}
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </Float>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} color="#00f0ff" />
                <pointLight position={[-5, -5, 5]} intensity={0.5} color="#a855f7" />
                <pointLight position={[0, 5, -5]} intensity={0.3} color="#f0abfc" />

                <AnimatedSphere position={[-2.5, 0.5, 0]} color="#00f0ff" speed={1.2} distort={0.4} scale={1.2} />
                <AnimatedSphere position={[2, -0.5, -1]} color="#a855f7" speed={0.8} distort={0.3} scale={0.8} />
                <AnimatedSphere position={[0, 1.5, -2]} color="#f0abfc" speed={1} distort={0.5} scale={0.5} />
                <TorusKnot />
                <Particles count={400} />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    );
}
