import React from 'react';
import './home.scss';
import topBox from '../../components/topBox/TopBox';
import TopBox from '../../components/topBox/TopBox';

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">Boax2</div>
      <div className="box box3">Boax3</div>
      <div className="box box4">Boax4</div>
      <div className="box box5">Boax5</div>
      <div className="box box6">Boax6</div>
      <div className="box box7">Boax7</div>
      <div className="box box8">Boax8</div>
      <div className="box box9">Boax9</div>
    </div>
  );
}

export default Home;
