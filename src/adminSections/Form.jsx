import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Form = () => {
  const options = [
    {
      value: "Logo",
    },
    {
      value: "Posters",
    },
    {
      value: "Packaging",
    },
    {
      value: "Social Media Posts",
    },
    {
      value: "Book Covers",
    },
    {
      value: "Infographics",
    },
    {
      value: "Instagram Stories",
    },
    {
      value: "Email Designs",
    },
    {
      value: "Brochures/Flyers",
    },
    {
      value: "Youtube Thumbnails",
    },
    {
      value: "Short Videos",
    },
    {
      value: "Long videos",
    },
    {
      value: "Web Designs",
    },
  ];

  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !file) {
      setError("Please select a category and upload a file.");
      return;
    }

    try {
      setIsUploading(true);
      // Create a reference to Firebase Storage for the file
      const storageRef = ref(storage, `projects/${file.name}`);

      // Upload the file to Firebase Storage
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload failed:", error);
          setError("Upload failed. Please try again.");
          setIsUploading(false);
        },
        async () => {
          // Get the download URL of the uploaded file
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Save the category and file URL
          console.log("File available at", downloadURL);
          setMessage(`File uploaded successfully!`);

          const timestamp = Date.now();
          const uid = `project-${timestamp}`;

          await setDoc(doc(db, "projects", uid), {
            category: category,
            fileURL: downloadURL,
            timestamp: new Date(),
          });

          setTimeout(() => {
            setMessage("");
          }, 3000);

          setFile(null);
          setCategory("");
          setIsUploading(false);
          setProgress(0);
          document.getElementById("projectForm").reset();
        }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("There was an error submitting your project.");
    }
  };

  return (
    <div className="w-[400px] bg-white shadow-md h-full py-8 px-6 ">
      <div className="container mx-auto sticky top-8">
        <div className="mx-auto">
          <div className="max-w-md mx-auto px-8 py-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Add Project
            </h2>
            <form id="projectForm" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-gray-800 mb-1" htmlFor="category">
                  Project Category
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                >
                  <option value="">Select Category</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-gray-800 mb-1" htmlFor="file">
                  Your Project
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  transition duration-300"
                  placeholder="Upload sample project"
                  name="file"
                  id="file"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <button
                className={`w-full bg-blue-400 text-gray-50 py-2 px-4 rounded-lg transition duration-300 ${
                  isUploading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-500"
                }`}
                type="submit"
                disabled={isUploading}
              >
                {isUploading
                  ? `Uploading ${Math.round(progress)}%`
                  : "Upload Project"}
              </button>
            </form>
            {message && (
              <span className="text-sm text-green-500">{message}</span>
            )}
            {error && <span className="text-sm text-red-400">{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
