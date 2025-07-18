// export default function convertToPNG(file) {
//     const MAX_WIDTH = 1024;
//     const MAX_HEIGHT = 1024;

//     return new Promise((resolve, reject) => {
//         const img = new Image();

//         img.onload = () => {
//             let { width, height } = img;

//             // Resize if larger than max
//             if (width > MAX_WIDTH || height > MAX_HEIGHT) {
//                 const aspectRatio = width / height;
//                 if (aspectRatio > 1) {
//                     width = MAX_WIDTH;
//                     height = Math.round(MAX_WIDTH / aspectRatio);
//                 } else {
//                     height = MAX_HEIGHT;
//                     width = Math.round(MAX_HEIGHT * aspectRatio);
//                 }
//             }

//             const canvas = document.createElement("canvas");
//             canvas.width = width;
//             canvas.height = height;
//             const ctx = canvas.getContext("2d");
//             ctx.drawImage(img, 0, 0, width, height);

//             canvas.toBlob(
//                 (blob) => {
//                     if (!blob || blob.size > 4 * 1024 * 1024) {
//                         return reject(new Error("Image is still too large after compression."));
//                     }

//                     const pngFile = new File(
//                         [blob],
//                         file.name.replace(/\.[^/.]+$/, ".png"),
//                         {
//                             type: "image/png",
//                             lastModified: Date.now(),
//                         }
//                     );

//                     resolve(pngFile);
//                 },
//                 "image/png",
//                 0.9 // Quality (doesn’t matter much for PNG but kept for future flexibility)
//             );
//         };

//         img.onerror = (err) => reject(err);
//         img.src = URL.createObjectURL(file);
//     });
// }
