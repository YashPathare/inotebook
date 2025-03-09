import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About QuickNotes</h1>
        <p style={styles.subtitle}>Your Ultimate Secure Note-Taking Companion</p>
      </header>

      <section style={styles.cardsSection}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Seamless Experience</h2>
          <p style={styles.cardText}>
            Enjoy an intuitive interface that lets you jot down ideas and keep track of tasks quickly.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Top-Notch Security</h2>
          <p style={styles.cardText}>
            Your privacy is our priority. With robust authentication and secure storage, your notes are safe with us.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Powered by Innovation</h2>
          <p style={styles.cardText}>
            Built using modern technologies like React, Node.js, and MongoDB, QuickNotes evolves with your needs.
          </p>
        </div>
      </section>

      <section style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>Why Choose QuickNotes?</h2>
        <ul style={styles.featureList}>
          <li style={styles.featureItem}>Instant note creation with a sleek UI</li>
          <li style={styles.featureItem}>Secure and private note storage</li>
          <li style={styles.featureItem}>Responsive design for all devices</li>
          <li style={styles.featureItem}>Easy organization with tags and categories</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>Start your note-taking journey with QuickNotes today! 🚀</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    color: "#333",
    padding: "20px",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "50px 0",
  },
  title: {
    fontSize: "3rem",
    margin: 0,
  },
  subtitle: {
    fontSize: "1.5rem",
    marginTop: "10px",
    color: "#555",
  },
  cardsSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "40px 0",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    margin: "20px",
    flex: "1 1 300px",
    maxWidth: "300px",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  featuresSection: {
    background: "#e0f7fa",
    padding: "30px",
    borderRadius: "10px",
    margin: "40px auto",
    maxWidth: "800px",
    textAlign: "center",
  },
  featuresTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
  },
  featureItem: {
    fontSize: "1.1rem",
    margin: "10px 0",
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px 0",
    borderTop: "1px solid #ccc",
    fontSize: "1rem",
  },
};

export default About;
