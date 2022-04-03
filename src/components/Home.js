import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Components
import Loader from './Loader';

// Helpers
import { actions } from './Helpers';

const Home = ({ ...props }) => {
  const history = useHistory();
  const [searchCity, setSearchCity] = useState(null);
  const { user, isLoading } = useAuth0();

  const handleOnChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleOnClick = (e) => {
    actions.findCities(searchCity, (cities) => {
      setSearchCity(null);
      const { lat, lon } = cities[0];
      actions.getWeather(lat, lon, (weather) => {
        history.push('/weather', { weather });
      });
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row col-12 col-md-10 col-lg-8 col-xl-6 g-3 mx-auto">
          <div className="col-12 text-center">
            <h1 className="display-6">{user.name}</h1>
            <p className="h6 fw-light">https://github.com/{user.nickname}</p>
          </div>
          <div className="col-12">
            <label htmlFor="form-cities" className="form-label">
              Search City
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="form-cities"
              placeholder="Enter your city"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleOnClick}>
              Display Weather
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
