import HealthStatusCards from "./HealthStatusCards"
import { healthData } from "../data/healthData"
import "../styles/AnatomySection.css"
import anatomyFigure from "../assets/anatomy-figure.png"
import heart from "../assets/heart.png";
import leg from "../assets/leg.png";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <div className="anatomy-figure">
          <img src={anatomyFigure} alt="Human Anatomy" className="anatomy-image" />
          <div className="anatomy-indicator heart">
            <span className="indicator-icon">
              <img src={heart} alt="heart" className="indicator-icon-image" />
            </span>
            <span className="indicator-text">Healthy Heart</span>
          </div>
          <div className="anatomy-indicator leg">
            <span className="indicator-icon">
              <img src={leg} alt="leg" className="indicator-icon-image" />
            </span>
            <span className="indicator-text">Healthy Leg</span>
          </div>
        </div>

        <HealthStatusCards healthData={healthData} />
      </div>
    </div>
  )
}

export default AnatomySection
