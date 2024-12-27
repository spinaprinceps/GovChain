import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Dashboard = () => {
  const navigate = useNavigate(); // Correctly initialize the navigate function

  return (
    <div
      className="dashboard"
      style={{
        background: "linear-gradient(to right, #03045E, #03346E, #021526)",
        minHeight: "100vh",
      }}
    >
      {/* Main Content Starts Below the Navbar */}
      <div className="flex pt-20">
        {/* Left Dashboard Panel */}
        <div className="w-1/5 bg-white/10 backdrop-blur-lg p-6 min-h-screen">
          <h2 className="text-white font-semibold text-lg mb-4">Dashboard</h2>
          <ul className="space-y-4 text-white">
            <li onClick={() => navigate("/home")} className="cursor-pointer">Home</li>
            <li onClick={() => navigate("/create-proposal")} className="cursor-pointer">Create Proposal</li>
            <li onClick={() => navigate("/view-proposals")} className="cursor-pointer">View Proposals</li>
            <li onClick={() => navigate("/settings")} className="cursor-pointer">Settings</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-8">
          {/* Two Cards Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Create Proposal Card */}
            <div
              className="bg-blue-900/50 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center backdrop-blur-lg"
              style={{ minHeight: "150px" }}
            >
              <h3 className="text-xl font-semibold mb-4">Create a Proposal</h3>
              <button
                className="px-4 py-2 text-white rounded-md backdrop-blur-lg"
                style={{
                  backgroundColor: "#00a1a0",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#008e8d")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#00a1a0")}
                onClick={() => navigate("/proposalform")} // Add onClick to navigate
              >
                Submit Proposal
              </button>
            </div>
            {/* View Proposals Card */}
            <div
              className="bg-blue-900/50 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center backdrop-blur-lg"
              style={{ minHeight: "150px" }}
            >
              <h3 className="text-xl font-semibold mb-4">See Other Proposals</h3>
              <button
                className="px-4 py-2 text-white rounded-md backdrop-blur-lg"
                style={{
                  backgroundColor: "#00a1a0",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#008e8d")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#00a1a0")}
                onClick={() => navigate("/getproposal")} // Add onClick to navigate
              >
                View Proposals
              </button>
            </div>
          </div>

          {/* Proposals Table */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md">
            <h3 className="text-white font-semibold text-lg mb-4">Proposals</h3>
            <table className="w-full text-white">
              <thead>
                <tr className="text-left border-b border-gray-500">
                  <th className="pb-2">Title</th>
                  <th className="pb-2">Description</th>
                  <th className="pb-2">Votes</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="py-2">Build a New Library</td>
                  <td className="py-2">A proposal to build a library.</td>
                  <td className="py-2">120</td>
                  <td className="py-2">Ongoing</td>
                </tr>
                <tr>
                  <td className="py-2">Plant More Trees</td>
                  <td className="py-2">Suggest planting more trees.</td>
                  <td className="py-2">200</td>
                  <td className="py-2">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
