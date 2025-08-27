import { Environment, Float, PresentationControls } from "@react-three/drei"
import { Stage, SpotLight } from "@react-three/drei"
import { MeshReflectorMaterial } from "@react-three/drei"
import Chair from "./Chair"
import { Suspense } from "react";


const Experience = () => {




    return (
      <>
      <ambientLight intensity={0.5} />
        <PresentationControls
          speed={2}
          global
          zoom={1.6}
          polar={[-0.1, Math.PI / 4]}
          rotation={[0, 0.4, 0]} // Default rotation
        >
          <Stage environment={false} intensity={0.9} contactShadow={false}>
              <Chair  />
          </Stage>

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#535353"
              metalness={0.5}
            />
          </mesh>
        </PresentationControls>
      </>
    );
}

export default Experience