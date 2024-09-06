import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyProfile() {
  // Get data from the Redux store
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = useSelector((state) => state.reservedRockets);
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = useSelector((state) => state.reservedDragons);
  const missions = useSelector((state) => state.missions);

  // Helper function to get reserved items
  const getReservedItems = (items, reservedItems) =>
    items.filter((item) => reservedItems[item.id]);

  // Get reserved rockets, dragons, and active missions
  const reservedRocketsList = getReservedItems(rockets, reservedRockets);
  const reservedDragonsList = getReservedItems(dragons, reservedDragons);
  const activeMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="container my-4">
      <h1 className="my-4">My Profile</h1>

      {/* Reserved Rockets */}
      <h3>Reserved Rockets</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Rocket Name</th>
          </tr>
        </thead>
        <tbody>
          {reservedRocketsList.length > 0 ? (
            reservedRocketsList.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No reserved rockets</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Reserved Dragons */}
      <h3>Reserved Dragons</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Dragon Name</th>
          </tr>
        </thead>
        <tbody>
          {reservedDragonsList.length > 0 ? (
            reservedDragonsList.map((dragon) => (
              <tr key={dragon.id}>
                <td>{dragon.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No reserved dragons</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Active Missions */}
      <h3>Active Missions</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mission Name</th>
          </tr>
        </thead>
        <tbody>
          {activeMissions.length > 0 ? (
            activeMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No active missions</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MyProfile;
