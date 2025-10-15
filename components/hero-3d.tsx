"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere, useTexture } from "@react-three/drei"
import { Suspense, useMemo } from "react"

function Earth() {
  const texture = useTexture("/placeholder.jpg")
  const normal = useTexture("/placeholder.jpg") // simple reuse for subtle detail

  const matProps = useMemo(
    () => ({
      map: texture,
      normalMap: normal,
      metalness: 0.1,
      roughness: 0.9,
    }),
    [texture, normal],
  )

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 1]} intensity={0.9} />
      <Sphere args={[1.2, 64, 64]}>
        <meshStandardMaterial {...matProps} />
      </Sphere>
    </group>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[520px]" role="img" aria-label="3D rotating Earth">
      <Canvas camera={{ position: [0, 0, 3.6], fov: 45 }}>
        <Suspense fallback={null}>
          <Earth />
          <Environment preset="night" />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Suspense>
      </Canvas>
    </div>
  )
}
