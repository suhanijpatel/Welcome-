import React from 'react';

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>Welcome to My Personal Website</h1>
          <p>Hi, I'm [Your Name]. I create awesome things!</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>Write something about yourself here.</p>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-item">
            <img src="portfolio-item1.jpg" alt="Portfolio Item 1" />
            <h3>Portfolio Item 1</h3>
            <p>Description of Portfolio Item 1</p>
          </div>
          {/* Add more portfolio items as needed */}
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <form action="submit_form.php" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br />

            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows="4" required></textarea><br />

            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
