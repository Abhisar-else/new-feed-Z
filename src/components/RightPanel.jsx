import React, { useState } from 'react';
import CountUp from 'react-countup';
import { Card, ListGroup, Badge, ProgressBar } from 'react-bootstrap';
import { FaBirthdayCake, FaCalendar, FaUser , FaGem} from 'react-icons/fa';
import './RightPanel.css';


const RightPanel = () => {
  const [points, setpoints] = useState(1284);
  const rewardGoal = 2000;
  const handlesend = () => {
    if (points >= 100) {
      setpoints(points - 100);
    }
    };
    const handleRedeem = () => {
      if (points >= 200){
        setpoints(points - 200);
      }
    };
    const progress = Math.min(Math.round(( points / rewardGoal) * 100), 100);
  return (
    <div className="right-panel p-3">
      {/* Points Section */}
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center my-2">
            <h6 className="mb-0 fw-semibold">Your Points</h6>
           <Badge bg="primary" className="rounded-pill fs-3 px-4 py-2 text-white d-flex align-items-center gap-2"><FaGem/><CountUp end={points}
              duration={1.5}/>
              </Badge>
</div>
          <div className="mb-2">
          <ProgressBar now={progress}
          varient="success"style={{heigth:'8px'}}/>
            <small className="text-muted">Reward goal: {rewardGoal} pts</small>
          </div>
          <div className="d-flex mt-2">
            <button className="btn btn-sm btn-outline-primary me-2" onClick={handlesend} title="Send 100 point">SEND</button>
            <button className="btn btn-sm btn-outline-success" onClick={handleRedeem} title="Redeem 200 points">REDEEM</button>
          </div>
        </Card.Body>
      </Card>

      {/* Calendar Section */}
      <Card className="mb-3">
        <Card.Body>
          <h6 className="text-muted">February</h6>
          <div className="calendar-grid">
            {['MON 7', 'TUE 8', 'WED 9', 'THU 10', 'FRI 11'].map(day => (
              <div key={day} className="calendar-day">
                {day}
              </div>
            ))}
            <div className="calendar-event"> < FaBirthdayCake className="m-1"/>Birthdays</div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event marked">X</div>
          </div>
          <div className="mt-2">
            <small className="text-muted">Work anniversary</small>
          </div>
        </Card.Body>
      </Card>

      {/* Meetings Section */}
      <Card className="mb-3">
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div >
             <FaUser size={18}/> <strong>Weekly Review Meeting</strong>
                <div className="text-muted small">11:00 am - 12:00 pm</div>
              </div>
              <Badge bg="light" text="dark">+6 attending</Badge>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <strong>Client Meeting - RAB</strong>
              <div className="text-muted small">01:00 pm - 02:00 pm</div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <Card.Body>
                 <h6> <FaCalendar className="m-2"/>Upcoming Events</h6>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Team Building Workshop</span>
                <small className="text-muted">15 Oct</small>
              </div>
              <small className="text-muted">10:00 AM - 2:00 PM</small>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Employee of the Month Award</span>
                <small className="text-muted">20 Oct</small>
              </div>
              <small className="text-muted">3:00 PM - 4:30 PM</small>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Diversity and Inclusion Seminar</span>
                <small className="text-muted">5 Nov</small>
              </div>
              <small className="text-muted">9:30 AM - 12:00 PM</small>
            </ListGroup.Item>
            
            <ListGroup.Item className="fw-bold">
              <div className="d-flex justify-content-between">
                <span>Town Hall Meeting</span>
                <small className="text-muted">10 Nov</small>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightPanel;