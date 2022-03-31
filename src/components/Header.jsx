import React from 'react'

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
            <a className="nav-link active" href="#">Anasayfa</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ürün Katogorisi
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">ürün1</a>
              <a className="dropdown-item" href="#">ürün2</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">ürün 3</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hakkımızda</a>
          </li>

        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>

    </nav>

  )
}

export default Header;