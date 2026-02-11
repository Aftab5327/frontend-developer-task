import React from 'react';

const WaterCard: React.FC = () => {
  return (
    <div className="card card-water">
      <header className="card-header">
        <div className="card-header-left">
          <img
            src="/ui_design_resources/drop.png"
            alt="Water"
            className="card-icon"
          />
          <span className="card-title">Water Consumption</span>
        </div>
        <div className="card-header-right">
          <span className="chip">Yesterday</span>
        </div>
      </header>
      <div className="water-main">
        <div className="water-icon" />
        <div className="water-value">8.42m³</div>
      </div>
      <footer className="water-footer">
        <span className="trend-icon">↓</span>
        <span className="trend-text">
          1.2m³ less water used compared to last Tuesday
        </span>
      </footer>
    </div>
  );
};

export default WaterCard;
