import { Outlet } from "react-router-dom";
import HomePage from "./page/Home";

function App() {
  return (
    <div className="App">

      <HomePage></HomePage>
      <Outlet></Outlet>

      
    </div>
  );
}

export default App;
