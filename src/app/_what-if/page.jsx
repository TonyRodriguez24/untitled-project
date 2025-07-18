// "use client";

// import { useState } from "react";
// import axios from "axios";
// import convertToPNG from "../helpers/convertToPNG"

// export default function WhatIf() {
//   const [file, setFile] = useState(null);
//   const [prompt, setPrompt] = useState("");
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);


//   const handleChange = async (e) => {
//     if (e.target.name === "prompt") {
//       setPrompt(e.target.value);
//     } else if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];

//       // Only accept images
//       if (!selectedFile.type.startsWith("image/")) {
//         alert("Please upload a valid image file.");
//         return;
//       }

//       // Convert JPEG to PNG
//       if (selectedFile.type === "image/jpeg") {
//         const pngFile = await convertToPNG(selectedFile);
//         setFile(pngFile);
//         setPreviewUrl(URL.createObjectURL(pngFile));
//       } else if (selectedFile.type === "image/png") {
//         setFile(selectedFile);
//         setPreviewUrl(URL.createObjectURL(selectedFile));
//       } else {
//         alert("Only PNG or JPEG images are supported.");
//       }
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file || !prompt) {
//       alert("Please provide both an image and a prompt.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);
//     formData.append("prompt", prompt);

//     try {
//       const response = await axios.post("/api/edit-image", formData);
//       console.log("Success:", response.data);
//       // maybe set edited image here if you're returning it
//        const imageUrl = response.data.data?.[0]?.url;
//        setGeneratedImageUrl(imageUrl);
//     } catch (err) {
//       console.error("Error uploading:", err);
//     }
//   };

//   return (
//     <div className="flex w-11/12 lg:w-1/3 mx-auto min-h-fit my-5 bg-gray-900 text-white">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 p-10 rounded-xl bg-gray-800 shadow-lg">
//         <h1 className="text-2xl font-bold">Image Generator</h1>
//         <p>
//           What would your house look like with different siding, brand new
//           pavers? Upload an image and find out.
//         </p>

//         {/* Custom file upload */}
//         <div>
//           <input
//             type="file"
//             id="file"
//             accept="image/*"
//             onChange={handleChange}
//             className="hidden"
//           />
//           <label
//             htmlFor="file"
//             className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 inline-block">
//             Choose Image
//           </label>
//           <p className="text-sm text-gray-400 mt-2">
//             {file ? file.name : "No file chosen"}
//           </p>
//         </div>

//         <textarea
//           id="prompt"
//           name="prompt"
//           placeholder="Describe what you want to see"
//           value={prompt}
//           onChange={handleChange}
//           className="bg-gray-700 text-white rounded p-2"
//         />

//         {/* Image preview */}
//         {previewUrl && (
//           <div className="w-full max-w-2xl h-90 overflow-hidden rounded">
//             <img
//               src={previewUrl}
//               alt="Preview"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         )}

//         <button
//           type="submit"
//           className="bg-green-600 transition px-4 py-2 w-fit rounded hover:bg-green-500">
//           Upload
//         </button>
//       </form>

//       {generatedImageUrl && (
//         <div className="mt-8">
//           <h2 className="text-xl font-bold mb-2">Edited Image</h2>
//           <img
//             src={generatedImageUrl}
//             alt="AI Edited Result"
//             className="rounded shadow-lg w-full max-w-md"
//           />
//         </div>
//       )}
//     </div>
//   );
// }
