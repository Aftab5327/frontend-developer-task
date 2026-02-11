import React from 'react';

interface WaterCardProps {
  className?: string;
}

const WaterCard: React.FC<WaterCardProps> = ({ className }) => {
  const cardClassName = ['card', 'card-water', className].filter(Boolean).join(' ');

  return (
    <div className={cardClassName}>
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
        <div className="water-value">8.42 m3</div>
      </div>
      <footer className="water-footer">
        <span className="trend-icon">v</span>
        <span className="trend-text">1.2 m3 less water used compared to last Tuesday</span>
      </footer>
    </div>
  );
};

export default WaterCard;
