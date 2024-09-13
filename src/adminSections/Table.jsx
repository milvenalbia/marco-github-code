import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { storage } from "../firebase";
import { deleteObject, ref } from "firebase/storage";

const Table = () => {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const projectCollectionRef = collection(db, "projects");

    const unsubscribe = onSnapshot(projectCollectionRef, (snapshot) => {
      const projectData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectData);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id, fileURL) => {
    try {
      const imageRef = ref(storage, fileURL);
      await deleteObject(imageRef);

      await deleteDoc(doc(db, "projects", id));

      setProjects((prevProjects) =>
        prevProjects.filter((item) => item.id !== id)
      );
      setMessage("File deleted successfully!");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-1 bg-white shadow-md py-8 px-6">
      {message && <span className="text-emerald-400 mb-3">{message}</span>}
      <h2 className="text-2xl mb-4 font-bold">Project List</h2>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4 border-b border-gray dark:border-bodydark">
              <th className="py-3 px-4">
                <span>Project Image</span>
              </th>
              <th className="py-3 px-4">
                <span>Category</span>
              </th>
              <th className="py-3 px-4">
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-stroke text-base dark:border-bodydark"
              >
                <td className="py-3 px-4">
                  {/* Assuming 'imageURL' is the field in Firestore that contains the image URL */}
                  <img
                    src={project.fileURL}
                    alt="Project"
                    className="w-16 h-16"
                  />
                </td>
                <td className="py-3 px-4">{project.category}</td>
                <td className="py-3 px-4 flex items-center">
                  <button className="text-blue-500 flex items-center hover:text-primary transition ease-linear">
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(project.id, project.fileURL)}
                    className="text-red-500 ml-2 flex items-center hover:text-red-700 transition ease-linear"
                  >
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
