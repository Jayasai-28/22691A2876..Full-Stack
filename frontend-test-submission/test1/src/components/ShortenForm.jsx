import React, { useState } from "react";
import axios from "axios";

function ShortenForm() {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [expiry, setExpiry] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/shorturls", { url });
      setShortLink(res.data.shortLink);
      setExpiry(res.data.expiry);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter long URL"
        />
        <button className="button" type="submit">
          Shorten
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {shortLink && (
        <div className="result-box">
          <p>
            Short link:{" "}
            <a href={shortLink} target="_blank" rel="noreferrer">
              {shortLink}
            </a>
          </p>
          <p>Expires at: {new Date(expiry).toLocaleString()}</p>
          <button
            className="button"
            style={{ marginTop: "10px", backgroundColor: "#10b981" }}
            onClick={() => {
              navigator.clipboard.writeText(shortLink);
              alert("Short link copied to clipboard!");
            }}
          >
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
}

export default ShortenForm;
