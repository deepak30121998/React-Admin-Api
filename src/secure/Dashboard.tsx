import React from "react";
import Wrapper from "./Wrapper";

const Dashboard = () => (
  
    <div>
      <h2>Section title</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
            </tr>
            {/* Additional rows go here */}
          </tbody>
        </table>
      </div>
    </div>
  
);

export default Dashboard;
