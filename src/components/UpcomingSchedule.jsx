import SimpleAppointmentCard from "./SimpleAppointmentCard"
import { upcomingScheduleData } from "../data/appointmentData"
import "./UpcomingSchedule.css"

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      {upcomingScheduleData.map((dayGroup, index) => (
        <div key={index} className="schedule-day-group">
          <h3 className="day-title">{dayGroup.day}</h3>
          <div className="appointments-grid">
            {dayGroup.appointments.map((appointment, aptIndex) => (
              <SimpleAppointmentCard key={aptIndex} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule
