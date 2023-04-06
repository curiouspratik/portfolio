import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="HarryPotter-header">
        <h1 className="HarryPotter-title">My Personal Portfolio</h1>
        <p className="HarryPotter-text">Welcome to my Harry Potter-themed portfolio website!</p>
      </header>
      <section className="HarryPotter-section">
        <h2>About Me</h2>
        <p className="HarryPotter-text">Insert your bio and information about your skills and experiences here.</p>
      </section>
      <section className="HarryPotter-section">
        <h2>My Work</h2>
        <p className="HarryPotter-text">Insert examples of your work and projects here.</p>
      </section>
      <section className="HarryPotter-section">
        <h2>Contact Me</h2>
        <p className="HarryPotter-text">Insert your contact information here.</p>
      </section>
      <footer className="HarryPotter-footer">
        <p className="HarryPotter-text">© Your Name | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
