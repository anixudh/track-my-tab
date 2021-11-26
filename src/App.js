import logo from "./assets/images/logo.png";
import "./App.css";
import LoginButton from "./components/LoginButton";
function App() {
  return (
    <div className="App">
      <div className="app-top">
        <h1> Track my Tab</h1>
        <img src={logo} alt="logo" />
      </div>
      <div className="app-bot">
        <div className="desc">Please log in to continue :)</div>
        <LoginButton />
      </div>
    </div>
  );
}

export default App;
