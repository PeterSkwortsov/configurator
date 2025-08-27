import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useCustomization } from "../context/Customization";

const Chair = (props) => {
  const { material, legs } = useCustomization();
  const { nodes, materials } = useGLTF("./models/chair.gltf");

  const fabricTextureProps = useTexture({
    map: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
    displacementMap: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_height.png",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_opacity.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
  });

  fabricTextureProps.map.repeat.set(3, 3);
  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);

  // fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
  //   THREE.RepeatWrapping;
  // fabricTextureProps.roughnessMap.wrapS =
  //   fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  // fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
  //   THREE.RepeatWrapping;



  const leatherTextureProps = useTexture({
    map: "./textures/leather/Leather_008_Ambient_Occlusion.jpg",
    displacementMap: "./textures/leather/Leather_008_Base_Color.jpg",
    normalMap: "./textures/leather/Leather_008_Height.png",
    roughnessMap: "./textures/leather/Leather_008_Normal.jpg",
    aoMap: "./textures/leather/Leather_008_Roughness.jpg",
  });

  leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);

  //  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
  //    THREE.MirroredRepeatWrapping;
  //  leatherTextureProps.roughnessMap.wrapS =
  //    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  //  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
  //    THREE.RepeatWrapping;


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial
          {...(material === "leather"
            ? leatherTextureProps
            : fabricTextureProps)}
        />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
        <meshStandardMaterial {...leatherTextureProps} />
      </mesh>
      <mesh
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={legs === 1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
}

useGLTF.preload("./models/chair.gltf");

export default Chair