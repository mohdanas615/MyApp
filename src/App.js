//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';


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
      document.body.style.backgroundColor='#495057';
      showAlert("Dark mode has been enabled","Success ");
      }
      else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Success ");
      }
  }
  
  return (
    <>

<Navbar title="Word Analyzer"mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForms showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>
{/*<About/>*/}
</div>


</>  
  );
}

export default App;
 