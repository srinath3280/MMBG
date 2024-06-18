import './App.css';
import NavBar from './views/navbar/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
