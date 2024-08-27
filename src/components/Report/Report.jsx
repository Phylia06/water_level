import React, { useState } from 'react';
import './Report.css'
import Sidebar from '../Sidebar'

function Report() {
  const [selectedFile, setSelectedFile] = useState(null);

  const downloadFile = () => {
    if (selectedFile) {
      const url = window.URL.createObjectURL(selectedFile);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', selectedFile.name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Please select a file to download.');
    }
  };

  return (
  <div className="AppGlass">
            <Sidebar />
    <div className="all">
 
      <div className="page">
        <h1 className='head'> Report Download</h1>
        <div className='Con'></div>
        <div className="file-Con">
        <button onClick={downloadFile}>Download</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Report;