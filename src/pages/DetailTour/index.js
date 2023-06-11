import React, { useEffect, useState } from 'react';
import { Gap } from '../../components';
import { withRouter, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import StarIcon from '@mui/icons-material/Star';
import Axios from 'axios';

const DetailTour = (props) => {
  let history = useHistory();
  const backIcon = <FontAwesomeIcon icon={faArrowCircleLeft} />;
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`https://api-pesona-malang.vercel.app/v1/pesona-malang/tour/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);

  const showFormattedDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentSubmit = () => {
    const newComment = { name: name, text: comment, rating: rating };
    setComments([...comments, newComment]);
    setComment('');
    setRating(0);
  };

  const renderRatingStars = (value) => {
    const starIcons = [];
    for (let i = 0; i < value; i++) {
      starIcons.push(<StarIcon key={i} className="star" />);
    }
    return <div className="rating-stars">{starIcons}</div>;
  };

  return (
    <div>
      <Gap height={120} />
      <div className="container col-xxl-8 px-4">
        <div className="d-flex justify-content-end mt-0">
          <button className="btn btn-none p-2 px-3 text-muted fs-3" onClick={history.goBack}>
            {backIcon}
          </button>
        </div>
        <div className="row flex-lg-row g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 mt-2">
            <img
              tabIndex={0}
              src={`https://api-pesona-malang.vercel.app/${data.image}`}
              className="rounded d-block img-fluid align-top"
              style={{ objectFit: 'cover', width: '700px' }}
              alt={`gambar destinasi wisata ${data.name}`}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 mt-3">
            <h2 className="fs-2 text-info fw-bold">{data.name}</h2>
            <p tabIndex={0} className="text-secondary">
              Data Terakhir di update tanggal: {showFormattedDate(data.updatedAt)}
            </p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody className="fw-lighter">
                  <tr>
                    <td tabIndex={0}>Kategori</td>
                    <td tabIndex={0}>{data.category}</td>
                  </tr>
                  <tr>
                    <td tabIndex={0}>Alamat</td>
                    <td tabIndex={0}>{data.address}</td>
                  </tr>
                  <tr>
                    <td tabIndex={0}>Jam Operasional</td>
                    <td tabIndex={0}>{data.operationalHour}</td>
                  </tr>
                  <tr>
                    <td tabIndex={0}>Tiket</td>
                    <td tabIndex={0} className="fw-bold text-warning">
                      {data.ticket}
                    </td>
                  </tr>
                  <tr>
                    <td tabIndex={0}>Rating</td>
                    <td>
                      <div tabIndex={0} className="mb-3" style={{ color: 'gold' }} aria-label="rating destinasi wisata">
                        {renderRatingStars(data.rating)}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td tabIndex={0}>Deskripsi</td>
                    <td tabIndex={0}>{data.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Gap height={40} />
      <div className="container col-xxl-8 px-4">
        <div className="row">
          <div className="col-lg-6 mt-3">
            <div className="mt-3">
              <h4 className="fw-bold">Komentar</h4>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control mb-2 border border-primary"
                placeholder="Nama Pengguna"
              />
              <input
                type="text"
                value={comment}
                onChange={handleCommentChange}
                className="form-control mb-2 border border-primary"
                placeholder="Tambahkan komentar..."
              />
              <div className="rating">
                <p className="fw-bold mb-2">Rating:</p>
                <div>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      className={`btn btn-outline-primary btn-sm ${value <= rating ? 'active' : ''}`}
                      onClick={() => handleRatingChange(value)}
                    >
                      {renderRatingStars(value)}
                    </button>
                  ))}
                </div>
              </div>
              <button className="btn btn-primary" onClick={handleCommentSubmit}>
                Kirim
              </button>
            </div>
            {comments.length > 0 && (
              <div className="mt-4">
                <h4 className="fw-bold">Komentar Terkirim</h4>
                {comments.map((comment, index) => (
                  <div key={index} className="mb-3 border border-primary p-2">
                    <h6><strong>{comment.name}</strong></h6>
                    <p>{comment.text}</p>
                    <div>Rating: {renderRatingStars(comment.rating)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DetailTour);