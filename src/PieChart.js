import React from "react";
import "./PieChart.css";
import Chart from 'react-apexcharts';

const PieChart = () => {
  return (
    <>
      <div className="pie-charts">
        <div className="pie-head">
                <h6>Sales Distribution</h6>
        </div>
        {/*=> this pie chart function preview */}
        <div className="pie-data">
            <Chart
            type="donut"
            width={380}
            height={290}
            series= {[44, 55, 41, 17, 15]}
            options= {{
              labels: ['France', 'Japan', 'Italy', 'Canada', 'India']
            }}
            >

            </Chart>
        </div>
      </div>
    </>
  );
};

export default PieChart;
