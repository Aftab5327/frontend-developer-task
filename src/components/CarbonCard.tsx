import React from 'react';
import ReactECharts from 'echarts-for-react';

const CarbonCard: React.FC = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%',
    },
    legend: { show: false },
    series: [
      {
        type: 'pie',
        radius: ['60%', '85%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: '{d}%\n{b}',
          color: '#fff',
          fontSize: 11,
          fontWeight: 600,
          lineHeight: 14,
        },
        labelLine: {
          show: true,
          length: 10,
          length2: 8,
        },
        data: [
          { value: 30, name: 'Coal' },
          { value: 20, name: 'Hydro' },
          { value: 20, name: 'Nuclear' },
          { value: 15, name: 'Wind' },
          { value: 15, name: 'Solar' },
        ],
        color: ['#8f4e44', '#f2a14a', '#a56bff', '#27e5d4', '#f15f61'],
      },
    ],
  };

  return (
    <div className="card card-carbon">
      <header className="card-header">
        <div className="card-header-left">
          <img
            src="/ui_design_resources/air.png"
            alt="Carbon"
            className="card-icon"
          />
          <span className="card-title">Carbon Intensity</span>
        </div>

        <div className="card-header-right">
          <span className="chip">Current</span>
        </div>
      </header>

      <div className="carbon-chart-wrapper">
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
        <div className="carbon-center">
          <div className="carbon-value">95gm</div>
          <div className="carbon-sub">CO₂/kWh</div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCard;
