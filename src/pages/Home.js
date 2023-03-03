import React from 'react';
import Header from '../components/Header';
import Courosel from '../components/Courosel';

function Home() {
  return (
    <div>
      <Header />

      <div
        className='introduction flex-with-center'
        style={{ backgroundImage: `url('./introbg.svg')` }}
      >
        <div>
          <h1 data-aos='fade-up'>Emir Mustafoski</h1>

          <div className='intro-content d-flex justify-content-between'>
            <p>
              MERN/MEAN Stack <br /> Developer , Instructor
            </p>
            <button className='primary-button font-bold '>Get Starte</button>
          </div>
        </div>
      </div>
      <div>
        <Courosel />
      </div>
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#001220'
            fill-opacity='1'
            d='M0,224L21.8,197.3C43.6,171,87,117,131,101.3C174.5,85,218,107,262,144C305.5,181,349,235,393,240C436.4,245,480,203,524,160C567.3,117,611,75,655,64C698.2,53,742,75,785,96C829.1,117,873,139,916,176C960,213,1004,267,1047,240C1090.9,213,1135,107,1178,85.3C1221.8,64,1265,128,1309,176C1352.7,224,1396,256,1418,272L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          ></path>
        </svg>
      </div>
      <div className='container'>
        <div className='row justify-content-start'>
          <div className='col-md-4'>
            <div className='n-box2 p-5 font-bold'>
              <h1>Yes you are right...</h1>
              <br />
              <p>I am JavaScript buff </p>
            </div>
          </div>
        </div>
        <div className='row pt-5 justify-content-center'>
          <div className='col-md-4'>
            <div>
              <img src='./jsbuff.svg' alt='' height='200' className='w-100' />
            </div>
          </div>
        </div>
        <div className='row pt-5 justify-content-end'>
          <div className='col-md-4'>
            <div className='n-box2 p-5 font-bold'>
              <p>
                JavaScript is one of the most top-ranked programming language
                because of its uniquitous use on all platforms and mass
                adaptation. Main Use Cases: Web Development
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='devstack container my-5 n-box2 py-5 '>
        <div className='text-center'>
          <h3 className='font-bold text-center'>My Developement Stack</h3>

          <hr />

          <img
            src='./developer.svg'
            alt=''
            height='200'
            width='200'
            className='text-center'
          />
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='font-bold'>
              <h3 className='font-bold'>Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Redux</p>
              <p>Angular</p>
              <p>Vue</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='font-bold text-center'>
              <h3 className='font-bold'>UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Material UI</p>
              <p>Semantic UI</p>
              <p>Boootstrap</p>
              <p>Angular Material</p>
              <p>Vuetify</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='font-bold text-end'>
              <h3 className='font-bold'>Backend/DB</h3>
              <hr />
              <p>Node js</p>
              <p>Express</p>
              <p>Java Spring Boot</p>
              <p>SQL</p>
              <p>MongoDB</p>
              <p>GraphhQL</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='font-bold text-center'>Who is Emir </h3>
        <div
          className='who-is-emir flex-with-center'
          style={{ backgroundImage: `url('/whoissathya.svg')` }}
        >
          <div>
            <h3>Hi , Hello </h3>
            <hr />
            <p>
              <pre>
                {JSON.stringify(
                  {
                    name: 'Emir Mustafoski',
                    from: 'Ohrid, Macedonia',
                    age: null,
                    gender: 'Male',
                  },
                  null,
                  2
                )}
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
