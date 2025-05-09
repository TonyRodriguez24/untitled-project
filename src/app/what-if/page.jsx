"use client";

import { useEffect, useState } from "react";

export default function whatIf() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { type, value, files } = e.target;
    if (type === "file") {
      const selectedFile = files[0];
      setFile(selectedFile);

      if (selectedFile) {
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(objectUrl);
      }
    } else {
      setPrompt(value);
    }
  };

  // OPTIONAL: clean up preview URL on unmount
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !prompt) {
      /* show inline error */ return;
    }

    const body = new FormData();
    body.append("file", file);
    body.append("prompt", prompt);

    const res = await fetch("/api/edit-image", {
      method: "POST",
      body,
    });
    const { b64_json } = await res.json();
    setEditedImage(`data:image/png;base64,${b64_json}`);
  };

  return (
    <div className="flex w-1/3 mx-auto min-h-fit my-5 bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-10 rounded-xl bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Image Generator</h1>
        <p>
          What would your house look like with different siding, brand new
          pavers? Upload an image and find out.
        </p>

        {/* Custom file upload */}
        <div>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor="file"
            className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 inline-block">
            Choose Image
          </label>

          <p className="text-sm text-gray-400 mt-2">
            {file ? file.name : "No file chosen"}
          </p>
        </div>

        <textarea
          id="prompt"
          name="prompt"
          placeholder="Describe what you want to see"
          value={prompt}
          onChange={handleChange}
          className="bg-gray-700 text-white rounded p-2"
        />

        {/* Image preview */}
        {previewUrl && (
          <div className="w-full max-w-2xl h-90 overflow-hidden rounded">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-green-600 px-4 py-2 w-fit rounded hover:bg-green-500 cursor">
          Upload
        </button>
      </form>
    </div>
  );
}
