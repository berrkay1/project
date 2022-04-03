
import React from 'react';
import HeaderNav from './components/HeaderNav';
import './App.css';
// bootstrapp
import 'bootstrap/dist/css/bootstrap.min.css';

//catogories

import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import AracSarjSistemleri from './Catogories/AracSarjSistemleri';
import DoluBosSistemi from './Catogories/DoluBosSistemi';
import TurnikeSistemi from './Catogories/TurnikeSistemi';
import YazılımHizmetleri from './Catogories/YazılımHizmetleri';
import OtoparkSistemi from './Catogories/OtoparkSistemleri';
import KafeYönetimSistemleri from './Catogories/KafeYönetimSistemleri';
import Header from './components/Header';




function App() {
  

  return (
  <div>

<Router>

      <HeaderNav/>
      
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='aracsarj' element={<AracSarjSistemleri/>} />
        <Route path='dolubos' element={<DoluBosSistemi/>} />
        <Route path='turnike' element={<TurnikeSistemi/>} />
        <Route path='otopark' element={<OtoparkSistemi/>} />
        <Route path='kafeyonetim' element={<KafeYönetimSistemleri/>} />
        <Route path='yazilim' element={<YazılımHizmetleri/>} />
      </Routes>
    </Router>   
      
     

  </div>
    
  );
}

export default App;
