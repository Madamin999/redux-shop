import './App.css';
import Header from "./components/Header/Header"
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Header/>
        <div className="container w-[90%] m-auto">
            <Home/>
        </div>

    </>
  );
}

export default App;
