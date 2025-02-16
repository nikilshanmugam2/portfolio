import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cone, Cylinder } from '@react-three/drei';

export default function Tree3D() {
  const treeRef = useRef<any>();

  useFrame(() => {
    if (treeRef.current) {
      treeRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={treeRef}>
      {/* Tree trunk */}
      <Cylinder 
        args={[0.3, 0.4, 2]} 
        position={[0, -1, 0]}
      >
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>

      {/* Tree foliage layers */}
      <Cone 
        args={[1.5, 2, 8]} 
        position={[0, 1, 0]}
      >
        <meshStandardMaterial color="#2F4538" />
      </Cone>
      <Cone 
        args={[1.2, 1.8, 8]} 
        position={[0, 1.8, 0]}
      >
        <meshStandardMaterial color="#3A5F41" />
      </Cone>
      <Cone 
        args={[0.9, 1.6, 8]} 
        position={[0, 2.5, 0]}
      >
        <meshStandardMaterial color="#4A7B4A" />
      </Cone>
    </group>
  );
}