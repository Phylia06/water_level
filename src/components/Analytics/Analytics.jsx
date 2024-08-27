  import React from "react";
  import "./Analytics.css";
  import { useState } from "react";
  import ReactApexChart from 'react-apexcharts';
  import Sidebar from '../Sidebar'
  import { Chart as ChartJS } from "chart.js/auto";
  import { options, Ph, orp, Solubility, Turbity,tmp } from "../../Data/Data"

  function Analytics() {
    const [showForm, setShowForm] = useState(false);

    // Function to toggle form visibility
    const toggleForm = () => {
      setShowForm(!showForm);
    };

    const [dataParameter, setDataParameter] = useState("");

    // Define state for the proposed parameters based on the selected data parameter
    const [parameters, setParameters] = useState([]);

    // Function to handle changes in the data parameter dropdown
    const handleDataParameterChange = (event) => {
      const selectedParameter = event.target.value;
      setDataParameter(selectedParameter); // Update the dataParameter state

      // Suggest parameters based on the selected data parameter
      switch (selectedParameter) {
        case "water":
          setParameters(["solubility", "temperature", "conductivity"]); // Set related parameters
          break;
        case "carbon":
          setParameters(["weight", "temperature", "conductivity"]); // Set related parameters
          break;
        case "chlorine":
          setParameters(["solubility", "temperature"]); // Set related parameters
          break;
        default:
          setParameters([]); // Clear the parameters if no valid data parameter is selected
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log("Form submitted with data parameter:", dataParameter);
      console.log("Selected proposed parameters:", parameters);
    };

   
    return (
    <div className="AppGlass">
            <Sidebar />
      <div className="container">
        <div className="card1" style={{ backgroundColor: "#92e1e2" }}>
        <ReactApexChart options={options} series={Ph} type="line" height={300} />
        </div>

        <div className="card2" style={{ backgroundColor: "#72b2e4" }}>
        <ReactApexChart options={options} series={orp} type="line" height={300} />
        </div>
        <div className="card3" style={{ backgroundColor: "#00f4fd" }}>
        <ReactApexChart options={options} series={Solubility} type="line" height={300} />
        </div>
        <div className="card4" style={{ backgroundColor: "#72b2e4" }}>
        <ReactApexChart options={options} series={Turbity} type="line" height={300} />
        </div>
        <div className="card5" style={{ backgroundColor: "#a1c4fd" }}>
        <ReactApexChart options={options} series={tmp} type="line" height={300} />
        </div>

        <div className="rightbar">
          <button className="side-btn" onClick={toggleForm}>
            View Historics 
          </button>

          {showForm && (
            <div className="modal">
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="me">Date Range:</label>
                  <input type="date" />
                  <input type="date" />
                </div>

                <div>
                  <label>Data Parameter:</label>
                  <select
                    value={dataParameter}
                    onChange={handleDataParameterChange}
                  >
                    <option value="">Select a parameter</option>
                    <option value="water">Water</option>
                    <option value="carbon">Carbon</option>
                    <option value="chlorine">Chlorine</option>
                  </select>
                </div>

                {parameters.length > 0 && (
                  <div>
                    <label>Proposed Parameters:</label>
                    {parameters.map((param, index) => (
                      <div key={index}>
                        <input type="checkbox" id={param} name={param} />
                        <label htmlFor={param}>{param}</label>
                      </div>
                    ))}
                  </div>
                )}

                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
    );
  }

  export default Analytics;
