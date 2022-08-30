import React from "react";
import "./LineChart.css";
import Chart from 'react-apexcharts';

const LineChart = () => {
  return (
    <>
      <div className="line-chart">
        <div className="chart-head">
            <div>
                <h6>Statistics</h6>
            </div>
            <div>
                <div>
                    <h6>Last 6 months <span><ion-icon name="chevron-down-outline"></ion-icon></span></h6>
                    <div className="chart-list"></div>
                </div>
            </div>
        </div>
        {/*=> this chart function preview */}
        <div className="Chart-data">
            <Chart
            type="area"
            width={370}
            height={280}
            series= {[
                {
                name: 'series1',
                data: [31, 50, 28, 51, 42, 109, 50]
                },
             {
                name: 'series2',
                data: [10, 92, 45, 72, 34, 52, 41]
             }
              ]}
              options={{
                chart: {
                  height: 350,
                  type: 'area'
                },
                dataLabels: {
                  enabled: true
                },
                stroke: {
                  curve: 'smooth'
                },
                xaxis: {
                  type: 'datetime',
                  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                }
              }}
                tooltip= {{
                  x: {
                    format: 'dd/MM/yy HH:mm'
                  }
                }}
            >

            </Chart>
        </div>
        
      </div>
    </>
  );
};

export default LineChart;
