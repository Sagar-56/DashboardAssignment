import React from "react";
import "./PieChart.css";
import Chart from 'react-apexcharts';
import Divider from '@mui/material/Divider';

const PieChart = () => {
  return (
    <>
      <div className="pie-chart">
        <div className="pie-head">
                <h6>Sales Distribution</h6>
        </div>
        {/*=> this pie chart function preview */}
        <div className="pie-data">
            <Chart
            type="donut"
            width={390}
            height={250}
            series= {[44, 55, 41, 17, 15]}
            options= {{
              labels: ['France', 'Japan', 'Italy', 'Canada', 'India']
            }}
            //   responsive= {[
                // breakpoint: 480,
                // options= {{
                //   chart: {
                    // width: 200
                //   },
                //   legend: {
                    // position: 'bottom'
                //   }
                // }}
            //   ]}
            >

            </Chart>
        </div>
        {/* <Divider light /> */}
        {/* <div> */}
{/* <h3>Mine</h3> */}
        {/* </div> */}
        {/*  */}
      </div>
    </>
  );
};

export default PieChart;
