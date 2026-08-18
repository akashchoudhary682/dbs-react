import React from "react";

function App() {
  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;