import React from 'react'
import { Logo2 } from '../../../assets';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top' style={{backgroundColor: '#fff'}}>
        <div className='container d-flex'>
          <div className='navbar-brand mx-3 flex-grow-1 p-2'>
            <a href='/' className='py-3'>
              <img src={Logo2} width='60' height='60' className='d-inline-block align-center' alt='logo pesona malang' />
            </a>
          </div>
          <button 
            className='navbar-toggler p-2' 
            type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#navbarNavAltMarkup' 
            aria-controls='navbarNavAltMarkup' 
            aria-expanded='false' 
            aria-label='Toggle navigation'><span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
            <div className='navbar-nav fw-bold'>
              <a className='nav-link text-center mx-2 p-3' href='/'>Beranda</a>
              <a className='nav-link text-center mx-2 p-3' href='/list-tour'>Daftar Wisata</a>
              <a className='nav-link text-center mx-2 p-3' href='/map-tours'>Peta Wisata</a>
            
              <a className='nav-link text-center mx-2 p-3' href='/contact-us'>Hubungi Saya</a>
              <a className='nav-link text-center mx-2 p-3' href='/about-us'>Tentang</a>
            </div>
          </div>
        </div>
    
      </nav>
    </header>
  )
}

export default Header;
