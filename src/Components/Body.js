import React from "react";
import Card from "./Card";

function Body() {
  return (
    <div className="body">
      <div className="flex bgcolor justify-center">
        <Card img="./user.png" num="20" str="TOTAL STUDENTS" />
        <Card img="./tick.png" num="15" str="PRESENT TODAY" />
        <Card img="./cross.png" num="05" str="ABSENT TODAY" />
      </div>
      <div className="graphs flex justify-center flex-align">
        <div className="text-align">
          <img
            src="./total-att.png"
            className="line-chart"
            alt="Total Attendance Report"
          ></img>
        </div>

        <div className="pie">
          <img
            src="./pie-chart.png"
            className="pie-chart"
            alt="Students By Gender"
          ></img>
        </div>
      </div>

      <div className="flex flex-align justify-center body-bottom">
        <div className="attendant">
          <h4 className="align">Top 5 Attendant</h4>
          <div className="flex">
            <div className="mr">
              <p>Saransh</p>
              <p>Prastuti</p>
              <p>Venkat</p>
              <p>Krish</p>
              <p>Vinay</p>
            </div>
            <div className="mr">
              <p>RA2011003010163</p>
              <p>RA2011003010164</p>
              <p>RA2011003010165</p>
              <p>RA2011003010166</p>
              <p>RA2011003010167</p>
            </div>
            <div>
              <p>100%</p>
              <p>100%</p>
              <p>98%</p>
              <p>95%</p>
              <p>90%</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="att-perc.png"
            className="bar-graph"
            alt="Attendance Percentage"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Body;
