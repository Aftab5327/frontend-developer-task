import React from 'react';
import ReactECharts from 'echarts-for-react';

interface EnergyCardProps {
  className?: string;
}

const EnergyCard: React.FC<EnergyCardProps> = ({ className }) => {
  const cardClassName = ['card', 'card-energy', className].filter(Boolean).join(' ');

  const option = {
    tooltip: { show: false },
    grid: { left: 10, right: 10, top: 20, bottom: 24 },
    xAxis: {
      type: 'category',
      data: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#6b7280', fontSize: 10 },
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        type: 'bar',
        data: [40, 90, 130, 80, 120, 100, 60],
        barWidth: 24,
        itemStyle: {
          borderRadius: [10, 10, 10, 10],
          color: '#00ffd1',
        },
      },
    ],
  };

  return (
    <div className={cardClassName}>
      <header className="card-header">
        <div className="card-header-left">
          <img
            src="/ui_design_resources/flash.png"
            alt="Energy"
            className="card-icon"
          />
          <span className="card-title">Energy Consumption</span>
        </div>
        <div className="card-header-right">
          <span className="chip">Last 7 Day</span>
        </div>
      </header>
      <div className="chart-container">
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
};

export default EnergyCard;

