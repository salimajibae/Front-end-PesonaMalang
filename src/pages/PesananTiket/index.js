import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Gap } from '../../components';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PesananTiket = () => {
  const location = useLocation();
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [tanggalKedatangan, setTanggalKedatangan] = useState(null);
  const [jumlahTiket, setJumlahTiket] = useState(0);

  const tour = location.state?.tour; // Mengambil data tur dari properti state

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Mengirim data tiket ke API
      const response = await axios.post('https://api-pesona-malang.vercel.app/v1/pesona-malang/pesanan', {
        nama,
        email,
        nomorTelepon,
        tanggalKedatangan,
        jumlahTiket,
        tourId: tour._id,
      });

      // Reset form setelah pengiriman
      setNama('');
      setEmail('');
      setNomorTelepon('');
      setTanggalKedatangan(null);
      setJumlahTiket(0);

      Swal.fire(
        'Selamat!',
        'Pesanan berhasil dikirim',
        'success'
      );
    } catch (error) {
      Swal.fire(
        'Oops!',
        'Terjadi kesalahan saat mengirim pesanan',
        'error'
      );
    }
  };

  return (
    <div>
      <Gap height={120} />
      <form onSubmit={handleSubmit} className='container card p-3' style={{ width: '75%' }}>
        <h2 className='text-center text-info fw-bold title'>Pesan Tiket</h2>
        {tour && (
          <>
            <div className="tour-container">
              <img
                src={tour.image}
                alt={`gambar destinasi wisata ${tour.name}`}
                className='tour-image img-fluid'
              />
              <div className="tour-details">
                <h3 className="tour-title">{tour.name}</h3>
                <p className="tour-category">Kategori: {tour.category}</p>
                <p className="tour-price">Harga Tiket: {tour.ticket}</p>
              </div>
            </div>
            <Gap height={20} />
          </>
        )}
        <div className='mb-3'>
          <label htmlFor='nama' className='form-label'>Nama</label>
          <input
            type='text'
            name='nama'
            className='form-control'
            id='nama'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='nomorTelepon' className='form-label'>Nomor Telepon</label>
          <input
            type='text'
            name='nomorTelepon'
            className='form-control'
            id='nomorTelepon'
            value={nomorTelepon}
            onChange={(e) => setNomorTelepon(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='tanggalKedatangan' className='form-label'>Tanggal Kedatangan</label>
          <DatePicker
            selected={tanggalKedatangan}
            onChange={(date) => setTanggalKedatangan(date)}
            className='form-control'
            dateFormat='dd/MM/yyyy'
            placeholderText='Pilih tanggal'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='jumlahTiket' className='form-label'>Jumlah Tiket</label>
          <input
            type='number'
            name='jumlahTiket'
            className='form-control'
            id='jumlahTiket'
            value={jumlahTiket}
            onChange={(e) => setJumlahTiket(parseInt(e.target.value))}
            required
          />
        </div>
        <button type='submit' className='btn btn-info text-white' style={{ padding: '10px 0' }}>Kirim</button>
      </form>
      <Gap height={40} />
      <style>
        {`
          .tour-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            margin-top: 20px;
          }
         
          .tour-image {
            width: 100%;
            max-width: 300px;
            height: auto;
            object-fit: cover;
            display: block;
            margin-bottom: 10px;
          }
          
          .tour-details {
            margin-bottom: 20px;
          }

          .tour-title {
            color: black;
            font-size: 24px;
            font-weight: bold;
          }

          .tour-category {
            color: black;
          }

          .tour-price {
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default PesananTiket;