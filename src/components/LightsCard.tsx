import React from 'react';

interface LightsCardProps {
  className?: string;
}

const LightsCard: React.FC<LightsCardProps> = ({ className }) => {
  const cardClassName = ['card', className].filter(Boolean).join(' ');

  return (
    <div className={cardClassName}>
      <header className="card-header">
        <div className="card-header-left">
          <img
            src="/ui_design_resources/air.png"
            alt="Lights"
            className="card-icon"
          />
          <span className="card-title">Lights</span>
        </div>

        <div className="card-header-right">
          <span className="toggle-track">
            <span className="toggle-thumb" />
          </span>
        </div>
      </header>

      <div className="lights-meter">
        <svg width="240" height="130" viewBox="0 0 240 130">
          <path
            d="M25 115 A95 95 0 0 1 215 115"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="12"
          />
          <path
            d="M25 115 A95 95 0 0 1 215 115"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
            strokeDasharray="3 6"
          />
          <path
            d="M25 115 A95 95 0 0 1 215 115"
            fill="none"
            stroke="#00ffd1"
            strokeWidth="12"
            strokeDasharray="205"
            strokeDashoffset="45"
            strokeLinecap="round"
          />
        </svg>

        <div className="lights-value">4300k</div>

        <div className="lights-scale">
          <span>2700k</span>
          <span>5000k</span>
        </div>
      </div>
    </div>
  );
};

export default LightsCard;
