import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Calculator-header">
        <h1 className="Calculator-title">My Personal Portfolio</h1>
        <p className="Calculator-text">Welcome to my calculator-themed portfolio website!</p>
      </header>
      <section className="Calculator-section">
        <h2>About Me</h2>
        <p className="Calculator-text">Insert your bio and information about your skills and experiences here.</p>
      </section>
      <section className="Calculator-section">
        <h2>My Work</h2>
        <p className="Calculator-text">Insert examples of your work and projects here.</p>
      </section>
      <section className="Calculator-section">
        <h2>Contact Me</h2>
        <p className="Calculator-text">Insert your contact information here.</p>
      </section>
      <footer className="Calculator-footer">
        <p className="Calculator-text">© Your Name | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
