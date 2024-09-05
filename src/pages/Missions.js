import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions, joinMission, leaveMission } from '../redux/actions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        if (!response.ok) {
          throw new Error('Failed to fetch missions');
        }
        const data = await response.json();
        dispatch(setMissions(data.map(mission => ({ ...mission, reserved: false }))));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMissions();
  }, [dispatch]);

  const handleJoinLeave = (missionId) => {
    const mission = missions.find(m => m.mission_id === missionId);
    if (mission) {
      if (mission.reserved) {
        dispatch(leaveMission(missionId));
      } else {
        dispatch(joinMission(missionId));
      }
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading missions...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Missions</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <span className={`badge ${mission.reserved ? 'bg-info text-light' : 'bg-secondary text-light'}`}>
                  {mission.reserved ? 'Active Member' : 'Not a Member'}
                </span>
              </td>
              <td>
                <button
                  className={`btn btn-sm ${mission.reserved ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
                  onClick={() => handleJoinLeave(mission.mission_id)}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
