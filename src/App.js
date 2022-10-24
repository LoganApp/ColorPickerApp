import Palette from "./Palette";
import './App.css';
import SeedColors from "./SeedColors";

function App() {
  return (
    <div>
      <Palette {...SeedColors[4]}/>
    </div>
  );
}

export default App;
