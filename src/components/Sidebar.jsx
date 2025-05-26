import { navigationData } from "../data/navigationData"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-logo">Health<span className="sidebar-logo-right">care.</span></h1>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">GENERAL</h3>
          <nav className="sidebar-nav">
            {navigationData.general.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a key={index} href="#" className={`sidebar-link ${item.active ? "active" : ""}`}>
                  <span className="sidebar-icon">
                    <IconComponent />
                  </span>
                  <span className="sidebar-text">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">TOOLS</h3>
          <nav className="sidebar-nav">
            {navigationData.tools.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a key={index} href="#" className={`sidebar-link ${item.active ? "active" : ""}`}>
                  <span className="sidebar-icon">
                    <IconComponent />
                  </span>
                  <span className="sidebar-text">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="sidebar-bottom">
        <a href="#" className="sidebar-link">
          <span className="sidebar-icon">
            <navigationData.settings.icon />
          </span>
          <span className="sidebar-text">{navigationData.settings.label}</span>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar