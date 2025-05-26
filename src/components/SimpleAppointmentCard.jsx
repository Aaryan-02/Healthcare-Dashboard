import "./SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-content">
        <div className="appointment-header">
          <h4 className="appointment-title">{appointment.title}</h4>
          <div className="appointment-icon">
            <img src={appointment.icon} alt={appointment.icon} className="appointment-icon-image"/>
          </div>
        </div>
        <p className="simple-appointment-time">{appointment.time}</p>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
