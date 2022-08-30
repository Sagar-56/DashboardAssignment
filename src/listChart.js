import React from "react";
import "./listChart.css";

const listChart = () => {
  return (
    <>
      <div className="sub-list-chart">
        <h4 style={{ color: "#4D4F5C" }}>Referrer</h4>
        <table class="table table-hover">
          <thead style={{ background: "#F5F6FA", color: "#A3A6B4" }}>
            <tr>
              <th>Location</th>
              <th>Views</th>
              <th>Sales</th>
              <th>Conversion</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>google.com</td>
              <td>3746</td>
              <td>752</td>
              <td>43%</td>
              <td>$19,291</td>
            </tr>
            <tr>
              <td>facebook.com</td>
              <td>8126</td>
              <td>728</td>
              <td>32%</td>
              <td>$17,638</td>
            </tr>
            <tr>
              <td>twitter.com</td>
              <td>8836</td>
              <td>694</td>
              <td>28%</td>
              <td>$16,218</td>
            </tr>
            <tr>
              <td>Direct, email, IM</td>
              <td>1173</td>
              <td>645</td>
              <td>24%</td>
              <td>$14,421</td>
            </tr>
            <tr>
              <td>linkedin.com</td>
              <td>2739</td>
              <td>539</td>
              <td>20%</td>
              <td>$12,370</td>
            </tr>
            <tr>
              <td>instagram.com</td>
              <td>2739</td>
              <td>539</td>
              <td>20%</td>
              <td>$12,370</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default listChart;
