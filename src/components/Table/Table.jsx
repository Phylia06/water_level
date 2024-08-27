import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Tablet = () =>{
function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const makeStyle=(status)=>{
  if(status === 'Above')
  {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else if(status === 'Below')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
}

const [formData, setFormData] = useState({
  selectedElement: '',
  selectedParameters: [],
  formValues: {},
  parameterPositions: {},
});

useEffect(() => {
 
  const data = localStorage.getItem('formData');
  if (data) {
    setFormData(JSON.parse(data));
  }
}, []);

/*const rowexist = row.find((row) => {
  return (
    row.selectedElement === rowData.selectedElement &&
    JSON.stringify(row.selectedParameters) === JSON.stringify(rowData.selectedParameters)
  );
});

if (existingRow) {
  
  const updatedRows = rows.map((row) => {
    if (
      row.selectedElement === rowData.selectedElement &&
      JSON.stringify(row.selectedParameters) === JSON.stringify(rowData.selectedParameters)
    ) {
      return { ...row, formValues: rowData.formValues, parameterPositions: rowData.parameterPositions };
    }
    return row;
  });
  setRows(updatedRows);
} else {
 
      setRows([...rows, rowData]);
}*/

  return (
      <div className="Table">
      <h3>Data Elements Set</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <thead>
        <tr>
          <th>Element</th>
          {formData.selectedParameters.map((param) => (
            <th key={param}>
              {param} ({
                formData.elements.find((e) => e.name === formData.selectedElement).parameters.find(
                  (p) => p.name === param
                ).unit
              })
            </th>
          ))}
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{formData.selectedElement}</td>
          {formData.selectedParameters.map((param) => (
            <td key={param}>{formData.selectedElement[param]}</td>
          ))}
          {formData.selectedParameters.map((param) => (
            <td key={param}>{formData.parameterPositions[param]}</td>
          ))}
        </tr>
      </tbody>
          </Table>
        </TableContainer>
      </div>
  );
};

export default Tablet;