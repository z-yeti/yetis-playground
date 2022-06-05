import * as THREE from 'three'
import React, { FC, Suspense, useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'
import styled from 'styled-components'

// This is weird, but a workaround to a bug between react-three and styled components
const AnimatedMaterial = styled(a(MeshDistortMaterial))``
const AnimatedAmbientLight = styled(a.ambientLight)``
const AnimatedPointLight = styled(a.pointLight)``

type SphereProps = {
    setBg: (background: {}) => void
}

export const Sphere: FC<SphereProps> = ({ setBg }) => {
    const sphere = useRef<THREE.Mesh>(null)
    const light = useRef<THREE.PointLight>(null)
    const [active, setActive] = useState(false)
    const [down, setDown] = useState(false)
    const [hovered, setHovered] = useState(false)

    const rotationCalculation = (rotation: number, elapsedTime: number) => {
        return THREE.MathUtils.lerp(Number(rotation), Math.sin(elapsedTime / 1.5) / 6, Number(rotation))
    }

    useEffect(() => {
        document.body.style.cursor = hovered
            ? 'none'
            : `url('data:image/svg+xml;base64,${btoa(
                `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="10" fill="#272727"/>
                </svg>`
            )}'), auto`
    }, [hovered])

    const [{ wobble, color, intensity, rotation }] = useSpring(
        () => ({
            wobble: down ? 1.2 : hovered ? 1.05 : 1,
            color: active ? '#119DA4' : '#9491E2',
            intensity: hovered ? 0.75 : 1,
            rotation: hovered ? 0.005 : 0.0075,
            config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
        }),
        [active, hovered, down]
    )

    useFrame(({ mouse, clock }) => {
        if (light.current) {
            light.current.position.x = mouse.x * 20
            light.current.position.y = mouse.y * 20
        }
        if (sphere.current?.position) {
            sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? mouse.x / 2 : 0, 0.2)
            sphere.current.position.y = THREE.MathUtils.lerp(
                sphere.current.position.y,
                Math.sin(clock.elapsedTime / 1.5) / 6 + (hovered ? mouse.y / 2 : 0),
                0.2
            )
            sphere.current.rotation.x += rotationCalculation(Number(rotation.animation.to), clock.elapsedTime)
            sphere.current.rotation.y += rotationCalculation(Number(rotation.animation.to), clock.elapsedTime)
            sphere.current.rotation.z += rotationCalculation(Number(rotation.animation.to), clock.elapsedTime)
        }
    })

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
                <AnimatedAmbientLight intensity={intensity} />
                <AnimatedPointLight ref={light} position-z={-15} intensity={intensity} color="#F8C069" />
            </PerspectiveCamera>
            <Suspense fallback={null}>
                <a.mesh
                    ref={sphere}
                    scale={wobble}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    onPointerDown={() => setDown(true)}
                    onPointerUp={() => {
                        setDown(false)
                        setActive(!active)
                        setBg({
                            background: active
                                ? 'linear-gradient(0, #9491e2 0%, #119DA4 100%)'
                                : 'linear-gradient(0, #119DA4 0%, #9491e2 100%)',
                        })
                    }}
                >
                    <sphereBufferGeometry args={[1, 64, 64]} />
                    <AnimatedMaterial
                        color={color}
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.1}
                    />
                </a.mesh>
            </Suspense>
        </>
    )
}
