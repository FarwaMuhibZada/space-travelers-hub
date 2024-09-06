import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDragons, dragonToggleReservation } from '../redux/actions';

function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = useSelector((state) => state.reservedDragons);

  useEffect(() => {
    const fetchDragons = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/dragons');
        const data = await response.json();
        dispatch(setDragons(data));
      } catch (error) {
        console.error('Failed to fetch dragons:', error);
      }
    };

    fetchDragons();
  }, [dispatch]);

  const handleReservationToggle = (dragonId) => {
    dispatch(dragonToggleReservation(dragonId));
  };

  return (
    <div className="container">
      <h1 className="my-4">Dragons</h1>
      <div className="row">
        {dragons.map((dragon) => (
          <div className="col-12 mb-4" key={dragon.id}>
            <div className="card shadow-md border-0">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={dragon.flickr_images[0]}
                    className="card-img"
                    alt={dragon.name}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{dragon.name}</h5>
                    <p className="card-text">
                      <strong>ID:</strong>
                      <br />
                      {dragon.id}
                    </p>
                    <p className="card-text">
                      <strong>Description:</strong>
                      {reservedDragons[dragon.id] && (
                        <span className="badge bg-secondary text-white mx-2">
                          Reserved
                        </span>
                      )}
                      <br />
                      {dragon.description}
                    </p>
                    <button
                      type="button"
                      className={`btn ${reservedDragons[dragon.id] ? 'btn-success' : 'btn-primary'}`}
                      onClick={() => handleReservationToggle(dragon.id)}
                    >
                      {reservedDragons[dragon.id] ? 'Cancel Reservation' : 'Reserve Dragon'}
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

export default Dragons;
