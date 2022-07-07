import './App.css';
import {Devcha} from './components/Devcha';
import {TodoList} from "./components/TodoList"
import { Route, Routes } from 'react-router-dom';
import {Navbar} from "./components/Navbar"

function App() {
  console.log("Call getDevcha function to get you devcha code")
  return (
    <div className='App'>
      <Navbar />
      <Routes>
      <Route path='/' element={<TodoList  />} />
      <Route path='/devcha' element={ <Devcha />} />
      </Routes>
    </div>
  );
}

export default App;
