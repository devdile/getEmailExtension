import './App.css';
import AppRouting from './routing';
import AutoLogout from './Account/AutoLogout';
import "./Assets/css/customStyle.css";

function App() {
  return (
    <div className="App">
     <AppRouting/>
     <AutoLogout/>
    </div>
  );
}

export default App;
