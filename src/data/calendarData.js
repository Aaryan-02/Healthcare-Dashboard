import tooth from "../assets/tooth.png";
import muscle from "../assets/muscle.png";

export const calendarData = [
  { day: 25, appointments: ["10:00", "11:00", "12:00"] },
  { day: 26, appointments: ["08:00", { time: "09:00", highlighted: true }, "10:00"] },
  { day: 27, appointments: ["12:00", "-----", "13:00"] },
  { day: 28, appointments: ["10:00", { time: "11:00", highlighted: true, type: "double" }, "-----"] },
  { day: 29, appointments: ["-----", "14:00", "16:00"] },
  { day: 30, appointments: [{ time: "12:00", highlighted: true, type: "double" }, "14:00", "15:00"] },
  { day: 31, appointments: [{ time: "09:00", highlighted: true, type: "double" }, "10:00", "11:00"] },
]

export const appointmentCards = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: tooth,
    type: "dentist",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: muscle,
    type: "physiotherapy",
  },
]
