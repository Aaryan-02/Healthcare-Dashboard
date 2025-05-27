import AnatomySection from "./AnatomySection"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/DashboardMainContent.css"


const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-filter">
              <span>This Week</span>
              <span className="dropdown-arrow"><RiArrowDropDownLine size={25}/></span>
            </div>
          </div>
          <AnatomySection />
          <ActivityFeed />
        </div>

        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  )
}

export default DashboardMainContent
