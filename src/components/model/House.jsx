import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

export const House = forwardRef(function House(props, ref) {
  const { nodes, materials } = useGLTF("/models/villa_house.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line001_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
          position={[-13.126, 17.717, -27.566]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line002_16_-_Matte_Plastic_0"].geometry}
          material={materials["16_-_Matte_Plastic"]}
          position={[-35.648, 147.638, 65.517]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line003_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-13.134, 17.717, -27.548]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line004_04_-_Default_0"].geometry}
          material={materials["04_-_Default"]}
          position={[-13.134, 139.764, -27.548]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line005_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-4.414, 148.118, 70.862]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line006_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-4.414, 266.262, 70.862]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line008_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-13.134, 138.091, -27.548]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line009_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-4.414, 263.175, 70.862]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line010_Ceramic_0.geometry}
          material={materials.Ceramic}
          position={[21.467, -19.685, -82.477]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle001_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[-39.794, -31.496, -30.855]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle002_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[-39.794, -14.027, -30.855]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line011_05_-_Default_0"].geometry}
          material={materials["05_-_Default"]}
          position={[-13.235, 8.778, -25.458]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box002_Solid_Glass_0.geometry}
          material={materials.Solid_Glass}
          position={[335.199, -265.33, 256.811]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box003_06_-_Default_0"].geometry}
          material={materials["06_-_Default"]}
          position={[335.199, -265.33, 256.811]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.873}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object001_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[335.199, -321.236, 256.811]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line012_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-13.235, 10.69, -25.458]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line013_Metal_0.geometry}
          material={materials.Metal}
          position={[-125.934, 90.921, 219.701]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line014_Metal_0.geometry}
          material={materials.Metal}
          position={[-125.934, 90.921, 263.543]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line015_Metal_0.geometry}
          material={materials.Metal}
          position={[-125.934, 90.921, 179.316]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line016_Metal_0.geometry}
          material={materials.Metal}
          position={[-125.934, 90.921, 131.327]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line017_Metal_0.geometry}
          material={materials.Metal}
          position={[-125.934, 90.921, 307.292]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box004_11_-_Default_0"].geometry}
          material={materials["11_-_Default"]}
          position={[71.705, 0, 306.107]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box005_11_-_Default_0"].geometry}
          material={materials["11_-_Default"]}
          position={[-299.093, 0, 306.107]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box006_12_-_Car_Paint_0"].geometry}
          material={materials["12_-_Car_Paint"]}
          position={[-107.05, -0.674, 53.551]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box007_12_-_Car_Paint_0"].geometry}
          material={materials["12_-_Car_Paint"]}
          position={[-107.05, 5.944, 53.551]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box008_12_-_Car_Paint_0"].geometry}
          material={materials["12_-_Car_Paint"]}
          position={[-107.05, 10.852, 53.551]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box009_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-107.05, -0.074, 53.551]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box010_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-107.05, 6.544, 53.551]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box011_13_-_Brushed_Metal_#2_0"].geometry}
          material={materials["13_-_Brushed_Metal_2"]}
          position={[-107.05, 11.699, 53.551]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line018_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-66.399, 36.91, 66.548]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line019_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-149.91, 36.91, 66.548]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line020_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-66.395, 30.738, 69.037]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line021_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-149.903, 30.738, 69.037]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line022_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-66.4, 32.173, 66.956]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line023_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-149.908, 32.173, 66.956]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line024_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-66.4, 14.874, 66.956]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line025_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-149.908, 14.874, 66.956]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box012_15_-_Glossy_Plastic_0"].geometry}
          material={materials["15_-_Glossy_Plastic"]}
          position={[-110.468, 76.991, 7.48]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle003_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-110.468, 76.991, 11.396]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line026_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-155.164, 21.71, -36.628]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line027_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[23.983, 21.71, -15.353]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line028_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[2.848, 21.71, -221.705]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box034_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
          position={[391.861, 193.292, -301.675]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line029_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[64.526, 146.934, -25.118]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line030_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-216.092, 146.934, -22.238]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box035_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[63.213, 248.005, 137.919]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box036_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[243.477, 248.005, 14.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box037_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[243.477, 248.005, -153.348]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box038_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[243.477, 248.005, 223.459]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box039_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[63.213, 124.859, 265.687]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box040_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[243.477, 124.665, 14.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box041_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[344.038, 124.665, -209.605]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box042_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[-72.841, 124.665, -209.605]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box043_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[7.353, 124.665, -402.443]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box044_Metal_0.geometry}
          material={materials.Metal}
          position={[-345.309, 0, -117.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box045_Metal_0.geometry}
          material={materials.Metal}
          position={[-345.309, 0, -46.616]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box046_Metal_0.geometry}
          material={materials.Metal}
          position={[-345.309, 0, 21.238]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box047_Metal_0.geometry}
          material={materials.Metal}
          position={[-345.309, 0, 87.179]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line031_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-345.002, 302.014, -20.793]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line032_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-345.002, 147.635, -20.793]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line033_14_-_Polished_Aluminum_0"].geometry}
          material={materials["14_-_Polished_Aluminum"]}
          position={[-345.002, 32.169, -20.793]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box048_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[-338.778, 124.665, 27.391]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box049_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[-214.968, 124.859, 89.845]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box050_17_-_Old_Copper_#1_0"].geometry}
          material={materials["17_-_Old_Copper_1"]}
          position={[-214.968, 124.859, -152.648]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object002_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-25.636, 147.638, 65.517]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object003_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-461.26, 147.638, 65.517]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object004_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[-118.684, 147.638, -3.214]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object005_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[33.829, 147.638, -93.895]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object006_18_-_Rubber_0"].geometry}
          material={materials["18_-_Rubber"]}
          position={[248.331, -5.513, 65.517]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box051_Metal_0.geometry}
          material={materials.Metal}
          position={[199.412, 0, 57.659]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box052_Metal_0.geometry}
          material={materials.Metal}
          position={[199.412, 0, 91.335]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object007_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-35.648, 134.403, 65.517]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Object008_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
          position={[-13.126, -9.703, -27.566]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle004_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[62.826, 80.823, 263.425]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box053_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[63.035, 80.761, 260.722]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box054_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[63.035, 204.062, 132.482]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle005_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[62.826, 204.123, 135.185]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box055_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-193.089, 80.761, 84.837]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle006_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-193.297, 80.823, 87.54]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line034_Metal_0.geometry}
          material={materials.Metal}
          position={[-53.244, 219.959, 200.104]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line035_Metal_0.geometry}
          material={materials.Metal}
          position={[176.615, 219.959, 200.104]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box075_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 245.365]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box076_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 231.555]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box077_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 217.744]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box078_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 203.933]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box079_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 190.123]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box080_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 176.312]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box081_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 164.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box082_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 151.806]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box083_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, 139.553]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line036_Metal_0.geometry}
          material={materials.Metal}
          position={[-54.532, 219.959, -202.482]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line037_Metal_0.geometry}
          material={materials.Metal}
          position={[331.574, 219.959, -202.482]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box084_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -390.558]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box085_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -378.489]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box086_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -366.421]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box087_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -354.352]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box088_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -342.284]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box089_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -330.215]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box090_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -318.147]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box091_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -306.078]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box092_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -294.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box093_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -281.941]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box094_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -269.872]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box095_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -257.522]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box096_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -245.172]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box097_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -232.822]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box098_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -220.472]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box099_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -208.122]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box100_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -195.35]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box101_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -182.578]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box102_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -169.806]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box103_21_-_Default_0"].geometry}
          material={materials["21_-_Default"]}
          position={[63.213, 274.173, -157.034]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box104_Metal_0.geometry}
          material={materials.Metal}
          position={[351.802, 0, -117.186]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box105_Metal_0.geometry}
          material={materials.Metal}
          position={[351.802, 0, -92.916]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box106_Metal_0.geometry}
          material={materials.Metal}
          position={[-345.309, 0, 214.368]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box107_22_-_Default_0"].geometry}
          material={materials["22_-_Default"]}
          position={[-174.414, 0, 21.238]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box108_Metal_0.geometry}
          material={materials.Metal}
          position={[-173.493, -95.819, 25.434]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.329}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line038_23_-_Default_0"].geometry}
          material={materials["23_-_Default"]}
          position={[139.37, 165.485, -266.193]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line039_23_-_Default_0"].geometry}
          material={materials["23_-_Default"]}
          position={[56.929, 165.485, 170.699]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box056_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-200.486, 203.83, 218.901]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle007_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-200.695, 203.891, 221.603]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box057_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-200.486, 203.941, -143.614]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle008_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-200.695, 203.88, -140.912]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box058_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-49.87, 203.941, -143.614]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle009_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-50.078, 203.88, -140.912]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box059_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[313.422, 203.83, 9.243]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle010_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[313.213, 203.891, 11.946]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box060_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[286.859, 81.102, -394.06]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle011_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[286.65, 81.04, -391.357]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box061_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[72.989, 81.102, -394.06]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle012_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[72.78, 81.04, -391.357]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box062_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-193.109, 81.102, -143.912]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle013_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-193.318, 81.04, -141.209]}
          rotation={[0, 0, Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box063_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-336.76, 81.102, -165.876]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle014_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-334.057, 81.04, -165.668]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box064_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-336.76, 81.102, -98.314]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle015_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-334.057, 81.04, -98.105]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box065_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-336.76, 81.102, -30.668]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle016_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-334.057, 81.04, -30.459]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box066_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[216.826, 81.102, 15.038]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle017_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[217.034, 81.04, 12.335]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box067_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[344.417, 81.102, -112.253]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle018_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[341.714, 81.04, -112.461]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box068_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[155.694, 81.102, 15.038]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle019_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[155.903, 81.04, 12.335]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box069_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[344.417, 81.102, -186.865]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle020_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[341.714, 81.04, -187.074]}
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box070_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[378.808, 204.335, -143.696]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle021_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[378.599, 204.273, -140.994]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box071_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[237.594, 204.335, -143.696]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle022_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[237.386, 204.273, -140.994]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box072_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[165.751, 204.335, -143.696]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle023_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[165.542, 204.273, -140.994]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box073_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-64.402, 80.951, -271.12]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle024_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-61.699, 80.889, -270.911]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box074_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-64.402, 80.864, -345.9]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Rectangle025_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-61.699, 80.802, -345.692]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box109_20_-_Polished_Aluminum_0"].geometry}
          material={materials["20_-_Polished_Aluminum"]}
          position={[-97.109, 80.761, 9.533]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line040_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-13.235, 139.036, -25.458]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line041_Wall_Paint_0.geometry}
          material={materials.Wall_Paint}
          position={[-13.235, 269.773, -25.458]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line042_23_-_Default_0"].geometry}
          material={materials["23_-_Default"]}
          position={[-34.587, 295.018, 38.661]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box110_Metal_0.geometry}
          material={materials.Metal}
          position={[-326.348, 306, 211.519]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box111_Metal_0.geometry}
          material={materials.Metal}
          position={[-326.348, 306, 51.743]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box112_Metal_0.geometry}
          material={materials.Metal}
          position={[-326.348, 306, -124.095]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box113_Metal_0.geometry}
          material={materials.Metal}
          position={[-147.609, 306, -124.095]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box114_Metal_0.geometry}
          material={materials.Metal}
          position={[31.13, 306, -124.095]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box115_Metal_0.geometry}
          material={materials.Metal}
          position={[209.868, 306, -124.095]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box116_Metal_0.geometry}
          material={materials.Metal}
          position={[325.357, 306, -124.095]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box117_Metal_0.geometry}
          material={materials.Metal}
          position={[325.357, 306, 0.999]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box118_Metal_0.geometry}
          material={materials.Metal}
          position={[173.356, 306, 0.999]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box119_Metal_0.geometry}
          material={materials.Metal}
          position={[254.764, 306, 0.999]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box120_Metal_0.geometry}
          material={materials.Metal}
          position={[173.356, 306, 123.821]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box121_Metal_0.geometry}
          material={materials.Metal}
          position={[63.649, 306, 123.821]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box122_Metal_0.geometry}
          material={materials.Metal}
          position={[-52.068, 306, 123.821]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box123_Metal_0.geometry}
          material={materials.Metal}
          position={[-52.068, 306, 77.755]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box124_Metal_0.geometry}
          material={materials.Metal}
          position={[-173.623, 306, 77.755]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box125_Metal_0.geometry}
          material={materials.Metal}
          position={[-173.623, 306, 145.145]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box126_Metal_0.geometry}
          material={materials.Metal}
          position={[-173.623, 306, 211.445]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box127_Metal_0.geometry}
          material={materials.Metal}
          position={[-46.134, 175.528, 264.235]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box128_Metal_0.geometry}
          material={materials.Metal}
          position={[164.25, 175.528, 264.235]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box129_Metal_0.geometry}
          material={materials.Metal}
          position={[183.095, 175.528, 160.019]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box130_Metal_0.geometry}
          material={materials.Metal}
          position={[-62.78, 175.528, 160.019]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box131_Metal_0.geometry}
          material={materials.Metal}
          position={[332.977, 175.528, -167.394]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box132_Metal_0.geometry}
          material={materials.Metal}
          position={[332.977, 175.528, -343.806]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box133_Metal_0.geometry}
          material={materials.Metal}
          position={[-63.781, 175.528, -167.394]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box134_Metal_0.geometry}
          material={materials.Metal}
          position={[-63.781, 175.528, -343.806]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box135_Metal_0.geometry}
          material={materials.Metal}
          position={[-25.63, 175.528, -387.109]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box136_Metal_0.geometry}
          material={materials.Metal}
          position={[281.272, 175.528, -387.109]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box137_Metal_0.geometry}
          material={materials.Metal}
          position={[125.91, 175.528, -387.109]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line043_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[-34.587, 297.721, 38.661]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line044_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[139.482, 168.651, -266.892]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line045_19_-_Glass_(Thin_wall)_0"].geometry}
          material={materials["19_-_Glass_Thin_wall"]}
          position={[56.793, 168.651, 171.312]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={1.003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line046_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-9.06, 25.591, 255.192]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line047_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[131.568, 25.591, 255.192]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line048_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-9.06, 146.6, 127.204]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line049_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[131.568, 146.6, 127.204]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line050_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-270.492, 146.6, 207.673]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line051_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[293.655, 146.6, 4.014]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line052_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[288.666, 146.6, -132.423]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line053_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[146.358, 146.6, -132.423]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line054_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[56.424, 146.6, -132.423]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line055_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-75.069, 146.6, -132.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line056_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-267.197, 146.6, -132.87]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line057_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-262.492, 25.66, 79.255]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line058_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-114.441, 25.66, 2.926]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line059_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[57.942, 25.591, -379.639]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line060_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[216.095, 25.591, -379.639]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line061_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[333.562, 22.228, -200.883]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line062_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[333.562, 22.228, -277.126]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line063_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-52.872, 22.228, -279.297]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Line064_24_-_Default_0"].geometry}
          material={materials["24_-_Default"]}
          position={[-52.872, 22.228, -221.525]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/models/villa_house.glb");
