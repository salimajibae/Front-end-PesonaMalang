import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Jumbotron = ({img}) => {
const history = useHistory();
  return (
    <div>
      <div className='container col-xxl-8 px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img tabIndex={0} src={img} className='d-block mx-lg-auto img-fluid' alt='gambar ilustrasi destinasi wisata' width='700' height='500' loading='lazy' />
          </div>
          <div className='col-lg-6'>
            <p tabIndex={0} className='fs-5'>Bingung mau liburan kemana?</p>
            <h2 tabIndex={0} className='display-5 fw-bold lh-1 mb-3'>Temukan Destinasi Wisata Terbaik di <span className='text-info'>Kota Malang</span></h2>
            <p tabIndex={0} className='fw-lighter fs-6'>Dengan referensi yang lengkap akan memudahkan kamu untuk memilih
              destinasi wisata mana yang ingin kamu kunjungi.
            </p>
            <button className='btn btn-info px-4 text-white fw-400' style={{padding: '10px 0'}} onClick={() => history.push('/list-tour')}><SearchIcon />Cari Wisata</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;
