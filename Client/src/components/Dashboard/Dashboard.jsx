import React, { useState } from "react";

const Dashboard = () => {
  const [files, setFiles] = useState([]);

  // Handle file upload
  const handleFileUpload = (event) => {
    if (!event.target.files.length) return;

    const uploadedFiles = Array.from(event.target.files);
    const newFiles = uploadedFiles.map((file) => ({
      file,
      progress: 100, // Simulating successful upload (100%)
      completed: true, // Mark as completed
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // Handle file deletion
  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Handle file sharing
  const handleShare = (file) => {
    alert(`Sharing file: ${file.file.name}`);
  };

  return (
    <div
      className="p-12 min-h-screen flex justify-center items-center"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="grid grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Left Column: File Upload Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8" style={{ color: "#00171f" }}>
            Upload Your Files
          </h1>
          <div
            className="border-dashed border-4 w-full h-52 flex items-center justify-center"
            style={{ borderColor: "#D9EAFD" }}
          >
            <input
              id="file-input"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer text-2xl"
              style={{ color: "#007ea7" }}
            >
              Drag files to upload or <span className="underline">browse</span>
            </label>
          </div>
        </div>

        {/* Right Column: Uploaded Files Section */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#00171f" }}>
            
          </h2>
          {files.length === 0 ? (
            <div
              className="flex items-center justify-center h-64 border-2 rounded-lg"
              style={{
                borderColor: "#D9EAFD",
                backgroundColor: "#f9f9f9",
              }}
            >
              <p
                className="text-lg"
                style={{
                  color: "#7f8c8d",
                  fontStyle: "italic",
                }}
              >
                No files uploaded
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {files.map((fileObj, index) => (
                <div
                  key={index}
                  className="p-6 shadow rounded-lg"
                  style={{
                    backgroundColor: "#f9f9f9",
                    border: "2px solid #003459",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p
                        className="font-medium text-lg"
                        style={{ color: "#00171f" }}
                      >
                        {fileObj.file.name}
                      </p>
                      <p className="text-md" style={{ color: "#003459" }}>
                        {(fileObj.file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-md font-medium underline px-3 py-1 rounded-lg"
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#ff0000",
                        border: "none",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-medium text-lg"
                        style={{ color: "#007ea7" }}
                      >
                        Upload Successful
                      </span>
                      <button
                        onClick={() => handleShare(fileObj)}
                        className="text-md font-medium underline px-3 py-1 rounded-lg"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#28a745",
                          border: "none",
                        }}
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
