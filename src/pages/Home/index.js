import React from 'react';
import { Gap, Jumbotron } from '../../components';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ImgJumbotron } from '../../assets';

const Home = () => {
  return (
    <div className='container'>
      <Gap height={90} />
      <Jumbotron img={ImgJumbotron} />
      <Gap height={20} />
    </div>
  )
}

export default Home;
