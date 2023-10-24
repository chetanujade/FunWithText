import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { HashRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState(`light`);    //Wether Dark Mode Is Enabled Or Not
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg : message,
      type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

 const toggleMode =() =>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Was Enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Was Enabled", "success");
    }
  }
  return (
    <>
    
    <HashRouter basename = "/">
    
      <Navbar title = "TestUtils" mode = {mode}  toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container'>
      <Routes>
      <Route path="/about" element={<About mode = {mode}/>} />
      <Route path="/" element={<TextForm heading = "Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert ={showAlert} />} />
       </Routes>
      </div>
   </HashRouter>
    </>
  );
}

export default App;

