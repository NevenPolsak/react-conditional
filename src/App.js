import React from 'react';
import './App.css';

function App() {
  const employees = ["David", "George"] ;
  return (
    <div className="App">
      {employees && employees.length > 0 && (
        <div>
        <h1>Employee List: </h1>
        {employees.map((employee) => (
          <h3>{employee}</h3>
        ))}
      </div>
      )}     
    </div>
  );
}

export default App;
