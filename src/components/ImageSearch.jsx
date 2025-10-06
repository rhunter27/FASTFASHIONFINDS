import React, { useState } from "react";
import { searchWithImage } from "../api/ximilar";

export default function ImageSearch() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file || !file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    setLoading(true);
    try {
      const base64 = await toBase64(file);
      setImage(base64);

      const data = await searchWithImage(base64);
      setResults(data.records || []);
    } catch (error) {
      console.error("Error fetching results:", error);
      alert("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // base64 only
      reader.onerror = (error) => reject(error);
    });

  return (
    <div className="image-search">
      <h2>Find Similar Fashion</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {loading && <p>Loading...</p>}

      {results.length > 0 && (
        <div className="results-grid">
          {results.map((item, index) => (
            <div key={index}>
              <img src={item.image_url} alt="Result" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}