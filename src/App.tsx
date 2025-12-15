import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-[#7BB8FF] via-[#A7D4FF] to-[#C9E6FF]">
      <div className="w-89/100 bg-[#f9f9f9] shadow-[0_0_4px_1px_rgba(0,0,0,0.15)] rounded-lg absolute z-10 m-21 h-max">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
