import React, { useEffect, useState } from 'react';
import { Gap, TourItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setDataTour } from '../../config/redux/action';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataTour, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(setDataTour(counter));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter((counter) => (counter <= 1 ? 1 : counter - 1));
  };

  const next = () => {
    setCounter((counter) => (counter === page.totalPage ? page.totalPage : counter + 1));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDataTour = dataTour.filter((tour) =>
    tour.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      <style>
        {`
        .search-container {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 20px;
        }
        
        .search-input {
          width: 400px;
          padding: 10px;
          border: 2px solid #0dcaf0;
          border-radius: 5px;
          font-size: 16px;
          outline: none;
        }
        
        .search-button,
        .btn-primary {
          background-color: rgba(13, 202, 240, 255);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          margin-left: 10px;
        }
        
        .search-button:hover,
        .btn-primary:hover {
          background-color: #6de0f4;
        }
        
        .title {
          margin-bottom: 30px;
        }
        
        @media (max-width: 767px) {
          .search-container {
            flex-direction: column;
            align-items: flex-start;
          }
        
          .search-input {
            width: 100%;
            margin-bottom: 10px;
          }
        
          .search-button {
            align-self: flex-end;
            margin-left: 0;
          }
        }
        `}
      </style>

      <Gap height={120} />
      <h2 tabIndex={0} className='text-center text-info fw-bold title'>
        Daftar Destinasi Wisata
      </h2>

      <div className='search-container'>
        <input
          type='text'
          placeholder='Cari Destinasi Wisata'
          value={searchQuery}
          onChange={handleSearch}
          className='search-input'
        />
        <button className='search-button btn-primary'>Cari</button>
      </div>

      <div className='d-flex flex-wrap mx-auto'>
        {filteredDataTour.length !== 0 ? (
          filteredDataTour.map((tour) => {
            return (
              <TourItem
                key={tour._id}
                image={`https://api-pesona-malang.vercel.app/${tour.image}`}
                name={tour.name}
                category={tour.category}
                address={tour.address}
                operationalHour={tour.operationalHour}
                ticket={tour.ticket}
                rating={tour.rating}
                description={tour.description}
                updatedAt={tour.updatedAt}
                _id={tour._id}
              />
            );
          })
        ) : (
          <div tabIndex={0} className='text-danger text-center mx-auto'>
            Data Kosong
          </div>
        )}
      </div>

      <div className='container text-center mt-2 fw-bold'>
        <button
          className='btn btn-outline-light btn-floating text-secondary'
          style={{ padding: '10px' }}
          onClick={previous}
        >
          <ArrowBackIosIcon />
        </button>
        <span tabIndex={0} className='px-2 fw-bold'>
          {page.currentPage} / {page.totalPage}
        </span>
        <button
          className='btn btn-outline-light btn-floating text-secondary'
          style={{ padding: '10px' }}
          onClick={next}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <Gap height={40} />
    </div>
  );
};

export default Home;