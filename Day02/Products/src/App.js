import './App.css';
import Router from './Router';
import NavbarComponent from "./Pages/Shared/Navbar/navbar";

function App() {
  return (
    <div className="App">
        <NavbarComponent/>
        <Router/>
    </div>
  );
}

export default App;
