import React from "react";
import ShortenForm from "../components/ShortenForm";

function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔗 URL Shortener</h2>
      <ShortenForm />
    </div>
  );
}

export default HomePage;
