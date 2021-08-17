import React, { useState } from "react";
import Header from "./Header";
function App() {
  const [heading, setHeading] = useState("Enter your Contact Details");
  const [contact, setContact] = useState({
    phone: "",
    email: "",
    address: "",
    fullName: ""
  });
  function updateContact(event) {
    const { value, id } = event.target;
    setContact((prev) => {
      if (id === "fullName") {
        return {
          fullName: value,
          phone: prev.phone,
          email: prev.email,
          address: prev.address
        };
      } else if (id === "phone") {
        return {
          fullName: prev.fullName,
          phone: value,
          email: prev.email,
          address: prev.address
        };
      } else if (id === "email") {
        return {
          fullName: prev.fullName,
          phone: prev.phone,
          email: value,
          address: prev.address
        };
      } else if (id === "address") {
        return {
          fullName: prev.fullName,
          phone: prev.phone,
          email: prev.email,
          address: value
        };
      }
    });
    // console.log(contact);
  }
  function storeData() {
    localStorage.setItem("Phone No", contact.phone);
    localStorage.setItem("Email ID", contact.email);
    localStorage.setItem("Address", contact.address);
    localStorage.setItem("Name", contact.fullName);
    setContact({ phone: "", email: "", address: "", fullName: "" });
    setHeading("Your data has been successfully stored in the Local Storage!");
  }
  return (
    <div className="App">
      <Header />
      <div className="middleSection">
        <div className="contactForm">
          <h1>{heading}</h1>
          <input
            id="fullName"
            type="text"
            onChange={updateContact}
            placeholder="Name"
            value={contact.fullName}
          ></input>
          <input
            id="phone"
            type="text"
            onChange={updateContact}
            placeholder="Phone number"
            value={contact.phone}
          ></input>
          <input
            id="email"
            type="email"
            onChange={updateContact}
            placeholder="E-mail ID"
            value={contact.email}
          ></input>
          <textarea
            id="address"
            type="text"
            onChange={updateContact}
            placeholder="Address"
            value={contact.address}
          ></textarea>
          <button onClick={storeData}>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default App;
