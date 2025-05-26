import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

export const navigationData = {
  general: [
    { label: "Dashboard", icon: MdDashboard, active: true },
    { label: "History", icon: FaHistory, active: false },
    { label: "Calendar", icon: FaCalendarAlt, active: false },
    { label: "Appointments", icon: FaPlusSquare, active: false },
    { label: "Statistics", icon: IoStatsChart, active: false },
  ],
  tools: [
    { label: "Chat", icon: BsChatDotsFill, active: false },
    { label: "Support", icon: IoCall, active: false },
  ],
  settings: {
    label: "Settings",
    icon: IoSettings,
    active: false
  }
}