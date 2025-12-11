// src/components/HttpCatViewer.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHttpCat } from "../redux/reducer/product/productSlice";

const HttpCatViewer = () => {
  const [statusCode, setStatusCode] = useState("100");
  const dispatch = useDispatch();
  const { imageUrl, loading, error } = useSelector((state) => state.products);

  const handleFetch = () => {
    if (statusCode) dispatch(fetchHttpCat(statusCode));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">HTTP Cat Viewer</h2>
      <input
        type="number"
        value={statusCode}
        onChange={(e) => setStatusCode(e.target.value)}
        placeholder="Enter status code"
        className="border p-1 mr-2"
      />
      <button
        onClick={handleFetch}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Fetch Cat
      </button>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      {imageUrl && (
        <div className="mt-4 bg-red-800">
          <img src={imageUrl} alt={`HTTP Cat ${statusCode}`} />
        </div>
      )}
    </div>
  );
};

export default HttpCatViewer;
