import React from 'react';
import './ViewBooked.css'; // Import the CSS file
import Navbar from './Navbar';

function ViewBookedevent() {
  return (
    <div>
    <div><Navbar/></div>
    <div className="view-booked-events-container">
      <h1>View Booked Events</h1>
      <table className="event-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Place</th>
            <th>Date</th>
            <th>Time</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Event 1</td>
            <td>Location 1</td>
            <td>2024-03-20</td>
            <td>10:00 AM</td>
            <td>$500</td>
            <td>
              <span className="action-icon update-icon">&#9998;</span>
              <span className="action-icon delete-icon">&#128465;</span>
            </td>
          </tr>
          {/* Add more rows as needed */}
          <tr>
            <td>Event 2</td>
            <td>Location 1</td>
            <td>2024-03-20</td>
            <td>10:00 AM</td>
            <td>$500</td>
            <td>
              <span className="action-icon update-icon">&#9998;</span>
              <span className="action-icon delete-icon">&#128465;</span>
            </td>
          </tr><tr>
          <td>Event 3</td>
          <td>Location 1</td>
          <td>2024-03-20</td>
          <td>10:00 AM</td>
          <td>$500</td>
          <td>
            <span className="action-icon update-icon">&#9998;</span>
            <span className="action-icon delete-icon">&#128465;</span>
          </td>
        </tr><tr>
        <td>Event 4</td>
        <td>Location 1</td>
        <td>2024-03-20</td>
        <td>10:00 AM</td>
        <td>$500</td>
        <td>
          <span className="action-icon update-icon">&#9998;</span>
          <span className="action-icon delete-icon">&#128465;</span>
        </td>
      </tr><tr>
      <td>Event 5</td>
      <td>Location 1</td>
      <td>2024-03-20</td>
      <td>10:00 AM</td>
      <td>$500</td>
      <td>
        <span className="action-icon update-icon">&#9998;</span>
        <span className="action-icon delete-icon">&#128465;</span>
      </td>
    </tr><tr>
    <td>Event 6</td>
    <td>Location 1</td>
    <td>2024-03-20</td>
    <td>10:00 AM</td>
    <td>$500</td>
    <td>
      <span className="action-icon update-icon">&#9998;</span>
      <span className="action-icon delete-icon">&#128465;</span>
    </td>
  </tr><tr>
  <td>Event 7</td>
  <td>Location 1</td>
  <td>2024-03-20</td>
  <td>10:00 AM</td>
  <td>$500</td>
  <td>
    <span className="action-icon update-icon">&#9998;</span>
    <span className="action-icon delete-icon">&#128465;</span>
  </td>
</tr><tr>
<td>Event 8</td>
<td>Location 1</td>
<td>2024-03-20</td>
<td>10:00 AM</td>
<td>$500</td>
<td>
  <span className="action-icon update-icon">&#9998;</span>
  <span className="action-icon delete-icon">&#128465;</span>
</td>
</tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ViewBookedevent;
