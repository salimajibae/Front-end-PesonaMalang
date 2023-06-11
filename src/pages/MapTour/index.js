import React, { useEffect, useState, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { setDataMapTour } from '../../config/redux/action';
import { Gap } from '../../components';
import { useHistory } from 'react-router-dom';
import MapGLGeocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './mapTour.scss';

const MapTour = () => {
  const history = useHistory();
  const [counter] = useState(1);
  const { dataTour } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '70vh',
    latitude: -7.983908,
    longitude: 112.621391,
    zoom: 8,
  });
  const mapRef = useRef(null);

  useEffect(() => {
    dispatch(setDataMapTour(counter));
  }, [counter, dispatch]);

  const handleMarkerClick = id => {
    setCurrentPlaceId(id);
  };

  const handleGeocoderViewportChange = viewport => {
    setViewport(viewport);
  };

  return (
    <div>
      <Gap height={120} />
      <div className='container'>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken='pk.eyJ1Ijoid2VzaGxhIiwiYSI6ImNsNGYxbGV5czA0ZHIzY255bWxhMzZjaXcifQ.P56VGiSAWuMynD38I-PUIg'
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          ref={mapRef}
        >
          <MapGLGeocoder
            mapRef={mapRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken='pk.eyJ1Ijoid2VzaGxhIiwiYSI6ImNsNGYxbGV5czA0ZHIzY255bWxhMzZjaXcifQ.P56VGiSAWuMynD38I-PUIg'
            position='top-left'
          />
          {dataTour.map(tour => (
            <>
              <Marker
                latitude={tour.lat}
                longitude={tour.long}
                offsetLeft={-20}
                offsetTop={-10}
                key={tour._id}
              >
                <RoomIcon
                  style={{
                    fontSize: viewport.zoom * 3,
                    color: 'tomato',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: '0'
                  }}
                  onClick={() => handleMarkerClick(tour._id)}
                />
              </Marker>
              {tour._id === currentPlaceId && (
                <Popup
                  latitude={tour.lat}
                  longitude={tour.long}
                  closeButton={true}
                  closeOnClick={false}
                  anchor='left'
                  maxWidth='100px'
                  onClose={() => setCurrentPlaceId(null)}
                  className='card-box'
                >
                  <div
                    className='p-2'
                    style={{ width: '200px', position: 'relative', zIndex: '1000' }}
                  >
                    <img
                      tabIndex={0}
                      src={`https://api-pesona-malang.vercel.app/${tour.image}`}
                      width={'100%'}
                      height={100}
                      style={{ objectFit: 'cover' }}
                      alt={`gambar destinasi wisata ${tour.name}`}
                    />
                    <h4 tabIndex={0} className='fw-bold mb-1 mt-1 text-info fs-5'>
                      {tour.name}
                    </h4>
                    <p tabIndex={0} className='mb-1 fw-lighter fs-6'>
                      {tour.category}
                    </p>
                    <div
                      tabIndex={0}
                      className='mb-2'
                      style={{ color: 'gold' }}
                      aria-label='rating destinasi wisata'
                    >
                      {Array(tour.rating).fill(<StarIcon className='star' />)}
                    </div>
                    <button
                      className='btn btn-info text-white mb-0'
                      onClick={() => history.push(`/detail-tour/${tour._id}`)}
                    >
                      Selengkapnya
                    </button>
                  </div>
                </Popup>
              )}
            </>
          ))}
        </ReactMapGL>
        <div>
          <h2 className='fs-5 mt-3'>Petunjuk :</h2>
          <ul className='fw-lighter'>
            <li>Scroll Up : untuk memperbesar tampilan map (zoom in).</li>
            <li>Scroll Down : untuk memperkecil tampilan map (zoom out).</li>
            <li>
              Klik Pin (Marker) : untuk mengetahui detail informasi mengenai Pin (Marker)
              tersebut.
            </li>
            <li>Tahan Klik pada Map : untuk mengeser map.</li>
          </ul>
        </div>
      </div>
      <Gap height={40} />
    </div>
  );
};

export default MapTour;