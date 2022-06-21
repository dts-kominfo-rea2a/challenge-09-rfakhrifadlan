// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="foto">
            <img src={data.photo} alt="foto1" width={150} />
          </div>
          <div className="profile">
            <p>{data.name}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
