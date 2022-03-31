
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import Categories from './components/Categories';


function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Categories />} />
      
    </Routes>
    </div>
    
  );
}

export default App;
