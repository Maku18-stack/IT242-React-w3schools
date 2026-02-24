function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Hello IT242 WEBPROG World!</h1>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #2b2b2b, #111)",
  },
  text: {
    color: "#e5e5e5",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default App;