//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Contact from './components/Contact';


import {
  BrowserRouter as Router,
  Switch,
  Route,
 //Link
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
setAlert({
  msg: message,
  type: type
})
setTimeout(()=>{
setAlert(null);
},1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2b2f32';
      showAlert("Dark mode has been enabled","Success ");
      document.title='TextUtils- Dark Mode';
      }
      else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Success ");
      document.title='TextUtils- Light Mode';
      }
  }
  
  return (
    <>
<Router>
<Navbar title="Word Analyzer"mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
          <Route exact path="/contact">
            <Contact heading="HEY" mode={mode}/>
          </Route>
</Switch>
  {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
{/* <About/> */}
</div>
</Router>
</>  
  );
}

export default App;
 