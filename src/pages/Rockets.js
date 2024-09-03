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

  return (
    <div className="container">
      <h1 className="my-4">Rockets</h1>
      <p>{rockets.name}</p>
    </div>
  );
}

export default Rockets;
