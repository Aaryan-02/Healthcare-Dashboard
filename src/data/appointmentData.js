import syringe from "../assets/syringe.png";
import eye from "../assets/eye.png";
import heart from "../assets/heart.png";
import doctor from "../assets/doctor.png";

export const upcomingScheduleData = [
  {
    day: "On Thursday",
    appointments: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: syringe,
        type: "checkup",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: eye,
        type: "ophthalmologist",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: heart,
        type: "cardiologist",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: doctor,
        type: "neurologist",
      },
    ],
  },
]
