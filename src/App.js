import "./App.css";
import AppRouter from "./AppRouter";
import Home from "./Home";
import Header from "./Components/Header";
import Section from "./Components/Section";

function App() {
  return (
    <div className="App bg-[#e3e6e6]">
      {/* <AppRouter /> */}
      <Header />
      <Section />
    </div>
  );
}

export default App;
