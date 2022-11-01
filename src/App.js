import "./App.css";
import React from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState('light'); // wether dark mode is enabled or not
  const [alert, setAlert] = React.useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText='About' /> */}
      <Router>
        <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>  
        <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode}/>
          </Route>
        </Switch>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}



export default App;
