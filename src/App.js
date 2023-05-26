import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import DynamicTextImage from './components/DynamicTextImage';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(Message,type)=>{
    setAlert({
      Message:Message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2200);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
            <Route path="/INotebook" element={<Home showAlert={showAlert}/>}/>
              <Route path="/" element={<Home showAlert={showAlert}/>}/>
              <Route path="/about" element={<About />}/>
              <Route path="/login" element={<Login showAlert={showAlert}/>}/>
              {/* <Route path="/" element={<DynamicTextImage/>}/> */}
              <Route path="/signup" element={<Signup showAlert={showAlert}/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
