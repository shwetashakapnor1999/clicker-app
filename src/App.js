import "./App.css";
import Header from "./components/Header";
import Clicker from "./components/Clicker";

function App() {
  return (
    <div className="App">
      <Header title="React title" />
      <div className="mt-5">
        <Clicker />
      </div>
    </div>
  );
}

export default App;
