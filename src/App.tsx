import { useState } from "react";
import Home from "./routes/Home";
import { ContextCount } from "./utils/context-list";


function App() {

  const [contextCount, setContextCount ] = useState<number>(0);

  return (   
    <ContextCount.Provider value={{contextCount, setContextCount}}>
      <Home /> 
    </ContextCount.Provider>
      
  )
}

export default App
