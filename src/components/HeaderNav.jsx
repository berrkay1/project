
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Header() {

 

  

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img className='logo' src="http://fiyat.sitende.com/static/media/marsislogo.aba7ab0c6686eab3a46c.png" alt="mersis logo" />
      </a>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
             <Link to='/' className="nav-link active" >Anasayfa</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ürün Katogorisi
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              
              <Link to='aracsarj' className="dropdown-item" style={{textDecoration:'none'}} >Araç Şarj Sistemi</Link>
              <Link to='dolubos' className="dropdown-item" style={{textDecoration:'none'}} >Dolu Boş Sistemi</Link>
              <Link to='turnike' className="dropdown-item" style={{textDecoration:'none'}} >Turnike Sistemi</Link>
              <Link to='otopark' className="dropdown-item" style={{textDecoration:'none'}} >Otopark Sistemi</Link>
              <Link to='kafeyonetim' className="dropdown-item" style={{textDecoration:'none'}} >Kafa Yönetim Sistemi</Link>
              <Link to='yazilim' className="dropdown-item" style={{textDecoration:'none'}} >Yazılım Sistemi</Link>
              
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hakkımızda</a>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Ürün Ara" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

    </nav>

  )
}

export default Header;