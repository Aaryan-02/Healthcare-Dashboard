import "./HealthStatusCards.css"
import { FaArrowRight } from "react-icons/fa6";

const HealthStatusCards = ({ healthData }) => {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div key={index} className="health-card">
          <div className="health-card-header">
            <div className="health-icon">
              <img src={item.icon} alt={item.icon} className="health-icon-image" />
            </div>
            <h3 className="health-title">{item.title}</h3>
          </div>
          <p className="health-date">Date: {item.date}</p>
          <div className="health-progress">
            <div
              className="health-progress-bar"
              style={{
                width: `${item.progress}%`,
                backgroundColor: item.color,
              }}
            ></div>
          </div>
        </div>
      ))}
      <button className="details-button">Details <FaArrowRight size={10}/></button>
    </div>
  )
}

export default HealthStatusCards
