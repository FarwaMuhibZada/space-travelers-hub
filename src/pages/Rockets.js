import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRockets } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const [reservedRockets, setReservedRockets] = useState({});

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        dispatch(setRockets(data));
      } catch (error) {
        console.error('Failed to fetch rockets:', error);
      }
    };

    fetchRockets();
  }, [dispatch]);

  const handleReservationToggle = (rocketId) => {
    setReservedRockets((prev) => ({
      ...prev,
      [rocketId]: !prev[rocketId],
    }));
  };

  return (
    <div className="container">
      <h1 className="my-4">Rockets</h1>
      <div className="row">
        {rockets.map((rocket) => (
          <div className="col-12 mb-4" key={rocket.id}>
            <div className="card shadow-md border-0">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={rocket.flickr_images[0]}
                    className="card-img"
                    alt={rocket.rocket_name}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{rocket.name}</h5>
                    <p className="card-text">
                      <strong>ID:</strong>
                      <br />
                      {rocket.id}
                    </p>
                    <p className="card-text">
                      <strong>Description:</strong>
                      {reservedRockets[rocket.id] && (
                      <span className=" badge bg-secondary text-white mx-2">
                        Reserved
                      </span>
                    )}
                      <br />
                      {rocket.description}
                    </p>
                    <button
                      type="button"
                      className={`btn ${reservedRockets[rocket.id] ? 'btn-success' : 'btn-primary'}`}
                      onClick={() => handleReservationToggle(rocket.id)}
                    >
                      {reservedRockets[rocket.id] ? 'Cancel Reservation' : 'Reserve Rocket'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rockets;
