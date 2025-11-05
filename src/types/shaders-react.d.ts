declare module "@paper-design/shaders-react" {
  import type { ComponentType } from "react"

  export interface MeshGradientProps {
    className?: string
    colors?: string[]
    speed?: number
    backgroundColor?: string
    wireframe?: boolean | string
  }

  export interface DotOrbitProps {
    className?: string
    dotColor?: string
    orbitColor?: string
    speed?: number
    intensity?: number
  }

  export const MeshGradient: ComponentType<MeshGradientProps>
  export const DotOrbit: ComponentType<DotOrbitProps>
}
