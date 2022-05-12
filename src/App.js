import React from 'react';
import Zaglavlje from './zaglavlje';
import logo from "./logo.svg";
import Tablica from './TrgovinaLista';
function App() {
  return (
    <>
    <Zaglavlje url={logo} naslov="IT Trgovina"/>
    <Tablica/>
    
    </>
    );
  }
  export default App;