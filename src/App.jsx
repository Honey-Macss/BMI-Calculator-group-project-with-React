import "./App.css"
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import CalculatorBody from "./Components/CalculatorBody/CalculatorBody";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <CalculatorBody />
    </div>
  );
}

export default App;
