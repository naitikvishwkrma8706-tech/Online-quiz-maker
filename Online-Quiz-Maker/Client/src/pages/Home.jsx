const Home = ({ setPage }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "30px",
            color: "#111",
            textAlign: "center",
          }}
        >
          Online Quiz Maker
        </h1>

        <button onClick={() => setPage("create")} style={btn}>
          Create Quiz{" "}
        </button>

        <button onClick={() => setPage("take")} style={btn}>
          Take Quiz{" "}
        </button>
      </div>
    </div>
  );
};

const btn = {
  width: "100%",

  padding: "16px",

  marginBottom: "15px",

  background: "#4CAF50",

  color: "white",

  fontSize: "18px",

  border: "none",

  borderRadius: "12px",

  cursor: "pointer",
};

export default Home;
