import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          We are using
          <br />
          Node.js <span>{window.test.version("node")}</span>,
          <br />
          Chromium <span>{window.test.version("chrome")}</span>,
          <br />
          and Electron <span>{window.test.version("electron")}</span>.
        </p>
      </header>
    </div>
  );
}

export default App;
