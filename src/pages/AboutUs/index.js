import React from 'react';
import { Aji, Disha, Eko, Faisal, Logo } from '../../assets';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Gap } from '../../components';

const AboutUs = () => {
  return (
    <div>
      <Gap height={120} />
      <div className='container col-xxl-8 px-4'>
        <h2 tabIndex={0} className='text-center text-info fw-bold'>Tentang</h2>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-2'>
          <div className='col-lg-6 mx-auto'>
            <img 
              tabIndex={0} 
              src={Logo} 
              class='d-block mx-auto img-fluid' 
              alt='logo pesona malang' 
              width='400' 
              height='400' 
              loading='lazy' 
            />
          </div>
          <div className='col-lg-6'>
            <p tabIndex={0} className='lead'>Pesona Malang merupakan sebuah website sistem informasi
              Destinasi Wisata Kota Malang, yang memberikan kumpulan
              informasi destinasi wisata di kota Malang yang lengkap,
              beserta dengan pemetaan secara geografisnya, untuk
              memudahkan wisatawan dalam mencari informasi
              mengenai destinasi wisata yang ada di Kota Malang yang
              ingin dikunjungi, serta menjadi media promosi destinasi
              wisata yang ada di Kota Malang.
            </p>
          </div>
        </div>
      </div>
      <div className='p-2 bg-info mt-4'>
        <h2 tabIndex={0} className='text-center mt-4 text-white'>Tentang Saya</h2>
        <div className='container mb-4 mx-auto'>
      
      
              <div className='card p-5'>
                <img 
                  tabIndex={0}
                  src={Aji} 
                  className='mx-auto' 
                  style={{borderRadius: '50%'}} 
                  width={100} alt='gambar profil Aji Miftahus Salim' 
                />
                <h4 tabIndex={0} className='text-center'>Aji Miftahus Salim</h4>
                <p tabIndex={0} className='text-center text-info mb-1'>Web Developer</p>
                <p tabIndex={0} className='text-center fw-lighter fst-italic'>“Halo, Saya mahasiswa semester 6 dari prodi
                  Teknik Informatika, Universitas Bina Sarana Informatika”
                </p>
                <div className='text-center'>
                  <a href='https://www.linkedin.com/in/aji-miftahus-salim-8456a121a' className='mb-0 m-1 align-center' style={{padding: '12px 10px'}}><LinkedInIcon /></a>
                  <a href='https://wa.me/6282218827066' className='mb-0 m-1 text-success align-center' style={{padding: '12px 10px'}}><WhatsAppIcon /></a>
                  <a href='mailto:ajimiftahussalim15@gmail.com' className='mb-0 m-1 text-danger align-center' style={{padding: '12px 10px'}}><EmailIcon /></a>
                  <a href='https://github.com/ajimiftahussalim' className='mb-0 m-1 text-dark align-center' style={{padding: '12px 10px'}}><GitHubIcon /></a>
                </div>
            
          
       
          </div>
        </div>
      </div>
      <Gap height={40} />
    </div>
  )
}

export default AboutUs;
