
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Expirence";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#000000", 0, 30]} />
          <Experience />
        </Canvas>
        <Configurator />

        {/* <Loader /> */}
      </div>
    </CustomizationProvider>
  );
}

export default App;
