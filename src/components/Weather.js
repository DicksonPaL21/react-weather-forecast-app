import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import moment from 'moment';

// Components
import Card from './Card';
import Loader from './Loader';

const Weather = ({ ...props }) => {
  const [weather, setWeather] = useState(null);
  const { user, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!user && !isLoading && !isAuthenticated) window.location.replace('/');
  }, [user, isLoading, isAuthenticated]);

  useEffect(() => {
    const weather = JSON.parse(sessionStorage.getItem('weather'));
    if (weather) setWeather(weather);
    else window.location.replace('/home');
  }, []);

  const handleOnBack = () => {
    sessionStorage.removeItem('weather');
    window.location.assign('/home');
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="col-12 col-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
          <h1 className="display-4 text-center mb-4">
            Weather <span className="fw-bold">Forecast</span>
          </h1>
          <Card className="weather-card shadow-lg custom-rounded">
            <div className="d-md-flex w-100">
              <div className="col-12 col-md-4 p-3 card-left">
                <h1 className="display-6 fw-normal">
                  {moment().format('dddd')}
                </h1>
                <p className="h6 fw-light">{moment().format('MMMM Do')}</p>
                <p className="h6 fw-lighter">
                  {weather && [weather.name, weather.sys.country].join(', ')}
                </p>
                <p className="h3 fw-normal text-end mt-5">
                  {weather?.wind.deg ?? 0} &#8451;
                </p>
                <p className="h6 fw-light text-end">
                  {weather?.weather[0].description}
                </p>
              </div>
              <div className="col-12 col-md-8 p-3">
                <div className="d-flex py-1 justify-content-between">
                  <span className="fw-bold">PREDICTABILITY</span>
                  <span>{weather?.main.feels_like ?? 0} %</span>
                </div>
                <div className="d-flex py-1 justify-content-between">
                  <span className="fw-bold">HUMINITY</span>
                  <span>{weather?.main.humidity ?? 0} %</span>
                </div>
                <div className="d-flex py-1 justify-content-between">
                  <span className="fw-bold">WIND</span>
                  <span>{weather?.wind.speed ?? 0} km/h</span>
                </div>
                <div className="d-flex py-1 justify-content-between">
                  <span className="fw-bold">AIR PRESURE</span>
                  <span>{weather?.main.temp ?? 0} mb</span>
                </div>
                <div className="d-flex py-1 justify-content-between">
                  <span className="fw-bold">MAX TEMP</span>
                  <span>{weather?.main.temp_max ?? 0} &#8451;</span>
                </div>
                <div className="d-flex py-1 justify-content-between">
                  <span className="fw-bold">MIN TEMP</span>
                  <span>{weather?.main.temp_min ?? 0} &#8451;</span>
                </div>

                {/* <div className="d-flex bg-dark mt-3 custom-rounded">
                  <div className="col text-center">
                    <p className="mt-3">Mon</p>
                    <p className="fw-bold">27%</p>
                  </div>
                  <div className="col text-center">
                    <p className="mt-3">Tue</p>
                    <p className="fw-bold">27%</p>
                  </div>
                  <div className="col text-center">
                    <p className="mt-3">Wed</p>
                    <p className="fw-bold">27%</p>
                  </div>
                  <div className="col text-center">
                    <p className="mt-3">Thu</p>
                    <p className="fw-bold">27%</p>
                  </div>
                  <div className="col text-center">
                    <p className="mt-3">Fri</p>
                    <p className="fw-bold">27%</p>
                  </div>
                </div> */}
              </div>
            </div>
          </Card>
          <div className="col-12 text-end">
            <button
              className="btn btn-outline-secondary m-3"
              onClick={handleOnBack}
              style={{ width: '100px' }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
