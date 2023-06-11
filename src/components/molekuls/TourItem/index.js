import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const TourItem = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { image, name, category, rating, _id, ticket } = props;

  const handleBuyTicket = () => {
    history.push({
      pathname: `/tiket-tour/:id${_id}`,
      state: { tour: props } // Mengirimkan properti tour
    });
  };

  return (
    <>
      <div className='p-3 col-12 col-md-6 col-lg-4'>
        <div className='card'>
          <img
            tabIndex={0}
            src={image}
            height={200}
            className='card-img-top'
            style={{ objectFit: 'cover' }}
            alt={`gambar destinasi wisata ${name}`}
          />
          <div className='card-body'>
            <h2 tabIndex={0} className='fs-4 fw-bold'>{name}</h2>
            <p tabIndex={0} className='text-secondary mb-1 fw-lighter'>{category}</p>
            <div tabIndex={0} className='mb-3' style={{ color: 'gold' }} aria-label='rating destinasi wisata'>
              {Array(rating).fill(<StarIcon className='star' />)}
            </div>
            <p tabIndex={0} className='text-secondary'>Harga: {ticket}</p>
            <div className='d-flex'>
              <button
                className='btn btn-info text-white me-2'
                style={{ padding: '10px 12px' }}
                onClick={() => history.push(`/detail-tour/${_id}`)}
              >
                Selengkapnya
              </button>
              <button
                className='btn btn-success text-white'
                style={{ padding: '10px 12px' }}
                onClick={handleBuyTicket}
              >
                Beli Tiket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourItem;