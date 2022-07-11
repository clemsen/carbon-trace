import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Logo'>Logo</div>
        <div className='header-menu'>Menu</div>
      </header>
      <div className='company'>
        <div className='company-header'>
          <div className='company-logo'>Logo Entreprise </div>
          <div className='company-name'>Nom Entreprise</div>
        </div>
        <div className='company-information'>
          <div className='carbon-tracability-index'>
            <div className='scope1'>Scope 1</div>
            <div className='scope2'>Scope 2</div>
            <div className='scope-suppliers'>Scope fournisseurs</div>
          </div>
          <div className='carbon-euro'>
            <div className='carbon-euro-tracability'>Carbone par € estimé ISR</div>
            <div className='carbon-euro-classic'>Carbone par € estimé bilan carbone</div>
          </div>
        </div>
        <div className='alternatives'>
          <div className='alternative-title'>Alternatives avec meilleurs traçabilités carbones</div>
          <div className='alternative1'>Marque 1 : ITC (Indice de Traçabilité Carbone) = X1%</div>
          <div className='alternative2'>Marque 2 : ITC (Indice de Traçabilité Carbone) = X2%</div>
        </div>
      </div>
    </div>
  );
}

export default App;
