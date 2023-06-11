import React from 'react';
import { Logo } from '../../../assets';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <footer className='card-footer text-center text-lg-start' style={{backgroundColor: '#F4F4F5'}}>
        <div className='container p-4 pb-0'>
          <section>
            <div className='row'>
              <div className='col-md-3 mx-auto mt-3'>
                <img tabIndex={0} src={Logo} width='150' height='150' className='mb-1' style={{display: 'block',margin: '0 auto'}} alt='logo pesona malang' />
                <div className='text-center mb-3'>
                  <a
                    className='btn btn-outline-light btn-floating text-primary'
                    style={{padding: '10px'}}
                    href='https://m.facebook.com/Pesona-Malang-Apps-107547588680266/'
                    role='button'><FacebookIcon />
                  </a>
                  <a
                    className='btn btn-outline-light btn-floating text-info'
                    style={{padding: '10px'}}
                    href='https://mobile.twitter.com/Pesonamalang6'
                    role='button'><TwitterIcon />
                  </a>
                  <a
                    className='btn btn-outline-light btn-floating text-danger'
                    style={{padding: '10px'}}
                    href='https://www.youtube.com/channel/UCuK0QS0b1qcydumBg31xcZw'
                    role='button'><YouTubeIcon />
                  </a>
                  <a
                    className='btn btn-outline-light btn-floating'
                    style={{color: '#833AB4', padding: '10px'}}
                    href='https://www.instagram.com/pesonamalangapps/'
                    role='button'><InstagramIcon />
                  </a>
                </div>
              </div>
              <hr className='w-100 clearfix d-md-none' />
              <div className='col-md-6 col-lg-5 mt-3'>
                <h6 tabIndex={0} className='text-uppercase mb-4 fw-bold'>Sistem Informasi dan Pemetaan Geografis Destinasi Wisata Kota Malang</h6>
                <p tabIndex={0} className='fw-lighter'>
                  Memberikan referensi yang lengkap terkait destinasi wisata di kota Malang, yang akan
                  memudahkan kamu untuk memilih destinasi wisata mana yang ingin kamu kunjungi.
                </p>
              </div>
              <hr className='w-100 clearfix d-md-none' />
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h6 tabIndex={0} className='text-uppercase mb-4 fw-bold'>
                  Navigasi
                </h6>
                <p>
                  <a href='/' className='text-decoration-none text-info py-3'>Home</a>
                </p>
                <p>
                  <a href='/list-tour' className='text-decoration-none text-info py-3'>Daftar Wisata</a>
                </p>
                <p>
                  <a href='/map-tours' className='text-decoration-none text-info py-3'>Map Wisata</a>
                </p>
                <p>
                  <a href='/contact-us' className='text-decoration-none text-info py-3'>Hubungi Kami</a>
                </p>
                <p>
                  <a href='/about-us' className='text-decoration-none text-info py-3'>Tentang Kami</a>
                </p>
              </div>
            </div>
          </section>
        <hr className='my-3' />
        <section className='p-3 pt-0'>
          <div className='text-center'>
            <div className='p-3'>
              <span tabIndex={0}>© 2023 - Pesona Malang</span>
            </div>
          </div>
        </section>
        </div>
      </footer>
    </>
  )
}

export default Footer;
