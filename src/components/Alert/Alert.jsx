import React, { useState } from 'react';
import './Alert.css'
import Sidebar from '../Sidebar'
import Table from '../Table/Table'
import { useNavigate } from 'react-router-dom'


// Define the element options and their parameters
const elements = [
  {
    name: 'Carbon',
    parameters: [
      { name: 'pH', unit: '', min: 0, max: 14 },
      { name: 'Gram', unit: 'g', min: 0, max: 1000 },
      { name: 'Density', unit: 'g/cm³', min: 0, max: 5 },
      { name: 'Solubility', unit: 'g/L', min: 0, max: 1000 },
    ],
  },
  {
    name: 'Water',
    parameters: [
      { name: 'pH', unit: '', min: 0, max: 14 },
      { name: 'Gram', unit: 'g', min: 0, max: 1000 },
      { name: 'Density', unit: 'g/cm³', min: 0, max: 2 },
      { name: 'Solubility', unit: 'g/L', min: 0, max: 1000 },
    ],
  },
  {
    name: 'Chlorine',
    parameters: [
      { name: 'pH', unit: '', min: 0, max: 14 },
      { name: 'Gram', unit: 'g', min: 0, max: 100 },
      { name: 'Density', unit: 'g/cm³', min: 0, max: 3 },
      { name: 'Solubility', unit: 'g/L', min: 0, max: 100 },
    ],
  },
];

const Alert = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedParameters, setSelectedParameters] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [parameterPositions, setParameterPositions] = useState({});
  
  const handlePositionChange = (event, parameterName) => {
    const newPosition = event.target.value;
    setParameterPositions({ ...parameterPositions, [parameterName]: newPosition });
  };

  const handleElementChange = (event) => {
    setSelectedElement(event.target.value);
    setSelectedParameters([]);
    setFormValues({});
    setParameterPositions({});
  };

  const handleParameterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedParameters((prevParameters) => [...prevParameters, value]);
    } else {
      setSelectedParameters((prevParameters) => prevParameters.filter((p) => p !== value));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const parameter = elements.find((e) => e.name === selectedElement).parameters.find((p) => p.name === name);

    //  parameter's constraints
    let validValue = value;
    if (parameter.min !== undefined && value < parameter.min) {
      validValue = parameter.min;
    }
    if (parameter.max !== undefined && value > parameter.max) {
      validValue = parameter.max;
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: validValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Form values:', formValues);
    console.log('Form submitted:', formValues, parameterPositions, selectedElement);
    
  };

  const [formData, setFormData] = useState({
  selectedElement:{},
    selectedParameters: [],
    formValues: {},
    parameterPositions: {},
  });


  const navigate = useNavigate();

  const handlepost = (e) => {
    e.preventDefault();

    Table.addRow(formData);
    setFormData({
      selectedElement: {},
      parameterPositions: {},
    });
  };


  return (

  <div className="AppGlass">
            <Sidebar />
    <div className="container">
        
      <h2>Set Alert</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="element">Select Element:</label>
        <select id="element" value={selectedElement} onChange={handleElementChange}>
          <option value="">Select an element</option>
          {elements.map((element) => (
            <option key={element.name} value={element.name} >
              {element.name}
            </option>
          ))}
        </select>
    
        {selectedElement && (
          <div>
            <h3>Select Parameters to Monitor:</h3>
            {elements.find((element) => element.name === selectedElement).parameters.map((parameter) => (
              <div key={parameter.name}>
                <input
                  type="checkbox"
                  id={parameter.name}
                  name={parameter.name}
                  value={parameter.name}
                  checked={selectedParameters.includes(parameter.name)}
                  onChange={handleParameterChange}
                />
                <label htmlFor={parameter.name}>
                  {parameter.name} ({parameter.unit})
                </label>
              </div>
            ))}
        <div className="val">    
            {selectedParameters.length > 0 && (
              <div>
                {selectedParameters.map((parameter) => (
                  <div key={parameter} className="baj">
                    <label htmlFor={parameter}>
                      {parameter} ({elements.find((e) => e.name === selectedElement).parameters.find((p) => p.name === parameter).unit})
                    </label>
                    <input className="ibb"
                      type="number"
                      id={parameter}
                      name={parameter}
                      value={formValues[parameter] || ''}
                      onChange={handleInputChange}
                      min={elements.find((e) => e.name === selectedElement).parameters.find((p) => p.name === parameter).min}
                      max={elements.find((e) => e.name === selectedElement).parameters.find((p) => p.name === parameter).max}
                      step={elements.find((e) => e.name === selectedElement).parameters.find((p) => p.name === parameter).unit === '' ? 1 : 0.001}
                      required
                    />

                    <select
                      value={parameterPositions[parameter] || 'above'}
                      onChange={(event) => handlePositionChange(event, parameter)}
                    >
                      <option value="above">Above</option>
                      <option value="below">Below</option>
                    </select>

                  </div>
                ))}
                <button type="submit" className="btn" onSubmit={handlepost}>Submit</button>
              </div>
              
            )}
        </div>
          </div>
        )}
      </form>
    </div>
  </div>
  );
};

export default Alert;