// Copper-styled timeline component
import React from 'react';
import './Timeline.css'; // Assuming you have styling for the copper style

const Timeline = () => {
  return (
    <div className="timeline">
      <h2>Accountable AI Milestones</h2>
      <ul>
        <li>
          <div className="timeline-event">
            <div className="event-date">2023-01-01</div>
            <div className="event-content">Initial AI Ethics Discussion</div>
          </div>
        </li>
        <li>
          <div className="timeline-event">
            <div className="event-date">2024-06-15</div>
            <div className="event-content">First Accountability Framework Proposal</div>
          </div>
        </li>
        <li>
          <div className="timeline-event">
            <div className="event-date">2025-09-30</div>
            <div className="event-content">Launch of Accountable AI Initiative</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;