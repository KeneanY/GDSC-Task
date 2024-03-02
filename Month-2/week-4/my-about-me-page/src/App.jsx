import './App.css'; // You can customize the styles in this file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="your_image_url.jpg" alt="Your Name" className="profile-image" />
        <h1>Kenean Yilma</h1>
        <p></p>
      </header>

      <section className="about-me-section">
        <h2>About Me</h2>
        <p>
          Hello! I'm Kenean.
        </p>
      </section>

      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p>Keneanyilma6@Gmail.com</p>
        <p></p>
      </section>

      <section className="social-icons-section">
        <h2>Connect with Me</h2>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
  
      </section>
    </div>
  );
}

export default App;

