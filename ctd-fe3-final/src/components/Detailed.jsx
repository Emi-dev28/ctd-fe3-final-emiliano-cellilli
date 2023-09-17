import React from "react";
import '../Styles/detailed.css';
const Detailed = ({ doctor }) => {
  return (
    <div className="detailed-card">
      {
        <ul className="detailed-list">
         <span className="spans">
          Name
         </span>
          <li><h3 className="text">{doctor.name}</h3></li>
          <span className="spans">
            Email
          </span>
          <li><p className="text">{doctor.email}</p></li>
          <span className="spans">
            Phone
          </span>
          <li><p className="text">{doctor.phone}</p></li>
          <span className="spans">
            Website
          </span>
          <li><p className="text">{doctor.website}</p></li>
        </ul>
      }
    </div>
  );
};

export default Detailed;
