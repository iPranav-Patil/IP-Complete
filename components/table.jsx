import React from 'react';

function TableWithStyles() {
  const tableStyle = {
    width: '80%',
    margin: 'auto',
    border: '1px solid #ccc',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    border: '1px solid #ccc',
  };

  const tdStyle = {
    padding: '8px',
    border: '1px solid #ccc',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyle}>John Doe</td>
          <td style={tdStyle}>30</td>
        </tr>
        <tr>
          <td style={tdStyle}>Jane Smith</td>
          <td style={tdStyle}>25</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableWithStyles;
