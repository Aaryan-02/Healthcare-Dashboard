import "./CalendarView.css"
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { calendarData, appointmentCards } from "../data/calendarData.js"

const CalendarView = () => {

  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2 className="calendar-title">October 2021</h2>
        <div className="calendar-nav">
          <button className="nav-button"><FaLeftLong /></button>
          <button className="nav-button"><FaRightLong /></button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days-header">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-dates">
          {calendarData.map((dateInfo, index) => (
            <div key={index} className="calendar-date">
              <div className="date-number">{dateInfo.day}</div>
              <div className="appointments-list">
                {dateInfo.appointments.map((apt, aptIndex) => {
                  if (typeof apt === "string") {
                    return (
                      <div key={aptIndex} className="appointment-time">
                        {apt}
                      </div>
                    )
                  } else {
                    return (
                      <div
                        key={aptIndex}
                        className={`appointment-time highlighted ${apt.type === "double" ? "double-time" : ""}`}
                      >
                        {apt.time}
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        {appointmentCards.map((card, index) => (
          <div key={index} className={`appointment-card ${card.type}`}>
            <div className="card-content">
              <div className="card-header">
                <h4 className="card-title">{card.title}</h4>
                <div className="card-icon">
                  <img src={card.icon} alt={card.type} className="card-icon-image"/>
                </div>
              </div>
              <p className="card-time">{card.time}</p>
              <p className="card-doctor">{card.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarView
