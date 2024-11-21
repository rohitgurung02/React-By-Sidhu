import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  const users = [
    {
      name: "Anil",
      email: "anil@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Bruce",
      email: "bruce@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "peter@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "sam@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
  ];

  return (
    <div className="App container mt-4">
      <h3>Nested Array</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <ul>
                  {user.address.map((addr, addrIndex) => (
                    <tr key={addrIndex}>
                      <td>{addr.hm}</td>
                      <td>{addr.city}</td>
                      <td>{addr.country}</td>
                    </tr>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
