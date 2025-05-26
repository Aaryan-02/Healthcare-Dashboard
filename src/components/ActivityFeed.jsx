import { activityData } from "../data/activityData"
import "./ActivityFeed.css"

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-subtitle">3 appointment on this week</p>
      </div>

      <div className="activity-chart">
        <div className="chart-container">
          {activityData.map((day, index) => (
            <div key={index} className="chart-day">
              <div className="chart-bars">
                {day.bars.map((bar, barIndex) => (
                  <div key={barIndex} className={`chart-bar ${bar.type}`} style={{ height: `${bar.height}px` }}></div>
                ))}
              </div>
              <span className="chart-label">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
